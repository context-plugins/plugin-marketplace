import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Order validity (DAY- Day and IOC- Immediate or Cancel (IOC) order) */
export const Validity1 = {
  Day: "DAY",
  Ioc: "IOC",
  Eos: "EOS",
} as const;
export type Validity1 = (typeof Validity1)[keyof typeof Validity1] | (string & {});

export const validity1Schema: EnumSchema<Validity1> = s.enumOf<Validity1>(Validity1);
