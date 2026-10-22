import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The algorithm to use to generate the API key pair. */
export const CertificateAlgorithm1 = {
  Ecdsa: "ECDSA",
  Rsa: "RSA",
} as const;
export type CertificateAlgorithm1 =
  | (typeof CertificateAlgorithm1)[keyof typeof CertificateAlgorithm1]
  | (string & {});

export const certificateAlgorithm1Schema: EnumSchema<CertificateAlgorithm1> =
  s.enumOf<CertificateAlgorithm1>(CertificateAlgorithm1);
