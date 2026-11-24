import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The legislation under which this signer's signature was created. Only present after signing. */
export const SignatureLegislation2 = {
  Zertes: "ZERTES",
  Eidas: "EIDAS",
} as const;
export type SignatureLegislation2 =
  | (typeof SignatureLegislation2)[keyof typeof SignatureLegislation2]
  | (string & {});

export const signatureLegislation2Schema: EnumSchema<SignatureLegislation2> =
  s.enumOf<SignatureLegislation2>(SignatureLegislation2);
