import { useState, useRef } from 'react';
import clsx from 'clsx';
import styles from './ArticleParamsForm.module.scss';
import {
	ArticleStateType,
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
} from 'src/constants/articleProps';
import { Form } from '../form';
import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Text } from 'src/ui/text';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import { useArticleParamsForm } from './hooks/useArticleParamsForm';
import { useOutsideClickClose } from 'src/ui/select/hooks/useOutsideClickClose';

type ArticleParamsFormProps = {
	articleStyleState: ArticleStateType;
	setArticleStyle: (newState: ArticleStateType) => void;
};

export const ArticleParamsForm = ({
	articleStyleState,
	setArticleStyle,
}: ArticleParamsFormProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const asideRef = useRef<HTMLDivElement | null>(null);

	useOutsideClickClose({ isOpen, rootRef: asideRef, onChange: setIsOpen });

	const {
		ArticleParamsFormStyle,
		handleChange,
		handleSubmitForm,
		handleResetForm,
	} = useArticleParamsForm({ articleStyleState, setArticleStyle });

	return (
		<>
			<ArrowButton
				isOpen={isOpen}
				onClick={() => {
					setIsOpen((prevState) => !prevState);
				}}
			/>
			<aside
				ref={asideRef}
				className={clsx(styles.container, { [styles.container_open]: isOpen })}>
				<Form onSubmit={handleSubmitForm} onReset={handleResetForm}>
					<Text size={31} weight={800} uppercase align='left'>
						Задайте параметры
					</Text>
					<Select
						options={fontFamilyOptions}
						selected={ArticleParamsFormStyle.fontFamilyOption}
						onChange={(option) => handleChange(option, 'fontFamilyOption')}
						title='Шрифт'
					/>
					<RadioGroup
						title='Размер шрифта'
						name='Размеры шрифта'
						options={fontSizeOptions}
						selected={ArticleParamsFormStyle.fontSizeOption}
						onChange={(option) => handleChange(option, 'fontSizeOption')}
					/>
					<Select
						title='Цвет шрифта'
						options={fontColors}
						selected={ArticleParamsFormStyle.fontColor}
						onChange={(option) => handleChange(option, 'fontColor')}
					/>
					<Separator />
					<Select
						title='Цвет фона'
						options={backgroundColors}
						selected={ArticleParamsFormStyle.backgroundColor}
						onChange={(option) => handleChange(option, 'backgroundColor')}
					/>
					<Select
						title='Ширина контента'
						options={contentWidthArr}
						selected={ArticleParamsFormStyle.contentWidth}
						onChange={(option) => handleChange(option, 'contentWidth')}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</Form>
			</aside>
		</>
	);
};
