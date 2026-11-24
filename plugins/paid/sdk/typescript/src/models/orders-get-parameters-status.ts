import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OrdersGetParametersStatus = {
  Draft: "draft",
  Paused: "paused",
  Active: "active",
  Ended: "ended",
} as const;
export type OrdersGetParametersStatus =
  | (typeof OrdersGetParametersStatus)[keyof typeof OrdersGetParametersStatus]
  | (string & {});

export const ordersGetParametersStatusSchema: EnumSchema<OrdersGetParametersStatus> =
  s.enumOf<OrdersGetParametersStatus>(OrdersGetParametersStatus);
