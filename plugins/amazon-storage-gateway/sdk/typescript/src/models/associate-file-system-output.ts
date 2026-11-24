import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AssociateFileSystemOutput = {
  /** The ARN of the newly created file system association. */
  fileSystemAssociationArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const associateFileSystemOutputSchema: Schema<AssociateFileSystemOutput> =
  s.object<AssociateFileSystemOutput>(
    {
      fileSystemAssociationArn: s.optional(s.string()),
      _keysMap: {
        fileSystemAssociationArn: "FileSystemAssociationARN",
      },
    },
    { additionalProperties: s.json() },
  );
