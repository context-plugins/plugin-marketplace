import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The result needs to be in a list of string values. */
export type GoogleAnalyticsAdminV1BetaAccessInListFilter = {
  /** If true, the string value is case sensitive. */
  caseSensitive?: boolean;
  /** The list of string values. Must be non-empty. */
  values?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaAccessInListFilterSchema: Schema<GoogleAnalyticsAdminV1BetaAccessInListFilter> =
  s.object<GoogleAnalyticsAdminV1BetaAccessInListFilter>(
    {
      caseSensitive: s.optional(s.boolean()),
      values: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
