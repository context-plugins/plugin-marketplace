import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authenticationResponseSchema,
  type AuthenticationResponse,
} from "./unions/authentication-response.js";
import { scheme3Schema, type Scheme3 } from "./unions/scheme3.js";

export type ThreeDSecureDataV2 = {
  /** The cardholder authentication value or AAV. */
  cavv: string;
  /** The ecommerce indicator for the 3DS transaction. */
  eci: string;
  /** The version of 3-D Secure that was used. */
  version: string;
  /**
   * For 3-D Secure version 1, the enrolment response. For 3-D Secure version 2 and above, the
   * transaction status from the `ARes`.
   */
  directoryResponse: string;
  /** The scheme/brand of the card that is used for 3-D Secure. */
  scheme?: Scheme3;
  /**
   * The transaction status after a the 3DS challenge. This will be null in case of a frictionless
   * 3DS flow.
   */
  authenticationResponse?: AuthenticationResponse;
  /** The transaction identifier. */
  directoryTransactionId: string;
};

export const threeDSecureDataV2Schema: Schema<ThreeDSecureDataV2> = s.object<ThreeDSecureDataV2>({
  cavv: s.string(),
  eci: s.string(),
  version: s.string(),
  directoryResponse: s.string(),
  scheme: s.optional(s.lazy(() => scheme3Schema)),
  authenticationResponse: s.optional(s.lazy(() => authenticationResponseSchema)),
  directoryTransactionId: s.string(),
  _keysMap: {
    directoryResponse: "directory_response",
    authenticationResponse: "authentication_response",
    directoryTransactionId: "directory_transaction_id",
  },
});
