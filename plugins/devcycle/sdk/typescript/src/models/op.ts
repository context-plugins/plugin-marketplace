import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Op = {
  AddFilterValues: "addFilterValues",
  RemoveFilterValues: "removeFilterValues",
} as const;
export type Op = (typeof Op)[keyof typeof Op] | (string & {});

export const opSchema: EnumSchema<Op> = s.enumOf<Op>(Op);
