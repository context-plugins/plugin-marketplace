import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { refreshTokenUserSchema, type RefreshTokenUser } from "./refresh-token-user.js";

/** Response with new access token */
export type RefreshTokenResponse = {
  /** User record returned with a refreshed access token */
  user: RefreshTokenUser;
  /** New JWT access token (24 hour default expiry, configurable via ACCESS_TOKEN_EXPIRY) */
  accessToken: string;
};

export const refreshTokenResponseSchema: Schema<RefreshTokenResponse> = s.object<RefreshTokenResponse>({
  user: refreshTokenUserSchema,
  accessToken: s.string(),
});
