import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/jeronimo-s-rodrigues-dev/" target='_blank'>
                            <img src="/imagens/linkedin.png" alt="Linkedin" title='Linkedin'/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/JeronimoSantos" target='_blank'>
                            <img src="/imagens/github.png" alt="GitHub" title='GitHub'/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/jeronimo_santos_oficial/" target='_blank'>
                            <img src="/imagens/instagram.png" alt="Instagram" title='Instagram'/>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/imagens/logo.png" alt='Logo organo'/>
            </section>
            <section>
                <p>
                    Desenvolvido por Jeronimo S. Rodrigues.
                </p>
            </section>
        </footer>
    )
}

export default Rodape;