import React, {useState, useEffect} from 'react';
import { render } from "react-dom";
import { Formik } from 'formik';
import './styles/app.css';
import axios from "axios";

export default function App() {
    const [chansons, setChansons] = useState([]);
    const url = "https://127.0.0.1:8000/api/chansons"

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                response = JSON.stringify(response.data['hydra:member']);
                response = JSON.parse(response);
                setChansons(response);
                console.log(response);
            })
    }, [])
    return (
        <div>
            <h1>React</h1>
            {
                chansons.map((chanson) => {
                    return(
                        <div key={chanson['@id']} style={{display:'flex'}}>
                            <h2>{chanson.titre} - {chanson.artiste}</h2>
                        </div>
                    );
                })
            }

            <h1>Login by React</h1>

            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                  }) => (

                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="Email"
                        />

                        {errors.email && touched.email && errors.email}

                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            placeholder="Password"
                        />
                        {errors.password && touched.password && errors.password}
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    );
}

render(<App/>, document.getElementById('root'))

