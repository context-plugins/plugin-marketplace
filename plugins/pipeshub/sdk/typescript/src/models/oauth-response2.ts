import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { oAuthConfigSchema, type OAuthConfig } from "./oauth-config.js";

export type OauthResponse2 = {
  success: boolean;
  /**
   * A saved OAuth app for a connector type. Admins also get `config` (secrets masked when
   * HIDE_SECRET_CONFIG is on) and, in lists, the provider endpoints.
   */
  oauthConfig: OAuthConfig;
  message: string;
};

export const oauthResponse2Schema: Schema<OauthResponse2> = s.object<OauthResponse2>({
  success: s.boolean(),
  oauthConfig: oAuthConfigSchema,
  message: s.string(),
});
