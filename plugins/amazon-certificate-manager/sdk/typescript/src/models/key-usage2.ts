import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const KeyUsage2 = {
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
export type KeyUsage2 = (typeof KeyUsage2)[keyof typeof KeyUsage2] | (string & {});

export const keyUsage2Schema: EnumSchema<KeyUsage2> = s.enumOf<KeyUsage2>(KeyUsage2);
