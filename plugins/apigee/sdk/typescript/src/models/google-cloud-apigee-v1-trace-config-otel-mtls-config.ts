import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * OtelMtlsConfig configures mutual TLS for the outbound OTel Collector connection by referencing
 * already-uploaded Keystore/Truststore aliases. Key/cert material is uploaded via the existing
 * Keystore Alias APIs (POST .../keystores/{ks}/aliases), the same APIs used to configure mTLS for
 * `TargetServer.tls_info`. Only the resource IDs of those aliases live in this message; no secret
 * material is inlined into TraceConfig. Field shape mirrors `TlsInfo` used by
 * `TargetServer.tls_info`: - `key_store` and `trust_store` accept either a plain keystore ID or a
 * `ref://{referenceID}` URI (an environment-scoped Reference whose `resource_type` is
 * `KeyStore`/`TrustStore`). References enable rotation without editing the TraceConfig itself. -
 * `key_alias` is the plain alias ID within `key_store`. Fields that would normally appear on
 * `TlsInfo` (enabled, client_auth_enabled, protocols, enforce, ignore_validation_errors) are
 * intentionally omitted from this customer surface. The runtime enforces secure defaults: - Mutual
 * TLS is always required (both server AND client cert exchanged). - Server certificate validation
 * is always strict (no ignoring errors). - TLS 1.2 and TLS 1.3 are enabled; older versions are
 * rejected.
 */
export type GoogleCloudApigeeV1TraceConfigOtelMtlsConfig = {
  /**
   * Required. Keystore holding the client-side key/cert alias. Accepts either a plain keystore ID
   * (e.g. `my-keystore`) resolving to
   * `organizations/{org}/environments/{env}/keystores/{key_store}`, or a reference URI of the form
   * `ref://{referenceID}` that points to a Reference whose `resource_type` is `KeyStore`.
   */
  keyStore?: string;
  /**
   * Required. Plain alias ID within `key_store` that contains the client key/cert used for mTLS.
   */
  keyAlias?: string;
  /**
   * Required. Truststore holding the CA(s) that signed the OTel Collector's server certificate.
   * Accepts either a plain keystore ID (e.g. `my-truststore`) resolving to
   * `organizations/{org}/environments/{env}/keystores/{trust_store}`, or a reference URI of the
   * form `ref://{referenceID}` that points to a Reference whose `resource_type` is `KeyStore` (used
   * as a truststore).
   */
  trustStore?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1TraceConfigOtelMtlsConfigSchema: Schema<GoogleCloudApigeeV1TraceConfigOtelMtlsConfig> =
  s.object<GoogleCloudApigeeV1TraceConfigOtelMtlsConfig>(
    {
      keyStore: s.optional(s.string()),
      keyAlias: s.optional(s.string()),
      trustStore: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
