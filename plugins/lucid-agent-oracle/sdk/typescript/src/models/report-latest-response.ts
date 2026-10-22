import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { report1Schema, type Report1 } from "./unions/report1.js";

export type ReportLatestResponse = {
  report: Report1;
};

export const reportLatestResponseSchema: Schema<ReportLatestResponse> = s.object<ReportLatestResponse>({
  report: report1Schema,
});
