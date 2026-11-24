import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1KeyAliasReference1Schema,
  type GoogleCloudApigeeV1KeyAliasReference1,
} from "./google-cloud-apigee-v1-key-alias-reference1.js";

/**
 * Optional. mTLS configuration for the OTel Collector endpoint. Required when
 * `otel_collector_security_scheme` is `MTLS`; must be absent otherwise.
 */
export type GoogleCloudApigeeV1RuntimeTraceConfigOtelMtlsConfig1 = {
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

export const googleCloudApigeeV1RuntimeTraceConfigOtelMtlsConfig1Schema: Schema<GoogleCloudApigeeV1RuntimeTraceConfigOtelMtlsConfig1> =
  s.object<GoogleCloudApigeeV1RuntimeTraceConfigOtelMtlsConfig1>(
    {
      keyAlias: s.optional(s.string()),
      trustStore: s.optional(s.string()),
      keyAliasReference: s.optional(s.lazy(() => googleCloudApigeeV1KeyAliasReference1Schema)),
    },
    { additionalProperties: s.json() },
  );
