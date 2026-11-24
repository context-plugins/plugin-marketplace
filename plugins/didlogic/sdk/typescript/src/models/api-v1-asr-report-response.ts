import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1AsrReportResponse = {
  error: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1AsrReportResponseSchema: Schema<ApiV1AsrReportResponse> = s.object<ApiV1AsrReportResponse>(
  {
    error: s.string(),
  },
  { additionalProperties: s.json() },
);
