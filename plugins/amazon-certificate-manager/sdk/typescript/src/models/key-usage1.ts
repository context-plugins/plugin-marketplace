import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Filter by key usage. */
export const KeyUsage1 = {
  DigitalSignature: "DIGITAL_SIGNATURE",
  NonRepudiation: "NON_REPUDIATION",
  KeyEncipherment: "KEY_ENCIPHERMENT",
  DataEncipherment: "DATA_ENCIPHERMENT",
  KeyAgreement: "KEY_AGREEMENT",
  CertificateSigning: "CERTIFICATE_SIGNING",
  CrlSigning: "CRL_SIGNING",
  EncipherOnly: "ENCIPHER_ONLY",
  DecipherOnly: "DECIPHER_ONLY",
  Any: "ANY",
  Custom: "CUSTOM",
} as const;
export type KeyUsage1 = (typeof KeyUsage1)[keyof typeof KeyUsage1] | (string & {});

export const keyUsage1Schema: EnumSchema<KeyUsage1> = s.enumOf<KeyUsage1>(KeyUsage1);
