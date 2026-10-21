import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Error payload. */
export type Error15 = {
  /**
   * Identifier for this request, echoed so a bug report can quote it. Absent when the request never
   * reached the middleware that assigns one.
   */
  requestId?: string;
  /**
   * Machine-readable error code. For this status the value is `HTTP_UNAUTHORIZED` (missing,
   * invalid, or expired bearer token, user no longer exists, or the session has been invalidated).
   */
  code: string;
  /** Human-readable description of the failure. */
  message: string;
};

export const error15Schema: Schema<Error15> = s.object<Error15>({
  requestId: s.optional(s.string()),
  code: s.string(),
  message: s.string(),
});
