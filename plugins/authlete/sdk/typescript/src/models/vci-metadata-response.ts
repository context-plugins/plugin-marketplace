import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action31Schema, type Action31 } from "./action31.js";

export type VciMetadataResponse = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
  /**
   * The next action that the implementation of the credential issuer metadata endpoint
   * (`/.well-known/openid-credential-issuer`) should take after getting a response from Authlete's
   * `/vci/metadata` API.
   */
  action?: Action31;
  /**
   * Get the content that the implementation of the credential issuer metadata endpoint should use
   * when it constructs a response.
   */
  responseContent?: string;
};

export const vciMetadataResponseSchema: Schema<VciMetadataResponse> = s.object<VciMetadataResponse>({
  resultCode: s.optional(s.string()),
  resultMessage: s.optional(s.string()),
  action: s.optional(s.lazy(() => action31Schema)),
  responseContent: s.optional(s.string()),
});
