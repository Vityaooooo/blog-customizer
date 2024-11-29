import { ReactNode } from 'react';
import style from './Form.module.scss';

type FormProps = {
	children: ReactNode;
	onSubmit: (evt: React.FormEvent) => void;
	onReset: (evt: React.FormEvent) => void;
};

export const Form = ({ children, onSubmit, onReset }: FormProps) => {
	return (
		<form className={style.form} onSubmit={onSubmit} onReset={onReset}>
			{children}
		</form>
	);
};
