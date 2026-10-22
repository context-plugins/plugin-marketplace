import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { oAuthAppResponseSchema, type OAuthAppResponse } from "./oauth-app-response.js";

/**
 * Response body for `POST /oauth-clients/{appId}/suspend` (`oauth.app.controller.ts` `suspendApp`).
 * Suspended app (never includes `clientSecret`) is nested under `app`.
 */
export type SuspendOAuthAppResponse = {
  message: string;
  /**
   * OAuth app details (without secret). Fields under `required:` always appear in `toAppResponse`
   * (`oauth.app.service.ts`); optional URL/description fields are only present when set by the
   * caller.
   */
  app: OAuthAppResponse;
};

export const suspendOAuthAppResponseSchema: Schema<SuspendOAuthAppResponse> =
  s.object<SuspendOAuthAppResponse>({
    message: s.string(),
    app: oAuthAppResponseSchema,
  });
