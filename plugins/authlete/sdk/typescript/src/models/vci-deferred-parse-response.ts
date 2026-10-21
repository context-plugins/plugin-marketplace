import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action40Schema, type Action40 } from "./action40.js";
import { credentialRequestInfoSchema, type CredentialRequestInfo } from "./credential-request-info.js";

export type VciDeferredParseResponse = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
  /** The next action that the deferred credential endpoint should take. */
  action?: Action40;
  /** The content of the response to the request sender. */
  responseContent?: string;
  info?: CredentialRequestInfo;
};

export const vciDeferredParseResponseSchema: Schema<VciDeferredParseResponse> =
  s.object<VciDeferredParseResponse>({
    resultCode: s.optional(s.string()),
    resultMessage: s.optional(s.string()),
    action: s.optional(s.lazy(() => action40Schema)),
    responseContent: s.optional(s.string()),
    info: s.optional(s.lazy(() => credentialRequestInfoSchema)),
  });
