import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { oAuthAppWithSecretSchema, type OAuthAppWithSecret } from "./oauth-app-with-secret.js";

/**
 * Response body for `POST /oauth-clients` (`oauth.app.controller.ts` `createApp`). The new app
 * (including one-time `clientSecret`) is nested under `app`.
 */
export type CreateOAuthAppResponse = {
  message: string;
  app: OAuthAppWithSecret;
};

export const createOAuthAppResponseSchema: Schema<CreateOAuthAppResponse> = s.object<CreateOAuthAppResponse>({
  message: s.string(),
  app: oAuthAppWithSecretSchema,
});
