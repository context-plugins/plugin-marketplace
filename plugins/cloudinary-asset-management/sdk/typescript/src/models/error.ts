import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorCategorySchema, type ErrorCategory } from "./error-category.js";

/**
 * Details of an error, including a coarse category for retry logic, a stable error code, and a
 * human-readable message.
 */
export type Error = {
  /**
   * Coarse classification of an error, primarily used by clients to decide whether to retry.
   * * `user_error`: the request was invalid; do not retry without changes.
   * * `auth_error`: authentication or authorization failed.
   * * `server_error`: an unexpected server-side error; retrying may succeed.
   * * `rate_limit_error`: quota or rate limit exceeded; retry later.
   */
  category?: ErrorCategory;
  /** Stable, machine-readable error code for programmatic handling. */
  code?: string;
  /** Human-readable description of what went wrong. */
  message?: string;
  /** Additional structured context about the error, when available. */
  details?: Record<string, unknown>;
};

export const errorSchema: Schema<Error> = s.object<Error>({
  category: s.optional(s.lazy(() => errorCategorySchema)),
  code: s.optional(s.string()),
  message: s.optional(s.string()),
  details: s.optional(s.record(s.string(), s.unknown())),
});
