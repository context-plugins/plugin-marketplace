import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { logAnomalyTypeSchema, type LogAnomalyType } from "./log-anomaly-type.js";

export type LogAnomalyClass = {
  /**
   * The name of the Amazon CloudWatch log stream that the anomalous log event belongs to. A log
   * stream is a sequence of log events that share the same source.
   */
  logStreamName?: string;
  /** The type of log anomaly that has been detected. */
  logAnomalyType?: LogAnomalyType;
  /**
   * The token where the anomaly was detected. This may refer to an exception or another location,
   * or it may be blank for log anomalies such as format anomalies.
   */
  logAnomalyToken?: string;
  /** The ID of the log event. */
  logEventId?: string;
  /** The explanation for why the log event is considered an anomaly. */
  explanation?: string;
  /** The number of log lines where this anomalous log event occurs. */
  numberOfLogLinesOccurrences?: number;
  /** The time of the first occurrence of the anomalous log event. */
  logEventTimestamp?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const logAnomalyClassSchema: Schema<LogAnomalyClass> = s.object<LogAnomalyClass>(
  {
    logStreamName: s.optional(s.string()),
    logAnomalyType: s.optional(s.lazy(() => logAnomalyTypeSchema)),
    logAnomalyToken: s.optional(s.string()),
    logEventId: s.optional(s.string()),
    explanation: s.optional(s.string()),
    numberOfLogLinesOccurrences: s.optional(s.int()),
    logEventTimestamp: s.optional(s.dateTime()),
    _keysMap: {
      logStreamName: "LogStreamName",
      logAnomalyType: "LogAnomalyType",
      logAnomalyToken: "LogAnomalyToken",
      logEventId: "LogEventId",
      explanation: "Explanation",
      numberOfLogLinesOccurrences: "NumberOfLogLinesOccurrences",
      logEventTimestamp: "LogEventTimestamp",
    },
  },
  { additionalProperties: s.json() },
);
