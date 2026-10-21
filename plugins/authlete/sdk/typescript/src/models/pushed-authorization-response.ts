import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action3Schema, type Action3 } from "./action3.js";
import { clientAuthMethodSchema, type ClientAuthMethod } from "./client-auth-method.js";

export type PushedAuthorizationResponse = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
  /**
   * The next action that the authorization server implementation should take. Any other value other
   * than "CREATED" should be handled as unsuccessful result.
   */
  action?: Action3;
  /** The request_uri created to the client to be used as request_uri on the authorize call. */
  requestUri?: string;
  /**
   * The content that the authorization server implementation is to return to the client
   * application.
   */
  responseContent?: string;
  /**
   * The client authentication method that the client application declares that it uses at the token
   * endpoint. This property corresponds to `token_endpoint_auth_method` in [OpenID Connect Dynamic
   * Client Registration 1.0, 2. Client
   * Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata).
   */
  clientAuthMethod?: ClientAuthMethod;
  /**
   * Get the expected nonce value for DPoP proof JWT, which should be used as the value of the
   * `DPoP-Nonce` HTTP header.
   */
  dpopNonce?: string;
};

export const pushedAuthorizationResponseSchema: Schema<PushedAuthorizationResponse> =
  s.object<PushedAuthorizationResponse>({
    resultCode: s.optional(s.string()),
    resultMessage: s.optional(s.string()),
    action: s.optional(s.lazy(() => action3Schema)),
    requestUri: s.optional(s.string()),
    responseContent: s.optional(s.string()),
    clientAuthMethod: s.optional(s.lazy(() => clientAuthMethodSchema)),
    dpopNonce: s.optional(s.string()),
  });
