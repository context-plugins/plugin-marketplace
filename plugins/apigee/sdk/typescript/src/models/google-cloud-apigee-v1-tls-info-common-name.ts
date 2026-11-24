import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GoogleCloudApigeeV1TlsInfoCommonName = {
  /** Indicates whether the cert should be matched against as a wildcard cert. */
  wildcardMatch?: boolean;
  /** The TLS Common Name string of the certificate. */
  value?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1TlsInfoCommonNameSchema: Schema<GoogleCloudApigeeV1TlsInfoCommonName> =
  s.object<GoogleCloudApigeeV1TlsInfoCommonName>(
    {
      wildcardMatch: s.optional(s.boolean()),
      value: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
