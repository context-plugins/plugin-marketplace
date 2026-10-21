import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action12Schema, type Action12 } from "./action12.js";

export type NativeSsoResponse = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
  /** The next action that the implementation of the token endpoint should take. */
  action?: Action12;
  /**
   * The response content that can be used as the message body of the token response that should be
   * returned from the token endpoint.
   */
  responseContent?: string;
  /** The issued ID token. */
  idToken?: string;
};

export const nativeSsoResponseSchema: Schema<NativeSsoResponse> = s.object<NativeSsoResponse>({
  resultCode: s.optional(s.string()),
  resultMessage: s.optional(s.string()),
  action: s.optional(s.lazy(() => action12Schema)),
  responseContent: s.optional(s.string()),
  idToken: s.optional(s.string()),
});
