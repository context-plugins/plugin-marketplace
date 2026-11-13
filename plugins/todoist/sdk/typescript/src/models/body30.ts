import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Body30 = {
  /** The unique Client ID of the Todoist application that you registered. */
  clientId: string;
  /** The unique Client Secret of the Todoist application that you registered. */
  clientSecret: string;
  /** Token obtained from the email/password authentication. */
  personalToken: string;
  /**
   * Scopes of the OAuth token. Please refer to the [Authorization](#tag/Authorization) guide for
   * the detailed list of available scopes.
   */
  scope: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const body30Schema: Schema<Body30> = s.object<Body30>(
  {
    clientId: s.string(),
    clientSecret: s.string(),
    personalToken: s.string(),
    scope: s.string(),
    _keysMap: {
      clientId: "client_id",
      clientSecret: "client_secret",
      personalToken: "personal_token",
    },
  },
  { additionalProperties: s.json() },
);
