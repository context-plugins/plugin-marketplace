import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { riskLevel1Schema, type RiskLevel1 } from "./risk-level1.js";
import { status4Schema, type Status4 } from "./status4.js";

export type LogDidlogicComRiskChecksApi = {
  /** Log identifier */
  id: number;
  /** Phone number that was checked */
  number: string;
  /** Check status */
  status: Status4;
  /** Risk assessment level */
  riskLevel: RiskLevel1;
  /** Risk category */
  category: Record<string, unknown>;
  /** Parent task identifier */
  taskId: number;
  /** Processing completion timestamp */
  processedAt: string;
  /** Log creation timestamp */
  createdAt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const logDidlogicComRiskChecksApiSchema: Schema<LogDidlogicComRiskChecksApi> =
  s.object<LogDidlogicComRiskChecksApi>(
    {
      id: s.int(),
      number: s.string(),
      status: status4Schema,
      riskLevel: riskLevel1Schema,
      category: s.record(s.string(), s.unknown()),
      taskId: s.int(),
      processedAt: s.string(),
      createdAt: s.string(),
      _keysMap: {
        riskLevel: "risk_level",
        taskId: "task_id",
        processedAt: "processed_at",
        createdAt: "created_at",
      },
    },
    { additionalProperties: s.json() },
  );
