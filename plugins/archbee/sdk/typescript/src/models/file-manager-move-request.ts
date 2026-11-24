import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FileManagerMoveRequest = {
  /** Id of the file or folder to move. */
  fileId: string;
  /** Destination folder id, or null for the root. */
  newParentId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fileManagerMoveRequestSchema: Schema<FileManagerMoveRequest> = s.object<FileManagerMoveRequest>(
  {
    fileId: s.string(),
    newParentId: s.string(),
  },
  { additionalProperties: s.json() },
);
