import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Department filter */
export const Department = {
  Any: "any",
  Menswear: "menswear",
  Womenswear: "womenswear",
} as const;
export type Department = (typeof Department)[keyof typeof Department] | (string & {});

export const departmentSchema: EnumSchema<Department> = s.enumOf<Department>(Department);
