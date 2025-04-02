import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';

export const App = () => {
  return (
    <>
      <Heading title='testando' />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed autem
        placeat, quia quae, quo illo ratione reprehenderit vitae dicta
        voluptatem obcaecati et corrupti tenetur ducimus velit molestiae harum,
        cum provident.
      </p>
    </>
  );
};
