import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RcaReportStatusDto = {
  Completed: "completed",
  Partial: "partial",
  Inconclusive: "inconclusive",
  Failed: "failed",
} as const;
export type RcaReportStatusDto = (typeof RcaReportStatusDto)[keyof typeof RcaReportStatusDto] | (string & {});

export const rcaReportStatusDtoSchema: EnumSchema<RcaReportStatusDto> =
  s.enumOf<RcaReportStatusDto>(RcaReportStatusDto);
