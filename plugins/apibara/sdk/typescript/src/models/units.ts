import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Units = {
  Km: "km",
  Mi: "mi",
} as const;
export type Units = (typeof Units)[keyof typeof Units] | (string & {});

export const unitsSchema: EnumSchema<Units> = s.enumOf<Units>(Units);
