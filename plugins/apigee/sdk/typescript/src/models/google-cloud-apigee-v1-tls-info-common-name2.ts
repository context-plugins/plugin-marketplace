import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The TLS Common Name of the certificate. */
export type GoogleCloudApigeeV1TlsInfoCommonName2 = {
  /** Indicates whether the cert should be matched against as a wildcard cert. */
  wildcardMatch?: boolean;
  /** The TLS Common Name string of the certificate. */
  value?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1TlsInfoCommonName2Schema: Schema<GoogleCloudApigeeV1TlsInfoCommonName2> =
  s.object<GoogleCloudApigeeV1TlsInfoCommonName2>(
    {
      wildcardMatch: s.optional(s.boolean()),
      value: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
