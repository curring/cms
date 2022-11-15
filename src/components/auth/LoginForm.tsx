import { Button, Form } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import { ILoginForm } from '../../utils/types';
import { COOKIE_EXPIRATION } from '../../utils/constants';

const LoginForm = ({setIsLogged, setCookie}: any) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<ILoginForm >();
  
  const onSubmit = (data:ILoginForm ) => {
    setCookie("username", data.username || 'default_user', COOKIE_EXPIRATION);
    setIsLogged(true)
  }

  return(
  <Form onSubmit={handleSubmit(onSubmit)}>
    <Form.Field>
      <label>Username</label>
      <input 
        type="text" 
        placeholder='username' 
        defaultValue=""
        {...register('username')}
        />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input 
        type="password"
        placeholder='password'
        defaultValue=""
        {...register('password')}
        />
    </Form.Field>
    <Button type='submit'>Login</Button>
  </Form>
)
}

export default LoginForm