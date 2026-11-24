import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Reference name and alias-id pair. Set when the customer supplied a `ref://{referenceID}` URI in
 * `TraceConfig.OtelMtlsConfig.key_store`. Resolved via the References catalog the same way as
 * `TlsInfoConfig.key_alias_reference` in target-server TLS. Reuses the top-level
 * `KeyAliasReference` message defined for `TlsInfoConfig` above; no new message.
 */
export type GoogleCloudApigeeV1KeyAliasReference1 = {
  /**
   * Reference name in the following format:
   * `organizations/{org}/environments/{env}/references/{reference}`
   */
  reference?: string;
  /** Alias ID. Must exist in the keystore referred to by the reference. */
  aliasId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1KeyAliasReference1Schema: Schema<GoogleCloudApigeeV1KeyAliasReference1> =
  s.object<GoogleCloudApigeeV1KeyAliasReference1>(
    {
      reference: s.optional(s.string()),
      aliasId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
