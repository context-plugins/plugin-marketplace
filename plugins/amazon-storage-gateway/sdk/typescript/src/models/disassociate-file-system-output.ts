import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DisassociateFileSystemOutput = {
  /** The Amazon Resource Name (ARN) of the deleted file system association. */
  fileSystemAssociationArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const disassociateFileSystemOutputSchema: Schema<DisassociateFileSystemOutput> =
  s.object<DisassociateFileSystemOutput>(
    {
      fileSystemAssociationArn: s.optional(s.string()),
      _keysMap: {
        fileSystemAssociationArn: "FileSystemAssociationARN",
      },
    },
    { additionalProperties: s.json() },
  );
