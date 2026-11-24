import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleAnalyticsAdminV1BetaAccessFilterExpressionSchema,
  type GoogleAnalyticsAdminV1BetaAccessFilterExpression,
} from "./google-analytics-admin-v1-beta-access-filter-expression.js";

/** Each of the FilterExpressions in the or_group has an OR relationship. */
export type GoogleAnalyticsAdminV1BetaAccessFilterExpressionList3 = {
  /** A list of filter expressions. */
  expressions?: GoogleAnalyticsAdminV1BetaAccessFilterExpression[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaAccessFilterExpressionList3Schema: Schema<GoogleAnalyticsAdminV1BetaAccessFilterExpressionList3> =
  s.object<GoogleAnalyticsAdminV1BetaAccessFilterExpressionList3>(
    {
      expressions: s.optional(s.array(s.lazy(() => googleAnalyticsAdminV1BetaAccessFilterExpressionSchema))),
    },
    { additionalProperties: s.json() },
  );
