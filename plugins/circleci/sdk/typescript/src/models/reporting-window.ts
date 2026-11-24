import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ReportingWindow = {
  Last7Days: "last-7-days",
  Last30Days: "last-30-days",
  Last60Days: "last-60-days",
  Last90Days: "last-90-days",
} as const;
export type ReportingWindow = (typeof ReportingWindow)[keyof typeof ReportingWindow] | (string & {});

export const reportingWindowSchema: EnumSchema<ReportingWindow> = s.enumOf<ReportingWindow>(ReportingWindow);
