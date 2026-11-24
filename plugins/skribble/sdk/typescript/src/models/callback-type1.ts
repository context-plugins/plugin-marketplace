import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of this callback.
 *
 * Possible values:
 *   - **SUCCESS** Is triggered when the document has been successfully signed by all parties
 *     involved.
 *   - **UPDATE** Is triggered on changes on the `SignatureRequest` object like when one person of
 *     all involved parties has signed.
 *   - **ERROR** Is triggered when a person declines the signature or when the `SignatureRequest` is
 *     withdrawn.
 *   - **START_SIGN** Is triggered when a person starts the signature process (only for Express
 *     QES).
 *   - **IDENT_PENDING** Is triggered when the identification of a person within a signature process
 *     requires manual review.
 *   - **IDENT_ERROR** Is triggered when the identification of a person within a signature process
 *     ended in an error.
 */
export const CallbackType1 = {
  Success: "SUCCESS",
  Update: "UPDATE",
  Error: "ERROR",
  StartSign: "START_SIGN",
  IdentPending: "IDENT_PENDING",
  IdentError: "IDENT_ERROR",
} as const;
export type CallbackType1 = (typeof CallbackType1)[keyof typeof CallbackType1] | (string & {});

export const callbackType1Schema: EnumSchema<CallbackType1> = s.enumOf<CallbackType1>(CallbackType1);
