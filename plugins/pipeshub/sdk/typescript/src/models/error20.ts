import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Error20 = {
  /**
   * Identifier for this request, echoed so a bug report can quote it. Absent when the request never
   * reached the middleware that assigns one.
   */
  requestId?: string;
  /**
   * Machine-readable error code. `HTTP_FORBIDDEN` is emitted when the bearer token is valid but
   * lacks the required scope.
   *
   * @default "HTTP_FORBIDDEN"
   */
  code?: "HTTP_FORBIDDEN";
  /** Human-readable description of the failure. */
  message: string;
};

export const error20Schema: Schema<Error20> = s.object<Error20>({
  requestId: s.optional(s.string()),
  code: s.defaulted(s.literal("HTTP_FORBIDDEN"), "HTTP_FORBIDDEN"),
  message: s.string(),
});
