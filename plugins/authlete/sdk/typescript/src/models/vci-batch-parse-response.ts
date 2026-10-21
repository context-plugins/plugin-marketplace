import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action38Schema, type Action38 } from "./action38.js";
import { credentialRequestInfoSchema, type CredentialRequestInfo } from "./credential-request-info.js";

export type VciBatchParseResponse = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
  /** The next action that the batch credential endpoint should take. */
  action?: Action38;
  /** The content of the response to the request sender. */
  responseContent?: string;
  /** Information about the credential requests in the batch credential request. */
  info?: CredentialRequestInfo[];
};

export const vciBatchParseResponseSchema: Schema<VciBatchParseResponse> = s.object<VciBatchParseResponse>({
  resultCode: s.optional(s.string()),
  resultMessage: s.optional(s.string()),
  action: s.optional(s.lazy(() => action38Schema)),
  responseContent: s.optional(s.string()),
  info: s.optional(s.array(s.lazy(() => credentialRequestInfoSchema))),
});
