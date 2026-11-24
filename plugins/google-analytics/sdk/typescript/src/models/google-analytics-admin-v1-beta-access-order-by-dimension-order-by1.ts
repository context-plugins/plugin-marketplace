import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { orderTypeSchema, type OrderType } from "./order-type.js";

/** Sorts results by a dimension's values. */
export type GoogleAnalyticsAdminV1BetaAccessOrderByDimensionOrderBy1 = {
  /** A dimension name in the request to order by. */
  dimensionName?: string;
  /** Controls the rule for dimension value ordering. */
  orderType?: OrderType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaAccessOrderByDimensionOrderBy1Schema: Schema<GoogleAnalyticsAdminV1BetaAccessOrderByDimensionOrderBy1> =
  s.object<GoogleAnalyticsAdminV1BetaAccessOrderByDimensionOrderBy1>(
    {
      dimensionName: s.optional(s.string()),
      orderType: s.optional(s.lazy(() => orderTypeSchema)),
    },
    { additionalProperties: s.json() },
  );
