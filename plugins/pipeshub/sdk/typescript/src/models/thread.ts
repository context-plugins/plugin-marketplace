import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Thread = {
  /** The thread's record group. */
  threadRecordGroupId?: string;
  /** Replies of this thread the caller may see. */
  recordCount?: number;
};

export const threadSchema: Schema<Thread> = s.object<Thread>({
  threadRecordGroupId: s.optional(s.string()),
  recordCount: s.optional(s.int()),
});
