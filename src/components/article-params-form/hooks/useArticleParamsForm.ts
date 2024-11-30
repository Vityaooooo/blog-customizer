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
	const [articleFormStyles, setArticleFormStyles] = useState(articleStyles);

	const handleChange = (option: OptionType, filedName: string) =>
		setArticleFormStyles({
			...articleFormStyles,
			[filedName]: option,
		});

	const handleSubmitForm = (evt: React.FormEvent) => {
		evt.preventDefault();
		setArticleStyles(articleFormStyles);
	};

	const handleResetForm = (evt: React.FormEvent) => {
		evt.preventDefault();
		setArticleStyles(defaultArticleState);
		setArticleFormStyles(defaultArticleState);
	};

	return {
		articleFormStyles,
		handleChange,
		handleSubmitForm,
		handleResetForm,
	};
};
