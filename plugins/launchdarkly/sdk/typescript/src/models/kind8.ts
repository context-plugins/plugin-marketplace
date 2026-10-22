import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Kind of feature flag */
export const Kind8 = {
  Boolean: "boolean",
  Multivariate: "multivariate",
} as const;
export type Kind8 = (typeof Kind8)[keyof typeof Kind8] | (string & {});

export const kind8Schema: EnumSchema<Kind8> = s.enumOf<Kind8>(Kind8);
