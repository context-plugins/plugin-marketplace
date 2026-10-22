import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Error payload. */
export type Error16 = {
  /**
   * Identifier for this request, echoed so a bug report can quote it. Absent when the request never
   * reached the middleware that assigns one.
   */
  requestId?: string;
  /**
   * Machine-readable error code. For this status the value is `HTTP_FORBIDDEN` (the token is valid
   * but does not carry the `semantic:read` scope).
   */
  code: string;
  /** Human-readable description of the failure. */
  message: string;
};

export const error16Schema: Schema<Error16> = s.object<Error16>({
  requestId: s.optional(s.string()),
  code: s.string(),
  message: s.string(),
});
