import React from 'react';

import { Link, useRouteMatch } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <menu>
          <Link
            to="/"
            className={useRouteMatch().url === '/' ? 'selected' : ''}
          >
            Listagem
          </Link>
          <Link
            to="/import"
            className={useRouteMatch().url === '/import' ? 'selected' : ''}
          >
            Importar
          </Link>
        </menu>
      </nav>
    </header>
  </Container>
);

export default Header;
