import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Type of order. It can be one of the following MARKET refers to market order LIMIT refers to Limit
 * Order SL refers to Stop Loss Limit SL-M refers to Stop Loss Market
 */
export const OrderTypeOpenApiDefinitionOrderApi = {
  Market: "MARKET",
  Limit: "LIMIT",
  Sl: "SL",
  SlM: "SL-M",
} as const;
export type OrderTypeOpenApiDefinitionOrderApi =
  | (typeof OrderTypeOpenApiDefinitionOrderApi)[keyof typeof OrderTypeOpenApiDefinitionOrderApi]
  | (string & {});

export const orderTypeOpenApiDefinitionOrderApiSchema: EnumSchema<OrderTypeOpenApiDefinitionOrderApi> =
  s.enumOf<OrderTypeOpenApiDefinitionOrderApi>(OrderTypeOpenApiDefinitionOrderApi);
