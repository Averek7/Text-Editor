import React from 'react'

export default function About(props) {
    return (
        <>
            <div className="mx-5 my-3">
                <div className="container py-2">
                    <h4 className="text-center">About us</h4>
                </div>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style = {props.mode === "dark" ? {backgroundColor: "#212529",color: "white",borderColor:"#212529"} : {backgroundColor:"white",color: "#212529"}}>
                                User-friendly UI
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style = {props.mode === "dark"? {backgroundColor: "grey",color: "white",borderColor:"#212529"} : {backgroundColor:"white",color: "#212529"}}>
                                <strong>User-friendly experience</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ab pariatur distinctio at praesentium doloremque voluptas vel magni commodi dolores, nulla voluptatem quis cupiditate aperiam! Animi odio voluptates, aut, ipsum ea quidem tempore ducimus alias, necessitatibus aperiam laboriosam nulla! Vero.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style = {props.mode === "dark" ? {backgroundColor: "#212529",color: "white",borderColor:"#212529"} : {backgroundColor:"white",color: "#212529"}}>
                                Mode switches
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style = {props.mode === "dark"? {backgroundColor: "grey",color: "white",borderColor:"#212529"} : {backgroundColor:"white",color: "#212529"}}>
                                <strong>Light to Dark Mode switch</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quo. Aspernatur hic ratione, maxime error qui ab reprehenderit dolores consectetur suscipit quibusdam impedit aut earum. Rem quae modi voluptatibus fuga ab labore, sunt adipisci illo fugit ea laborum, voluptatum facilis?
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className= "accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style = {props.mode === "dark"? {backgroundColor: "#212529",color: "white",borderColor:"#212529"} : {backgroundColor:"white",color: "#212529"}}>
                                Check-out preview and summary of text
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style = {props.mode === "dark"? {backgroundColor: "grey",color: "white",borderColor:"#212529"} : {backgroundColor:"white",color: "#212529"}}>
                                <strong>Preview & Summary</strong> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis voluptatem tempora eum sint iusto fugiat fuga, consequatur quisquam? Quas dicta veniam magni culpa quaerat iure consequuntur, ut alias odio dolorem nulla, quam, numquam aperiam quia minus ullam placeat dignissimos excepturi!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
