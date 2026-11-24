import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type = {
  Du: "DU",
  Gu: "GU",
  Site: "SITE",
  Parent: "PARENT",
  Hq: "HQ",
  Su: "SU",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
