import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type2DoiTReportsApiSchema, type Type2DoiTReportsApi } from "./type2-doi-treports-api.js";

/** Metric selector used in reports and filters. */
export type ExternalMetric = {
  /** Type of metric to use. */
  type: Type2DoiTReportsApi;
  /**
   * For basic metrics, the value can be one of: ["cost", "usage", "savings"] If using custom
   * metrics, the value must refer to an existing custom metric ID.
   */
  value: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const externalMetricSchema: Schema<ExternalMetric> = s.object<ExternalMetric>(
  {
    type: type2DoiTReportsApiSchema,
    value: s.string(),
  },
  { additionalProperties: s.json() },
);
