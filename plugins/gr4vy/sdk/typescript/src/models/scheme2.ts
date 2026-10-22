import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Always `sepa`. */
export const Scheme2 = {
  Sepa: "sepa",
} as const;
export type Scheme2 = (typeof Scheme2)[keyof typeof Scheme2] | (string & {});

export const scheme2Schema: EnumSchema<Scheme2> = s.enumOf<Scheme2>(Scheme2);
