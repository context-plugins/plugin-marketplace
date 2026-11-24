import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TaskSetParentRequest = {
  /** The new parent of the task, or `null` for no parent. */
  parent: string;
  /**
   * A subtask of the parent to insert the task after, or `null` to insert at the beginning of the
   * list.
   */
  insertAfter?: string;
  /**
   * A subtask of the parent to insert the task before, or `null` to insert at the end of the list.
   */
  insertBefore?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskSetParentRequestSchema: Schema<TaskSetParentRequest> = s.object<TaskSetParentRequest>(
  {
    parent: s.string(),
    insertAfter: s.optional(s.string()),
    insertBefore: s.optional(s.string()),
    _keysMap: {
      insertAfter: "insert_after",
      insertBefore: "insert_before",
    },
  },
  { additionalProperties: s.json() },
);
