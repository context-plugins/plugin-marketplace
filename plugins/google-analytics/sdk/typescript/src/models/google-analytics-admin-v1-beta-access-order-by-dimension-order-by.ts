import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { orderTypeSchema, type OrderType } from "./order-type.js";

/** Sorts by dimension values. */
export type GoogleAnalyticsAdminV1BetaAccessOrderByDimensionOrderBy = {
  /** A dimension name in the request to order by. */
  dimensionName?: string;
  /** Controls the rule for dimension value ordering. */
  orderType?: OrderType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaAccessOrderByDimensionOrderBySchema: Schema<GoogleAnalyticsAdminV1BetaAccessOrderByDimensionOrderBy> =
  s.object<GoogleAnalyticsAdminV1BetaAccessOrderByDimensionOrderBy>(
    {
      dimensionName: s.optional(s.string()),
      orderType: s.optional(s.lazy(() => orderTypeSchema)),
    },
    { additionalProperties: s.json() },
  );
