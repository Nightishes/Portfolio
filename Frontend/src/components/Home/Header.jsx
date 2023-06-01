import './assets/header.css'


function Header() {
    return (
        <>
        <header className='display-header'>
        <a href='/'>Home</a>
            <nav>
                <ul className='display-nav'>
                    <li><a href='#summary'>Ma présentation</a></li>
                    <li><a href='#projects'>Mes projets réalisés</a></li>
                    <li><a href='#contact'>Me contacter</a></li>
                    <button>Switch to EN / FR</button>
                </ul>
            </nav>
        </header>
        </>
    );
  }
  
  export default Header;