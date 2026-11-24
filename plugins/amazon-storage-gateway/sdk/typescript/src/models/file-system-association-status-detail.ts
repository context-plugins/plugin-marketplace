import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FileSystemAssociationStatusDetail = {
  /** The error code for a given file system association status. */
  errorCode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fileSystemAssociationStatusDetailSchema: Schema<FileSystemAssociationStatusDetail> =
  s.object<FileSystemAssociationStatusDetail>(
    {
      errorCode: s.optional(s.string()),
      _keysMap: {
        errorCode: "ErrorCode",
      },
    },
    { additionalProperties: s.json() },
  );
