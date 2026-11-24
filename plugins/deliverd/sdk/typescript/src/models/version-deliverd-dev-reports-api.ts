import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { scanStatusSchema, type ScanStatus } from "./scan-status.js";

export type VersionDeliverdDevReportsApi = {
  id: string;
  versionNumber: number;
  scanStatus: ScanStatus;
  sizeBytes: number;
  fileCount: number;
  sourceTool: string | null;
  createdByLabel: string | null;
  changeSummary: string | null;
  createdAt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const versionDeliverdDevReportsApiSchema: Schema<VersionDeliverdDevReportsApi> =
  s.object<VersionDeliverdDevReportsApi>(
    {
      id: s.string(),
      versionNumber: s.float64(),
      scanStatus: scanStatusSchema,
      sizeBytes: s.float64(),
      fileCount: s.float64(),
      sourceTool: s.nullable(s.string()),
      createdByLabel: s.nullable(s.string()),
      changeSummary: s.nullable(s.string()),
      createdAt: s.string(),
    },
    { additionalProperties: s.json() },
  );
