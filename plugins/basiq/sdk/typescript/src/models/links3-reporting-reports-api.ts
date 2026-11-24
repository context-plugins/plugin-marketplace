import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Links3ReportingReportsApi = {
  /** Link to retrieve the account details */
  self?: string;
  /** Link to retrieve the transactions for the account */
  transactions?: string;
  /** Link to retrieve the institution details */
  institution?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const links3ReportingReportsApiSchema: Schema<Links3ReportingReportsApi> =
  s.object<Links3ReportingReportsApi>(
    {
      self: s.optional(s.string()),
      transactions: s.optional(s.string()),
      institution: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
