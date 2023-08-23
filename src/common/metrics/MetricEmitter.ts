import Metric from './Metric';
import NoopMetricEmitter from './NoopMetricEmitter';
import config from '../Config';
import LambdaMetricEmitter from './LambdaMetricEmitter';

export interface Emitter {
  emit(metric: Metric, timeOverride?: Date): Promise<void>;
}

/* istanbul ignore next */
export default class MetricEmitter {
  private static instance: Emitter | undefined;
  public static Instance (): Emitter {
    if (!MetricEmitter.instance) { 
        MetricEmitter.instance = new NoopMetricEmitter();
    }

    return MetricEmitter.instance;
  }
}
