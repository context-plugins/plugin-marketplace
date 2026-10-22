import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Conflict = {
  instruction?: Record<string, Record<string, unknown>>;
  /** Reason why the conflict exists */
  reason?: string;
};

export const conflictSchema: Schema<Conflict> = s.object<Conflict>({
  instruction: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
  reason: s.optional(s.string()),
});
