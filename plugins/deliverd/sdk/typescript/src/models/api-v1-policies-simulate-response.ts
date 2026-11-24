import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { effectSchema, type Effect } from "./effect.js";
import {
  ruleDeliverdDevPoliciesApiSchema,
  type RuleDeliverdDevPoliciesApi,
} from "./rule-deliverd-dev-policies-api.js";

export type ApiV1PoliciesSimulateResponse = {
  effect: Effect;
  rule: RuleDeliverdDevPoliciesApi | null;
  reason: string | null;
  requiredApprovals: number;
  approvers: string[];
  expiresInMinutes: number | null;
  escalateAfterMinutes: number | null;
  policyVersionId: string | null;
  input: Record<string, unknown>;
  governed: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1PoliciesSimulateResponseSchema: Schema<ApiV1PoliciesSimulateResponse> =
  s.object<ApiV1PoliciesSimulateResponse>(
    {
      effect: effectSchema,
      rule: s.nullable(s.lazy(() => ruleDeliverdDevPoliciesApiSchema)),
      reason: s.nullable(s.string()),
      requiredApprovals: s.float64(),
      approvers: s.array(s.string()),
      expiresInMinutes: s.nullable(s.float64()),
      escalateAfterMinutes: s.nullable(s.float64()),
      policyVersionId: s.nullable(s.string()),
      input: s.record(s.string(), s.unknown()),
      governed: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
