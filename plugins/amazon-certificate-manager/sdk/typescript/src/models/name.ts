import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** A string value that contains a Key Usage extension name. */
export const Name = {
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
export type Name = (typeof Name)[keyof typeof Name] | (string & {});

export const nameSchema: EnumSchema<Name> = s.enumOf<Name>(Name);
