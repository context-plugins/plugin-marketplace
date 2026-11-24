import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Filter by certificate key pair origin. */
export const CertificateKeyPairOrigin1 = {
  AwsManaged: "AWS_MANAGED",
  Acme: "ACME",
  CustomerProvided: "CUSTOMER_PROVIDED",
} as const;
export type CertificateKeyPairOrigin1 =
  | (typeof CertificateKeyPairOrigin1)[keyof typeof CertificateKeyPairOrigin1]
  | (string & {});

export const certificateKeyPairOrigin1Schema: EnumSchema<CertificateKeyPairOrigin1> =
  s.enumOf<CertificateKeyPairOrigin1>(CertificateKeyPairOrigin1);
