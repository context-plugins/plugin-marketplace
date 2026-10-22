import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AllowedGrantType = {
  AuthorizationCode: "authorization_code",
  ClientCredentials: "client_credentials",
  RefreshToken: "refresh_token",
} as const;
export type AllowedGrantType = (typeof AllowedGrantType)[keyof typeof AllowedGrantType] | (string & {});

export const allowedGrantTypeSchema: EnumSchema<AllowedGrantType> =
  s.enumOf<AllowedGrantType>(AllowedGrantType);
