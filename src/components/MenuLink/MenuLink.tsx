import styles from './styles.module.css';

type MenuLinkProps = {
  children: React.ReactNode;
} & React.ComponentProps<'a'>;

export const MenuLink = ({ children, ...rest }: MenuLinkProps) => {
  return (
    <a className={styles.menuLink} {...rest}>
      {children}
    </a>
  );
};
