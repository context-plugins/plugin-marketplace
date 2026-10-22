import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Response body for `POST /oauth-clients/{appId}/regenerate-secret` (`regenerateSecret`). */
export type RegenerateOAuthAppSecretResponse = {
  message: string;
  /** OAuth client ID (unchanged) */
  clientId: string;
  /** New client secret (store securely; previous secret is invalidated) */
  clientSecret: string;
};

export const regenerateOAuthAppSecretResponseSchema: Schema<RegenerateOAuthAppSecretResponse> =
  s.object<RegenerateOAuthAppSecretResponse>({
    message: s.string(),
    clientId: s.string(),
    clientSecret: s.string(),
  });
