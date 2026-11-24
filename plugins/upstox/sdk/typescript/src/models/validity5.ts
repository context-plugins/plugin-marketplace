import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Order validity (DAY- Day and IOC- Immediate or Cancel (IOC) order) */
export const Validity5 = {
  Day: "DAY",
  Ioc: "IOC",
} as const;
export type Validity5 = (typeof Validity5)[keyof typeof Validity5] | (string & {});

export const validity5Schema: EnumSchema<Validity5> = s.enumOf<Validity5>(Validity5);
