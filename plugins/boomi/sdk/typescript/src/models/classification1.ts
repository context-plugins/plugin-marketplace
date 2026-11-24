import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Whether this is a production or test environment. */
export const Classification1 = {
  Production: "PRODUCTION",
  Test: "TEST",
} as const;
export type Classification1 = (typeof Classification1)[keyof typeof Classification1] | (string & {});

export const classification1Schema: EnumSchema<Classification1> = s.enumOf<Classification1>(Classification1);
