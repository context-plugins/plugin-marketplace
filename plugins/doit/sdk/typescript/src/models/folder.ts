import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A Cloud Analytics folder. */
export type Folder = {
  /** Folder ID. */
  id?: string;
  /** Folder name. */
  name?: string;
  /** Folder description. */
  description?: string;
  /**
   * Identifier of the parent folder. Set to "root" if the folder is at the top level.
   *
   * @default "root"
   */
  parentFolderId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const folderSchema: Schema<Folder> = s.object<Folder>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    parentFolderId: s.defaulted(s.string(), "root"),
  },
  { additionalProperties: s.json() },
);
