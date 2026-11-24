import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The algorithm that was used to generate the public-private key pair. */
export const KeyAlgorithm = {
  Rsa1024: "RSA_1024",
  Rsa2048: "RSA_2048",
  Rsa3072: "RSA_3072",
  Rsa4096: "RSA_4096",
  EcPrime256V1: "EC_prime256v1",
  EcSecp384R1: "EC_secp384r1",
  EcSecp521R1: "EC_secp521r1",
} as const;
export type KeyAlgorithm = (typeof KeyAlgorithm)[keyof typeof KeyAlgorithm] | (string & {});

export const keyAlgorithmSchema: EnumSchema<KeyAlgorithm> = s.enumOf<KeyAlgorithm>(KeyAlgorithm);
