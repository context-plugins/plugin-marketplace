import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Groups */
export type Groups = {
  /** Enabled */
  enabled?: boolean;
  /** Schedule on which to run this collection job */
  cronSchedule?: string;
  /**
   * Maximum time the job is allowed to run (examples: 30, 45s, 15m). Enter 0 for unlimited time.
   */
  jobTimeout?: string;
};

export const groupsSchema: Schema<Groups> = s.object<Groups>({
  enabled: s.optional(s.boolean()),
  cronSchedule: s.optional(s.string()),
  jobTimeout: s.optional(s.string()),
});
