import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Sort3 = {
  Newest: "newest",
} as const;
export type Sort3 = (typeof Sort3)[keyof typeof Sort3] | (string & {});

export const sort3Schema: EnumSchema<Sort3> = s.enumOf<Sort3>(Sort3);
