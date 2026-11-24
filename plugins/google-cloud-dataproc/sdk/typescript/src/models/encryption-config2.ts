import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Encryption settings for the service. */
export type EncryptionConfig2 = {
  /**
   * Optional. The fully qualified customer provided Cloud KMS key name to use for customer data
   * encryption, in the following
   * format:projects/{project_number}/locations/{location_id}/keyRings/{key_ring_id}/cryptoKeys/{crypto_key_id}.
   */
  kmsKey?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const encryptionConfig2Schema: Schema<EncryptionConfig2> = s.object<EncryptionConfig2>(
  {
    kmsKey: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
