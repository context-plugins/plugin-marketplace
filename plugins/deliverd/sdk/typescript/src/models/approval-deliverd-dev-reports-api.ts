import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApprovalDeliverdDevReportsApi = {
  id: string;
  /** @default "pending" */
  status?: "pending";
  rule: string | null;
  reason: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const approvalDeliverdDevReportsApiSchema: Schema<ApprovalDeliverdDevReportsApi> =
  s.object<ApprovalDeliverdDevReportsApi>(
    {
      id: s.string(),
      status: s.defaulted(s.literal("pending"), "pending"),
      rule: s.nullable(s.string()),
      reason: s.nullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
