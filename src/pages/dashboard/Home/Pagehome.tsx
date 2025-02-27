import React, { useState } from "react";
import { Row, Col } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AppMenu from "../../../layouts/Menu/index"; 
import { MenuItemType } from '../../../appConstants/menu'; 
import ProfileImage from "../../../assets/images/users/avatar-9.jpg";
import IntranetLogo from 'assets/images/intranet-logo-white.png';
import CountrySessionsChart from "../Analytics/CountrySessionsChart";
import ViewsChart from "../Analytics/ViewsChart";
import BrowsersChart from "../Analytics/BrowsersChart";
import OsChart from "../Analytics/OsChart";






const Homepage: React.FC = () => {
    //Função dinamica do menu
    const [isMenuOpen, setIsMenuOpen] = useState(true)
    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    }

    //itens do Menu lateral
    const menuItems: MenuItemType[] = [
        {
            key: "1",
            label: "Comunicação",
            icon: "fa-regular fa-message",  
            isTitle: false,
            children: [
                { key: "1-1", label: "Mural", url: "/products/Productpage" },
                { key: "1-2", label: "Contatos", url: "/products/Productpage" },
            ],
        },
        {
            key: "2",
            label: "Segurança",
            icon: "fas fa-shield-alt",  
            isTitle: false,
            children: [
                { key: "2-1", label: "CFTV", url: "/products/Productpage" },
                { key: "2-2", label: "Portaria", url: "/products/Productpage" },
            ],
        },
        {
            key: "3",
            label: "Agendamentos",
            icon: "fas fa-calendar-check", 
            isTitle: false,
            children: [
                { key: "3-1", label: "Salas", url: "/products/Productpage" },
                { key: "3-2", label: "Veículos", url: "/products/Productpage" },
            ],
        },
        {
            key: "4",
            label: "Documentos",
            icon: "fa-solid fa-paperclip",  
            isTitle: false,
            children: [{ key: "4-1", label: "Políticas RH", url: "/products/Productpage" }],
        },
        {
            key: "5",
            label: "Processos",
            icon: "fa-solid fa-forward",  
            isTitle: false,
            children: [
                { key: "5-1", label: "ITs", url: "/products/Productpage" },
                { key: "5-2", label: "Workflow", url: "/products/Productpage" },
            ],
        },
        {
            key: "6",
            label: "Dashboards",
            icon: "fa-solid fa-chart-simple",  
            isTitle: false,
            children: [
                { key: "6-1", label: "KPIs Vendas", url: "/products/Productpage" },
                { key: "6-2", label: "Produtividade", url: "/products/Productpage" },
            ],
        },
        {
            key: "7",
            label: "Acessos",
            icon: "fa-solid fa-up-right-from-square",  
            isTitle: false,
            children: [
                { key: "7-1", label: "ERP", url: "/products/Productpage" },
                { key: "7-2", label: "CRM", url: "/products/Productpage" },
            ],
        },
    ];

    return (
        <div style={{ display: "flex", height: "100vh" }}>
            {/* hidden menu */}
            <div style={{ 
                backgroundColor: '#323b46', 
                width: isMenuOpen ? '250px' : '0px', 
                height: '100vh', 
                transition: 'width 0.3s ease', 
                overflow: "hidden",
                display: isMenuOpen ? "block" : "none",
                position: "fixed",  
                top: 0,
                left: 0
            }}>

                <div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
                    <img src={IntranetLogo} alt="Logo" height="80vw" />
                </div>

                <AppMenu menuItems={menuItems} />
            </div>

            {/* Conteúdo principal */}
            <div className="content" 
                style={{ 
                    flex: 1,  
                    padding: "0px",  
                    marginLeft: isMenuOpen ? "250px" : "0px",  
                    transition: "margin-left 0.3s ease"
                    
                }}>
                    
                <section className="header" 
                    style={{
                         width: '100%', 
                         height:'10vh', 
                         flexDirection: "row", 
                         display: 'flex', 
                         justifyContent: 'space-between'
                    }}>
                    <button 
                        onClick={toggleMenu} 
                        style={{
                            background: "none",
                            border: "none",
                            color: "#323b46",
                            fontSize: "24px",
                            cursor: "pointer",
                            marginBottom: "20px",
                            padding: '15px',
                            paddingLeft: '25px',
                        }}>
                        <i className="fas fa-bars"></i>
                    </button>

                    <div className="profile" style={{display: 'flex', flexDirection: 'row', marginRight: '30px'}}>
                        <div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
                            <img src={ProfileImage} alt="Logo" height="40vw" style={{borderRadius: '50%'}} />
                        </div>
                        <div className="data" style={{display: 'flex', flexDirection: 'column', paddingTop: '8px'}}>
                            <h5>Gabriela Mendes</h5>
                            <span style={{fontSize: '12px', marginTop: '-14px'}}>Founder</span>
                        </div>
                    </div>
                </section>
                
                <section className="title" 
                    style={{ 
                        backgroundColor: '#f4f5fd', 
                        width: '100%', 
                        height:'auto', 
                        padding: '20px',
                        display: 'flex', 
                        flexDirection: 'row', 
                        justifyContent: 'space-between',
                        
                    }}>    
                        <h4 style={{marginRight:'60%'}}>Dashboard</h4>

                        <div className="date" style={{width: '100%'}}>
                            <div className="dateContainer" 
                                style={{ 
                                    backgroundColor: '#edf0fa', 
                                    border: 'none', 
                                    width: '12vw', 
                                    height: '40px', 
                                    borderRadius: '5px', 
                                    display: 'flex', 
                                    flexDirection: 'row', 
                                    justifyContent: 'space-between',
                                    marginLeft: '25%' 
                                }} >
                                {/* Data de hoje */}
                                <span className="nowdate" style={{ textAlign: 'center' }}>
                                    <p style={{ padding: '10px' }}>
                                        {new Date().toLocaleDateString("pt-BR")}
                                    </p>
                                </span>

                                <button 
                                style={{ 
                                    backgroundColor: '#727cf4', 
                                    border: 'none', 
                                    width: '40px', 
                                    height: '40px', 
                                    borderRadius: '5px' 
                                }}>
                                    <i className="fa-solid fa-calendar-days" style={{color: '#ffffff'}}></i>
                                </button>

                                
                                
                            </div>   
                        </div>

                        <div style={{display: 'flex', flexDirection: 'row', gap: '8px'}}>
                            <button 
                                style={{ 
                                    backgroundColor: '#727cf4', 
                                    border: 'none', width: '40px', 
                                    height: '40px', 
                                    borderRadius: '5px' 
                                }}>
                                    <i className="fa-solid fa-gear" style={{color: '#ffffff'}}></i>
                            </button>

                            <button 
                                style={{ 
                                    backgroundColor: '#727cf4',
                                    border: 'none', 
                                    width: '40px', 
                                    height: '40px', 
                                    borderRadius: '5px' 
                                }}>
                                    <i className="fa-solid fa-filter" style={{color: '#ffffff'}}></i>
                            </button>
                        </div>
                </section>

                <section className="Widgets" style={{margin: '20px'}}>
                    <Row>
                        <Col xl={4} lg={12}>
                            <ViewsChart />
                        </Col>
                        <Col xl={4} lg={6}>
                            <BrowsersChart />
                        </Col>
                        <Col xl={4} lg={6}>
                            <OsChart />
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={12} lg={8}>
                            <CountrySessionsChart />
                        </Col>
                    </Row>
                </section>

                
            </div>
        </div>
    );
};

export default Homepage;