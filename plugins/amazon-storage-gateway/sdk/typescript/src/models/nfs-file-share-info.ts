import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cacheAttributesSchema, type CacheAttributes } from "./cache-attributes.js";
import { encryptionTypeSchema, type EncryptionType } from "./encryption-type.js";
import { nfsFileShareDefaultsSchema, type NfsFileShareDefaults } from "./nfs-file-share-defaults.js";
import { objectAcl2Schema, type ObjectAcl2 } from "./object-acl2.js";
import { tagSchema, type Tag } from "./tag.js";

export type NfsFileShareInfo = {
  nfsFileShareDefaults?: NfsFileShareDefaults;
  fileShareArn?: string;
  fileShareId?: string;
  fileShareStatus?: string;
  gatewayArn?: string;
  /**
   * A value that specifies the type of server-side encryption that the file share will use for the
   * data that it stores in Amazon S3. We recommend using EncryptionType instead of KMSEncrypted to
   * set the file share encryption method. You do not need to provide values for both parameters. If
   * values for both parameters exist in the same request, then the specified encryption methods
   * must not conflict. For example, if EncryptionType is SseS3, then KMSEncrypted must be false. If
   * EncryptionType is SseKms or DsseKms, then KMSEncrypted must be true.
   */
  encryptionType?: EncryptionType;
  /**
   * Optional. Set to true to use Amazon S3 server-side encryption with your own KMS key (SSE-KMS),
   * or false to use a key managed by Amazon S3 (SSE-S3). To use dual-layer encryption (DSSE-KMS),
   * set the EncryptionType parameter instead. We recommend using EncryptionType instead of
   * KMSEncrypted to set the file share encryption method. You do not need to provide values for
   * both parameters. If values for both parameters exist in the same request, then the specified
   * encryption methods must not conflict. For example, if EncryptionType is SseS3, then
   * KMSEncrypted must be false. If EncryptionType is SseKms
   */
  kmsEncrypted?: boolean;
  kmsKey?: string;
  path?: string;
  role?: string;
  locationArn?: string;
  /**
   * The default storage class for objects put into an Amazon S3 bucket by the S3 File Gateway. The
   * default value is S3_STANDARD. Optional. Valid Values: S3_STANDARD | S3_INTELLIGENT_TIERING |
   * S3_STANDARD_IA | S3_ONEZONE_IA
   */
  defaultStorageClass?: string;
  objectAcl?: ObjectAcl2;
  clientList?: string[];
  squash?: string;
  /**
   * A value that sets the write status of a file share. Set this value to true to set the write
   * status to read-only, otherwise set to false. Valid Values: true | false
   */
  readOnly?: boolean;
  /**
   * A value that enables guessing of the MIME type for uploaded objects based on file extensions.
   * Set this value to true to enable MIME type guessing, otherwise set to false. The default value
   * is true. Valid Values: true | false
   */
  guessMimeTypeEnabled?: boolean;
  /**
   * A value that sets who pays the cost of the request and the cost associated with data download
   * from the S3 bucket. If this value is set to true, the requester pays the costs; otherwise, the
   * S3 bucket owner pays. However, the S3 bucket owner always pays the cost of storing data.
   * RequesterPays is a configuration for the S3 bucket that backs the file share, so make sure that
   * the configuration on the file share is the same as the S3 bucket configuration. Valid Values:
   * true | false
   */
  requesterPays?: boolean;
  /**
   * A list of up to 50 tags assigned to the NFS file share, sorted alphabetically by key name. Each
   * tag is a key-value pair. For a gateway with more than 10 tags assigned, you can view all tags
   * using the ListTagsForResource API operation.
   */
  tags?: Tag[];
  /**
   * The name of the file share. Optional. FileShareName must be set if an S3 prefix name is set in
   * LocationARN, or if an access point or access point alias is used.
   */
  fileShareName?: string;
  cacheAttributes?: CacheAttributes;
  /**
   * The notification policy of the file share. SettlingTimeInSeconds controls the number of seconds
   * to wait after the last point in time a client wrote to a file before generating an
   * ObjectUploaded notification. Because clients can make many small writes to files, it's best to
   * set this parameter for as long as possible to avoid generating multiple notifications for the
   * same file in a small time period. SettlingTimeInSeconds has no effect on the timing of the
   * object uploading to Amazon S3, only the timing of the notification. This setting is not meant
   * to specify an exact time at which the notificat
   */
  notificationPolicy?: string;
  /**
   * Specifies the DNS name for the VPC endpoint that the NFS file share uses to connect to Amazon
   * S3. This parameter is required for NFS file shares that connect to Amazon S3 through a VPC
   * endpoint, a VPC access point, or an access point alias that points to a VPC access point.
   */
  vpcEndpointDnsName?: string;
  /**
   * Specifies the Region of the S3 bucket where the NFS file share stores files. This parameter is
   * required for NFS file shares that connect to Amazon S3 through a VPC endpoint, a VPC access
   * point, or an access point alias that points to a VPC access point.
   */
  bucketRegion?: string;
  /** The Amazon Resource Name (ARN) of the storage used for audit logs. */
  auditDestinationArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const nfsFileShareInfoSchema: Schema<NfsFileShareInfo> = s.object<NfsFileShareInfo>(
  {
    nfsFileShareDefaults: s.optional(s.lazy(() => nfsFileShareDefaultsSchema)),
    fileShareArn: s.optional(s.string()),
    fileShareId: s.optional(s.string()),
    fileShareStatus: s.optional(s.string()),
    gatewayArn: s.optional(s.string()),
    encryptionType: s.optional(s.lazy(() => encryptionTypeSchema)),
    kmsEncrypted: s.optional(s.boolean()),
    kmsKey: s.optional(s.string()),
    path: s.optional(s.string()),
    role: s.optional(s.string()),
    locationArn: s.optional(s.string()),
    defaultStorageClass: s.optional(s.string()),
    objectAcl: s.optional(s.lazy(() => objectAcl2Schema)),
    clientList: s.optional(s.array(s.string())),
    squash: s.optional(s.string()),
    readOnly: s.optional(s.boolean()),
    guessMimeTypeEnabled: s.optional(s.boolean()),
    requesterPays: s.optional(s.boolean()),
    tags: s.optional(s.array(s.lazy(() => tagSchema))),
    fileShareName: s.optional(s.string()),
    cacheAttributes: s.optional(s.lazy(() => cacheAttributesSchema)),
    notificationPolicy: s.optional(s.string()),
    vpcEndpointDnsName: s.optional(s.string()),
    bucketRegion: s.optional(s.string()),
    auditDestinationArn: s.optional(s.string()),
    _keysMap: {
      nfsFileShareDefaults: "NFSFileShareDefaults",
      fileShareArn: "FileShareARN",
      fileShareId: "FileShareId",
      fileShareStatus: "FileShareStatus",
      gatewayArn: "GatewayARN",
      encryptionType: "EncryptionType",
      kmsEncrypted: "KMSEncrypted",
      kmsKey: "KMSKey",
      path: "Path",
      role: "Role",
      locationArn: "LocationARN",
      defaultStorageClass: "DefaultStorageClass",
      objectAcl: "ObjectACL",
      clientList: "ClientList",
      squash: "Squash",
      readOnly: "ReadOnly",
      guessMimeTypeEnabled: "GuessMIMETypeEnabled",
      requesterPays: "RequesterPays",
      tags: "Tags",
      fileShareName: "FileShareName",
      cacheAttributes: "CacheAttributes",
      notificationPolicy: "NotificationPolicy",
      vpcEndpointDnsName: "VPCEndpointDNSName",
      bucketRegion: "BucketRegion",
      auditDestinationArn: "AuditDestinationARN",
    },
  },
  { additionalProperties: s.json() },
);
