import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Request body for updating a folder. All fields are optional; only fields the caller wants to
 * change should be set.
 */
export type UpdateFolderRequest = {
  /** Folder name. */
  name?: string;
  /** Folder description. */
  description?: string;
  /**
   * Identifier of the new parent folder. Use "root" to move the folder to the top level. If a
   * sibling at the new parent has the same name, the folder is auto-renamed (e.g. "Foo" → "Foo
   * (1)").
   *
   * @default "root"
   */
  parentFolderId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateFolderRequestSchema: Schema<UpdateFolderRequest> = s.object<UpdateFolderRequest>(
  {
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    parentFolderId: s.defaulted(s.string(), "root"),
  },
  { additionalProperties: s.json() },
);
