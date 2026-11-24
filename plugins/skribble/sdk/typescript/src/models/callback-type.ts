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
 *   - **INITIATE** Is triggered when the signature request is initiated via the endpoint.
 *   - **ERROR** Is triggered when a person declines the signature or when the `SignatureRequest` is
 *     withdrawn.
 *   - **START_SIGN** Is triggered when a person starts the signature process (only for Express
 *     QES).
 *   - **IDENT_PENDING** Is triggered when the identification of a person within a signature process
 *     requires manual review.
 *   - **IDENT_ERROR** Is triggered when the identification of a person within a signature process
 *     ended in an error.
 */
export const CallbackType = {
  Success: "SUCCESS",
  Update: "UPDATE",
  Error: "ERROR",
  StartSign: "START_SIGN",
  Initiate: "INITIATE",
  IdentPending: "IDENT_PENDING",
  IdentError: "IDENT_ERROR",
} as const;
export type CallbackType = (typeof CallbackType)[keyof typeof CallbackType] | (string & {});

export const callbackTypeSchema: EnumSchema<CallbackType> = s.enumOf<CallbackType>(CallbackType);
