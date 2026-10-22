import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OauthGrantType = {
  AuthorizationCode: "authorization_code",
  RefreshToken: "refresh_token",
} as const;
export type OauthGrantType = (typeof OauthGrantType)[keyof typeof OauthGrantType] | (string & {});

export const oauthGrantTypeSchema: EnumSchema<OauthGrantType> = s.enumOf<OauthGrantType>(OauthGrantType);
