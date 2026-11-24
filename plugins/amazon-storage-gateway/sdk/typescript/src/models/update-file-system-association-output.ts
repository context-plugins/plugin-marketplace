import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateFileSystemAssociationOutput = {
  /** The ARN of the updated file system association. */
  fileSystemAssociationArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateFileSystemAssociationOutputSchema: Schema<UpdateFileSystemAssociationOutput> =
  s.object<UpdateFileSystemAssociationOutput>(
    {
      fileSystemAssociationArn: s.optional(s.string()),
      _keysMap: {
        fileSystemAssociationArn: "FileSystemAssociationARN",
      },
    },
    { additionalProperties: s.json() },
  );
