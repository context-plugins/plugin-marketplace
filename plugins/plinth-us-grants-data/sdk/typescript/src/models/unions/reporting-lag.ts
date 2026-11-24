import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Why a figure is dated to a fiscal year rather than to today. */
export type ReportingLag = string;

export const reportingLagSchema: Schema<ReportingLag> = s.of<ReportingLag>(s.union([s.string()]));
