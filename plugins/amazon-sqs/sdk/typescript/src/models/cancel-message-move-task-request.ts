import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CancelMessageMoveTaskRequest = {
  /** An identifier associated with a message movement task. */
  taskHandle: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cancelMessageMoveTaskRequestSchema: Schema<CancelMessageMoveTaskRequest> =
  s.object<CancelMessageMoveTaskRequest>(
    {
      taskHandle: s.string(),
      _keysMap: {
        taskHandle: "TaskHandle",
      },
    },
    { additionalProperties: s.json() },
  );
