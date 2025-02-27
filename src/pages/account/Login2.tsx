import { Button, Alert } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { VerticalForm, FormInput } from 'components';
import AccountLayout2 from './AccountLayout2';
import { useLogin } from './hooks';

type UserData = {
    username: string;
    password: string;
};

const BottomLink = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer footer-alt">
            <p className="text-muted">
                {t("Não possui uma conta?")}{' '}
                <Link to={'/account/register2'} className="text-muted ms-1">
                    <b>{t('Inscreva-se')}</b>
                </Link>
            </p>
        </footer>
    );
};

const Login2 = () => {
    const { t } = useTranslation();
    const { loading, userLoggedIn, user, error, schemaResolver, onSubmit, redirectUrl } = useLogin();

    return (
        <>
            {(userLoggedIn || user) && <Navigate to={redirectUrl} replace />}

            <AccountLayout2 bottomLinks={<BottomLink />}>
                <h4 className="mt-0">{t('Entrar')}</h4>
                <p className="text-muted mb-4">{t('Insira o seu usuário e senha para acessar a sua conta.')}</p>

                {error && (
                    <Alert variant="danger" className="my-2">
                        {error}
                    </Alert>
                )}

                <VerticalForm<UserData>
                    onSubmit={onSubmit}
                    resolver={schemaResolver}
                    defaultValues={{ username: 'test', password: 'test' }}
                >
                    <FormInput
                        label={t('Usuário')}
                        type="text"
                        name="username"
                        placeholder={t('Digite seu nome de usuário')}
                        containerClass={'mb-3'}
                    />
                    <FormInput
                        label={t('Senha')}
                        type="password"
                        name="password"
                        placeholder={t('Digite sua senha')}
                        containerClass={'mb-3'}
                    >
                        <Link to="/account/forget-password2" className="text-muted float-end">
                            <small>{t('Esqueceu sua senha?')}</small>
                        </Link>
                    </FormInput>

                    <div className="d-grid mb-0 text-center">
                        <Button variant="primary" type="submit" disabled={loading}>
                            <i className="mdi mdi-login"></i> {t('Entrar')}
                        </Button>
                    </div>

                    {/* social links */}
                    <div className="text-center mt-4">
                        <p className="text-muted font-16">{t('Faça login com')}</p>
                        <ul className="social-list list-inline mt-3">
                            <li className="list-inline-item">
                                <Link to="#" className="social-list-item border-primary text-primary">
                                    <i className="mdi mdi-facebook"></i>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="#" className="social-list-item border-danger text-danger">
                                    <i className="mdi mdi-google"></i>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="#" className="social-list-item border-info text-info">
                                    <i className="mdi mdi-twitter"></i>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="#" className="social-list-item border-secondary text-secondary">
                                    <i className="mdi mdi-github"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </VerticalForm>
            </AccountLayout2>
        </>
    );
};

export default Login2;
