import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The state of a signature.
 *
 * Possible values:
 *   - **DRAFT** The signature request has not yet been placed.
 *   - **OPEN** Waiting for the user to sign a signature.
 *   - **WAITING** The signer is waiting for a preceding signer in the sequence to complete.
 *   - **DECLINED** The user declined to sign.
 *   - **WITHDRAWN** The owner has withdrawn the signature request.
 *   - **SIGNED** The user signed the document.
 *   - **ERROR** A technical error occurred.
 */
export const SignatureStatusCode = {
  Draft: "DRAFT",
  Open: "OPEN",
  Waiting: "WAITING",
  Declined: "DECLINED",
  Withdrawn: "WITHDRAWN",
  Signed: "SIGNED",
  Error: "ERROR",
} as const;
export type SignatureStatusCode =
  | (typeof SignatureStatusCode)[keyof typeof SignatureStatusCode]
  | (string & {});

export const signatureStatusCodeSchema: EnumSchema<SignatureStatusCode> =
  s.enumOf<SignatureStatusCode>(SignatureStatusCode);
