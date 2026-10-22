import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Coarse classification of an error, primarily used by clients to decide whether to retry.
 * * `user_error`: the request was invalid; do not retry without changes.
 * * `auth_error`: authentication or authorization failed.
 * * `server_error`: an unexpected server-side error; retrying may succeed.
 * * `rate_limit_error`: quota or rate limit exceeded; retry later.
 */
export const ErrorCategory = {
  UserError: "user_error",
  AuthError: "auth_error",
  ServerError: "server_error",
  RateLimitError: "rate_limit_error",
} as const;
export type ErrorCategory = (typeof ErrorCategory)[keyof typeof ErrorCategory] | (string & {});

export const errorCategorySchema: EnumSchema<ErrorCategory> = s.enumOf<ErrorCategory>(ErrorCategory);
