import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusBundleSocialPostCsvApiSchema,
  type StatusBundleSocialPostCsvApi,
} from "./status-bundle-social-post-csv-api.js";

export type ItemBundleSocialPostCsvApi = {
  id: string;
  teamId: string;
  organizationId: string;
  status: StatusBundleSocialPostCsvApi;
  fileName: string;
  totalRows: number;
  processedRows: number;
  successRows: number;
  failedRows: number;
  error?: string | null;
  rateLimitResetAt?: Date | null;
  startedAt?: Date | null;
  completedAt?: Date | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const itemBundleSocialPostCsvApiSchema: Schema<ItemBundleSocialPostCsvApi> =
  s.object<ItemBundleSocialPostCsvApi>(
    {
      id: s.string(),
      teamId: s.string(),
      organizationId: s.string(),
      status: statusBundleSocialPostCsvApiSchema,
      fileName: s.string(),
      totalRows: s.float64(),
      processedRows: s.float64(),
      successRows: s.float64(),
      failedRows: s.float64(),
      error: s.optionalNullable(s.string()),
      rateLimitResetAt: s.optionalNullable(s.dateTime()),
      startedAt: s.optionalNullable(s.dateTime()),
      completedAt: s.optionalNullable(s.dateTime()),
      createdAt: s.nullable(s.dateTime()),
      updatedAt: s.nullable(s.dateTime()),
      deletedAt: s.optionalNullable(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
