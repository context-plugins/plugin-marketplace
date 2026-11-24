import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  status1DidlogicComRiskChecksApiSchema,
  type Status1DidlogicComRiskChecksApi,
} from "./status1-didlogic-com-risk-checks-api.js";

export type Task = {
  /** Task identifier */
  id: number;
  /** Task status */
  status: Status1DidlogicComRiskChecksApi;
  /** Processing completion timestamp */
  processedAt: string;
  /** Task creation timestamp */
  createdAt: string;
  /** Total numbers in the task */
  totalNumbers: number;
  /** Number of completed checks */
  completedCount: number;
  /** Number of failed checks */
  failedCount: number;
  /** Number of pending checks */
  pendingCount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskSchema: Schema<Task> = s.object<Task>(
  {
    id: s.int(),
    status: status1DidlogicComRiskChecksApiSchema,
    processedAt: s.string(),
    createdAt: s.string(),
    totalNumbers: s.int(),
    completedCount: s.int(),
    failedCount: s.int(),
    pendingCount: s.int(),
    _keysMap: {
      processedAt: "processed_at",
      createdAt: "created_at",
      totalNumbers: "total_numbers",
      completedCount: "completed_count",
      failedCount: "failed_count",
      pendingCount: "pending_count",
    },
  },
  { additionalProperties: s.json() },
);
