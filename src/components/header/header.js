import  React from 'react';
import './header.css';
import Links from './../links/links.js';

function Header() {
  return (
    <div className="header">
      <Links text="Home" url='https://www.canva.com/design/DAF5CKGhmZc/KZHFZCM1uqGu1c4PEs1kCQ/edit'/>
        <Links text="Sobre Mim" url='https://www.canva.com/design/DAF5CKGhmZc/KZHFZCM1uqGu1c4PEs1kCQ/edit'/>
        <Links text="Agendamentos" url='https://www.canva.com/design/DAF5CKGhmZc/KZHFZCM1uqGu1c4PEs1kCQ/edit'/>
        <Links text="E-book" url='https://www.canva.com/design/DAF5CKGhmZc/KZHFZCM1uqGu1c4PEs1kCQ/edit'/>
        <Links text="Depoimentos" url='https://www.canva.com/design/DAF5CKGhmZc/KZHFZCM1uqGu1c4PEs1kCQ/edit'/>
    </div>
  );
}

export default Header;
