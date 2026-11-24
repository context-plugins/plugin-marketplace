import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of report group. */
export const Type11 = {
  Test: "TEST",
  CodeCoverage: "CODE_COVERAGE",
} as const;
export type Type11 = (typeof Type11)[keyof typeof Type11] | (string & {});

export const type11Schema: EnumSchema<Type11> = s.enumOf<Type11>(Type11);
