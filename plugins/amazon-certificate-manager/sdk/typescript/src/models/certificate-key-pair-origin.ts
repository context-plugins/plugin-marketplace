import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The origin of the certificate's key pair. */
export const CertificateKeyPairOrigin = {
  AwsManaged: "AWS_MANAGED",
  Acme: "ACME",
  CustomerProvided: "CUSTOMER_PROVIDED",
} as const;
export type CertificateKeyPairOrigin =
  | (typeof CertificateKeyPairOrigin)[keyof typeof CertificateKeyPairOrigin]
  | (string & {});

export const certificateKeyPairOriginSchema: EnumSchema<CertificateKeyPairOrigin> =
  s.enumOf<CertificateKeyPairOrigin>(CertificateKeyPairOrigin);
