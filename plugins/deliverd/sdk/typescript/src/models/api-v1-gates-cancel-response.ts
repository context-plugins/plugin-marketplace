import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { authorisationSchema, type Authorisation } from "./authorisation.js";
import { basisSchema, type Basis } from "./basis.js";
import { changeSchema, type Change } from "./change.js";
import { concernSchema, type Concern } from "./concern.js";
import {
  decisionDeliverdDevGatesApiSchema,
  type DecisionDeliverdDevGatesApi,
} from "./decision-deliverd-dev-gates-api.js";
import { execution1Schema, type Execution1 } from "./execution1.js";
import { outcomeSchema, type Outcome } from "./outcome.js";
import { scopeSchema, type Scope } from "./scope.js";
import {
  statusDeliverdDevGatesApiSchema,
  type StatusDeliverdDevGatesApi,
} from "./status-deliverd-dev-gates-api.js";

export type ApiV1GatesCancelResponse = {
  id: string;
  status: StatusDeliverdDevGatesApi;
  allowed: boolean;
  input: Record<string, unknown>;
  changes: Change[];
  basis: Basis;
  reason: string | null;
  rule: string | null;
  policyVersionId: string | null;
  approvalId: string | null;
  approvalUrl: string | null;
  outcome: Outcome | null;
  settledAt: string | null;
  concerns: Concern[];
  reused: boolean;
  decision: DecisionDeliverdDevGatesApi;
  canExecute: boolean;
  blockedBecause: string | null;
  scope: Scope;
  authorisation: Authorisation;
  actionId: string;
  agentId: string | null;
  flowId: string | null;
  supersedesGateId: string | null;
  description: string | null;
  requestedBy: string;
  createdAt: string | null;
  /**
   * The yes, signed with this deployment's Ed25519 key, while `canExecute` is true. Hand it to the
   * code that performs the action, which verifies it before acting. Null otherwise
   */
  decisionToken: string | null;
  callbackSecret?: string;
  executions?: Execution1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1GatesCancelResponseSchema: Schema<ApiV1GatesCancelResponse> =
  s.object<ApiV1GatesCancelResponse>(
    {
      id: s.string(),
      status: statusDeliverdDevGatesApiSchema,
      allowed: s.boolean(),
      input: s.record(s.string(), s.unknown()),
      changes: s.array(s.lazy(() => changeSchema)),
      basis: basisSchema,
      reason: s.nullable(s.string()),
      rule: s.nullable(s.string()),
      policyVersionId: s.nullable(s.string()),
      approvalId: s.nullable(s.string()),
      approvalUrl: s.nullable(s.string()),
      outcome: s.nullable(s.lazy(() => outcomeSchema)),
      settledAt: s.nullable(s.string()),
      concerns: s.array(s.lazy(() => concernSchema)),
      reused: s.boolean(),
      decision: decisionDeliverdDevGatesApiSchema,
      canExecute: s.boolean(),
      blockedBecause: s.nullable(s.string()),
      scope: scopeSchema,
      authorisation: authorisationSchema,
      actionId: s.string(),
      agentId: s.nullable(s.string()),
      flowId: s.nullable(s.string()),
      supersedesGateId: s.nullable(s.string()),
      description: s.nullable(s.string()),
      requestedBy: s.string(),
      createdAt: s.nullable(s.string()),
      decisionToken: s.nullable(s.string()),
      callbackSecret: s.optional(s.string()),
      executions: s.optional(s.array(s.lazy(() => execution1Schema))),
    },
    { additionalProperties: s.json() },
  );
