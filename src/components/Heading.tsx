import styles from './Heading.module.css';

interface HeadingProps {
  title: string;
}

export const Heading = ({ title }: HeadingProps) => {
  return <h1 className={styles.heading}>{title}</h1>;
};
