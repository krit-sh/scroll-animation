import { useEffect } from "react";
import "./scroll.css";

const ScrollAnimation = () => {
    useEffect(() => {
        const boxes = document.querySelectorAll(".box");

        function checkBoxes() {
            const triggerBottom = (window.innerHeight / 5) * 4;
            boxes.forEach((box) => {
                const boxTop = box.getBoundingClientRect().top;
                if (boxTop < triggerBottom) {
                    box.classList.add("show");
                } else {
                    box.classList.remove("show");
                }
            });
        }

        window.addEventListener("scroll", checkBoxes);
        checkBoxes();

        return () => window.removeEventListener("scroll", checkBoxes);
    }, []);

    return (
        <>
            <h1>Scroll to see Animation</h1>
            <div className="box">Content</div>
            <div className="box">Content</div>
            <div className="box">Content</div>
            <div className="box">Content</div>
            <div className="box">Content</div>
            <div className="box">Content</div>
            <div className="box">Content</div>
            <div className="box">Content</div>
            <div className="box">Content</div>
            <div className="box">Content</div>
            <div className="box">Content</div>
            <div className="box">Content</div>
            <div className="box">Content</div>
            <div className="box">Content</div>
        </>
    );
};

export default ScrollAnimation;
