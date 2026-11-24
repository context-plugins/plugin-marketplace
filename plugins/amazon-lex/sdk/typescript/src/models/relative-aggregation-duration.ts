import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { timeDimensionSchema, type TimeDimension } from "./time-dimension.js";

export type RelativeAggregationDuration = {
  /** The type of time period that the timeValue field represents. */
  timeDimension: TimeDimension;
  /**
   * The period of the time window to gather statistics for. The valid value depends on the setting
   * of the timeDimension field. Hours - 1/3/6/12/24 Days - 3 Weeks - 1/2
   */
  timeValue: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const relativeAggregationDurationSchema: Schema<RelativeAggregationDuration> =
  s.object<RelativeAggregationDuration>(
    {
      timeDimension: timeDimensionSchema,
      timeValue: s.int(),
    },
    { additionalProperties: s.json() },
  );
