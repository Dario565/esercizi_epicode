import React from "react";


export default function FooterComponent () {
return (
<footer className=" d-flex flex-wrap justify-content-between align-items-center py-3 my_4 border-top">
<p className="col-md-4 mb-0 text-body-secondary"> 2024 copyrights</p>

<a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 link-dark text-decoration-none">
    EPIBOOK
</a>

<ul className="nav col-md-4 justify-content-end">
<li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">home</a></li>
<li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">about</a></li>
<li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">browse</a></li>

</ul>
</footer>
);
}