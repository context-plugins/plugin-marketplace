import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OrderLineType = {
  Standard: "STANDARD",
  ProrationCredit: "PRORATION_CREDIT",
  ProrationCharge: "PRORATION_CHARGE",
  Credit: "CREDIT",
} as const;
export type OrderLineType = (typeof OrderLineType)[keyof typeof OrderLineType] | (string & {});

export const orderLineTypeSchema: EnumSchema<OrderLineType> = s.enumOf<OrderLineType>(OrderLineType);
