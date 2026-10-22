import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action25Schema, type Action25 } from "./action25.js";

export type FederationConfigurationResponse = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
  /** The next action that the authorization server implementation should take. */
  action?: Action25;
  /**
   * The content that the authorization server implementation is to return to the client
   * application. Its format varies depending on the value of `action` parameter.
   */
  responseContent?: string;
};

export const federationConfigurationResponseSchema: Schema<FederationConfigurationResponse> =
  s.object<FederationConfigurationResponse>({
    resultCode: s.optional(s.string()),
    resultMessage: s.optional(s.string()),
    action: s.optional(s.lazy(() => action25Schema)),
    responseContent: s.optional(s.string()),
  });
