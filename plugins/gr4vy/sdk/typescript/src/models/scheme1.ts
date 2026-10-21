import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Always `bacs`. */
export const Scheme1 = {
  Bacs: "bacs",
} as const;
export type Scheme1 = (typeof Scheme1)[keyof typeof Scheme1] | (string & {});

export const scheme1Schema: EnumSchema<Scheme1> = s.enumOf<Scheme1>(Scheme1);
