import css from './main.module.css'
import React from 'react'
import HeaderImg from '../image/Mask Group.png'

export const Main =()=>{
    return(
        <div className={css.mainPage}>
            <div className={css.container}>
                <nav>
                    <span>ThriveTalk</span>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Blog</li>
                    </ul>
                    <button>CONTACT US</button>
                </nav>
            
            <div className={css.mainBlock}>
                <p className={css.Plogo}>Thrivetalk</p>
                <h1>HELPING YOU THRIVE IN ALL AREAS OF LIFE</h1>
                <p className={css.Ptext}>Our highly talented therapists can help you with a range of issues including relationships,
                     sex, PTSD, depression, social anxiety, or even just caring for yourself more.
                     </p>
                 <div>
                    <button className={css.btn1}>WHO AM I</button>
                    <button className={css.btn2}>EHAT DO I DO</button>
                 </div>
            </div>
            <div>
                <img src={HeaderImg} alt='' className={css.Pic}/>
                </div>
        </div>
    </div>
    )
}
