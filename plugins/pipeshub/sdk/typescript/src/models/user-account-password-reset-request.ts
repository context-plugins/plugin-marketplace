import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserAccountPasswordResetRequest = {
  currentPassword: string;
  newPassword: string;
  /** Cloudflare Turnstile CAPTCHA token (required when Turnstile is configured server-side) */
  cfTurnstileResponse?: string;
};

export const userAccountPasswordResetRequestSchema: Schema<UserAccountPasswordResetRequest> =
  s.object<UserAccountPasswordResetRequest>({
    currentPassword: s.string(),
    newPassword: s.string(),
    cfTurnstileResponse: s.optional(s.string()),
    _keysMap: {
      cfTurnstileResponse: "cf-turnstile-response",
    },
  });
