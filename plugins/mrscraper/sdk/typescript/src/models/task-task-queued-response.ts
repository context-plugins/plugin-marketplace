import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TaskTaskQueuedResponse = {
  commandId?: string;
  status?: string;
  taskId?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskTaskQueuedResponseSchema: Schema<TaskTaskQueuedResponse> = s.object<TaskTaskQueuedResponse>(
  {
    commandId: s.optional(s.string()),
    status: s.optional(s.string()),
    taskId: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
