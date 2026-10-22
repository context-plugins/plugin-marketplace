import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type JoseVerifyResponse = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
  /** The result of the verification on the JOSE object. */
  valid?: boolean;
  /** The result of the signature verification. */
  signatureValid?: boolean;
  /** The list of missing claims. */
  missingClaims?: string[];
  /** The list of invalid claims. */
  invalidClaims?: string[];
  /** The list of error messages. */
  errorDescriptions?: string[];
};

export const joseVerifyResponseSchema: Schema<JoseVerifyResponse> = s.object<JoseVerifyResponse>({
  resultCode: s.optional(s.string()),
  resultMessage: s.optional(s.string()),
  valid: s.optional(s.boolean()),
  signatureValid: s.optional(s.boolean()),
  missingClaims: s.optional(s.array(s.string())),
  invalidClaims: s.optional(s.array(s.string())),
  errorDescriptions: s.optional(s.array(s.string())),
});
