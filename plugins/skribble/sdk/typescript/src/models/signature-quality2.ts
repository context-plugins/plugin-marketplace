import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The actual quality of this signer's signature. Only present after signing. */
export const SignatureQuality2 = {
  Ses: "SES",
  Aes: "AES",
  AesMinimal: "AES_MINIMAL",
  Qes: "QES",
  Demo: "DEMO",
  Part11: "PART11",
} as const;
export type SignatureQuality2 = (typeof SignatureQuality2)[keyof typeof SignatureQuality2] | (string & {});

export const signatureQuality2Schema: EnumSchema<SignatureQuality2> =
  s.enumOf<SignatureQuality2>(SignatureQuality2);
