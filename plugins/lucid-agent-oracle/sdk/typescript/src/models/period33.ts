import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Period33 = {
  _90D: "90d",
} as const;
export type Period33 = (typeof Period33)[keyof typeof Period33] | (string & {});

export const period33Schema: EnumSchema<Period33> = s.enumOf<Period33>(Period33);
