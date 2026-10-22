import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action16Schema, type Action16 } from "./action16.js";

export type BackchannelAuthenticationIssueResponse = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
  /** The next action that the authorization server implementation should take. */
  action?: Action16;
  /**
   * The content that the authorization server implementation is to return to the client
   * application. Its format varies depending on the value of `action` parameter.
   */
  responseContent?: string;
  /** The newly issued authentication request ID. */
  authReqId?: string;
  /** The duration of the issued authentication request ID in seconds. */
  expiresIn?: number;
  /**
   * The minimum amount of time in seconds that the client must wait for between polling requests to
   * the token endpoint.
   */
  interval?: number;
};

export const backchannelAuthenticationIssueResponseSchema: Schema<BackchannelAuthenticationIssueResponse> =
  s.object<BackchannelAuthenticationIssueResponse>({
    resultCode: s.optional(s.string()),
    resultMessage: s.optional(s.string()),
    action: s.optional(s.lazy(() => action16Schema)),
    responseContent: s.optional(s.string()),
    authReqId: s.optional(s.string()),
    expiresIn: s.optional(s.int()),
    interval: s.optional(s.int()),
  });
