import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Error = {
  /**
   * Identifier for this request, echoed so a bug report can quote it. Absent when the request never
   * reached the middleware that assigns one.
   */
  requestId?: string;
  /**
   * Machine-readable error code. For application errors it takes the form `HTTP_<VARIANT>` For
   * unhandled runtime errors (e.g. database unavailable) it is `INTERNAL_ERROR`.
   */
  code: string;
  /** Human-readable description of the error */
  message: string;
  /** Additional context (only present in development environments) */
  metadata?: Record<string, unknown>;
};

export const errorSchema: Schema<Error> = s.object<Error>({
  requestId: s.optional(s.string()),
  code: s.string(),
  message: s.string(),
  metadata: s.optional(s.record(s.string(), s.unknown())),
});
