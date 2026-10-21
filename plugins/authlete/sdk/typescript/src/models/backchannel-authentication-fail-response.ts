import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action17Schema, type Action17 } from "./action17.js";

export type BackchannelAuthenticationFailResponse = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
  /** The next action that the authorization server implementation should take. */
  action?: Action17;
  /**
   * The content that the authorization server implementation is to return to the client
   * application. Its format varies depending on the value of `action` parameter.
   */
  responseContent?: string;
};

export const backchannelAuthenticationFailResponseSchema: Schema<BackchannelAuthenticationFailResponse> =
  s.object<BackchannelAuthenticationFailResponse>({
    resultCode: s.optional(s.string()),
    resultMessage: s.optional(s.string()),
    action: s.optional(s.lazy(() => action17Schema)),
    responseContent: s.optional(s.string()),
  });
