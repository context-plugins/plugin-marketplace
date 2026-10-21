import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action33Schema, type Action33 } from "./action33.js";

export type VciJwksResponse = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
  /**
   * The next action that the implementation of the JWK Set document endpoint of the credential
   * issuer should take after getting a response from Authlete's `/vci/jwks` API.
   */
  action?: Action33;
  /**
   * Get the content that the implementation of the credential issuer metadata endpoint should use
   * when it constructs a response.
   */
  responseContent?: string;
};

export const vciJwksResponseSchema: Schema<VciJwksResponse> = s.object<VciJwksResponse>({
  resultCode: s.optional(s.string()),
  resultMessage: s.optional(s.string()),
  action: s.optional(s.lazy(() => action33Schema)),
  responseContent: s.optional(s.string()),
});
