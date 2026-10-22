import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CertificateAlgorithm = {
  Ecdsa: "ECDSA",
  Rsa: "RSA",
} as const;
export type CertificateAlgorithm =
  | (typeof CertificateAlgorithm)[keyof typeof CertificateAlgorithm]
  | (string & {});

export const certificateAlgorithmSchema: EnumSchema<CertificateAlgorithm> =
  s.enumOf<CertificateAlgorithm>(CertificateAlgorithm);
