import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Filters the reports by searching their name for (partial) matches. */
export type ReportName = string;

export const reportNameSchema: Schema<ReportName> = s.of<ReportName>(s.union([s.string()]));
