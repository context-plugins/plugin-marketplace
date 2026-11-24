import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  agentDeliverdDevApprovalsApiInternalSchema,
  agentDeliverdDevApprovalsApiSchema,
  type AgentDeliverdDevApprovalsApi,
} from "./agent-deliverd-dev-approvals-api.js";
import { factorInternalSchema, factorSchema, type Factor } from "./factor.js";
import { linkInternalSchema, linkSchema, type Link } from "./link.js";
import { recommendationInternalSchema, recommendationSchema, type Recommendation } from "./recommendation.js";
import {
  riskDeliverdDevApprovalsApiSchema,
  type RiskDeliverdDevApprovalsApi,
} from "./risk-deliverd-dev-approvals-api.js";

export type ApiV1ApprovalsRequest = {
  /** What is being asked, as a headline */
  title: string;
  /** Why, what it affects, what it costs — what the approver reads first */
  description?: string;
  /** How the approver should weigh it; medium when omitted */
  risk?: RiskDeliverdDevApprovalsApi;
  /** Evidence, one line each, shown as a checklist */
  factors?: Factor[];
  /** Where to read more */
  links?: Link[];
  /** A published report the request is about */
  reportId?: string;
  /**
   * Who may decide: members, groups or workspaces by email, id or name, or an admitted guest by
   * email where the organisation lets guests approve. The organisation's admins when omitted
   */
  approvers?: string[];
  /** After this the request expires undecided */
  expiresAt?: Date;
  /** Your own reference, returned unchanged */
  externalId?: string;
  /**
   * The flow this belongs to — shown as a Project in the app — when it is one step of a larger
   * piece of work. Must be an open flow in your organisation
   */
  flowId?: string;
  /**
   * Which agent is asking, in your words. Recorded and shown as declared by you; nothing is decided
   * on it
   */
  agent?: AgentDeliverdDevApprovalsApi;
  /**
   * The model the agent is running on, such as claude-opus-5. Recorded and shown as declared by you
   */
  model?: string;
  metadata?: Record<string, unknown>;
  /**
   * The arguments you will run with if this is approved, shown to the approver. The decision
   * returns what to run with
   */
  input?: Record<string, unknown>;
  /**
   * Fields of `input` the approver may correct before approving (strings, numbers, true/false).
   * Omitted: approve or reject only
   */
  editableFields?: string[];
  /**
   * What your model or decision engine recommends. Shown to the approver as context, never as the
   * decision. Where the organisation has blind review on, a high or critical risk request's
   * recommendation is shown only after the approver records their own view
   */
  recommendation?: Recommendation;
  /**
   * Where to POST the outcome when a person answers, signed with the callbackSecret returned by
   * this call. Saves polling.
   */
  callbackUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1ApprovalsRequestProperties: s.Shape<ApiV1ApprovalsRequest> = {
  title: s.string(),
  description: s.optional(s.string()),
  risk: s.optional(s.lazy(() => riskDeliverdDevApprovalsApiSchema)),
  factors: s.optional(s.array(s.lazy(() => factorInternalSchema))),
  links: s.optional(s.array(s.lazy(() => linkInternalSchema))),
  reportId: s.optional(s.string()),
  approvers: s.optional(s.array(s.string())),
  expiresAt: s.optional(s.dateTime()),
  externalId: s.optional(s.string()),
  flowId: s.optional(s.string()),
  agent: s.optional(s.lazy(() => agentDeliverdDevApprovalsApiInternalSchema)),
  model: s.optional(s.string()),
  metadata: s.optional(s.record(s.string(), s.unknown())),
  input: s.optional(s.record(s.string(), s.unknown())),
  editableFields: s.optional(s.array(s.string())),
  recommendation: s.optional(s.lazy(() => recommendationInternalSchema)),
  callbackUrl: s.optional(s.string()),
};

export const apiV1ApprovalsRequestInternalSchema: Schema<ApiV1ApprovalsRequest> =
  s.object<ApiV1ApprovalsRequest>(apiV1ApprovalsRequestProperties, { additionalProperties: s.json() });

export const apiV1ApprovalsRequestSchema: Schema<ApiV1ApprovalsRequest> = s.lazySchema(() =>
  s.object<ApiV1ApprovalsRequest>(
    {
      ...apiV1ApprovalsRequestProperties,
      title: s.string().check(s.minLength(1), s.maxLength(200)),
      description: s.optional(s.string().check(s.maxLength(4000))),
      factors: s.optional(s.array(s.lazy(() => factorSchema)).check(s.maxLength(20))),
      links: s.optional(s.array(s.lazy(() => linkSchema)).check(s.maxLength(10))),
      approvers: s.optional(
        s.array(s.string().check(s.minLength(1), s.maxLength(320))).check(s.maxLength(20)),
      ),
      externalId: s.optional(s.string().check(s.maxLength(200))),
      agent: s.optional(s.lazy(() => agentDeliverdDevApprovalsApiSchema)),
      model: s.optional(s.string().check(s.minLength(1), s.maxLength(200))),
      editableFields: s.optional(
        s.array(s.string().check(s.minLength(1), s.maxLength(100))).check(s.maxLength(50)),
      ),
      recommendation: s.optional(s.lazy(() => recommendationSchema)),
      callbackUrl: s.optional(s.string().check(s.maxLength(2000), s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
