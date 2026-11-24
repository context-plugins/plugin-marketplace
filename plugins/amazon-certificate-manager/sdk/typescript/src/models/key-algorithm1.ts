import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Filter by key algorithm. */
export const KeyAlgorithm1 = {
  Rsa1024: "RSA_1024",
  Rsa2048: "RSA_2048",
  Rsa3072: "RSA_3072",
  Rsa4096: "RSA_4096",
  EcPrime256V1: "EC_prime256v1",
  EcSecp384R1: "EC_secp384r1",
  EcSecp521R1: "EC_secp521r1",
} as const;
export type KeyAlgorithm1 = (typeof KeyAlgorithm1)[keyof typeof KeyAlgorithm1] | (string & {});

export const keyAlgorithm1Schema: EnumSchema<KeyAlgorithm1> = s.enumOf<KeyAlgorithm1>(KeyAlgorithm1);
