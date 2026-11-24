import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeFileSystemAssociationsInput = {
  /**
   * An array containing the Amazon Resource Name (ARN) of each file system association to be
   * described.
   */
  fileSystemAssociationArnList: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeFileSystemAssociationsInputSchema: Schema<DescribeFileSystemAssociationsInput> =
  s.object<DescribeFileSystemAssociationsInput>(
    {
      fileSystemAssociationArnList: s.array(s.string()),
      _keysMap: {
        fileSystemAssociationArnList: "FileSystemAssociationARNList",
      },
    },
    { additionalProperties: s.json() },
  );
