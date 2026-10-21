import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Response after authenticated user changes password (new access token issued) */
export type AuthenticatedPasswordResetResponse = {
  data: string;
  /** New JWT access token after password change */
  accessToken: string;
};

export const authenticatedPasswordResetResponseSchema: Schema<AuthenticatedPasswordResetResponse> =
  s.object<AuthenticatedPasswordResetResponse>({
    data: s.string(),
    accessToken: s.string(),
  });
