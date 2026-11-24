import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ClassReportingReportsApi = {
  /** Type of the account class */
  type?: string;
  /** Product of the account class */
  product?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const classReportingReportsApiSchema: Schema<ClassReportingReportsApi> =
  s.object<ClassReportingReportsApi>(
    {
      type: s.optional(s.string()),
      product: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
