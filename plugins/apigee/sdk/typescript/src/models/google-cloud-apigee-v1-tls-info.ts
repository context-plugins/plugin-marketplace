import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1TlsInfoCommonName2Schema,
  type GoogleCloudApigeeV1TlsInfoCommonName2,
} from "./google-cloud-apigee-v1-tls-info-common-name2.js";

/** TLS configuration information for virtual hosts and TargetServers. */
export type GoogleCloudApigeeV1TlsInfo = {
  /** Optional. Enables two-way TLS. */
  clientAuthEnabled?: boolean;
  /** Required. Enables TLS. If false, neither one-way nor two-way TLS will be enabled. */
  enabled?: boolean;
  /** TLS is strictly enforced. */
  enforce?: boolean;
  /** The TLS Common Name of the certificate. */
  commonName?: GoogleCloudApigeeV1TlsInfoCommonName2;
  /** The resource ID of the truststore. */
  trustStore?: string;
  /**
   * If true, Edge ignores TLS certificate errors. Valid when configuring TLS for target servers and
   * target endpoints, and when configuring virtual hosts that use 2-way TLS. When used with a
   * target endpoint/target server, if the backend system uses SNI and returns a cert with a subject
   * Distinguished Name (DN) that does not match the hostname, there is no way to ignore the error
   * and the connection fails.
   */
  ignoreValidationErrors?: boolean;
  /** The TLS versioins to be used. */
  protocols?: string[];
  /**
   * The SSL/TLS cipher suites to be used. For programmable proxies, it must be one of the cipher
   * suite names listed in:
   * http://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#ciphersuites.
   * For configurable proxies, it must follow the configuration specified in:
   * https://commondatastorage.googleapis.com/chromium-boringssl-docs/ssl.h.html#Cipher-suite-configuration.
   * This setting has no effect for configurable proxies when negotiating TLS 1.3.
   */
  ciphers?: string[];
  /** Required if `client_auth_enabled` is true. The resource ID of the keystore. */
  keyStore?: string;
  /**
   * Required if `client_auth_enabled` is true. The resource ID for the alias containing the private
   * key and cert.
   */
  keyAlias?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1TlsInfoSchema: Schema<GoogleCloudApigeeV1TlsInfo> =
  s.object<GoogleCloudApigeeV1TlsInfo>(
    {
      clientAuthEnabled: s.optional(s.boolean()),
      enabled: s.optional(s.boolean()),
      enforce: s.optional(s.boolean()),
      commonName: s.optional(s.lazy(() => googleCloudApigeeV1TlsInfoCommonName2Schema)),
      trustStore: s.optional(s.string()),
      ignoreValidationErrors: s.optional(s.boolean()),
      protocols: s.optional(s.array(s.string())),
      ciphers: s.optional(s.array(s.string())),
      keyStore: s.optional(s.string()),
      keyAlias: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
