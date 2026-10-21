import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConnectorsOauthCallbackResponse = {
  success: boolean;
  /** Where the web app would send the user next */
  redirectUrl?: string;
  error?: string;
  errorMessage?: string;
};

export const connectorsOauthCallbackResponseSchema: Schema<ConnectorsOauthCallbackResponse> =
  s.object<ConnectorsOauthCallbackResponse>({
    success: s.boolean(),
    redirectUrl: s.optional(s.string()),
    error: s.optional(s.string()),
    errorMessage: s.optional(s.string()),
  });
