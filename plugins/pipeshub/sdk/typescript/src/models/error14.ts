import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Error payload. */
export type Error14 = {
  /**
   * Identifier for this request, echoed so a bug report can quote it. Absent when the request never
   * reached the middleware that assigns one.
   */
  requestId?: string;
  /**
   * Machine-readable error code. For this status the value is either `VALIDATION_ERROR` (request
   * failed schema validation) or `HTTP_BAD_REQUEST` (semantic validation failed — malformed date,
   * value over the allowed length, or XSS-guard trip).
   */
  code: string;
  /** Human-readable description of the failure. */
  message: string;
};

export const error14Schema: Schema<Error14> = s.object<Error14>({
  requestId: s.optional(s.string()),
  code: s.string(),
  message: s.string(),
});
