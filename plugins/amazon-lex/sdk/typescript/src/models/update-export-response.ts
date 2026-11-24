import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  exportResourceSpecificationSchema,
  type ExportResourceSpecification,
} from "./export-resource-specification.js";
import { exportStatus5Schema, type ExportStatus5 } from "./export-status5.js";
import { fileFormat4Schema, type FileFormat4 } from "./file-format4.js";

export type UpdateExportResponse = {
  /** The unique identifier Amazon Lex assigned to the export. */
  exportId?: string;
  resourceSpecification?: ExportResourceSpecification;
  /**
   * The file format used for the files that define the resource. The TSV format is required to
   * export a custom vocabulary only; otherwise use LexJson format.
   */
  fileFormat?: FileFormat4;
  /**
   * The status of the export. When the status is Completed the export archive is available for
   * download.
   */
  exportStatus?: ExportStatus5;
  /** The date and time that the export was created. */
  creationDateTime?: Date;
  /** The date and time that the export was last updated. */
  lastUpdatedDateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateExportResponseSchema: Schema<UpdateExportResponse> = s.object<UpdateExportResponse>(
  {
    exportId: s.optional(s.string()),
    resourceSpecification: s.optional(s.lazy(() => exportResourceSpecificationSchema)),
    fileFormat: s.optional(s.lazy(() => fileFormat4Schema)),
    exportStatus: s.optional(s.lazy(() => exportStatus5Schema)),
    creationDateTime: s.optional(s.dateTime()),
    lastUpdatedDateTime: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
