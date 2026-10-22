import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { oAuthAppResponseSchema, type OAuthAppResponse } from "./oauth-app-response.js";

/**
 * Response body for `PUT /oauth-clients/{appId}` (`oauth.app.controller.ts` `updateApp`). Updated
 * app (never includes `clientSecret`) is nested under `app`.
 */
export type UpdateOAuthAppResponse = {
  message: string;
  /**
   * OAuth app details (without secret). Fields under `required:` always appear in `toAppResponse`
   * (`oauth.app.service.ts`); optional URL/description fields are only present when set by the
   * caller.
   */
  app: OAuthAppResponse;
};

export const updateOAuthAppResponseSchema: Schema<UpdateOAuthAppResponse> = s.object<UpdateOAuthAppResponse>({
  message: s.string(),
  app: oAuthAppResponseSchema,
});
