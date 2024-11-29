import { useState } from 'react';
import { ArticleStateType, OptionType } from 'src/constants/articleProps';

type useArticleParamsFormProps = {
	articleStyleState: ArticleStateType;
	setArticleStyle: (newState: ArticleStateType) => void;
};

export const useArticleParamsForm = ({
	articleStyleState,
	setArticleStyle,
}: useArticleParamsFormProps) => {
	const [ArticleParamsFormStyle, setArticleParamsFormStyle] =
		useState(articleStyleState);

	const handleChange = (option: OptionType, filedName: string) =>
		setArticleParamsFormStyle({
			...ArticleParamsFormStyle,
			[filedName]: option,
		});

	const handleSubmitForm = (evt: React.FormEvent) => {
		evt.preventDefault();
		setArticleStyle(ArticleParamsFormStyle);
	};

	const handleResetForm = (evt: React.FormEvent) => {
		evt.preventDefault();
		setArticleParamsFormStyle(articleStyleState);
	};

	return {
		ArticleParamsFormStyle,
		handleChange,
		handleSubmitForm,
		handleResetForm,
	};
};
