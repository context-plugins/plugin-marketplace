import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error2Schema, type Error2 } from "./error2.js";

/**
 * JSON body when OAuth client management routes exceed the per-minute rate limit (same limiter as
 * other `/oauth-clients/*` routes).
 */
export type OAuthClientManagementRateLimitError = {
  error: Error2;
};

export const oAuthClientManagementRateLimitErrorSchema: Schema<OAuthClientManagementRateLimitError> =
  s.object<OAuthClientManagementRateLimitError>({
    error: error2Schema,
  });
