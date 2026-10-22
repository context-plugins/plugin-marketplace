import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OauthTokenTypeHint = {
  AccessToken: "access_token",
  RefreshToken: "refresh_token",
} as const;
export type OauthTokenTypeHint = (typeof OauthTokenTypeHint)[keyof typeof OauthTokenTypeHint] | (string & {});

export const oauthTokenTypeHintSchema: EnumSchema<OauthTokenTypeHint> =
  s.enumOf<OauthTokenTypeHint>(OauthTokenTypeHint);
