import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

/** Created HLR lookup task details */
export type HlrRequest = {
  /** Task status */
  status: Status;
  /** Processing completion timestamp */
  processedAt: Record<string, unknown>;
  /** Task creation timestamp */
  createdAt: string;
  /** Task identifier */
  taskId: number;
  /** Total numbers in the request */
  totalNumbers: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const hlrRequestSchema: Schema<HlrRequest> = s.object<HlrRequest>(
  {
    status: statusSchema,
    processedAt: s.record(s.string(), s.unknown()),
    createdAt: s.string(),
    taskId: s.int(),
    totalNumbers: s.int(),
    _keysMap: {
      processedAt: "processed_at",
      createdAt: "created_at",
      taskId: "task_id",
      totalNumbers: "total_numbers",
    },
  },
  { additionalProperties: s.json() },
);
