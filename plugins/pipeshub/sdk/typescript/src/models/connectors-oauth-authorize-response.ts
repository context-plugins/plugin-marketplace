import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConnectorsOauthAuthorizeResponse = {
  success: boolean;
  /** Open in a browser to give consent */
  authorizationUrl: string;
  /** Pass back with the provider's code to the callback */
  state: string;
};

export const connectorsOauthAuthorizeResponseSchema: Schema<ConnectorsOauthAuthorizeResponse> =
  s.object<ConnectorsOauthAuthorizeResponse>({
    success: s.boolean(),
    authorizationUrl: s.string(),
    state: s.string(),
  });
