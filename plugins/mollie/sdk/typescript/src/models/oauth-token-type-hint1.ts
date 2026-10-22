import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of token you want to revoke. */
export const OauthTokenTypeHint1 = {
  AccessToken: "access_token",
  RefreshToken: "refresh_token",
} as const;
export type OauthTokenTypeHint1 =
  | (typeof OauthTokenTypeHint1)[keyof typeof OauthTokenTypeHint1]
  | (string & {});

export const oauthTokenTypeHint1Schema: EnumSchema<OauthTokenTypeHint1> =
  s.enumOf<OauthTokenTypeHint1>(OauthTokenTypeHint1);
