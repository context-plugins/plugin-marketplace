import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  agentDeliverdDevGatesApiInternalSchema,
  agentDeliverdDevGatesApiSchema,
  type AgentDeliverdDevGatesApi,
} from "./agent-deliverd-dev-gates-api.js";
import { artifactInternalSchema, artifactSchema, type Artifact } from "./artifact.js";
import { classificationSchema, type Classification } from "./classification.js";
import { destinationInternalSchema, destinationSchema, type Destination } from "./destination.js";
import { executionInternalSchema, executionSchema, type Execution } from "./execution.js";
import {
  riskDeliverdDevGatesApiSchema,
  type RiskDeliverdDevGatesApi,
} from "./risk-deliverd-dev-gates-api.js";

export type ApiV1GatesRequest = {
  /** The registered action you are about to perform */
  actionId: string;
  /**
   * The arguments you will actually execute with. Validated against the action's registered schema
   * before any rule is applied, and stored as validated — an approver sees these values and a rule
   * is tested against them
   */
  input: Record<string, unknown>;
  /**
   * Your id for this unit of work — `refund:ord_8812`. Required: a retry with the same id re-reads
   * its decision instead of raising a second one, and no id Deliverd could invent would know which
   * two calls are the same attempt
   */
  externalId: string;
  /** Where this is running, for rules that distinguish staging from production */
  environment?: string;
  /** Why you are doing it, shown to whoever is asked to decide */
  reason?: string;
  /** The flow this belongs to, if it is part of one */
  flowId?: string;
  /** What you are about to do, in a sentence a person deciding will read. Same as `reason` */
  description?: string;
  /**
   * Where the act lands. Deliverd decides whether it is inside the organisation; only a workspace,
   * report, user, group or an address at one of the organisation's own domains is internal
   */
  destination?: Destination;
  /**
   * How sensitive the data is. Can raise, never lower, what Deliverd already knows about a report
   * it holds
   */
  classification?: Classification;
  /** How risky you judge it. Can raise, never lower, the action's own risk */
  risk?: RiskDeliverdDevGatesApi;
  /**
   * What the act is about. An approval covers this artifact and no other: report a different hash
   * when you record execution and it is refused as `approval_invalidated`
   */
  artifact?: Artifact;
  /**
   * Who you are, when you ask through a person's connection. Registered on first sight and bound to
   * that person. An agent key already says who it is
   */
  agent?: AgentDeliverdDevGatesApi;
  /** The run this belongs to, found by its id or started. Use instead of flowId */
  execution?: Execution;
  /** The request this revises, after a person asked for changes. Keeps the lineage */
  supersedesGateId?: string;
  /** An https address to POST the gate's settlement and execution to, signed */
  callbackUrl?: string;
  /** Anything else a person deciding should see. Stored as your words; no rule reads it */
  metadata?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1GatesRequestProperties: s.Shape<ApiV1GatesRequest> = {
  actionId: s.string(),
  input: s.record(s.string(), s.unknown()),
  externalId: s.string(),
  environment: s.optional(s.string()),
  reason: s.optional(s.string()),
  flowId: s.optional(s.string()),
  description: s.optional(s.string()),
  destination: s.optional(s.lazy(() => destinationInternalSchema)),
  classification: s.optional(s.lazy(() => classificationSchema)),
  risk: s.optional(s.lazy(() => riskDeliverdDevGatesApiSchema)),
  artifact: s.optional(s.lazy(() => artifactInternalSchema)),
  agent: s.optional(s.lazy(() => agentDeliverdDevGatesApiInternalSchema)),
  execution: s.optional(s.lazy(() => executionInternalSchema)),
  supersedesGateId: s.optional(s.string()),
  callbackUrl: s.optional(s.string()),
  metadata: s.optional(s.record(s.string(), s.unknown())),
};

export const apiV1GatesRequestInternalSchema: Schema<ApiV1GatesRequest> = s.object<ApiV1GatesRequest>(
  apiV1GatesRequestProperties,
  { additionalProperties: s.json() },
);

export const apiV1GatesRequestSchema: Schema<ApiV1GatesRequest> = s.lazySchema(() =>
  s.object<ApiV1GatesRequest>(
    {
      ...apiV1GatesRequestProperties,
      actionId: s.string().check(s.maxLength(120), s.pattern("^[a-z][a-z0-9_]*(\\.[a-z][a-z0-9_]*)+$")),
      externalId: s.string().check(s.minLength(1), s.maxLength(200)),
      environment: s.optional(s.string().check(s.maxLength(60))),
      reason: s.optional(s.string().check(s.maxLength(4000))),
      description: s.optional(s.string().check(s.maxLength(4000))),
      destination: s.optional(s.lazy(() => destinationSchema)),
      artifact: s.optional(s.lazy(() => artifactSchema)),
      agent: s.optional(s.lazy(() => agentDeliverdDevGatesApiSchema)),
      execution: s.optional(s.lazy(() => executionSchema)),
      callbackUrl: s.optional(s.string().check(s.maxLength(2000), s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
