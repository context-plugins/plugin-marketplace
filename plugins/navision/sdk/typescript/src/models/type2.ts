import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Environment type */
export const Type2 = {
  Production: "Production",
  Sandbox: "Sandbox",
} as const;
export type Type2 = (typeof Type2)[keyof typeof Type2] | (string & {});

export const type2Schema: EnumSchema<Type2> = s.enumOf<Type2>(Type2);
