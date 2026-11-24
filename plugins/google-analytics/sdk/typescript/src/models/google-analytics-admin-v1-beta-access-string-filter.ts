import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { matchTypeSchema, type MatchType } from "./match-type.js";

/** The filter for strings. */
export type GoogleAnalyticsAdminV1BetaAccessStringFilter = {
  /** The match type for this filter. */
  matchType?: MatchType;
  /** If true, the string value is case sensitive. */
  caseSensitive?: boolean;
  /** The string value used for the matching. */
  value?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaAccessStringFilterSchema: Schema<GoogleAnalyticsAdminV1BetaAccessStringFilter> =
  s.object<GoogleAnalyticsAdminV1BetaAccessStringFilter>(
    {
      matchType: s.optional(s.lazy(() => matchTypeSchema)),
      caseSensitive: s.optional(s.boolean()),
      value: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
