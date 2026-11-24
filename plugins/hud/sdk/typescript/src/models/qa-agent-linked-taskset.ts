import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type QaAgentLinkedTaskset = {
  id: string;
  name: string;
  /** @default 0 */
  taskCount?: number;
  /** @default 0 */
  judgedTraceCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const qaAgentLinkedTasksetSchema: Schema<QaAgentLinkedTaskset> = s.object<QaAgentLinkedTaskset>(
  {
    id: s.string(),
    name: s.string(),
    taskCount: s.defaulted(s.int(), 0),
    judgedTraceCount: s.defaulted(s.int(), 0),
    _keysMap: {
      taskCount: "task_count",
      judgedTraceCount: "judged_trace_count",
    },
  },
  { additionalProperties: s.json() },
);
