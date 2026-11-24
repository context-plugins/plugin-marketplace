import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Describes the customer-managed encryption key (CMEK) configuration associated with a project and
 * location.
 */
export type CmekConfig = {
  /**
   * Output only. The config resource name which includes the project and location and must end in
   * 'cmekConfig', in the format `projects/PROJECT_ID/locations/LOCATION_ID/cmekConfig`
   */
  name?: string;
  /**
   * Resource name of the Cloud KMS key, of the form
   * `projects/PROJECT_ID/locations/LOCATION_ID/keyRings/KEY_RING_ID/cryptoKeys/KEY_ID`, that will
   * be used to encrypt the Queues & Tasks in the region. Setting this as blank will turn off CMEK
   * encryption.
   */
  kmsKey?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cmekConfigSchema: Schema<CmekConfig> = s.object<CmekConfig>(
  {
    name: s.optional(s.string()),
    kmsKey: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
