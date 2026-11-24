import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  exportResourceSpecificationSchema,
  type ExportResourceSpecification,
} from "./export-resource-specification.js";
import { exportStatus3Schema, type ExportStatus3 } from "./export-status3.js";
import { fileFormat3Schema, type FileFormat3 } from "./file-format3.js";

export type ExportSummary = {
  /** The unique identifier that Amazon Lex assigned to the export. */
  exportId?: string;
  resourceSpecification?: ExportResourceSpecification;
  /** The file format used in the export files. */
  fileFormat?: FileFormat3;
  /** The status of the export. When the status is Completed the export is ready to download. */
  exportStatus?: ExportStatus3;
  /** The date and time that the export was created. */
  creationDateTime?: Date;
  /** The date and time that the export was last updated. */
  lastUpdatedDateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const exportSummarySchema: Schema<ExportSummary> = s.object<ExportSummary>(
  {
    exportId: s.optional(s.string()),
    resourceSpecification: s.optional(s.lazy(() => exportResourceSpecificationSchema)),
    fileFormat: s.optional(s.lazy(() => fileFormat3Schema)),
    exportStatus: s.optional(s.lazy(() => exportStatus3Schema)),
    creationDateTime: s.optional(s.dateTime()),
    lastUpdatedDateTime: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
