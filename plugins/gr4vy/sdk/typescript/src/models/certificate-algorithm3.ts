import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The algorithm used to generate the API key pair. */
export const CertificateAlgorithm3 = {
  Ecdsa: "ECDSA",
  Rsa: "RSA",
} as const;
export type CertificateAlgorithm3 =
  | (typeof CertificateAlgorithm3)[keyof typeof CertificateAlgorithm3]
  | (string & {});

export const certificateAlgorithm3Schema: EnumSchema<CertificateAlgorithm3> =
  s.enumOf<CertificateAlgorithm3>(CertificateAlgorithm3);
