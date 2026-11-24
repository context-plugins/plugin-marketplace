import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Optional. mTLS configuration for the OTel Collector endpoint. Required when
 * `otel_collector_security_scheme` == MTLS; must not be set otherwise.
 */
export type GoogleCloudApigeeV1TraceConfigOtelMtlsConfig2 = {
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

export const googleCloudApigeeV1TraceConfigOtelMtlsConfig2Schema: Schema<GoogleCloudApigeeV1TraceConfigOtelMtlsConfig2> =
  s.object<GoogleCloudApigeeV1TraceConfigOtelMtlsConfig2>(
    {
      keyStore: s.optional(s.string()),
      keyAlias: s.optional(s.string()),
      trustStore: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
