import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cacheAttributesSchema, type CacheAttributes } from "./cache-attributes.js";
import { caseSensitivitySchema, type CaseSensitivity } from "./case-sensitivity.js";
import { encryptionTypeSchema, type EncryptionType } from "./encryption-type.js";
import { objectAclSchema, type ObjectAcl } from "./object-acl.js";

export type UpdateSmbFileShareInput = {
  /** The Amazon Resource Name (ARN) of the SMB file share that you want to update. */
  fileShareArn: string;
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
   * A value that sets the write status of a file share. Set this value to true to set write status
   * to read-only, otherwise set to false. Valid Values: true | false
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
   * Set this value to true to enable access control list (ACL) on the SMB file share. Set it to
   * false to map file and directory permissions to the POSIX permissions. For more information, see
   * Using Windows ACLs to limit SMB file share access in the Amazon S3 File Gateway User Guide.
   * Valid Values: true | false
   */
  smbaclEnabled?: boolean;
  /** The files and folders on this share will only be visible to users with read access. */
  accessBasedEnumeration?: boolean;
  /**
   * A list of users or groups in the Active Directory that have administrator rights to the file
   * share. A group must be prefixed with the \@ character. Acceptable formats include:
   * DOMAIN\User1, user1, \@group1, and \@DOMAIN\group1. Can only be set if Authentication is set to
   * ActiveDirectory.
   */
  adminUserList?: string[];
  /**
   * A list of users or groups in the Active Directory that are allowed to access the file share. A
   * group must be prefixed with the \@ character. Acceptable formats include: DOMAIN\User1, user1,
   * \@group1, and \@DOMAIN\group1. Can only be set if Authentication is set to ActiveDirectory.
   */
  validUserList?: string[];
  /**
   * A list of users or groups in the Active Directory that are not allowed to access the file
   * share. A group must be prefixed with the \@ character. Acceptable formats include:
   * DOMAIN\User1, user1, \@group1, and \@DOMAIN\group1. Can only be set if Authentication is set to
   * ActiveDirectory.
   */
  invalidUserList?: string[];
  /** The Amazon Resource Name (ARN) of the storage used for audit logs. */
  auditDestinationArn?: string;
  /**
   * The case of an object name in an Amazon S3 bucket. For ClientSpecified, the client determines
   * the case sensitivity. For CaseSensitive, the gateway determines the case sensitivity. The
   * default value is ClientSpecified.
   */
  caseSensitivity?: CaseSensitivity;
  /**
   * The name of the file share. Optional. FileShareName must be set if an S3 prefix name is set in
   * LocationARN, or if an access point or access point alias is used. A valid SMB file share name
   * cannot contain the following characters: [,],#,;,,>,:,",\,/,|,?,*,+, or ASCII control
   * characters 1-31.
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
   * Specifies whether opportunistic locking is enabled for the SMB file share. Enabling
   * opportunistic locking on case-sensitive shares is not recommended for workloads that involve
   * access to files with the same name in different case. Valid Values: true | false
   */
  oplocksEnabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateSmbFileShareInputSchema: Schema<UpdateSmbFileShareInput> =
  s.object<UpdateSmbFileShareInput>(
    {
      fileShareArn: s.string(),
      encryptionType: s.optional(s.lazy(() => encryptionTypeSchema)),
      kmsEncrypted: s.optional(s.boolean()),
      kmsKey: s.optional(s.string()),
      defaultStorageClass: s.optional(s.string()),
      objectAcl: s.optional(s.lazy(() => objectAclSchema)),
      readOnly: s.optional(s.boolean()),
      guessMimeTypeEnabled: s.optional(s.boolean()),
      requesterPays: s.optional(s.boolean()),
      smbaclEnabled: s.optional(s.boolean()),
      accessBasedEnumeration: s.optional(s.boolean()),
      adminUserList: s.optional(s.array(s.string())),
      validUserList: s.optional(s.array(s.string())),
      invalidUserList: s.optional(s.array(s.string())),
      auditDestinationArn: s.optional(s.string()),
      caseSensitivity: s.optional(s.lazy(() => caseSensitivitySchema)),
      fileShareName: s.optional(s.string()),
      cacheAttributes: s.optional(s.lazy(() => cacheAttributesSchema)),
      notificationPolicy: s.optional(s.string()),
      oplocksEnabled: s.optional(s.boolean()),
      _keysMap: {
        fileShareArn: "FileShareARN",
        encryptionType: "EncryptionType",
        kmsEncrypted: "KMSEncrypted",
        kmsKey: "KMSKey",
        defaultStorageClass: "DefaultStorageClass",
        objectAcl: "ObjectACL",
        readOnly: "ReadOnly",
        guessMimeTypeEnabled: "GuessMIMETypeEnabled",
        requesterPays: "RequesterPays",
        smbaclEnabled: "SMBACLEnabled",
        accessBasedEnumeration: "AccessBasedEnumeration",
        adminUserList: "AdminUserList",
        validUserList: "ValidUserList",
        invalidUserList: "InvalidUserList",
        auditDestinationArn: "AuditDestinationARN",
        caseSensitivity: "CaseSensitivity",
        fileShareName: "FileShareName",
        cacheAttributes: "CacheAttributes",
        notificationPolicy: "NotificationPolicy",
        oplocksEnabled: "OplocksEnabled",
      },
    },
    { additionalProperties: s.json() },
  );
