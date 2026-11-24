import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FileSystemAssociationSummary = {
  /** The ID of the file system association. */
  fileSystemAssociationId?: string;
  /** The Amazon Resource Name (ARN) of the file system association. */
  fileSystemAssociationArn?: string;
  /**
   * The status of the file share. Valid Values: AVAILABLE | CREATING | DELETING | FORCE_DELETING |
   * UPDATING | ERROR
   */
  fileSystemAssociationStatus?: string;
  gatewayArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fileSystemAssociationSummarySchema: Schema<FileSystemAssociationSummary> =
  s.object<FileSystemAssociationSummary>(
    {
      fileSystemAssociationId: s.optional(s.string()),
      fileSystemAssociationArn: s.optional(s.string()),
      fileSystemAssociationStatus: s.optional(s.string()),
      gatewayArn: s.optional(s.string()),
      _keysMap: {
        fileSystemAssociationId: "FileSystemAssociationId",
        fileSystemAssociationArn: "FileSystemAssociationARN",
        fileSystemAssociationStatus: "FileSystemAssociationStatus",
        gatewayArn: "GatewayARN",
      },
    },
    { additionalProperties: s.json() },
  );
