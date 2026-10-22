import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action32Schema, type Action32 } from "./action32.js";

export type VciJwtissuerResponse = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
  /**
   * The next action that the implementation of the JWT issuer metadata endpoint
   * (`/.well-known/jwt-issuer`) should take after getting a response from Authlete's
   * `/vci/jwtissuer` API.
   */
  action?: Action32;
  /**
   * Get the content that the implementation of the credential issuer metadata endpoint should use
   * when it constructs a response.
   */
  responseContent?: string;
};

export const vciJwtissuerResponseSchema: Schema<VciJwtissuerResponse> = s.object<VciJwtissuerResponse>({
  resultCode: s.optional(s.string()),
  resultMessage: s.optional(s.string()),
  action: s.optional(s.lazy(() => action32Schema)),
  responseContent: s.optional(s.string()),
});
