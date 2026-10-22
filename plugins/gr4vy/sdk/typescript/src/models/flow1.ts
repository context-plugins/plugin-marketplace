import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The flow that the action belongs to. */
export const Flow1 = {
  Checkout: "checkout",
  CardTransaction: "card-transaction",
  NonCardTransaction: "non-card-transaction",
  RedirectTransaction: "redirect-transaction",
} as const;
export type Flow1 = (typeof Flow1)[keyof typeof Flow1] | (string & {});

export const flow1Schema: EnumSchema<Flow1> = s.enumOf<Flow1>(Flow1);
