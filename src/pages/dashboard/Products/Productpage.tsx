import React, { useState } from "react";
import { Row, Col } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AppMenu from "../../../layouts/Menu/index"; 
import { MenuItemType } from '../../../appConstants/menu'; 
import ProfileImage from "../../../assets/images/users/avatar-9.jpg";
import IntranetLogo from 'assets/images/intranet-logo-white.png';
import ProductTest from '../../../assets/images/products/test-product.png';
import { Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";




const Products = ()=> {
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

 // tabela
 const products = [
    {
        id: 1,
        name: "ASOS Ridley High Waist",
        date: "07 April 2018",
        price: "$79.49",
        quantity: 82,
        image: ProductTest,
        inStock: true,
        actions: (
        <>
            <i className="fas fa-eye mx-2 cursor-pointer" style={{ color: "#6e6c6c" }}></i>
            <i className="fas fa-edit mx-2 cursor-pointer" style={{ color: "#6e6c6c" }}></i>
            <i className="fas fa-trash mx-2 cursor-pointer" style={{ color: "#6e6c6c" }}></i>
        </>
      ),
    },
    {
        id: 2,
        name: "Marco Lightweight Shirt",
        date: "25 March 2018",
        price: "$128.50",
        quantity: 37,
        image: ProductTest,
        inStock: true,
        actions: (
        <>
            <i className="fas fa-eye mx-2 cursor-pointer" style={{ color: "#6e6c6c" }}></i>
            <i className="fas fa-edit mx-2 cursor-pointer" style={{ color: "#6e6c6c" }}></i>
            <i className="fas fa-trash mx-2 cursor-pointer" style={{ color: "#6e6c6c" }}></i>
        </>
      ),
    },
    {
        id: 3,
        name: "Half Sleeve Shirt",
        date: "17 March 2018",
        price: "$39.99",
        quantity: 0,
        image: ProductTest,
        inStock: false,
        actions: (
        <>
            <i className="fas fa-eye mx-2 cursor-pointer" style={{ color: "#6e6c6c" }}></i>
            <i className="fas fa-edit mx-2 cursor-pointer" style={{ color: "#6e6c6c" }}></i>
            <i className="fas fa-trash mx-2 cursor-pointer" style={{ color: "#6e6c6c" }}></i>
        </>
      ),
    },
    {
        id: 4,
        name: "Lightweight Jacket",
        date: "12 March 2018",
        price: "$20.00",
        quantity: 184,
        image: ProductTest,
        inStock: true,
        actions: (
        <>
            <i className="fas fa-eye mx-2 cursor-pointer" style={{ color: "#6e6c6c" }}></i>
            <i className="fas fa-edit mx-2 cursor-pointer" style={{ color: "#6e6c6c" }}></i>
            <i className="fas fa-trash mx-2 cursor-pointer" style={{ color: "#6e6c6c" }}></i>
        </>
      ),
    },
    {
        id: 5,
        name: "Marco Shoes",
        date: "05 March 2018",
        price: "$28.49",
        quantity: 69,
        image: ProductTest,
        inStock: true,
        actions: (
        <>
            <i className="fas fa-eye mx-2 cursor-pointer" style={{ color: "#6e6c6c" }}></i>
            <i className="fas fa-edit mx-2 cursor-pointer" style={{ color: "#6e6c6c" }}></i>
            <i className="fas fa-trash mx-2 cursor-pointer" style={{ color: "#6e6c6c" }}></i>
        </>
      ),
    },
    {
        id: 6,
        name: "Classic Jeans",
        date: "01 March 2018",
        price: "$49.99",
        quantity: 0,
        image: ProductTest,
        inStock: false,
        actions: (
        <>
            <i className="fas fa-eye mx-2 cursor-pointer" style={{ color: "#6e6c6c" }}></i>
            <i className="fas fa-edit mx-2 cursor-pointer" style={{ color: "#6e6c6c" }}></i>
            <i className="fas fa-trash mx-2 cursor-pointer" style={{ color: "#6e6c6c" }}></i>
        </>
      ),
    },
    {
        id: 7,
        name: "Sneakers",
        date: "22 February 2018",
        price: "$89.99",
        quantity: 58,
        image: ProductTest,
        inStock: true,
        actions: (
        <>
            <i className="fas fa-eye mx-2 cursor-pointer" style={{ color: "#6e6c6c" }}></i>
            <i className="fas fa-edit mx-2 cursor-pointer" style={{ color: "#6e6c6c" }}></i>
            <i className="fas fa-trash mx-2 cursor-pointer" style={{ color: "#6e6c6c" }}></i>
        </>
      ),
    },
  ];

  //pages
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const displayedProducts = products.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

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
                     <h4 style={{marginLeft:'3.5%'}}>Produtos</h4>
                    
             </section>

             <div className="buttons" style={{display: 'flex', flexDirection:'row', justifyContent: 'space-between'}}>
                <button type="button" className="btn btn-danger" style={{marginLeft: '5%'}}>
                    <i className="fa-solid fa-circle-plus" style={{color: '#ffffff'}}></i> Adicionar Produtos
                </button>

                <div className="buttonsrigth" style={{display: 'flex', flexDirection:'row',paddingRight: '5%'}}>
                    <button type="button" className="btn btn-success" style={{marginLeft: '0%'}}>
                        <i className="fa-solid fa-gear" style={{color: '#f7f7f7'}}></i>
                    </button>

                    <button type="button" className="btn btn-secondary" style={{marginLeft: '5px'}}>
                        Importar
                    </button>

                    <button type="button" className="btn btn-secondary" style={{marginLeft: '5px'}}>
                         Exportar
                    </button>
                </div>
             </div>

             <section className="Main" style={{margin: '20px'}}>
             <Card className="m-4">
                <Card.Body>
                    <Link to="#" className="float-end">
                    Export <i className="mdi mdi-download ms-1"></i>
                    </Link>
                    <h4 className="header-title mt-2 mb-3"></h4>
                    <Table hover responsive className="mb-0">
                    <thead>
                        <tr>
                            <th>Imagem</th>
                            <th>Produto</th>
                            <th>Preço</th>
                            <th>Quantidade</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedProducts.map((product) => (
                        <tr key={product.id}>
                            <td><img src={product.image} alt={product.name} width="50" /></td>
                            <td>
                            <h5 className="font-14 my-1 fw-normal">{product.name}</h5>
                            <span className="text-muted font-13">{product.date}</span>
                            </td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td>{product.actions}</td>
                        </tr>
                        ))}
                    </tbody>
                    </Table>
                    <div className="d-flex justify-content-between mt-3">
                    <Button onClick={handlePrevPage} disabled={currentPage === 0} variant="secondary">Voltar</Button>
                        <span>Pagina {currentPage + 1} de {totalPages}</span>
                    <Button onClick={handleNextPage} disabled={currentPage === totalPages - 1} variant="secondary">Próximo</Button>
                    </div>
                </Card.Body>
                </Card>
             </section>

             
         </div>
     </div>
 );
};


export default Products;