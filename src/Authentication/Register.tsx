import { useFormik } from 'formik';
import React from 'react'
import {Link} from 'react-router-dom'
import * as Yop from 'yup'
interface RegisterForm {
    name : string;
    email : string;
    username : string;
    password : string;
    terms : boolean
};

export default function Register() {
    const formik = useFormik<RegisterForm>({
        initialValues:{
            name : '',
            email :'',
            username : '',
            password : '',
            terms : false
        },
        validationSchema:Yop.object({
            name : Yop.string().required('name is required'),
            email : Yop.string().required('email is required'),
            username : Yop.string().required('username is required'),
            password : Yop.string().required('password is required'),
            terms: Yop.boolean().required('Check terms & condition')
        }),
        onSubmit:(formdata) =>{
            console.log('fromdata', formdata);
        }
    })
  return (
      <>
          <div className="container">
              <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                  <div className="container">
                      <div className="row justify-content-center">
                          <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                              <div className="d-flex justify-content-center py-4">
                                  <a href="index.html" className="logo d-flex align-items-center w-auto">
                                      <img src="assets/img/logo.png" alt="" />
                                      <span className="d-none d-lg-block">NiceAdmin</span>
                                  </a>
                              </div>
                              {/* End Logo */}

                              <div className="card mb-3">
                                  <div className="card-body">
                                      <div className="pt-4 pb-2">
                                          <h5 className="card-title text-center pb-0 fs-4">Create an Account</h5>
                                          <p className="text-center small">Enter your personal details to create account</p>
                                      </div>

                                      <form className="row g-3 needs-validation" noValidate onSubmit={formik.handleSubmit}>
                                          <div className="col-12">
                                              <label htmlFor="yourName" className="form-label">Your Name</label>
                                              <input type="text" name="name" className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`} id="yourName" required onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}/>
                                              {formik.touched.name && formik.errors.name ? (<div className="invalid-feedback">Please, enter your name!</div>) : null}
                                          </div>

                                          <div className="col-12">
                                              <label htmlFor="yourEmail" className="form-label">Your Email</label>
                                              <input type="email" name="email" className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`} id="yourEmail" required onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/>
                                              {formik.touched.email && formik.errors.email ? (<div className="invalid-feedback">Please enter a valid Email address!</div>) : null}
                                          </div>

                                          <div className="col-12">
                                              <label htmlFor="yourUsername" className="form-label">Username</label>
                                              <div className="input-group has-validation">
                                                  {/* <span className="input-group-text" id="inputGroupPrepend">@</span> */}
                                                  <input type="text" name="username" className={`form-control ${formik.touched.username && formik.errors.username ? 'is-invalid': ''}`} id="yourUsername" required onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.username}/>
                                                  {formik.touched.username && formik.errors.username ? (<div className="invalid-feedback">Please choose a username.</div>) : null}
                                              </div>
                                          </div>

                                          <div className="col-12">
                                              <label htmlFor="yourPassword" className="form-label">Password</label>
                                              <input type="password" name="password" className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`} id="yourPassword" required onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}/>
                                              <div className="invalid-feedback">Please enter your password!</div>
                                          </div>

                                          <div className="col-12">
                                              <div className="form-check">
                                                  <input className={`form-check-input ${formik.touched.terms && formik.errors.terms ? 'is-invalid' : ''}`} name="terms" type="checkbox" id="acceptTerms" required onChange={formik.handleChange} checked={formik.values.terms}/>
                                                  <label className="form-check-label" htmlFor="acceptTerms">
                                                      I agree and accept the <a href="#">terms and conditions</a>
                                                  </label>
                                                  {formik.touched.terms && formik.errors.terms ? (<div className="invalid-feedback">You must agree before submitting.</div>) : null}
                                              </div>
                                          </div>
                                          <div className="col-12">
                                              <button className="btn btn-primary w-100" type="submit">Create Account</button>
                                          </div>
                                          <div className="col-12">
                                              <p className="small mb-0">Already have an account? <Link to="/login">Log in</Link></p>
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
