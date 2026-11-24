import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type OAuthApp = {
  name: string;
  clientId: string;
  description: string;
  link: string;
  requireOauthPkce: boolean;
  /**
   * True for Bitly's own first-party apps (dashboard, mobile apps), as opposed to third-party
   * integrations.
   */
  internalApp?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oAuthAppSchema: Schema<OAuthApp> = s.object<OAuthApp>(
  {
    name: s.string(),
    clientId: s.string(),
    description: s.string(),
    link: s.string(),
    requireOauthPkce: s.boolean(),
    internalApp: s.optional(s.boolean()),
    _keysMap: {
      clientId: "client_id",
      requireOauthPkce: "require_oauth_pkce",
      internalApp: "internal_app",
    },
  },
  { additionalProperties: s.json() },
);
