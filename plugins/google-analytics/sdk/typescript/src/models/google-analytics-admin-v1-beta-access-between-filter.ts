import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleAnalyticsAdminV1BetaNumericValue1Schema,
  type GoogleAnalyticsAdminV1BetaNumericValue1,
} from "./google-analytics-admin-v1-beta-numeric-value1.js";
import {
  googleAnalyticsAdminV1BetaNumericValue4Schema,
  type GoogleAnalyticsAdminV1BetaNumericValue4,
} from "./google-analytics-admin-v1-beta-numeric-value4.js";

/** To express that the result needs to be between two numbers (inclusive). */
export type GoogleAnalyticsAdminV1BetaAccessBetweenFilter = {
  /** Begins with this number. */
  fromValue?: GoogleAnalyticsAdminV1BetaNumericValue4;
  /** Ends with this number. */
  toValue?: GoogleAnalyticsAdminV1BetaNumericValue1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaAccessBetweenFilterSchema: Schema<GoogleAnalyticsAdminV1BetaAccessBetweenFilter> =
  s.object<GoogleAnalyticsAdminV1BetaAccessBetweenFilter>(
    {
      fromValue: s.optional(s.lazy(() => googleAnalyticsAdminV1BetaNumericValue4Schema)),
      toValue: s.optional(s.lazy(() => googleAnalyticsAdminV1BetaNumericValue1Schema)),
    },
    { additionalProperties: s.json() },
  );
