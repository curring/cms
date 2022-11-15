import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const setCookie = (cname: string, cvalue: string, exdays: number) => {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

const useLogged = () => {
    const [isLogged, setIsLogged] = useState(false);
    const navigate = useNavigate();
  
    const getCookie = (cname: string): string => {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(';');
      for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
    const checkCookie = (): boolean => {
      let username = getCookie("username");
      if (username != "") {
       return true;
      } else {
        return false;        
      }
    }
  
    useEffect(()=>{
      if(!isLogged){
        if(checkCookie()){
          setIsLogged(true)
        }else{
          navigate('/')
        }
      }else {
        if(window.location.pathname === '/'){
          navigate('/cms')
        }
      }
    }, [isLogged])

    return [isLogged, setIsLogged, setCookie]
}

export default useLogged