import s3 from '../images/s3.webp'
import s1 from '../images/s1.webp'
import s2 from '../images/s2.webp'
import s44 from '../images/s44.webp'
import '../main/main.css'
import React from 'react'
import Slid from './slider'







export default function Main() {
   

    return (
        <div className="App-main">
            <h2 className="App-main--tagline">Суши шмастер - лучшее, что есть в твоем городе 
        </h2>
        <h2 className="App-main--tagline"> Порадуй себя и своих родных</h2>
        <p className="App-main--infoText">Ниже представлены наши самые популярные позиции за последние пол года работы</p>
        <h3 className="App-main--info">Актуальные позиции</h3>
        <div className="App-main--tabs">
            <ul>
                <li className="App-main--tabsLi">
                    <img src={s3} alt="s3"></img>
                    <h5>Гринобль ролл</h5>
                    <p>Закажи сей вкуссный рол, Он украсит ваший стол, Он порадует ваш глаз, Получи скорей экстаз!</p>
                    <button className="App-main--btnActive">Заказать</button>
                </li>
                <li className="App-main--tabsLi">
                    <img src={s1} alt="s1"></img>
                    <h5>Оранжад ролл</h5>
                    <p>Закажи сей вкуссный рол, Он украсит ваший стол, Он порадует ваш глаз, Получи скорей экстаз!</p>
                    <button>Недоступно к заказу</button>
                </li>
                <li>
                    <img src={s2} alt="s2"></img>
                    <h5>Брауни ролл</h5>
                    <p>Закажи сей вкуссный рол, Он украсит ваший стол, Он порадует ваш глаз, Получи скорей экстаз!</p>
                    <button>Недоступно к заказу</button>
                </li>
                <li>
                    <img src={s44} alt="s44"></img>
                </li>
            </ul>
        </div>
            <div className="App-main--bottom">
            <h2>Самые выгодные предложения:</h2>
             <Slid/>
            </div>
        </div>
        
        
    )
}