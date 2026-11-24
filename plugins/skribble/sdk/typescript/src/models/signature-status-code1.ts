import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The state of a signature.
 *
 * Possible values:
 *   - **OPEN** Waiting for the user to sign a signature.
 *   - **WAITING** The signer is waiting for a preceding signer in the sequence to complete.
 *   - **DECLINED** The user declined to sign.
 *   - **WITHDRAWN** The owner has withdrawn the signature request.
 *   - **SIGNED** The user signed the document.
 *   - **ERROR** A technical error occurred.
 */
export const SignatureStatusCode1 = {
  Open: "OPEN",
  Waiting: "WAITING",
  Declined: "DECLINED",
  Withdrawn: "WITHDRAWN",
  Signed: "SIGNED",
  Error: "ERROR",
} as const;
export type SignatureStatusCode1 =
  | (typeof SignatureStatusCode1)[keyof typeof SignatureStatusCode1]
  | (string & {});

export const signatureStatusCode1Schema: EnumSchema<SignatureStatusCode1> =
  s.enumOf<SignatureStatusCode1>(SignatureStatusCode1);
