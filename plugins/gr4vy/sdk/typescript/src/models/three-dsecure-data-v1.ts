import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scheme3Schema, type Scheme3 } from "./unions/scheme3.js";

export type ThreeDSecureDataV1 = {
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
  /** The response for the 3DS authentication call. */
  authenticationResponse: string;
  /** The CAVV algorithm used. */
  cavvAlgorithm: string;
  /** The transaction identifier. */
  xid: string;
};

export const threeDSecureDataV1Schema: Schema<ThreeDSecureDataV1> = s.object<ThreeDSecureDataV1>({
  cavv: s.string(),
  eci: s.string(),
  version: s.string(),
  directoryResponse: s.string(),
  scheme: s.optional(s.lazy(() => scheme3Schema)),
  authenticationResponse: s.string(),
  cavvAlgorithm: s.string(),
  xid: s.string(),
  _keysMap: {
    directoryResponse: "directory_response",
    authenticationResponse: "authentication_response",
    cavvAlgorithm: "cavv_algorithm",
  },
});
