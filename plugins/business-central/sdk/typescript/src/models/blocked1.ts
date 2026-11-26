import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Blocked1 = {
  Ship: "Ship",
  Invoice: "Invoice",
  All: "All",
} as const;
export type Blocked1 = (typeof Blocked1)[keyof typeof Blocked1] | (string & {});

export const blocked1Schema: EnumSchema<Blocked1> = s.enumOf<Blocked1>(Blocked1);
