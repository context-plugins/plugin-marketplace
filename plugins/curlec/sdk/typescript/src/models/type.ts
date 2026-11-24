import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** invoice: a formal invoice document. link: a payment page / payment link. */
export const Type = {
  Invoice: "invoice",
  Link: "link",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
