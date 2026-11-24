import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of the ReportGroup. This can be one of the following values: CODE_COVERAGE The report
 * group contains code coverage reports. TEST The report group contains test reports.
 */
export const Type9 = {
  Test: "TEST",
  CodeCoverage: "CODE_COVERAGE",
} as const;
export type Type9 = (typeof Type9)[keyof typeof Type9] | (string & {});

export const type9Schema: EnumSchema<Type9> = s.enumOf<Type9>(Type9);
