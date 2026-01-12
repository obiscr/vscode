import { Disposable } from '../../../base/common/lifecycle.js';
import { ILogService } from '../../log/common/log.js';
import { IMyFeatureService } from '../common/myFeature.js';

export class MyFeatureService extends Disposable implements IMyFeatureService {
	declare readonly _serviceBrand: undefined;

	constructor(
		@ILogService private readonly logService: ILogService
	) {
		super();
		this.printEnv();
	}

	printEnv(): void {
		this.logService.info('[My Feature]: ', process.env);
	}
}
