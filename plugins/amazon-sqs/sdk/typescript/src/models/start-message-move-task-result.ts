import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StartMessageMoveTaskResult = {
  /**
   * An identifier associated with a message movement task. You can use this identifier to cancel a
   * specified message movement task using the CancelMessageMoveTask action.
   */
  taskHandle?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startMessageMoveTaskResultSchema: Schema<StartMessageMoveTaskResult> =
  s.object<StartMessageMoveTaskResult>(
    {
      taskHandle: s.optional(s.string()),
      _keysMap: {
        taskHandle: "TaskHandle",
      },
    },
    { additionalProperties: s.json() },
  );
