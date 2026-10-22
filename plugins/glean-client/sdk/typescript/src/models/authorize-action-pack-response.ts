import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AuthorizeActionPackResponse = {
  /**
   * URL that the customer UI should navigate the end user to in order to begin the third-party
   * OAuth flow. After the user consents, control returns to `returnUrl` from the request.
   */
  redirectUrl: string;
};

export const authorizeActionPackResponseSchema: Schema<AuthorizeActionPackResponse> =
  s.object<AuthorizeActionPackResponse>({
    redirectUrl: s.string(),
  });
