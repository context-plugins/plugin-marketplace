import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CertificateKeyPairOrigin4 = {
  AwsManaged: "AWS_MANAGED",
  Acme: "ACME",
  CustomerProvided: "CUSTOMER_PROVIDED",
} as const;
export type CertificateKeyPairOrigin4 =
  | (typeof CertificateKeyPairOrigin4)[keyof typeof CertificateKeyPairOrigin4]
  | (string & {});

export const certificateKeyPairOrigin4Schema: EnumSchema<CertificateKeyPairOrigin4> =
  s.enumOf<CertificateKeyPairOrigin4>(CertificateKeyPairOrigin4);
