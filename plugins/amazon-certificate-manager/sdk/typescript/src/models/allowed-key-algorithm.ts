import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AllowedKeyAlgorithm = {
  Rsa2048: "RSA_2048",
  EcPrime256V1: "EC_prime256v1",
  EcSecp384R1: "EC_secp384r1",
} as const;
export type AllowedKeyAlgorithm =
  | (typeof AllowedKeyAlgorithm)[keyof typeof AllowedKeyAlgorithm]
  | (string & {});

export const allowedKeyAlgorithmSchema: EnumSchema<AllowedKeyAlgorithm> =
  s.enumOf<AllowedKeyAlgorithm>(AllowedKeyAlgorithm);
