import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  actionDeliverdDevGovernanceApiSchema,
  type ActionDeliverdDevGovernanceApi,
} from "./action-deliverd-dev-governance-api.js";

export type ApiV1GovernanceAuthorityEvaluateRequest = {
  action: ActionDeliverdDevGovernanceApi;
  /** An agent of this organisation; the requesting agent when omitted */
  agentId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1GovernanceAuthorityEvaluateRequestSchema: Schema<ApiV1GovernanceAuthorityEvaluateRequest> =
  s.object<ApiV1GovernanceAuthorityEvaluateRequest>(
    {
      action: actionDeliverdDevGovernanceApiSchema,
      agentId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
