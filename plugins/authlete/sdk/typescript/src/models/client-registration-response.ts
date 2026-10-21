import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action14Schema, type Action14 } from "./action14.js";
import { clientSchema, type Client } from "./client.js";

export type ClientRegistrationResponse = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
  /** The next action that the authorization server implementation should take. */
  action?: Action14;
  /**
   * The content that the authorization server implementation is to return to the client
   * application. Its format varies depending on the value of `action` parameter.
   */
  responseContent?: string;
  client?: Client;
};

export const clientRegistrationResponseSchema: Schema<ClientRegistrationResponse> =
  s.object<ClientRegistrationResponse>({
    resultCode: s.optional(s.string()),
    resultMessage: s.optional(s.string()),
    action: s.optional(s.lazy(() => action14Schema)),
    responseContent: s.optional(s.string()),
    client: s.optional(s.lazy(() => clientSchema)),
  });
