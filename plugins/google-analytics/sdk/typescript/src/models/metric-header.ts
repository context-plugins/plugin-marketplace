import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type2Schema, type Type2 } from "./type2.js";

/**
 * Describes a metric column in the report. Visible metrics requested in a report produce column
 * entries within rows and MetricHeaders. However, metrics used exclusively within filters or
 * expressions do not produce columns in a report; correspondingly, those metrics do not produce
 * headers.
 */
export type MetricHeader = {
  /** The metric's data type. */
  type?: Type2;
  /** The metric's name. */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metricHeaderSchema: Schema<MetricHeader> = s.object<MetricHeader>(
  {
    type: s.optional(s.lazy(() => type2Schema)),
    name: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
