import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { apiV1AsrReportResponseSchema, type ApiV1AsrReportResponse } from "../api-v1-asr-report-response.js";
import { errorSchema, type Error } from "../error.js";

export type ApiV1AsrReportResponse1 = Error | ApiV1AsrReportResponse;

export const apiV1AsrReportResponse1Schema: Schema<ApiV1AsrReportResponse1> = s.of<ApiV1AsrReportResponse1>(
  s.union([s.lazy(() => errorSchema), s.lazy(() => apiV1AsrReportResponseSchema)]),
);
