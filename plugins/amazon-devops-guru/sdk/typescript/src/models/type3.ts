import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of insights you are searching for (REACTIVE or PROACTIVE). */
export const Type3 = {
  Reactive: "REACTIVE",
  Proactive: "PROACTIVE",
} as const;
export type Type3 = (typeof Type3)[keyof typeof Type3] | (string & {});

export const type3Schema: EnumSchema<Type3> = s.enumOf<Type3>(Type3);
