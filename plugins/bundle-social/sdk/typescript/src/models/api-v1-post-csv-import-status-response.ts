import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusBundleSocialPostCsvApiSchema,
  type StatusBundleSocialPostCsvApi,
} from "./status-bundle-social-post-csv-api.js";

export type ApiV1PostCsvImportStatusResponse = {
  id: string;
  status: StatusBundleSocialPostCsvApi;
  totalRows: number;
  processedRows: number;
  successRows: number;
  failedRows: number;
  error?: string | null;
  startedAt?: Date | null;
  completedAt?: Date | null;
  updatedAt: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1PostCsvImportStatusResponseSchema: Schema<ApiV1PostCsvImportStatusResponse> =
  s.object<ApiV1PostCsvImportStatusResponse>(
    {
      id: s.string(),
      status: statusBundleSocialPostCsvApiSchema,
      totalRows: s.float64(),
      processedRows: s.float64(),
      successRows: s.float64(),
      failedRows: s.float64(),
      error: s.optionalNullable(s.string()),
      startedAt: s.optionalNullable(s.dateTime()),
      completedAt: s.optionalNullable(s.dateTime()),
      updatedAt: s.nullable(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
