import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1KeyAliasReference1Schema,
  type GoogleCloudApigeeV1KeyAliasReference1,
} from "./google-cloud-apigee-v1-key-alias-reference1.js";

/**
 * Runtime-side view of `TraceConfig.OtelMtlsConfig` for the outbound OTel Collector mTLS
 * connection. Shape mirrors `TlsInfoConfig` (in this same file, above) exactly. The oneof
 * discriminates between a direct keystore reference and a `ref://`-indirected reference; both are
 * surfaced on the wire without flattening. The referenced keystore must also appear in
 * `EnvironmentConfig.keystores[]` so the underlying alias bytes are available at runtime.
 * Referential integrity is enforced at trace-config update time: any PATCH that references a
 * keystore not already present is rejected in the same transaction that would persist the update,
 * and keystore/alias/reference deletion is blocked while a trace-config references it.
 */
export type GoogleCloudApigeeV1RuntimeTraceConfigOtelMtlsConfig = {
  /**
   * Full alias resource name of the client-side key/cert alias. Format:
   * `organizations/{org}/environments/{env}/keystores/{keystore}/aliases/{alias}` Set when the
   * customer supplied a plain keystore ID in `TraceConfig.OtelMtlsConfig.key_store`.
   */
  keyAlias?: string;
  /**
   * Full resource name of the truststore holding the CA(s) that signed the OTel Collector's server
   * certificate. Either a keystore or a reference resource name, mirroring
   * `TlsInfoConfig.trust_store` above:
   * `organizations/{org}/environments/{env}/keystores/{keystore}`
   * `organizations/{org}/environments/{env}/references/{reference}`
   */
  trustStore?: string;
  /**
   * Reference name and alias-id pair. Set when the customer supplied a `ref://{referenceID}` URI in
   * `TraceConfig.OtelMtlsConfig.key_store`. Resolved via the References catalog the same way as
   * `TlsInfoConfig.key_alias_reference` in target-server TLS. Reuses the top-level
   * `KeyAliasReference` message defined for `TlsInfoConfig` above; no new message.
   */
  keyAliasReference?: GoogleCloudApigeeV1KeyAliasReference1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1RuntimeTraceConfigOtelMtlsConfigSchema: Schema<GoogleCloudApigeeV1RuntimeTraceConfigOtelMtlsConfig> =
  s.object<GoogleCloudApigeeV1RuntimeTraceConfigOtelMtlsConfig>(
    {
      keyAlias: s.optional(s.string()),
      trustStore: s.optional(s.string()),
      keyAliasReference: s.optional(s.lazy(() => googleCloudApigeeV1KeyAliasReference1Schema)),
    },
    { additionalProperties: s.json() },
  );
