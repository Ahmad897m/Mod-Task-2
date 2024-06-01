import React from "react";
import './main.css'
import Assetify from "../Assetify/Assetify";

const Main = () => {
    return(
        <>
                <section className="main">
                <div className="overlay"></div>
                <div className="container">
                    <div className="content">
                        <p>أحصل على الإقامة التركية بكل سهولة مع Assetify</p>
                        <h1>استثمر من أي مكان في العالم واحصل على الإقامة التركية</h1>
                        <p>استمتع بمجموعة من الفوائد عن طريق استثمار الحد الأدنى 200,000 دولار أمريكي من خلال منصتنا.</p>
                    </div>
                </div>
            </section>
            <Assetify />
        </>
    )
}

export default Main;