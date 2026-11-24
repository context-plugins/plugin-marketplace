import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current status of the item during shopping. */
export const Status1InstacartConnectPostCheckoutOrdersApi = {
  Pending: "pending",
  Found: "found",
  Replaced: "replaced",
  Refunded: "refunded",
  NotFound: "not_found",
} as const;
export type Status1InstacartConnectPostCheckoutOrdersApi =
  | (typeof Status1InstacartConnectPostCheckoutOrdersApi)[keyof typeof Status1InstacartConnectPostCheckoutOrdersApi]
  | (string & {});

export const status1InstacartConnectPostCheckoutOrdersApiSchema: EnumSchema<Status1InstacartConnectPostCheckoutOrdersApi> =
  s.enumOf<Status1InstacartConnectPostCheckoutOrdersApi>(Status1InstacartConnectPostCheckoutOrdersApi);
