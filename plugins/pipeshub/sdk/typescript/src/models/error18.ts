import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Error18 = {
  /**
   * Identifier for this request, echoed so a bug report can quote it. Absent when the request never
   * reached the middleware that assigns one.
   */
  requestId?: string;
  /**
   * Machine-readable error code. `VALIDATION_ERROR` is emitted when the request fails Zod
   * validation.
   *
   * @default "VALIDATION_ERROR"
   */
  code?: "VALIDATION_ERROR";
  /** Human-readable description of the failure. */
  message: string;
};

export const error18Schema: Schema<Error18> = s.object<Error18>({
  requestId: s.optional(s.string()),
  code: s.defaulted(s.literal("VALIDATION_ERROR"), "VALIDATION_ERROR"),
  message: s.string(),
});
