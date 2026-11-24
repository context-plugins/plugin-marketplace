import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of the report that was run. CODE_COVERAGE A code coverage report. TEST A test report.
 */
export const Type10 = {
  Test: "TEST",
  CodeCoverage: "CODE_COVERAGE",
} as const;
export type Type10 = (typeof Type10)[keyof typeof Type10] | (string & {});

export const type10Schema: EnumSchema<Type10> = s.enumOf<Type10>(Type10);
