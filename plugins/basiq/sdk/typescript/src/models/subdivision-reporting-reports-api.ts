import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SubdivisionReportingReportsApi = {
  /** Subdivision Code */
  code?: string;
  /** Subdivision Details */
  title?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subdivisionReportingReportsApiSchema: Schema<SubdivisionReportingReportsApi> =
  s.object<SubdivisionReportingReportsApi>(
    {
      code: s.optional(s.string()),
      title: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
