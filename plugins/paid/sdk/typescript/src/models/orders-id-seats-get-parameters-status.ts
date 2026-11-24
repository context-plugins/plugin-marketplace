import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OrdersIdSeatsGetParametersStatus = {
  Assigned: "assigned",
  Unassigned: "unassigned",
} as const;
export type OrdersIdSeatsGetParametersStatus =
  | (typeof OrdersIdSeatsGetParametersStatus)[keyof typeof OrdersIdSeatsGetParametersStatus]
  | (string & {});

export const ordersIdSeatsGetParametersStatusSchema: EnumSchema<OrdersIdSeatsGetParametersStatus> =
  s.enumOf<OrdersIdSeatsGetParametersStatus>(OrdersIdSeatsGetParametersStatus);
