import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Error information for the persistent queue, if applicable. */
export type StatusError1 = {
  /** Additional error details. */
  details?: Record<string, unknown>;
  /** Human-readable message that describes the error. */
  message: string;
};

export const statusError1Schema: Schema<StatusError1> = s.object<StatusError1>({
  details: s.optional(s.record(s.string(), s.unknown())),
  message: s.string(),
});
