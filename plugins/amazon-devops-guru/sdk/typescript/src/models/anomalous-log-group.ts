import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { logAnomalyShowcaseSchema, type LogAnomalyShowcase } from "./log-anomaly-showcase.js";

export type AnomalousLogGroup = {
  /** The name of the CloudWatch log group. */
  logGroupName?: string;
  /**
   * The time the anomalous log events began. The impact start time indicates the time of the first
   * log anomaly event that occurs.
   */
  impactStartTime?: Date;
  /** The time the anomalous log events stopped. */
  impactEndTime?: Date;
  /** The number of log lines that were scanned for anomalous log events. */
  numberOfLogLinesScanned?: number;
  /**
   * The log anomalies in the log group. Each log anomaly displayed represents a cluster of similar
   * anomalous log events.
   */
  logAnomalyShowcases?: LogAnomalyShowcase[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const anomalousLogGroupSchema: Schema<AnomalousLogGroup> = s.object<AnomalousLogGroup>(
  {
    logGroupName: s.optional(s.string()),
    impactStartTime: s.optional(s.dateTime()),
    impactEndTime: s.optional(s.dateTime()),
    numberOfLogLinesScanned: s.optional(s.int()),
    logAnomalyShowcases: s.optional(s.array(s.lazy(() => logAnomalyShowcaseSchema))),
    _keysMap: {
      logGroupName: "LogGroupName",
      impactStartTime: "ImpactStartTime",
      impactEndTime: "ImpactEndTime",
      numberOfLogLinesScanned: "NumberOfLogLinesScanned",
      logAnomalyShowcases: "LogAnomalyShowcases",
    },
  },
  { additionalProperties: s.json() },
);
