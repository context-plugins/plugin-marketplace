import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AuthorizeToolServerRequest = {
  /**
   * URL to redirect the end user's browser back to after the OAuth flow completes. Must be present
   * in the tenant's configured return URL allowlist.
   */
  returnUrl: string;
};

export const authorizeToolServerRequestSchema: Schema<AuthorizeToolServerRequest> =
  s.object<AuthorizeToolServerRequest>({
    returnUrl: s.string(),
  });
