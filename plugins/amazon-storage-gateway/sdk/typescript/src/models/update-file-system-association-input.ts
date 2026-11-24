import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cacheAttributesSchema, type CacheAttributes } from "./cache-attributes.js";

export type UpdateFileSystemAssociationInput = {
  /** The Amazon Resource Name (ARN) of the file system association that you want to update. */
  fileSystemAssociationArn: string;
  /**
   * The user name of the user credential that has permission to access the root share D$ of the
   * Amazon FSx file system. The user account must belong to the Amazon FSx delegated admin user
   * group.
   */
  userName?: string;
  /** The password of the user credential. */
  password?: string;
  /** The Amazon Resource Name (ARN) of the storage used for the audit logs. */
  auditDestinationArn?: string;
  cacheAttributes?: CacheAttributes;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateFileSystemAssociationInputSchema: Schema<UpdateFileSystemAssociationInput> =
  s.object<UpdateFileSystemAssociationInput>(
    {
      fileSystemAssociationArn: s.string(),
      userName: s.optional(s.string()),
      password: s.optional(s.string()),
      auditDestinationArn: s.optional(s.string()),
      cacheAttributes: s.optional(s.lazy(() => cacheAttributesSchema)),
      _keysMap: {
        fileSystemAssociationArn: "FileSystemAssociationARN",
        userName: "UserName",
        password: "Password",
        auditDestinationArn: "AuditDestinationARN",
        cacheAttributes: "CacheAttributes",
      },
    },
    { additionalProperties: s.json() },
  );
