import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleAnalyticsAdminV1BetaAccessFilterExpressionSchema,
  type GoogleAnalyticsAdminV1BetaAccessFilterExpression,
} from "./google-analytics-admin-v1-beta-access-filter-expression.js";

/** A list of filter expressions. */
export type GoogleAnalyticsAdminV1BetaAccessFilterExpressionList = {
  /** A list of filter expressions. */
  expressions?: GoogleAnalyticsAdminV1BetaAccessFilterExpression[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaAccessFilterExpressionListSchema: Schema<GoogleAnalyticsAdminV1BetaAccessFilterExpressionList> =
  s.object<GoogleAnalyticsAdminV1BetaAccessFilterExpressionList>(
    {
      expressions: s.optional(s.array(s.lazy(() => googleAnalyticsAdminV1BetaAccessFilterExpressionSchema))),
    },
    { additionalProperties: s.json() },
  );
