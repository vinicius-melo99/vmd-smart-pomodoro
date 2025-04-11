import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { MenuLink } from '../MenuLink';
import { MouseEvent, useEffect, useState } from 'react';

type AvailableThemes = 'dark' | 'light';

export const Menu = () => {
  const [theme, setTheme] = useState<AvailableThemes>();

  useEffect(() => {
    const themeLS = localStorage.getItem('theme') as AvailableThemes;

    if (themeLS) {
      return setTheme(JSON.parse(themeLS));
    }

    setTheme('dark');
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      theme as AvailableThemes,
    );

    if (theme) localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  const handleThemeChange = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setTheme(oldTheme => (oldTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <nav className={styles.menu}>
      <MenuLink aria-label='Ir para a home' title='Home' tabIndex={1}>
        <HouseIcon />
      </MenuLink>

      <MenuLink aria-label='Acessar o histórico' title='Histórico' tabIndex={2}>
        <HistoryIcon />
      </MenuLink>

      <MenuLink
        aria-label='Alterar configurações'
        title='Configurações'
        tabIndex={3}
      >
        <SettingsIcon />
      </MenuLink>

      <MenuLink
        aria-label='Alternar entre temas claro e escuro'
        title={`Alterar para tema ${theme === 'dark' ? 'claro' : 'escuro'}`}
        tabIndex={4}
        onClick={handleThemeChange}
      >
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </MenuLink>
    </nav>
  );
};
