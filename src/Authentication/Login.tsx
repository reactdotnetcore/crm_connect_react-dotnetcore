import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yop from 'yup';
//import logo from 'public/assets/img/logo.png'

interface LoginForm {
  username : string;
  password : string;
  remember : boolean;
}

interface LoginProps {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

export default function Login({ setIsAuthenticated }: LoginProps) {
  const navigate = useNavigate();
  const formik = useFormik<LoginForm>({
    initialValues:{
      username:'',
      password:'',
      remember: false,
    },
    validationSchema:Yop.object({
      username: Yop.string().required('Username is required'),
      password: Yop.string().required('Password is required')
    }),

    onSubmit: (values, {setErrors}) => {
      console.log('Form values:', values);
      if (values.username === 'mohan.khawale' && values.password === 'Mohan@123') {
        setIsAuthenticated(true); // Update auth status in App
        navigate('/') // Redirect to the protected route
      } else {
        setErrors({password: 'Invalid username or password'});
        console.log('Errors:', formik.errors); 
      }
    },
  })
  return (
    <>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex justify-content-center py-4">
                  <Link to="/" className="logo d-flex align-items-center w-auto">
                    <img src='assets/img/logo.png' alt="Logo" />
                    <span className="d-none d-lg-block">CRM Connect</span>
                  </Link>
                </div>

                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                      <p className="text-center small">Enter your username & password to login</p>
                    </div>

                    <form className="row g-3 needs-validation" noValidate onSubmit={formik.handleSubmit}>
                      <div className="col-12">
                        <label htmlFor="yourUsername" className="form-label">Username</label>
                        <div className="input-group has-validation">
                          <span className="input-group-text" id="inputGroupPrepend">@</span>
                          <input type="text" name="username" className={`form-control ${formik.touched.username && formik.errors.username ? 'is-invalid' : ''}`} id="yourUsername" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.username}/>
                          {formik.touched.username && formik.errors.username ? (<div className="invalid-feedback">{formik.errors.username}</div>) : null}
                        </div>
                      </div>

                      <div className="col-12">
                        <label htmlFor="yourPassword" className="form-label">Password</label>
                        <input type="password" name="password" className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`} id="yourPassword" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}/>
                        {formik.touched.password && formik.errors.password ? (<div className="invalid-feedback">{formik.errors.password}</div>) : null}
                      </div>

                      <div className="col-12">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" name="remember" id="rememberMe" onChange={formik.handleChange} checked={formik.values.remember}/>
                          <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                        </div>
                      </div>

                      <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit">Login</button>
                      </div>

                      <div className="col-12">
                        <p className="small mb-0">
                          Don't have an account? <Link to="/register">Create an account</Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="credits">
                  Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
