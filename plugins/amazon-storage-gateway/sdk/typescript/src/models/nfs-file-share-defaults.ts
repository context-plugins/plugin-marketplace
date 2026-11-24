import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type NfsFileShareDefaults = {
  /**
   * The Unix file mode in the form "nnnn". For example, 0666 represents the default file mode
   * inside the file share. The default value is 0666.
   */
  fileMode?: string;
  /**
   * The Unix directory mode in the form "nnnn". For example, 0666 represents the default access
   * mode for all directories inside the file share. The default value is 0777.
   */
  directoryMode?: string;
  /**
   * The default group ID for the file share (unless the files have another group ID specified). The
   * default value is nfsnobody.
   */
  groupId?: number;
  /**
   * The default owner ID for files in the file share (unless the files have another owner ID
   * specified). The default value is nfsnobody.
   */
  ownerId?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const nfsFileShareDefaultsSchema: Schema<NfsFileShareDefaults> = s.object<NfsFileShareDefaults>(
  {
    fileMode: s.optional(s.string()),
    directoryMode: s.optional(s.string()),
    groupId: s.optional(s.int()),
    ownerId: s.optional(s.int()),
    _keysMap: {
      fileMode: "FileMode",
      directoryMode: "DirectoryMode",
      groupId: "GroupId",
      ownerId: "OwnerId",
    },
  },
  { additionalProperties: s.json() },
);
