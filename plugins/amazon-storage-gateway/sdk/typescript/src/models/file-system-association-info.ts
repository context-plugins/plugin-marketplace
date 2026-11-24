import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cacheAttributesSchema, type CacheAttributes } from "./cache-attributes.js";
import {
  endpointNetworkConfigurationSchema,
  type EndpointNetworkConfiguration,
} from "./endpoint-network-configuration.js";
import {
  fileSystemAssociationStatusDetailSchema,
  type FileSystemAssociationStatusDetail,
} from "./file-system-association-status-detail.js";
import { tagSchema, type Tag } from "./tag.js";

export type FileSystemAssociationInfo = {
  /** The Amazon Resource Name (ARN) of the file system association. */
  fileSystemAssociationArn?: string;
  /**
   * The ARN of the backend Amazon FSx file system used for storing file data. For information, see
   * FileSystem in the Amazon FSx API Reference.
   */
  locationArn?: string;
  /**
   * The status of the file system association. Valid Values: AVAILABLE | CREATING | DELETING |
   * FORCE_DELETING | UPDATING | ERROR
   */
  fileSystemAssociationStatus?: string;
  /** The Amazon Resource Name (ARN) of the storage used for the audit logs. */
  auditDestinationArn?: string;
  gatewayArn?: string;
  /**
   * A list of up to 50 tags assigned to the SMB file share, sorted alphabetically by key name. Each
   * tag is a key-value pair.
   */
  tags?: Tag[];
  cacheAttributes?: CacheAttributes;
  endpointNetworkConfiguration?: EndpointNetworkConfiguration;
  /**
   * An array containing the FileSystemAssociationStatusDetail data type, which provides detailed
   * information on file system association status.
   */
  fileSystemAssociationStatusDetails?: FileSystemAssociationStatusDetail[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fileSystemAssociationInfoSchema: Schema<FileSystemAssociationInfo> =
  s.object<FileSystemAssociationInfo>(
    {
      fileSystemAssociationArn: s.optional(s.string()),
      locationArn: s.optional(s.string()),
      fileSystemAssociationStatus: s.optional(s.string()),
      auditDestinationArn: s.optional(s.string()),
      gatewayArn: s.optional(s.string()),
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      cacheAttributes: s.optional(s.lazy(() => cacheAttributesSchema)),
      endpointNetworkConfiguration: s.optional(s.lazy(() => endpointNetworkConfigurationSchema)),
      fileSystemAssociationStatusDetails: s.optional(
        s.array(s.lazy(() => fileSystemAssociationStatusDetailSchema)),
      ),
      _keysMap: {
        fileSystemAssociationArn: "FileSystemAssociationARN",
        locationArn: "LocationARN",
        fileSystemAssociationStatus: "FileSystemAssociationStatus",
        auditDestinationArn: "AuditDestinationARN",
        gatewayArn: "GatewayARN",
        tags: "Tags",
        cacheAttributes: "CacheAttributes",
        endpointNetworkConfiguration: "EndpointNetworkConfiguration",
        fileSystemAssociationStatusDetails: "FileSystemAssociationStatusDetails",
      },
    },
    { additionalProperties: s.json() },
  );
