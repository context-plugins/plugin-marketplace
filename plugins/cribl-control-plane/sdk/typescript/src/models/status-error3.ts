import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Error information, if applicable. */
export type StatusError3 = {
  /** Additional error details. */
  details?: Record<string, unknown>;
  /** Human-readable message that describes the error. */
  message: string;
};

export const statusError3Schema: Schema<StatusError3> = s.object<StatusError3>({
  details: s.optional(s.record(s.string(), s.unknown())),
  message: s.string(),
});
