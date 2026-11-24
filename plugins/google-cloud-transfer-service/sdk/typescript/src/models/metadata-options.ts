import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { aclSchema, type Acl } from "./acl.js";
import { gidSchema, type Gid } from "./gid.js";
import { kmsKeySchema, type KmsKey } from "./kms-key.js";
import { modeSchema, type Mode } from "./mode.js";
import { storageClassSchema, type StorageClass } from "./storage-class.js";
import { symlinkSchema, type Symlink } from "./symlink.js";
import { temporaryHoldSchema, type TemporaryHold } from "./temporary-hold.js";
import { timeCreatedSchema, type TimeCreated } from "./time-created.js";
import { uidSchema, type Uid } from "./uid.js";

/** Specifies the metadata options for running a transfer. */
export type MetadataOptions = {
  /**
   * Specifies how each object's Cloud KMS customer-managed encryption key (CMEK) is preserved for
   * transfers between Google Cloud Storage buckets. If unspecified, the default behavior is the
   * same as KMS_KEY_DESTINATION_BUCKET_DEFAULT.
   */
  kmsKey?: KmsKey;
  /**
   * Specifies how each object's ACLs should be preserved for transfers between Google Cloud Storage
   * buckets. If unspecified, the default behavior is the same as ACL_DESTINATION_BUCKET_DEFAULT.
   */
  acl?: Acl;
  /**
   * Specifies how each file's mode attribute should be handled by the transfer. By default, mode is
   * not preserved. Only applicable to transfers involving POSIX file systems, and ignored for other
   * transfers.
   */
  mode?: Mode;
  /**
   * Specifies how each object's `timeCreated` metadata is preserved for transfers. If unspecified,
   * the default behavior is the same as TIME_CREATED_SKIP. This behavior is supported for transfers
   * to Cloud Storage buckets from Cloud Storage, Amazon S3, S3-compatible storage, and Azure
   * sources.
   */
  timeCreated?: TimeCreated;
  /**
   * Specifies how each file's POSIX group ID (GID) attribute should be handled by the transfer. By
   * default, GID is not preserved. Only applicable to transfers involving POSIX file systems, and
   * ignored for other transfers.
   */
  gid?: Gid;
  /**
   * Specifies how each file's POSIX user ID (UID) attribute should be handled by the transfer. By
   * default, UID is not preserved. Only applicable to transfers involving POSIX file systems, and
   * ignored for other transfers.
   */
  uid?: Uid;
  /**
   * Specifies how symlinks should be handled by the transfer. By default, symlinks are not
   * preserved. Only applicable to transfers involving POSIX file systems, and ignored for other
   * transfers.
   */
  symlink?: Symlink;
  /**
   * Specifies how each object's temporary hold status should be preserved for transfers between
   * Google Cloud Storage buckets. If unspecified, the default behavior is the same as
   * TEMPORARY_HOLD_PRESERVE.
   */
  temporaryHold?: TemporaryHold;
  /**
   * Specifies the storage class to set on objects being transferred to Google Cloud Storage
   * buckets. If unspecified, the default behavior is the same as
   * STORAGE_CLASS_DESTINATION_BUCKET_DEFAULT.
   */
  storageClass?: StorageClass;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metadataOptionsSchema: Schema<MetadataOptions> = s.object<MetadataOptions>(
  {
    kmsKey: s.optional(s.lazy(() => kmsKeySchema)),
    acl: s.optional(s.lazy(() => aclSchema)),
    mode: s.optional(s.lazy(() => modeSchema)),
    timeCreated: s.optional(s.lazy(() => timeCreatedSchema)),
    gid: s.optional(s.lazy(() => gidSchema)),
    uid: s.optional(s.lazy(() => uidSchema)),
    symlink: s.optional(s.lazy(() => symlinkSchema)),
    temporaryHold: s.optional(s.lazy(() => temporaryHoldSchema)),
    storageClass: s.optional(s.lazy(() => storageClassSchema)),
  },
  { additionalProperties: s.json() },
);
