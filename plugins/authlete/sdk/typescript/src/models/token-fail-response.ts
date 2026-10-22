import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action5Schema, type Action5 } from "./action5.js";

export type TokenFailResponse = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
  /** The next action that the authorization server implementation should take. */
  action?: Action5;
  /**
   * The content that the authorization server implementation is to return to the client
   * application. Its format varies depending on the value of `action` parameter. See description
   * for details.
   */
  responseContent?: string;
};

export const tokenFailResponseSchema: Schema<TokenFailResponse> = s.object<TokenFailResponse>({
  resultCode: s.optional(s.string()),
  resultMessage: s.optional(s.string()),
  action: s.optional(s.lazy(() => action5Schema)),
  responseContent: s.optional(s.string()),
});
