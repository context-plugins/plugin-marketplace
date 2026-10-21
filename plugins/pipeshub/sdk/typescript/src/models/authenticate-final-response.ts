import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** All authentication steps complete; JWT tokens returned */
export type AuthenticateFinalResponse = {
  /** Success message */
  message: string;
  /** JWT access token (1 hour expiry) */
  accessToken: string;
  /** JWT refresh token (7 days expiry) */
  refreshToken: string;
};

export const authenticateFinalResponseSchema: Schema<AuthenticateFinalResponse> =
  s.object<AuthenticateFinalResponse>({
    message: s.string(),
    accessToken: s.string(),
    refreshToken: s.string(),
  });
