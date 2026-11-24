import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A filter for in list values. */
export type GoogleAnalyticsAdminV1BetaAccessInListFilter1 = {
  /** If true, the string value is case sensitive. */
  caseSensitive?: boolean;
  /** The list of string values. Must be non-empty. */
  values?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaAccessInListFilter1Schema: Schema<GoogleAnalyticsAdminV1BetaAccessInListFilter1> =
  s.object<GoogleAnalyticsAdminV1BetaAccessInListFilter1>(
    {
      caseSensitive: s.optional(s.boolean()),
      values: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
