import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { phraseSchema, type Phrase } from "./phrase.js";
import { stateSchema, type State } from "./state.js";

/** Provides "hints" to the speech recognizer to favor specific words and phrases in the results. */
export type PhraseSet = {
  /**
   * Output only. Allows users to store small amounts of arbitrary data. Both the key and the value
   * must be 63 characters or less each. At most 100 annotations. This field is not used.
   */
  annotations?: Record<string, string>;
  /**
   * Output only. The [KMS key version
   * name](https://cloud.google.com/kms/docs/resource-hierarchy#key_versions) with which content of
   * the PhraseSet is encrypted. The expected format is
   * `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}/cryptoKeyVersions/{crypto_key_version}`.
   */
  kmsKeyVersionName?: string;
  /** Output only. The time at which this resource will be purged. This field is not used. */
  expireTime?: string;
  /**
   * Output only. The [KMS key name](https://cloud.google.com/kms/docs/resource-hierarchy#keys) with
   * which the content of the PhraseSet is encrypted. The expected format is
   * `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`.
   */
  kmsKeyName?: string;
  /**
   * Output only. User-settable, human-readable name for the PhraseSet. Must be 63 characters or
   * less. This field is not used.
   */
  displayName?: string;
  /** Output only. The CustomClass lifecycle state. This field is not used. */
  state?: State;
  /** The resource name of the phrase set. */
  name?: string;
  /** Output only. System-assigned unique identifier for the PhraseSet. This field is not used. */
  uid?: string;
  /**
   * Hint Boost. Positive value will increase the probability that a specific phrase will be
   * recognized over other similar sounding phrases. The higher the boost, the higher the chance of
   * false positive recognition as well. Negative boost values would correspond to anti-biasing.
   * Anti-biasing is not enabled, so negative boost will simply be ignored. Though `boost` can
   * accept a wide range of positive values, most use cases are best served with values between 0
   * (exclusive) and 20. We recommend using a binary search approach to finding the optimal value
   * for your use case as well as adding phrases both with and without boost to your requests.
   */
  boost?: number;
  /**
   * Output only. This checksum is computed by the server based on the value of other fields. This
   * may be sent on update, undelete, and delete requests to ensure the client has an up-to-date
   * value before proceeding. This field is not used.
   */
  etag?: string;
  /**
   * Output only. Whether or not this PhraseSet is in the process of being updated. This field is
   * not used.
   */
  reconciling?: boolean;
  /** A list of word and phrases. */
  phrases?: Phrase[];
  /**
   * Output only. The time at which this resource was requested for deletion. This field is not
   * used.
   */
  deleteTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const phraseSetSchema: Schema<PhraseSet> = s.object<PhraseSet>(
  {
    annotations: s.optional(s.record(s.string(), s.string())),
    kmsKeyVersionName: s.optional(s.string()),
    expireTime: s.optional(s.string()),
    kmsKeyName: s.optional(s.string()),
    displayName: s.optional(s.string()),
    state: s.optional(s.lazy(() => stateSchema)),
    name: s.optional(s.string()),
    uid: s.optional(s.string()),
    boost: s.optional(s.float64()),
    etag: s.optional(s.string()),
    reconciling: s.optional(s.boolean()),
    phrases: s.optional(s.array(s.lazy(() => phraseSchema))),
    deleteTime: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
