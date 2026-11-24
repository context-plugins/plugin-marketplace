import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { metricResultSchema, type MetricResult } from "./metric-result.js";
import { monitorDataSourceSchema, type MonitorDataSource } from "./monitor-data-source.js";
import { predictorEventSchema, type PredictorEvent } from "./predictor-event.js";

export type PredictorMonitorEvaluation = {
  /** The Amazon Resource Name (ARN) of the resource to monitor. */
  resourceArn?: string;
  /** The Amazon Resource Name (ARN) of the monitor resource. */
  monitorArn?: string;
  /** The timestamp that indicates when the monitor evaluation was started. */
  evaluationTime?: Date;
  /** The status of the monitor evaluation. The state can be SUCCESS or FAILURE. */
  evaluationState?: string;
  /** The timestamp that indicates the start of the window that is used for monitor evaluation. */
  windowStartDatetime?: Date;
  /** The timestamp that indicates the end of the window that is used for monitor evaluation. */
  windowEndDatetime?: Date;
  predictorEvent?: PredictorEvent;
  monitorDataSource?: MonitorDataSource;
  /**
   * A list of metrics Forecast calculated when monitoring a predictor. You can compare the value
   * for each metric in the list to the metric's value in the Baseline to see how your predictor's
   * performance is changing.
   */
  metricResults?: MetricResult[];
  /** The number of items considered during the evaluation. */
  numItemsEvaluated?: number;
  /** Information about any errors that may have occurred during the monitor evaluation. */
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const predictorMonitorEvaluationSchema: Schema<PredictorMonitorEvaluation> =
  s.object<PredictorMonitorEvaluation>(
    {
      resourceArn: s.optional(s.string()),
      monitorArn: s.optional(s.string()),
      evaluationTime: s.optional(s.dateTime()),
      evaluationState: s.optional(s.string()),
      windowStartDatetime: s.optional(s.dateTime()),
      windowEndDatetime: s.optional(s.dateTime()),
      predictorEvent: s.optional(s.lazy(() => predictorEventSchema)),
      monitorDataSource: s.optional(s.lazy(() => monitorDataSourceSchema)),
      metricResults: s.optional(s.array(s.lazy(() => metricResultSchema))),
      numItemsEvaluated: s.optional(s.int()),
      message: s.optional(s.string()),
      _keysMap: {
        resourceArn: "ResourceArn",
        monitorArn: "MonitorArn",
        evaluationTime: "EvaluationTime",
        evaluationState: "EvaluationState",
        windowStartDatetime: "WindowStartDatetime",
        windowEndDatetime: "WindowEndDatetime",
        predictorEvent: "PredictorEvent",
        monitorDataSource: "MonitorDataSource",
        metricResults: "MetricResults",
        numItemsEvaluated: "NumItemsEvaluated",
        message: "Message",
      },
    },
    { additionalProperties: s.json() },
  );
