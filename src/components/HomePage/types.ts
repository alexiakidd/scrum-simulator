import { Dispatch, SetStateAction } from 'react';
import { PageItem } from '../../../pages/Home/types';

export type HomePageProps = {
	onPageChange: Dispatch<SetStateAction<PageItem>>;
};
