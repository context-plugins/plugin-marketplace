import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  exportResourceSpecificationSchema,
  type ExportResourceSpecification,
} from "./export-resource-specification.js";
import { exportStatusSchema, type ExportStatus } from "./export-status.js";
import { fileFormat1Schema, type FileFormat1 } from "./file-format1.js";

export type CreateExportResponse = {
  /** An identifier for a specific request to create an export. */
  exportId?: string;
  resourceSpecification?: ExportResourceSpecification;
  /** The file format used for the bot or bot locale definition files. */
  fileFormat?: FileFormat1;
  /**
   * The status of the export. When the status is Completed, you can use the DescribeExport
   * operation to get the pre-signed S3 URL link to your exported bot or bot locale.
   */
  exportStatus?: ExportStatus;
  /** The date and time that the request to export a bot was created. */
  creationDateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createExportResponseSchema: Schema<CreateExportResponse> = s.object<CreateExportResponse>(
  {
    exportId: s.optional(s.string()),
    resourceSpecification: s.optional(s.lazy(() => exportResourceSpecificationSchema)),
    fileFormat: s.optional(s.lazy(() => fileFormat1Schema)),
    exportStatus: s.optional(s.lazy(() => exportStatusSchema)),
    creationDateTime: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
