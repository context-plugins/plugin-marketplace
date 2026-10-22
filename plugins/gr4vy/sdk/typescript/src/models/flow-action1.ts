import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The action that was triggered. */
export const FlowAction1 = {
  SelectPaymentOptions: "select-payment-options",
  RouteTransaction: "route-transaction",
  DeclineEarly: "decline-early",
  Skip3Ds: "skip-3ds",
} as const;
export type FlowAction1 = (typeof FlowAction1)[keyof typeof FlowAction1] | (string & {});

export const flowAction1Schema: EnumSchema<FlowAction1> = s.enumOf<FlowAction1>(FlowAction1);
