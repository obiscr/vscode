import { createDecorator } from '../../instantiation/common/instantiation.js';

export const IMyFeatureService = createDecorator<IMyFeatureService>('myFeatureService');

export interface IMyFeatureService {
	readonly _serviceBrand: undefined;

	printEnv(): void;
}
