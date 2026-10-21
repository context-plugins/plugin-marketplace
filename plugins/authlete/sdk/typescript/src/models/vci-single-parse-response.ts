import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action36Schema, type Action36 } from "./action36.js";
import { credentialRequestInfoSchema, type CredentialRequestInfo } from "./credential-request-info.js";

export type VciSingleParseResponse = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
  /** The next action that the credential endpoint should take. */
  action?: Action36;
  /** The content of the response to the request sender. */
  responseContent?: string;
  info?: CredentialRequestInfo;
};

export const vciSingleParseResponseSchema: Schema<VciSingleParseResponse> = s.object<VciSingleParseResponse>({
  resultCode: s.optional(s.string()),
  resultMessage: s.optional(s.string()),
  action: s.optional(s.lazy(() => action36Schema)),
  responseContent: s.optional(s.string()),
  info: s.optional(s.lazy(() => credentialRequestInfoSchema)),
});
