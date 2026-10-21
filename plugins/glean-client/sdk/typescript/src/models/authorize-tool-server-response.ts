import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AuthorizeToolServerResponse = {
  /**
   * URL that the client should navigate the end user to in order to begin the OAuth flow. After the
   * user consents, control returns to `returnUrl` from the request.
   */
  authorizationUrl: string;
};

export const authorizeToolServerResponseSchema: Schema<AuthorizeToolServerResponse> =
  s.object<AuthorizeToolServerResponse>({
    authorizationUrl: s.string(),
  });
