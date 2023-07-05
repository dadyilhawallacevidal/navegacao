import React from "react";
import "./Content.css";
import { Route, Routes } from "react-router-dom";
import Home from "../../views/examples/Home";
import About from "../../views/examples/About";
import NotFound from "../../views/examples/NotFound";
import Param from "../../views/examples/Param";
import Fundamentos from "../../Fundamentos/src/index";
import Calculadora from "../../Calculadora/index";

const Content = props => (
    <main className="Content">
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/param/:id" element={<Param />} />
            <Route path="/" element={<Home />} />
            <Route path="/fundamentos" element={<Fundamentos />} />
            <Route path="/Calculadora" element={<Calculadora />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </main>);



export default Content;