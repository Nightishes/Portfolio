import './assets/mainpage.css'
import Placeholder from  './assets/images/placeholder_picture.jpg'
import Project from './Project';
function Mainpage() {
    return (
        <>
        <main>
        <h1>To be written</h1>
        <section className='summary-myself' id='summary'>
            <div>
                <img alt='Placeholder' src={Placeholder}></img>
                <h3><a href='#'>Mon CV</a></h3>
            </div>
            <div className='summary-text'>
                <h2>Présentation Full-Stack</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
                <div>
                    <p>Outils utilisés:</p>
                </div> 
            </div>
        </section>
        <section className='summary-project' id='projects'>
            <h2>Mes projets</h2>
            <p>Disclaimer : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <Project/>
        </section>
        {/* aws, hostinger, ovh layout-react, nom de domaine/hebergement  */}
        </main>
        </>
    );
  }
  
  export default Mainpage;