import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1CommonNameConfig2Schema,
  type GoogleCloudApigeeV1CommonNameConfig2,
} from "./google-cloud-apigee-v1-common-name-config2.js";
import {
  googleCloudApigeeV1KeyAliasReference3Schema,
  type GoogleCloudApigeeV1KeyAliasReference3,
} from "./google-cloud-apigee-v1-key-alias-reference3.js";

/** TLS settings for the target server. */
export type GoogleCloudApigeeV1TlsInfoConfig1 = {
  /**
   * Flag that specifies whether to ignore TLS certificate validation errors. Set to `true` to
   * ignore errors.
   */
  ignoreValidationErrors?: boolean;
  /**
   * Name of the alias used for client-side authentication in the following format:
   * `organizations/{org}/environments/{env}/keystores/{keystore}/aliases/{alias}`
   */
  keyAlias?: string;
  /** Common name to validate the target server against. */
  commonName?: GoogleCloudApigeeV1CommonNameConfig2;
  /** List of TLS protocols that are granted access. */
  protocols?: string[];
  /**
   * Name of the keystore or keystore reference containing trusted certificates for the server in
   * the following format: `organizations/{org}/environments/{env}/keystores/{keystore}` or
   * `organizations/{org}/environments/{env}/references/{reference}`
   */
  trustStore?: string;
  /**
   * Flag that specifies whether client-side authentication is enabled for the target server.
   * Enables two-way TLS.
   */
  clientAuthEnabled?: boolean;
  /** List of ciphers that are granted access. */
  ciphers?: string[];
  /** Reference name and alias pair to use for client-side authentication. */
  keyAliasReference?: GoogleCloudApigeeV1KeyAliasReference3;
  /** Flag that specifies whether one-way TLS is enabled. Set to `true` to enable one-way TLS. */
  enabled?: boolean;
  /** Flag that enforces TLS settings */
  enforce?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1TlsInfoConfig1Schema: Schema<GoogleCloudApigeeV1TlsInfoConfig1> =
  s.object<GoogleCloudApigeeV1TlsInfoConfig1>(
    {
      ignoreValidationErrors: s.optional(s.boolean()),
      keyAlias: s.optional(s.string()),
      commonName: s.optional(s.lazy(() => googleCloudApigeeV1CommonNameConfig2Schema)),
      protocols: s.optional(s.array(s.string())),
      trustStore: s.optional(s.string()),
      clientAuthEnabled: s.optional(s.boolean()),
      ciphers: s.optional(s.array(s.string())),
      keyAliasReference: s.optional(s.lazy(() => googleCloudApigeeV1KeyAliasReference3Schema)),
      enabled: s.optional(s.boolean()),
      enforce: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
