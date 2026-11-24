import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OrdersGetParametersCreationState = {
  Draft: "draft",
  Active: "active",
} as const;
export type OrdersGetParametersCreationState =
  | (typeof OrdersGetParametersCreationState)[keyof typeof OrdersGetParametersCreationState]
  | (string & {});

export const ordersGetParametersCreationStateSchema: EnumSchema<OrdersGetParametersCreationState> =
  s.enumOf<OrdersGetParametersCreationState>(OrdersGetParametersCreationState);
