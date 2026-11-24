import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { actionSchema, type Action } from "./action.js";
import { timeSeriesConditionSchema, type TimeSeriesCondition } from "./time-series-condition.js";

export type TimeSeriesTransformation = {
  action?: Action;
  /**
   * An array of conditions that define which members of the related time series are transformed.
   */
  timeSeriesConditions?: TimeSeriesCondition[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const timeSeriesTransformationSchema: Schema<TimeSeriesTransformation> =
  s.object<TimeSeriesTransformation>(
    {
      action: s.optional(s.lazy(() => actionSchema)),
      timeSeriesConditions: s.optional(s.array(s.lazy(() => timeSeriesConditionSchema))),
      _keysMap: {
        action: "Action",
        timeSeriesConditions: "TimeSeriesConditions",
      },
    },
    { additionalProperties: s.json() },
  );
