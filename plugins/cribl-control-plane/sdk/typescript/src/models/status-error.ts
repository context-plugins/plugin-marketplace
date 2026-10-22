import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StatusError = {
  /** Additional error details. */
  details?: Record<string, unknown>;
  /** Human-readable message that describes the error. */
  message: string;
};

export const statusErrorSchema: Schema<StatusError> = s.object<StatusError>({
  details: s.optional(s.record(s.string(), s.unknown())),
  message: s.string(),
});
