import { Container } from './components/Container';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';
import './styles/theme.css';
import './styles/global.css';
import { Menu } from './components/Menu';

export const App = () => {
  return (
    <>
      <Container>
        <Heading>
          <Logo />
        </Heading>
      </Container>

      <Container>
        <Menu />
      </Container>
    </>
  );
};
