import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FileManagerFileRequest = {
  /** Id of the file or folder to delete. */
  fileId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fileManagerFileRequestSchema: Schema<FileManagerFileRequest> = s.object<FileManagerFileRequest>(
  {
    fileId: s.string(),
  },
  { additionalProperties: s.json() },
);
