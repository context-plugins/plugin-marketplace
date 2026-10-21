import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Level of ingestion status reporting. Defaults to FailuresOnly. */
export const ReportLevel = {
  FailuresOnly: "failuresOnly",
  DoNotReport: "doNotReport",
  FailuresAndSuccesses: "failuresAndSuccesses",
} as const;
export type ReportLevel = (typeof ReportLevel)[keyof typeof ReportLevel] | (string & {});

export const reportLevelSchema: EnumSchema<ReportLevel> = s.enumOf<ReportLevel>(ReportLevel);
