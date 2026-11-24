import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Request body for creating a folder. */
export type CreateFolderRequest = {
  /** Folder name. */
  name: string;
  /** Folder description. */
  description?: string;
  /**
   * Identifier of the parent folder. Use "root" or omit to place the folder at the top level.
   *
   * @default "root"
   */
  parentFolderId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createFolderRequestSchema: Schema<CreateFolderRequest> = s.object<CreateFolderRequest>(
  {
    name: s.string(),
    description: s.optional(s.string()),
    parentFolderId: s.defaulted(s.string(), "root"),
  },
  { additionalProperties: s.json() },
);
