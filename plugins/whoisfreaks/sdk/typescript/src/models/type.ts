import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type = {
  A: "a",
  Mx: "mx",
  Cname: "cname",
  Ns: "ns",
  Aaaa: "aaaa",
  Txt: "txt",
  Soa: "soa",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
