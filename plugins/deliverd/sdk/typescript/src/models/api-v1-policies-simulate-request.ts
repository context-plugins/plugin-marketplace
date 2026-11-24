import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1PoliciesSimulateRequest = {
  /** The registered action to test against */
  actionId: string;
  /** Arguments as an agent would send them. Validated against the action's schema first */
  input: Record<string, unknown>;
  /** Test as a particular agent, for rules that name one */
  agentId?: string;
  /** Test in a particular environment */
  environment?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1PoliciesSimulateRequestProperties: s.Shape<ApiV1PoliciesSimulateRequest> = {
  actionId: s.string(),
  input: s.record(s.string(), s.unknown()),
  agentId: s.optional(s.string()),
  environment: s.optional(s.string()),
};

export const apiV1PoliciesSimulateRequestInternalSchema: Schema<ApiV1PoliciesSimulateRequest> =
  s.object<ApiV1PoliciesSimulateRequest>(apiV1PoliciesSimulateRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1PoliciesSimulateRequestSchema: Schema<ApiV1PoliciesSimulateRequest> = s.lazySchema(() =>
  s.object<ApiV1PoliciesSimulateRequest>(
    {
      ...apiV1PoliciesSimulateRequestProperties,
      actionId: s.string().check(s.maxLength(120), s.pattern("^[a-z][a-z0-9_]*(\\.[a-z][a-z0-9_]*)+$")),
      environment: s.optional(s.string().check(s.maxLength(60))),
    },
    { additionalProperties: s.json() },
  ),
);
