import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { metricsSchema, type Metrics } from "./metrics.js";

export type Item = {
  /** The job name */
  name?: string;
  /** Job metrics */
  metrics?: Metrics;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const itemSchema: Schema<Item> = s.object<Item>(
  {
    name: s.optional(s.string()),
    metrics: s.optional(s.lazy(() => metricsSchema)),
  },
  { additionalProperties: s.json() },
);
