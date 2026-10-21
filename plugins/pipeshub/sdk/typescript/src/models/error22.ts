import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { code2Schema, type Code2 } from "./code2.js";

export type Error22 = {
  /**
   * Identifier for this request, echoed so a bug report can quote it. Absent when the request never
   * reached the middleware that assigns one.
   */
  requestId?: string;
  /**
   * Machine-readable error code.
   *
   * - `HTTP_INTERNAL_SERVER_ERROR` — explicit `InternalServerError` raised by the handler.
   * - `INTERNAL_ERROR` — unhandled exception caught by the global error middleware.
   * - `MIDDLEWARE_ERROR` — the error middleware itself failed while serializing the response.
   */
  code: Code2;
  /** Human-readable description of the failure. */
  message: string;
};

export const error22Schema: Schema<Error22> = s.object<Error22>({
  requestId: s.optional(s.string()),
  code: code2Schema,
  message: s.string(),
});
