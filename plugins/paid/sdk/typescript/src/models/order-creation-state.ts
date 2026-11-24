import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OrderCreationState = {
  Draft: "draft",
  Active: "active",
} as const;
export type OrderCreationState = (typeof OrderCreationState)[keyof typeof OrderCreationState] | (string & {});

export const orderCreationStateSchema: EnumSchema<OrderCreationState> =
  s.enumOf<OrderCreationState>(OrderCreationState);
