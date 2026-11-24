import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IsGs1 = {
  On: "on",
  Off: "off",
  Both: "both",
} as const;
export type IsGs1 = (typeof IsGs1)[keyof typeof IsGs1] | (string & {});

export const isGs1Schema: EnumSchema<IsGs1> = s.enumOf<IsGs1>(IsGs1);
