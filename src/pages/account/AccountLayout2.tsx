import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import IntranetLogo from 'assets/images/intranet-logo.png';
import { useAccountLayout } from './hooks';

type AccountLayoutProps = {
    bottomLinks?: React.ReactNode;
    children?: React.ReactNode;
};

const AccountLayout2 = ({ bottomLinks, children }: AccountLayoutProps) => {
    useAccountLayout();
    const { t } = useTranslation();

    return (
        <div className="auth-fluid">
            {/* Auth fluid left content */}
            <div className="auth-fluid-form-box">
                <div className="align-items-center d-flex h-100">
                    <Card.Body>
                        {/* logo */}
                        <div className="auth-brand text-center text-lg-start">
                            <Link to="/" className="logo-dark">
                                <span>
                                    <img src={IntranetLogo} alt="" height="35" />
                                </span>
                            </Link>
                            <Link to="/" className="logo-light">
                                <span>
                                    <img src={IntranetLogo} alt="" height="35" />
                                </span>
                            </Link>
                        </div>

                        {children}

                        {/* footer links */}
                        {bottomLinks}
                    </Card.Body>
                </div>
            </div>

            {/* Auth fluid right content */}
            <div className="auth-fluid-right text-center">
                <div className="auth-user-testimonial">
                    <h2 className="mb-3">{t('Eu amo a cor!')}</h2>
                    <p className="lead">
                        <i className="mdi mdi-format-quote-open"></i>{' '}
                        {t("É um modelo elegante. Eu amo isso!")}{' '}
                        <i className="mdi mdi-format-quote-close"></i>
                    </p>
                    <p>{t('- Usuário Administrador Intranet')}</p>
                </div>
            </div>
        </div>
    );
};

export default AccountLayout2;
