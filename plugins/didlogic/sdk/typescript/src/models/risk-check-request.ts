import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  status1DidlogicComRiskChecksApiSchema,
  type Status1DidlogicComRiskChecksApi,
} from "./status1-didlogic-com-risk-checks-api.js";

/** Created risk check task details */
export type RiskCheckRequest = {
  /** Task status */
  status: Status1DidlogicComRiskChecksApi;
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

export const riskCheckRequestSchema: Schema<RiskCheckRequest> = s.object<RiskCheckRequest>(
  {
    status: status1DidlogicComRiskChecksApiSchema,
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
