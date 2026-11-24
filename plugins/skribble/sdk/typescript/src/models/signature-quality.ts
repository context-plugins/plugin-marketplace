import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Minimal quality of the signatures for this signature request.
 *
 * | Quality | Description |
 * | --- | --- |
 * | **QES** | Every signer must use QES. This is the **default** quality. Requires a `legislation` parameter. |
 * | **AES_MINIMAL** | Signers will use QES if available, otherwise AES. At least AES is guaranteed. Requires a `legislation` parameter. |
 * | **AES** | Every signer uses AES. |
 * | **SES** | Every signer uses SES. |
 * | **DEMO** | Every signer uses a DEMO signature with **no legal binding**. API demo users (`api_demo_example_*`) get this quality by default. |
 * | **PART11** | Signers use a signature compliant with 21 CFR Part 11 regulations. |
 */
export const SignatureQuality = {
  Ses: "SES",
  Aes: "AES",
  AesMinimal: "AES_MINIMAL",
  Qes: "QES",
  Demo: "DEMO",
  Part11: "PART11",
} as const;
export type SignatureQuality = (typeof SignatureQuality)[keyof typeof SignatureQuality] | (string & {});

export const signatureQualitySchema: EnumSchema<SignatureQuality> =
  s.enumOf<SignatureQuality>(SignatureQuality);
