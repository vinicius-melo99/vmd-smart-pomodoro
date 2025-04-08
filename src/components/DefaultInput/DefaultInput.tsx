import styles from './styles.module.css';

type DefaultInputProps = {
  id: string;
  labelText?: string;
} & React.ComponentProps<'input'>;

export const DefaultInput = ({ id, labelText, ...rest }: DefaultInputProps) => {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input className={styles.defaultInput} id={id} {...rest} />
    </>
  );
};
