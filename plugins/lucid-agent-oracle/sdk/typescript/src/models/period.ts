import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Period = {
  _1D: "1d",
} as const;
export type Period = (typeof Period)[keyof typeof Period] | (string & {});

export const periodSchema: EnumSchema<Period> = s.enumOf<Period>(Period);
