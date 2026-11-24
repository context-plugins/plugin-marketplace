import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  fileSystemAssociationInfoSchema,
  type FileSystemAssociationInfo,
} from "./file-system-association-info.js";

export type DescribeFileSystemAssociationsOutput = {
  /**
   * An array containing the FileSystemAssociationInfo data type of each file system association to
   * be described.
   */
  fileSystemAssociationInfoList?: FileSystemAssociationInfo[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeFileSystemAssociationsOutputSchema: Schema<DescribeFileSystemAssociationsOutput> =
  s.object<DescribeFileSystemAssociationsOutput>(
    {
      fileSystemAssociationInfoList: s.optional(s.array(s.lazy(() => fileSystemAssociationInfoSchema))),
      _keysMap: {
        fileSystemAssociationInfoList: "FileSystemAssociationInfoList",
      },
    },
    { additionalProperties: s.json() },
  );
