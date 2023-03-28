import React, { ReactNode } from "react";
import Navbar from '../comps/Navbar'
import { Parallax, ParallaxLayer } from "@react-spring/parallax";



export default function Main() { 
    const [talk, setTalk] = React.useState(['https://media.gettyimages.com/id/1269508745/fr/photo/interior-of-the-synagogue-of-la-ghriba-in-djerba-tunisia.jpg?s=612x612&w=0&k=20&c=qmc9n1DvHOjWRn5DmpOAdC0gyTGLKTqVJQyMVPNuiFc=','https://media.gettyimages.com/id/1220712799/fr/photo/djerba-island-beach-along-east-coast.jpg?s=612x612&w=0&k=20&c=8kf-9641fRWue5EZduTgBL59L0Zc-fPN-fuQ2ir4_uk=','https://media.gettyimages.com/id/889900186/fr/photo/three-straw-umbrellas-on-djerba-island-tunisia.jpg?s=612x612&w=0&k=20&c=pNk1qQGdN-NCIpekLxqbX49PLnx6Qe7p0Pxx4XcVTZE=']);
        let i = 0
        i = Math.random() * 3
        i = Math.floor(i)
        

        type ProductsS = {
            _id: Object,
            title: String,
            disc:  String,
            images: String
        }
        const [beachProducts, setBeachProducts] = React.useState<ProductsS[]>([])
        const [cultureProducts, setCultureProducts] = React.useState<ProductsS[]>([])
        const [historyProducts, setHistoryProducts] = React.useState<ProductsS[]>([])
    
        React.useEffect( () => {
            async function getProducts() {
                fetch('https://nutty-puce-uniform.cyclic.app/beach')
                    .then(res => res.json())
                    .then(data =>  setBeachProducts(data))
                    .catch(err => console.log(err))

                fetch('https://nutty-puce-uniform.cyclic.app/culture')
                    .then(res => res.json())
                    .then(data =>  setCultureProducts(data))
                    .catch(err => console.log(err))
                
                fetch('https://nutty-puce-uniform.cyclic.app/history')
                    .then(res => res.json())
                    .then(data =>  setHistoryProducts(data))
                    .catch(err => console.log(err))
            }
    
            
    
    
             getProducts()
            
        }, [])
    
    
    
       
   
    
    return(
            <div className="main">
                     <Navbar/>   
                     
                    <section className="section-one sections" id='1'>
                    
                        <h2>Djerba</h2>
                        <div className="intro-section">
                                <h4>Djerba is a picturesque island located off the coast of Tunisia in North Africa. It is renowned for its stunning beaches and clear blue waters, making it a popular tourist destination. The island is steeped in history, with numerous historical landmarks such as the El Ghriba Synagogue. Visitors can explore the traditional architecture and bustling markets, offering a glimpse into the vibrant local culture. The island is also famous for its delicious cuisine, featuring fresh seafood and local specialties. Whether you're looking for a relaxing beach vacation or an enriching cultural experience, Djerba has something for everyone.</h4>
                                <img src={talk[i]} alt="" />
                        </div>
                    </section>
                
              
                    <section className="section-two sections" id='2'>
                        <div id='bg-beach-img'></div>
                        <h2>Beaches</h2>
                        <div className="beach-photos">
                        {beachProducts!.map((product) => {
                            return(
                                <a href={'/beach/Details/' + product._id}> 
                                    <div className='title'> 
                                        
                                            <img src={product.images[0]} alt="" />
                                            <h1 >{product.title}</h1>
                                        
                                    </div>
                                    </a>  
              )
              
            })}
                        </div>
                    </section>
                    
               
                
                    <section className="section-thee sections" id='3'>                       
                        <h2 >History</h2>
                        <div className="beach-photos">
                        {historyProducts!.map((product) => {
                            return(
                                <a href={'/history/Details/' + product._id}> 
                                    <div className='title'> 
                                        
                                            <img src={product.images[0]} alt="" />
                                            <h1 >{product.title}</h1>
                                        
                                    </div>
                                    </a>  
              )
              
            })}
                            
                        </div>
                    </section>
                    
                
                
                    <section className="section-four sections"  id='4'>
                        <h2 >Culture</h2>
                        <div className="beach-photos">
                        {cultureProducts!.map((product) => {
                            return(
                                <a href={'/culture/Details/' + product._id}> 
                                    <div className='title'> 
                                        
                                            <img src={product.images[0]} alt="" />
                                            <h1 >{product.title}</h1>
                                        
                                    </div>
                                    </a>  
              )
              
            })}
                        </div>
                    </section>
                    
            

            </div>
    )
}
