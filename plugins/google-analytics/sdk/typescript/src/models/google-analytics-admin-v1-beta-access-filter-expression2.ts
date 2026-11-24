import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleAnalyticsAdminV1BetaAccessFilterExpressionList1Schema,
  type GoogleAnalyticsAdminV1BetaAccessFilterExpressionList1,
} from "./google-analytics-admin-v1-beta-access-filter-expression-list1.js";
import {
  googleAnalyticsAdminV1BetaAccessFilterExpressionList3Schema,
  type GoogleAnalyticsAdminV1BetaAccessFilterExpressionList3,
} from "./google-analytics-admin-v1-beta-access-filter-expression-list3.js";
import {
  googleAnalyticsAdminV1BetaAccessFilter2Schema,
  type GoogleAnalyticsAdminV1BetaAccessFilter2,
} from "./google-analytics-admin-v1-beta-access-filter2.js";

/** The FilterExpression is NOT of not_expression. */
export type GoogleAnalyticsAdminV1BetaAccessFilterExpression2 = {
  /**
   * A primitive filter. In the same FilterExpression, all of the filter's field names need to be
   * either all dimensions or all metrics.
   */
  accessFilter?: GoogleAnalyticsAdminV1BetaAccessFilter2;
  /** Each of the FilterExpressions in the or_group has an OR relationship. */
  orGroup?: GoogleAnalyticsAdminV1BetaAccessFilterExpressionList3;
  /** Each of the FilterExpressions in the and_group has an AND relationship. */
  andGroup?: GoogleAnalyticsAdminV1BetaAccessFilterExpressionList1;
  /** The FilterExpression is NOT of not_expression. */
  notExpression?: GoogleAnalyticsAdminV1BetaAccessFilterExpression2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaAccessFilterExpression2Schema: Schema<GoogleAnalyticsAdminV1BetaAccessFilterExpression2> =
  s.object<GoogleAnalyticsAdminV1BetaAccessFilterExpression2>(
    {
      accessFilter: s.optional(s.lazy(() => googleAnalyticsAdminV1BetaAccessFilter2Schema)),
      orGroup: s.optional(s.lazy(() => googleAnalyticsAdminV1BetaAccessFilterExpressionList3Schema)),
      andGroup: s.optional(s.lazy(() => googleAnalyticsAdminV1BetaAccessFilterExpressionList1Schema)),
      notExpression: s.optional(s.lazy(() => googleAnalyticsAdminV1BetaAccessFilterExpression2Schema)),
    },
    { additionalProperties: s.json() },
  );
