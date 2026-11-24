import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TaskAddProjectRequest = {
  /** The project to add the task to. */
  project: string;
  /**
   * A task in the project to insert the task after, or `null` to insert at the beginning of the
   * list.
   */
  insertAfter?: string | null;
  /**
   * A task in the project to insert the task before, or `null` to insert at the end of the list.
   */
  insertBefore?: string | null;
  /**
   * A section in the project to insert the task into. The task will be inserted at the bottom of
   * the section.
   */
  section?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskAddProjectRequestSchema: Schema<TaskAddProjectRequest> = s.object<TaskAddProjectRequest>(
  {
    project: s.string(),
    insertAfter: s.optionalNullable(s.string()),
    insertBefore: s.optionalNullable(s.string()),
    section: s.optionalNullable(s.string()),
    _keysMap: {
      insertAfter: "insert_after",
      insertBefore: "insert_before",
    },
  },
  { additionalProperties: s.json() },
);
