import styles from './styles.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a className={styles.footerLink} href='#'>
        Entenda como funciona a técnica pomodoro 🍅
      </a>
      <label className={styles.copyText}>
        Smart Pomodoro &copy; {`${new Date().getFullYear()}`} - Desenvolvido por{' '}
        <a
          className={`${styles.highlightLink}`}
          href='https://www.linkedin.com/in/vinicius-s-melo'
          target='_blank'
        >
          Vinícius Melo
        </a>
      </label>
    </footer>
  );
};
