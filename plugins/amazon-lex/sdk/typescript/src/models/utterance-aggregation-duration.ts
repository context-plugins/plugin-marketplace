import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  relativeAggregationDurationSchema,
  type RelativeAggregationDuration,
} from "./relative-aggregation-duration.js";

export type UtteranceAggregationDuration = {
  relativeAggregationDuration: RelativeAggregationDuration;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const utteranceAggregationDurationSchema: Schema<UtteranceAggregationDuration> =
  s.object<UtteranceAggregationDuration>(
    {
      relativeAggregationDuration: relativeAggregationDurationSchema,
    },
    { additionalProperties: s.json() },
  );
