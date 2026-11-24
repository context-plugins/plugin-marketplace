import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ClickMetric = {
  clicks?: number;
  value?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const clickMetricSchema: Schema<ClickMetric> = s.object<ClickMetric>(
  {
    clicks: s.optional(s.int()),
    value: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
