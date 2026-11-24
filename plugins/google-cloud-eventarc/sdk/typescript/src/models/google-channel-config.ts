import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Can be used to customize security settings for Eventarc first-party triggers in a specific
 * region. Once the GoogleChannelConfig resource is configured, first-party event data is protected
 * using the specified customer-managed encryption key instead of a Google-managed encryption key.
 */
export type GoogleChannelConfig = {
  /**
   * Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their
   * event data. It must match the pattern
   * `projects/*&#47;locations/*&#47;keyRings/*&#47;cryptoKeys/*`.
   */
  cryptoKeyName?: string;
  /** Output only. The last-modified time. */
  updateTime?: string;
  /**
   * Required. The resource name of the config. Must be in the format of,
   * `projects/{project}/locations/{location}/googleChannelConfig`. In API responses, the config
   * name always includes the projectID, regardless of whether the projectID or projectNumber was
   * provided.
   */
  name?: string;
  /** Optional. Resource labels. */
  labels?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleChannelConfigSchema: Schema<GoogleChannelConfig> = s.object<GoogleChannelConfig>(
  {
    cryptoKeyName: s.optional(s.string()),
    updateTime: s.optional(s.string()),
    name: s.optional(s.string()),
    labels: s.optional(s.record(s.string(), s.string())),
  },
  { additionalProperties: s.json() },
);
