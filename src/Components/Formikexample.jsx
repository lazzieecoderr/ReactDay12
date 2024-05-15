import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const Formikexample = () => {
   
    const initialValues={
       name:'',
       email:'',
       password:'',
       phonenumber:''
    }
    
    const validationSchema = Yup.object().shape({
      name:Yup.string().required('Name Should not be empty'),
      email:Yup.string().matches(/^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/,'Invalid email format').required('email Should not be empty'),
      password:Yup.string().matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,'Password conditions are not met').required('password Should not be empty'),
      phonenumber:Yup.string().matches(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/,'Invalid number').required('PhoneNumber Should not be empty')
    })
   
    const handleSubmit = (values)=>{
        console.log(values);
    }

    return (
        <div>
           <h1>Formik Example</h1> 
           <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            <Form >
                <div>
                    <p>
                    <label>Name:</label>
                    <Field type="text" name="name" />
                    <ErrorMessage name='name' component='h6' className='color' />
                    </p>
                </div>
                <br />
                <div>
                    <p>
                    <label>Email:</label>
                    <Field type="email" name="email" />
                    <ErrorMessage name='email' component='h6' className='color' />
                    </p>
                </div>
                <br />
                <div>
                    <p>
                    <label>Password:</label>
                    <Field type="password" name="password" />
                    <ErrorMessage name='password' component='h6' className='color' />
                    </p>
                </div>
                <br />
                <div>
                    <p>
                    <label>PhoneNumber:</label>
                    <Field type="text" name="phonenumber" />
                    <ErrorMessage name='phonenumber' component='h6' className='color' />
                    </p>
                </div>
                <br />
                <button type='submit'>Submit</button>
            </Form>
           </Formik>
        </div>
    );
};

export default Formikexample;