import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies the algorithm of the public and private key pair that your certificate uses to encrypt
 * data. RSA is the default key algorithm for ACM certificates. Elliptic Curve Digital Signature
 * Algorithm (ECDSA) keys are smaller, offering security comparable to RSA keys but with greater
 * computing efficiency. However, ECDSA is not supported by all network clients. Some Amazon Web
 * Services services may require RSA keys, or only support ECDSA keys of a particular size, while
 * others allow the use of either RSA and ECDSA keys to ensure that compatibility is not broken.
 * Check the requirements for the A
 */
export const KeyAlgorithmAwsCertificateManagerOperationsApi = {
  Rsa1024: "RSA_1024",
  Rsa2048: "RSA_2048",
  Rsa3072: "RSA_3072",
  Rsa4096: "RSA_4096",
  EcPrime256V1: "EC_prime256v1",
  EcSecp384R1: "EC_secp384r1",
  EcSecp521R1: "EC_secp521r1",
} as const;
export type KeyAlgorithmAwsCertificateManagerOperationsApi =
  | (typeof KeyAlgorithmAwsCertificateManagerOperationsApi)[keyof typeof KeyAlgorithmAwsCertificateManagerOperationsApi]
  | (string & {});

export const keyAlgorithmAwsCertificateManagerOperationsApiSchema: EnumSchema<KeyAlgorithmAwsCertificateManagerOperationsApi> =
  s.enumOf<KeyAlgorithmAwsCertificateManagerOperationsApi>(KeyAlgorithmAwsCertificateManagerOperationsApi);
