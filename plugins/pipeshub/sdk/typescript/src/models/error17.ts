import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Error payload. */
export type Error17 = {
  /**
   * Identifier for this request, echoed so a bug report can quote it. Absent when the request never
   * reached the middleware that assigns one.
   */
  requestId?: string;
  /**
   * Machine-readable error code. For this status the value is `HTTP_INTERNAL_SERVER_ERROR` for an
   * explicit server-side failure, or `INTERNAL_ERROR` for an unhandled exception coerced by the
   * global error middleware.
   */
  code: string;
  /** Human-readable description of the failure. */
  message: string;
};

export const error17Schema: Schema<Error17> = s.object<Error17>({
  requestId: s.optional(s.string()),
  code: s.string(),
  message: s.string(),
});
