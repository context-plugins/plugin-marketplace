import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ClientRegistrationRequest = {
  /**
   * Client metadata in JSON format that complies with [RFC
   * 7591](https://datatracker.ietf.org/doc/html/rfc7591) (OAuth 2.0 Dynamic Client Registration
   * Protocol).
   */
  json?: string;
  /** The client registration access token. Used only for GET, UPDATE, and DELETE requests. */
  token?: string;
  /** The client's identifier. Used for GET, UPDATE, and DELETE requests */
  clientId?: string;
};

export const clientRegistrationRequestSchema: Schema<ClientRegistrationRequest> =
  s.object<ClientRegistrationRequest>({
    json: s.optional(s.string()),
    token: s.optional(s.string()),
    clientId: s.optional(s.string()),
  });
