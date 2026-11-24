import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleAnalyticsAdminV1BetaNumericValue2Schema,
  type GoogleAnalyticsAdminV1BetaNumericValue2,
} from "./google-analytics-admin-v1-beta-numeric-value2.js";
import { operationSchema, type Operation } from "./operation.js";

/** Filters for numeric or date values. */
export type GoogleAnalyticsAdminV1BetaAccessNumericFilter = {
  /** The operation type for this filter. */
  operation?: Operation;
  /** A numeric value or a date value. */
  value?: GoogleAnalyticsAdminV1BetaNumericValue2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaAccessNumericFilterSchema: Schema<GoogleAnalyticsAdminV1BetaAccessNumericFilter> =
  s.object<GoogleAnalyticsAdminV1BetaAccessNumericFilter>(
    {
      operation: s.optional(s.lazy(() => operationSchema)),
      value: s.optional(s.lazy(() => googleAnalyticsAdminV1BetaNumericValue2Schema)),
    },
    { additionalProperties: s.json() },
  );
