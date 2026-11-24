import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { exportStatus4Schema, type ExportStatus4 } from "./export-status4.js";
import { exportTypeSchema, type ExportType } from "./export-type.js";
import { resourceType1Schema, type ResourceType1 } from "./resource-type1.js";

export type GetExportResponse = {
  /** The name of the bot being exported. */
  name?: string;
  /** The version of the bot being exported. */
  version?: string;
  /** The type of the exported resource. */
  resourceType?: ResourceType1;
  /** The format of the exported data. */
  exportType?: ExportType;
  /**
   * The status of the export. IN_PROGRESS - The export is in progress. READY - The export is
   * complete. FAILED - The export could not be completed.
   */
  exportStatus?: ExportStatus4;
  /** If status is FAILED, Amazon Lex provides the reason that it failed to export the resource. */
  failureReason?: string;
  /**
   * An S3 pre-signed URL that provides the location of the exported resource. The exported resource
   * is a ZIP archive that contains the exported resource in JSON format. The structure of the
   * archive may change. Your code should not rely on the archive structure.
   */
  url?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getExportResponseSchema: Schema<GetExportResponse> = s.object<GetExportResponse>(
  {
    name: s.optional(s.string()),
    version: s.optional(s.string()),
    resourceType: s.optional(s.lazy(() => resourceType1Schema)),
    exportType: s.optional(s.lazy(() => exportTypeSchema)),
    exportStatus: s.optional(s.lazy(() => exportStatus4Schema)),
    failureReason: s.optional(s.string()),
    url: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
