import { Dispatch, SetStateAction } from 'react';
import { PageItem } from '../../../types/types';

export type HomePageProps = {
	onPageChange: Dispatch<SetStateAction<PageItem>>;
};
