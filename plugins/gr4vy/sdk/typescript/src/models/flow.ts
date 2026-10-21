import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Flow = {
  Checkout: "checkout",
  CardTransaction: "card-transaction",
  NonCardTransaction: "non-card-transaction",
  RedirectTransaction: "redirect-transaction",
} as const;
export type Flow = (typeof Flow)[keyof typeof Flow] | (string & {});

export const flowSchema: EnumSchema<Flow> = s.enumOf<Flow>(Flow);
