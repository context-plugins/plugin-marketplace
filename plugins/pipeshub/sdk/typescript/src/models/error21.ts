import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Error21 = {
  /**
   * Identifier for this request, echoed so a bug report can quote it. Absent when the request never
   * reached the middleware that assigns one.
   */
  requestId?: string;
  /**
   * Machine-readable error code. `HTTP_NOT_FOUND` is emitted when the addressed resource does not
   * exist.
   *
   * @default "HTTP_NOT_FOUND"
   */
  code?: "HTTP_NOT_FOUND";
  /** Human-readable description of the failure. */
  message: string;
};

export const error21Schema: Schema<Error21> = s.object<Error21>({
  requestId: s.optional(s.string()),
  code: s.defaulted(s.literal("HTTP_NOT_FOUND"), "HTTP_NOT_FOUND"),
  message: s.string(),
});
