import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current status of the order. */
export const StatusInstacartConnectPostCheckoutOrdersApi = {
  BrandNew: "brand_new",
  Acknowledged: "acknowledged",
  Picking: "picking",
  Staging: "staging",
  Delivering: "delivering",
  Delivered: "delivered",
  Canceled: "canceled",
} as const;
export type StatusInstacartConnectPostCheckoutOrdersApi =
  | (typeof StatusInstacartConnectPostCheckoutOrdersApi)[keyof typeof StatusInstacartConnectPostCheckoutOrdersApi]
  | (string & {});

export const statusInstacartConnectPostCheckoutOrdersApiSchema: EnumSchema<StatusInstacartConnectPostCheckoutOrdersApi> =
  s.enumOf<StatusInstacartConnectPostCheckoutOrdersApi>(StatusInstacartConnectPostCheckoutOrdersApi);
