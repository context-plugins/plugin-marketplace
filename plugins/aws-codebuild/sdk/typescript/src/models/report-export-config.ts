import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { exportConfigTypeSchema, type ExportConfigType } from "./export-config-type.js";
import { s3ReportExportConfigSchema, type S3ReportExportConfig } from "./s3-report-export-config.js";

export type ReportExportConfig = {
  /**
   * The export configuration type. Valid values are: S3: The report results are exported to an S3
   * bucket. NO_EXPORT: The report results are not exported.
   */
  exportConfigType?: ExportConfigType;
  s3Destination?: S3ReportExportConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reportExportConfigSchema: Schema<ReportExportConfig> = s.object<ReportExportConfig>(
  {
    exportConfigType: s.optional(s.lazy(() => exportConfigTypeSchema)),
    s3Destination: s.optional(s.lazy(() => s3ReportExportConfigSchema)),
  },
  { additionalProperties: s.json() },
);
