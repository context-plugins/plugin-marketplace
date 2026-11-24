import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateExportRequest = {
  /** The unique identifier Amazon Lex assigned to the export. */
  exportId: string;
  /** The new password to use to encrypt the export zip archive. */
  filePassword?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateExportRequestSchema: Schema<UpdateExportRequest> = s.object<UpdateExportRequest>(
  {
    exportId: s.string(),
    filePassword: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
