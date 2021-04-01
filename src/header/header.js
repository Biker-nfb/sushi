import clown from '../images/clownfish.webp'
import './header.css'

export default function Header() {
return (
    <header className="App-header">
        <div className="App-header--container">
          <div className="App-header--container-wraper">
            <img className="App-header--container-img" src={clown} alt="clown-fish"></img>
          <h2 className="App-header--container-text">Суши-шмастер</h2>
          </div>
          <button className="App-header--container-btn">Сделать заказ</button>
        </div>
        
      </header>
)

}
    
