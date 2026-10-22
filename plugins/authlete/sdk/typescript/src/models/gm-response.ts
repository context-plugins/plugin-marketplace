import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action13Schema, type Action13 } from "./action13.js";

export type GmResponse = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
  /** The next action that the authorization server implementation should take. */
  action?: Action13;
  /**
   * The content that the authorization server implementation is to return to the client
   * application. Its format varies depending on the value of `action` parameter.
   */
  responseContent?: string;
  /**
   * Get the expected nonce value for DPoP proof JWT, which should be used as the value of the
   * `DPoP-Nonce` HTTP header.
   */
  dpopNonce?: string;
};

export const gmResponseSchema: Schema<GmResponse> = s.object<GmResponse>({
  resultCode: s.optional(s.string()),
  resultMessage: s.optional(s.string()),
  action: s.optional(s.lazy(() => action13Schema)),
  responseContent: s.optional(s.string()),
  dpopNonce: s.optional(s.string()),
});
