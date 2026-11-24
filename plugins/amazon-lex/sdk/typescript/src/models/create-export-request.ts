import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  exportResourceSpecificationSchema,
  type ExportResourceSpecification,
} from "./export-resource-specification.js";
import { fileFormatSchema, type FileFormat } from "./file-format.js";

export type CreateExportRequest = {
  resourceSpecification: ExportResourceSpecification;
  /** The file format of the bot or bot locale definition files. */
  fileFormat: FileFormat;
  /**
   * An password to use to encrypt the exported archive. Using a password is optional, but you
   * should encrypt the archive to protect the data in transit between Amazon Lex and your local
   * computer.
   */
  filePassword?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createExportRequestSchema: Schema<CreateExportRequest> = s.object<CreateExportRequest>(
  {
    resourceSpecification: exportResourceSpecificationSchema,
    fileFormat: fileFormatSchema,
    filePassword: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
