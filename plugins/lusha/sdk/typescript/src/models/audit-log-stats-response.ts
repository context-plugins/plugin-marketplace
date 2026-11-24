import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AuditLogStatsResponse = {
  total: number;
  success: number;
  failed: number;
  successRate: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const auditLogStatsResponseSchema: Schema<AuditLogStatsResponse> = s.object<AuditLogStatsResponse>(
  {
    total: s.int(),
    success: s.int(),
    failed: s.int(),
    successRate: s.string(),
  },
  { additionalProperties: s.json() },
);
