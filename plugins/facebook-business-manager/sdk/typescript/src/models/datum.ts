import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { valueSchema, type Value } from "./value.js";

export type Datum = {
  /** The metric name */
  name?: string;
  /** The aggregation period */
  period?: string;
  values?: Value[];
  /** Human-readable metric title */
  title?: string;
  /** Description of what the metric measures */
  description?: string;
  /** Metric identifier */
  id?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datumSchema: Schema<Datum> = s.object<Datum>(
  {
    name: s.optional(s.string()),
    period: s.optional(s.string()),
    values: s.optional(s.array(s.lazy(() => valueSchema))),
    title: s.optional(s.string()),
    description: s.optional(s.string()),
    id: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
