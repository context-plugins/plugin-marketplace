import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type3 = {
  Invoice: "invoice",
  Link: "link",
} as const;
export type Type3 = (typeof Type3)[keyof typeof Type3] | (string & {});

export const type3Schema: EnumSchema<Type3> = s.enumOf<Type3>(Type3);
