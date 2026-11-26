import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1AgentsInvokeResponse = {
  taskId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1AgentsInvokeResponseSchema: Schema<V1AgentsInvokeResponse> = s.object<V1AgentsInvokeResponse>(
  {
    taskId: s.optional(s.string()),
    _keysMap: {
      taskId: "task_id",
    },
  },
  { additionalProperties: s.json() },
);
