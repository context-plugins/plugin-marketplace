import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleAnalyticsAdminV1BetaAccessBetweenFilter2Schema,
  type GoogleAnalyticsAdminV1BetaAccessBetweenFilter2,
} from "./google-analytics-admin-v1-beta-access-between-filter2.js";
import {
  googleAnalyticsAdminV1BetaAccessInListFilter1Schema,
  type GoogleAnalyticsAdminV1BetaAccessInListFilter1,
} from "./google-analytics-admin-v1-beta-access-in-list-filter1.js";
import {
  googleAnalyticsAdminV1BetaAccessNumericFilter2Schema,
  type GoogleAnalyticsAdminV1BetaAccessNumericFilter2,
} from "./google-analytics-admin-v1-beta-access-numeric-filter2.js";
import {
  googleAnalyticsAdminV1BetaAccessStringFilter2Schema,
  type GoogleAnalyticsAdminV1BetaAccessStringFilter2,
} from "./google-analytics-admin-v1-beta-access-string-filter2.js";

/**
 * A primitive filter. In the same FilterExpression, all of the filter's field names need to be
 * either all dimensions or all metrics.
 */
export type GoogleAnalyticsAdminV1BetaAccessFilter2 = {
  /** A filter for two values. */
  betweenFilter?: GoogleAnalyticsAdminV1BetaAccessBetweenFilter2;
  /** A filter for numeric or date values. */
  numericFilter?: GoogleAnalyticsAdminV1BetaAccessNumericFilter2;
  /** A filter for in list values. */
  inListFilter?: GoogleAnalyticsAdminV1BetaAccessInListFilter1;
  /** The dimension name or metric name. */
  fieldName?: string;
  /** Strings related filter. */
  stringFilter?: GoogleAnalyticsAdminV1BetaAccessStringFilter2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaAccessFilter2Schema: Schema<GoogleAnalyticsAdminV1BetaAccessFilter2> =
  s.object<GoogleAnalyticsAdminV1BetaAccessFilter2>(
    {
      betweenFilter: s.optional(s.lazy(() => googleAnalyticsAdminV1BetaAccessBetweenFilter2Schema)),
      numericFilter: s.optional(s.lazy(() => googleAnalyticsAdminV1BetaAccessNumericFilter2Schema)),
      inListFilter: s.optional(s.lazy(() => googleAnalyticsAdminV1BetaAccessInListFilter1Schema)),
      fieldName: s.optional(s.string()),
      stringFilter: s.optional(s.lazy(() => googleAnalyticsAdminV1BetaAccessStringFilter2Schema)),
    },
    { additionalProperties: s.json() },
  );
