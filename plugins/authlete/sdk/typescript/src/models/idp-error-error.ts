import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Error response returned by the Authlete IdP server. Unlike the main API's
 * `resultCode`/`resultMessage` format, IdP errors carry a human-readable `error` message,
 * optionally accompanied by contextual fields (such as `organizationId` or `apiServerId`). Request
 * validation failures instead return an `errors` array of per-field messages.
 */
export type IdpErrorError = {
  /** A human-readable error message. */
  error?: string;
  /** Per-field validation error messages, present for request validation failures. */
  errors?: string[];
};

export const idpErrorErrorSchema: Schema<IdpErrorError> = s.object<IdpErrorError>({
  error: s.optional(s.string()),
  errors: s.optional(s.array(s.string())),
});
