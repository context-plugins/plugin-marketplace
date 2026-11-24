import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Metric = {
  key?: string;
  value?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metricSchema: Schema<Metric> = s.object<Metric>(
  {
    key: s.optional(s.string()),
    value: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
