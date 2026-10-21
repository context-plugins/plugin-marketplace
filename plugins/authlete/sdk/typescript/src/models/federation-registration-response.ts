import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action26Schema, type Action26 } from "./action26.js";
import { clientSchema, type Client } from "./client.js";

export type FederationRegistrationResponse = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
  /** The next action that the authorization server implementation should take. */
  action?: Action26;
  /**
   * The content that the authorization server implementation can use as the value of
   * `WWW-Authenticate` header on errors.
   */
  responseContent?: string;
  client?: Client;
};

export const federationRegistrationResponseSchema: Schema<FederationRegistrationResponse> =
  s.object<FederationRegistrationResponse>({
    resultCode: s.optional(s.string()),
    resultMessage: s.optional(s.string()),
    action: s.optional(s.lazy(() => action26Schema)),
    responseContent: s.optional(s.string()),
    client: s.optional(s.lazy(() => clientSchema)),
  });
