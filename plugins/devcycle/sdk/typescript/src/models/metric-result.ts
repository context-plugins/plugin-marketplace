import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resultSchema, type Result } from "./result.js";

export type MetricResult = {
  result: Result;
  /** Whether this result came from a cache or a live result */
  cached: boolean;
  /** Date which these results are up-to-date with */
  updatedAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metricResultSchema: Schema<MetricResult> = s.object<MetricResult>(
  {
    result: resultSchema,
    cached: s.boolean(),
    updatedAt: s.dateTime(),
  },
  { additionalProperties: s.json() },
);
