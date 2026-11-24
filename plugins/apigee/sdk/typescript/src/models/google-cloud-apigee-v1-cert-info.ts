import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** X.509 certificate as defined in RFC 5280. */
export type GoogleCloudApigeeV1CertInfo = {
  /** Public key component of the X.509 subject public key info. */
  publicKey?: string;
  /** X.509 serial number. */
  serialNumber?: string;
  /** X.509 signatureAlgorithm. */
  sigAlgName?: string;
  /** X.509 issuer. */
  issuer?: string;
  /** X.509 `notAfter` validity period in milliseconds since epoch. */
  expiryDate?: string;
  /** X.509 `notBefore` validity period in milliseconds since epoch. */
  validFrom?: string;
  /** X.509 version. */
  version?: number;
  /** X.509 subject alternative names (SANs) extension. */
  subjectAlternativeNames?: string[];
  /** X.509 basic constraints extension. */
  basicConstraints?: string;
  /** X.509 subject. */
  subject?: string;
  /**
   * Flag that specifies whether the certificate is valid. Flag is set to `Yes` if the certificate
   * is valid, `No` if expired, or `Not yet` if not yet valid.
   */
  isValid?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1CertInfoSchema: Schema<GoogleCloudApigeeV1CertInfo> =
  s.object<GoogleCloudApigeeV1CertInfo>(
    {
      publicKey: s.optional(s.string()),
      serialNumber: s.optional(s.string()),
      sigAlgName: s.optional(s.string()),
      issuer: s.optional(s.string()),
      expiryDate: s.optional(s.string()),
      validFrom: s.optional(s.string()),
      version: s.optional(s.int()),
      subjectAlternativeNames: s.optional(s.array(s.string())),
      basicConstraints: s.optional(s.string()),
      subject: s.optional(s.string()),
      isValid: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
