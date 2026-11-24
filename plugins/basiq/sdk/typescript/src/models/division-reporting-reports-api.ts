import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DivisionReportingReportsApi = {
  /** Division Details */
  title?: string;
  /** Division Code */
  code?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const divisionReportingReportsApiSchema: Schema<DivisionReportingReportsApi> =
  s.object<DivisionReportingReportsApi>(
    {
      title: s.optional(s.string()),
      code: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
