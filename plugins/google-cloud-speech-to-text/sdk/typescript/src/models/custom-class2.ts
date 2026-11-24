import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { classItemSchema, type ClassItem } from "./class-item.js";
import { stateSchema, type State } from "./state.js";

/** Required. The custom class to create. */
export type CustomClass2 = {
  /**
   * Output only. User-settable, human-readable name for the CustomClass. Must be 63 characters or
   * less. This field is not used.
   */
  displayName?: string;
  /**
   * If this custom class is a resource, the custom_class_id is the resource id of the CustomClass.
   * Case sensitive.
   */
  customClassId?: string;
  /**
   * Output only. This checksum is computed by the server based on the value of other fields. This
   * may be sent on update, undelete, and delete requests to ensure the client has an up-to-date
   * value before proceeding. This field is not used.
   */
  etag?: string;
  /**
   * Output only. The [KMS key version
   * name](https://cloud.google.com/kms/docs/resource-hierarchy#key_versions) with which content of
   * the ClassItem is encrypted. The expected format is
   * `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}/cryptoKeyVersions/{crypto_key_version}`.
   */
  kmsKeyVersionName?: string;
  /** The resource name of the custom class. */
  name?: string;
  /** Output only. System-assigned unique identifier for the CustomClass. This field is not used. */
  uid?: string;
  /** A collection of class items. */
  items?: ClassItem[];
  /**
   * Output only. Whether or not this CustomClass is in the process of being updated. This field is
   * not used.
   */
  reconciling?: boolean;
  /** Output only. The time at which this resource will be purged. This field is not used. */
  expireTime?: string;
  /**
   * Output only. The [KMS key name](https://cloud.google.com/kms/docs/resource-hierarchy#keys) with
   * which the content of the ClassItem is encrypted. The expected format is
   * `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`.
   */
  kmsKeyName?: string;
  /**
   * Output only. Allows users to store small amounts of arbitrary data. Both the key and the value
   * must be 63 characters or less each. At most 100 annotations. This field is not used.
   */
  annotations?: Record<string, string>;
  /** Output only. The CustomClass lifecycle state. This field is not used. */
  state?: State;
  /**
   * Output only. The time at which this resource was requested for deletion. This field is not
   * used.
   */
  deleteTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customClass2Schema: Schema<CustomClass2> = s.object<CustomClass2>(
  {
    displayName: s.optional(s.string()),
    customClassId: s.optional(s.string()),
    etag: s.optional(s.string()),
    kmsKeyVersionName: s.optional(s.string()),
    name: s.optional(s.string()),
    uid: s.optional(s.string()),
    items: s.optional(s.array(s.lazy(() => classItemSchema))),
    reconciling: s.optional(s.boolean()),
    expireTime: s.optional(s.string()),
    kmsKeyName: s.optional(s.string()),
    annotations: s.optional(s.record(s.string(), s.string())),
    state: s.optional(s.lazy(() => stateSchema)),
    deleteTime: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
