import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DisassociateFileSystemInput = {
  /** The Amazon Resource Name (ARN) of the file system association to be deleted. */
  fileSystemAssociationArn: string;
  /**
   * If this value is set to true, the operation disassociates an Amazon FSx file system
   * immediately. It ends all data uploads to the file system, and the file system association
   * enters the FORCE_DELETING status. If this value is set to false, the Amazon FSx file system
   * does not disassociate until all data is uploaded.
   */
  forceDelete?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const disassociateFileSystemInputSchema: Schema<DisassociateFileSystemInput> =
  s.object<DisassociateFileSystemInput>(
    {
      fileSystemAssociationArn: s.string(),
      forceDelete: s.optional(s.boolean()),
      _keysMap: {
        fileSystemAssociationArn: "FileSystemAssociationARN",
        forceDelete: "ForceDelete",
      },
    },
    { additionalProperties: s.json() },
  );
