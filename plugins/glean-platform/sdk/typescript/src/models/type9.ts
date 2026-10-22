import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Inherited department policy. */
export const Type9 = {
  Department: "DEPARTMENT",
} as const;
export type Type9 = (typeof Type9)[keyof typeof Type9] | (string & {});

export const type9Schema: EnumSchema<Type9> = s.enumOf<Type9>(Type9);
