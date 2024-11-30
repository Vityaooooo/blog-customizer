import { useState } from 'react';
import {
	ArticleStateType,
	OptionType,
	defaultArticleState,
} from 'src/constants/articleProps';

type useArticleParamsFormProps = {
	articleStyles: ArticleStateType;
	setArticleStyles: (newState: ArticleStateType) => void;
};

export const useArticleParamsForm = ({
	articleStyles,
	setArticleStyles,
}: useArticleParamsFormProps) => {
	const [articlFormStyles, setArticlFormStyles] = useState(articleStyles);

	const handleChange = (option: OptionType, filedName: string) =>
		setArticlFormStyles({
			...articlFormStyles,
			[filedName]: option,
		});

	const handleSubmitForm = (evt: React.FormEvent) => {
		evt.preventDefault();
		setArticleStyles(articlFormStyles);
	};

	const handleResetForm = (evt: React.FormEvent) => {
		evt.preventDefault();
		setArticleStyles(defaultArticleState);
		setArticlFormStyles(defaultArticleState);
	};

	return {
		articlFormStyles,
		handleChange,
		handleSubmitForm,
		handleResetForm,
	};
};
