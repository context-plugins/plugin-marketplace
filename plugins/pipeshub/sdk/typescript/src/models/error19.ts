import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Error19 = {
  /**
   * Identifier for this request, echoed so a bug report can quote it. Absent when the request never
   * reached the middleware that assigns one.
   */
  requestId?: string;
  /**
   * Machine-readable error code. `HTTP_UNAUTHORIZED` is emitted when the bearer token is missing,
   * invalid, or expired.
   *
   * @default "HTTP_UNAUTHORIZED"
   */
  code?: "HTTP_UNAUTHORIZED";
  /** Human-readable description of the failure. */
  message: string;
};

export const error19Schema: Schema<Error19> = s.object<Error19>({
  requestId: s.optional(s.string()),
  code: s.defaulted(s.literal("HTTP_UNAUTHORIZED"), "HTTP_UNAUTHORIZED"),
  message: s.string(),
});
