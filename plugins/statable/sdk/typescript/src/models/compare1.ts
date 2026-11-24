import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Compare1 = {
  PreviousPeriod: "previous_period",
} as const;
export type Compare1 = (typeof Compare1)[keyof typeof Compare1] | (string & {});

export const compare1Schema: EnumSchema<Compare1> = s.enumOf<Compare1>(Compare1);
