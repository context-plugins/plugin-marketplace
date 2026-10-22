import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FlowAction = {
  SelectPaymentOptions: "select-payment-options",
  RouteTransaction: "route-transaction",
  DeclineEarly: "decline-early",
  Skip3Ds: "skip-3ds",
} as const;
export type FlowAction = (typeof FlowAction)[keyof typeof FlowAction] | (string & {});

export const flowActionSchema: EnumSchema<FlowAction> = s.enumOf<FlowAction>(FlowAction);
