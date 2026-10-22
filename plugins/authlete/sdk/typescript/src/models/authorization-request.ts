import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cimdOptionsSchema, type CimdOptions } from "./cimd-options.js";

export type AuthorizationRequest = {
  /**
   * OAuth 2.0 authorization request parameters which are the request parameters that the OAuth 2.0
   * authorization endpoint of the authorization server implementation received from the client
   * application.
   *
   * The value of parameters is either (1) the entire query string when the HTTP method of the
   * request from the client application is `GET` or (2) the entire entity body (which is formatted
   * in `application/x-www-form-urlencoded`) when the HTTP method of the request from the client
   * application is `POST`.
   */
  parameters: string;
  /**
   * The arbitrary text to be attached to the ticket that will be issued from the
   * `/auth/authorization` API.
   *
   * The text can be retrieved later by the `/auth/authorization/ticket/info` API and can be updated
   * by the `/auth/authorization/ticket/update` API.
   *
   * The text will be compressed and encrypted when it is saved in the Authlete database.
   */
  context?: string;
  /**
   * Options for [OAuth Client ID Metadata
   * Document](https://datatracker.ietf.org/doc/draft-ietf-oauth-client-id-metadata-document/)
   * (CIMD).
   *
   * These options allow per-request control over CIMD behavior, taking precedence over
   * service-level configuration when provided.
   */
  cimdOptions?: CimdOptions;
};

export const authorizationRequestSchema: Schema<AuthorizationRequest> = s.object<AuthorizationRequest>({
  parameters: s.string(),
  context: s.optional(s.string()),
  cimdOptions: s.optional(s.lazy(() => cimdOptionsSchema)),
});
