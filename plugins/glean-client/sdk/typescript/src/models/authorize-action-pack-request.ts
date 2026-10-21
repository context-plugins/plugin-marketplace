import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AuthorizeActionPackRequest = {
  /**
   * URL on the customer's domain to redirect the end user's browser back to after the third-party
   * OAuth callback completes. Must be present in the tenant's return URL allowlist.
   */
  returnUrl: string;
};

export const authorizeActionPackRequestSchema: Schema<AuthorizeActionPackRequest> =
  s.object<AuthorizeActionPackRequest>({
    returnUrl: s.string(),
  });
