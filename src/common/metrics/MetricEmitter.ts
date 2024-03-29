import Metric from './Metric';
import NoopMetricEmitter from './NoopMetricEmitter';
import config from '../Config';

export interface Emitter {
  emit(metric: Metric, timeOverride?: Date): Promise<void>;
}

/* istanbul ignore next */
export default class MetricEmitter {
  private static instance: Emitter | undefined;
  public static Instance (): Emitter {
    
    if (!MetricEmitter.instance) { 
        
        if (config.getOrDefault('metrics.enabled', true)) {
        MetricEmitter.instance = new NoopMetricEmitter();
      } else {
        MetricEmitter.instance = new NoopMetricEmitter();
      }
    }

    return MetricEmitter.instance;
  }
}
