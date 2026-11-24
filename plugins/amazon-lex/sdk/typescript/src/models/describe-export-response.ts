import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  exportResourceSpecificationSchema,
  type ExportResourceSpecification,
} from "./export-resource-specification.js";
import { exportStatus2Schema, type ExportStatus2 } from "./export-status2.js";
import { fileFormat2Schema, type FileFormat2 } from "./file-format2.js";

export type DescribeExportResponse = {
  /** The unique identifier of the described export. */
  exportId?: string;
  resourceSpecification?: ExportResourceSpecification;
  /** The file format used in the files that describe the resource. */
  fileFormat?: FileFormat2;
  /**
   * The status of the export. When the status is Complete the export archive file is available for
   * download.
   */
  exportStatus?: ExportStatus2;
  /**
   * If the exportStatus is failed, contains one or more reasons why the export could not be
   * completed.
   */
  failureReasons?: string[];
  /**
   * A pre-signed S3 URL that points to the bot or bot locale archive. The URL is only available for
   * 5 minutes after calling the DescribeExport operation.
   */
  downloadUrl?: string;
  /** The date and time that the export was created. */
  creationDateTime?: Date;
  /** The last date and time that the export was updated. */
  lastUpdatedDateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeExportResponseSchema: Schema<DescribeExportResponse> = s.object<DescribeExportResponse>(
  {
    exportId: s.optional(s.string()),
    resourceSpecification: s.optional(s.lazy(() => exportResourceSpecificationSchema)),
    fileFormat: s.optional(s.lazy(() => fileFormat2Schema)),
    exportStatus: s.optional(s.lazy(() => exportStatus2Schema)),
    failureReasons: s.optional(s.array(s.string())),
    downloadUrl: s.optional(s.string()),
    creationDateTime: s.optional(s.dateTime()),
    lastUpdatedDateTime: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
