import style from './LoginForm.module.sass'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { SIGN_IN_SCHEMA } from 'utils/validationSchemas';
import cx from 'classnames';

const initialValues = {
    email: '',
    password: '',
};
function LoginForm() {
    return (
        <section className={style.container}>
            <h1>LOGIN TO YOUR ACCOUNT</h1>
            <div className={style.wrapper}>
                <Formik initialValues={initialValues} validationSchema={SIGN_IN_SCHEMA}>
                    {(formik) => {
                        const { errors, touched, isValid, dirty } = formik;
                        // console.log(formikProps);
                        return (
                            <Form className={style.loginForm}>
                                <Field className={cx(style.inputLoginForm, {
                                    [style.inpInValid]: errors.email && touched.email,
                                    [style.inpValid]: !errors.email && touched.email,
                                })} name='email' placeholder='Email address *' />
                                <ErrorMessage className={style.inpError} name='email' component='span' />
                                <Field className={cx(style.inputLoginForm, {
                                    [style.inpInValid]: errors.password && touched.password,
                                    [style.inpValid]: !errors.password && touched.password,
                                })} type='password' name='password' placeholder='Password *' />
                                <ErrorMessage className={style.inpError} name='password' component='span' />
                                <Field className={style.inpBtnSubmit} type='submit' value='LOGIN' />
                            </Form>
                        );
                    }}
                </Formik>
            </div>
        </section>
    )
}
export default LoginForm;