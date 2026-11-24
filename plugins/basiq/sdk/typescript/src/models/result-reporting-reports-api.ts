import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { value1Schema, type Value1 } from "./unions/value1.js";

export type ResultReportingReportsApi = {
  value?: Value1;
  /** Format of the metric value */
  format?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resultReportingReportsApiSchema: Schema<ResultReportingReportsApi> =
  s.object<ResultReportingReportsApi>(
    {
      value: s.optional(s.lazy(() => value1Schema)),
      format: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
