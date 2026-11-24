import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ReportDate = string;

export const reportDateSchema: Schema<ReportDate> = s.of<ReportDate>(s.union([s.string()]));
