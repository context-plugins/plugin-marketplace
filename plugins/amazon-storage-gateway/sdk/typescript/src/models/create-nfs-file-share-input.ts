import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cacheAttributesSchema, type CacheAttributes } from "./cache-attributes.js";
import { encryptionTypeSchema, type EncryptionType } from "./encryption-type.js";
import { nfsFileShareDefaultsSchema, type NfsFileShareDefaults } from "./nfs-file-share-defaults.js";
import { objectAclSchema, type ObjectAcl } from "./object-acl.js";
import { tagSchema, type Tag } from "./tag.js";

export type CreateNfsFileShareInput = {
  /**
   * A unique string value that you supply that is used by S3 File Gateway to ensure idempotent file
   * share creation.
   */
  clientToken: string;
  nfsFileShareDefaults?: NfsFileShareDefaults;
  /**
   * The Amazon Resource Name (ARN) of the S3 File Gateway on which you want to create a file share.
   */
  gatewayArn: string;
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
  /**
   * Optional. The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for
   * Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value
   * must be set if KMSEncrypted is true, or if EncryptionType is SseKms or DsseKms.
   */
  kmsKey?: string;
  /**
   * The ARN of the Identity and Access Management (IAM) role that an S3 File Gateway assumes when
   * it accesses the underlying storage.
   */
  role: string;
  /**
   * A custom ARN for the backend storage used for storing data for file shares. It includes a
   * resource ARN with an optional prefix concatenation. The prefix must end with a forward slash
   * (/). You can specify LocationARN as a bucket ARN, access point ARN or access point alias, as
   * shown in the following examples. Bucket ARN: arn:aws:s3:::amzn-s3-demo-bucket/prefix/ Access
   * point ARN: arn:aws:s3:region:account-id:accesspoint/access-point-name/prefix/ If you specify an
   * access point, the bucket policy must be configured to delegate access control to the access
   * point. For information, see Delegating acce
   */
  locationArn: string;
  /**
   * The default storage class for objects put into an Amazon S3 bucket by the S3 File Gateway. The
   * default value is S3_STANDARD. Optional. Valid Values: S3_STANDARD | S3_INTELLIGENT_TIERING |
   * S3_STANDARD_IA | S3_ONEZONE_IA
   */
  defaultStorageClass?: string;
  /**
   * A value that sets the access control list (ACL) permission for objects in the S3 bucket that a
   * S3 File Gateway puts objects into. The default value is private.
   */
  objectAcl?: ObjectAcl;
  /**
   * The list of clients that are allowed to access the S3 File Gateway. The list must contain
   * either valid IPv4/IPv6 addresses or valid CIDR blocks.
   */
  clientList?: string[];
  /**
   * A value that maps a user to anonymous user. Valid values are the following: RootSquash: Only
   * root is mapped to anonymous user. NoSquash: No one is mapped to anonymous user. AllSquash:
   * Everyone is mapped to anonymous user.
   */
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
   * A list of up to 50 tags that can be assigned to the NFS file share. Each tag is a key-value
   * pair. Valid characters for key and value are letters, spaces, and numbers representable in
   * UTF-8 format, and the following special characters: + - = . _ : / \@. The maximum length of a
   * tag's key is 128 characters, and the maximum length for a tag's value is 256.
   */
  tags?: Tag[];
  /**
   * The name of the file share. Optional. FileShareName must be set if an S3 prefix name is set in
   * LocationARN, or if an access point or access point alias is used. A valid NFS file share name
   * can only contain the following characters: a-z, A-Z, 0-9, -, ., and _.
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

export const createNfsFileShareInputSchema: Schema<CreateNfsFileShareInput> =
  s.object<CreateNfsFileShareInput>(
    {
      clientToken: s.string(),
      nfsFileShareDefaults: s.optional(s.lazy(() => nfsFileShareDefaultsSchema)),
      gatewayArn: s.string(),
      encryptionType: s.optional(s.lazy(() => encryptionTypeSchema)),
      kmsEncrypted: s.optional(s.boolean()),
      kmsKey: s.optional(s.string()),
      role: s.string(),
      locationArn: s.string(),
      defaultStorageClass: s.optional(s.string()),
      objectAcl: s.optional(s.lazy(() => objectAclSchema)),
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
        clientToken: "ClientToken",
        nfsFileShareDefaults: "NFSFileShareDefaults",
        gatewayArn: "GatewayARN",
        encryptionType: "EncryptionType",
        kmsEncrypted: "KMSEncrypted",
        kmsKey: "KMSKey",
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
