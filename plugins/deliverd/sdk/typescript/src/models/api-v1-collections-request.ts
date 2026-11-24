import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  agentDeliverdDevApprovalsApiInternalSchema,
  agentDeliverdDevApprovalsApiSchema,
  type AgentDeliverdDevApprovalsApi,
} from "./agent-deliverd-dev-approvals-api.js";
import {
  questionDeliverdDevCollectionsApiInternalSchema,
  questionDeliverdDevCollectionsApiSchema,
  type QuestionDeliverdDevCollectionsApi,
} from "./question-deliverd-dev-collections-api.js";

export type ApiV1CollectionsRequest = {
  /** What you need, as a headline the person sees first */
  title: string;
  /** Why you are asking, shown above the questions */
  instructions?: string;
  /** What to ask, in the order it should be answered */
  questions: QuestionDeliverdDevCollectionsApi[];
  /**
   * Emails or user ids. An active member, or a guest the organisation already knows — anyone else
   * is refused rather than emailed
   */
  respondents: string[];
  /** How many submitted replies complete it; everyone asked, when omitted */
  requiredResponses?: number;
  /** A published report the request is about */
  reportId?: string;
  /** Shown to the person, and what the single reminder is measured against */
  dueAt?: Date;
  /** After this the request closes unanswered */
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
   * Where to POST the outcome when a person answers, signed with the callbackSecret returned by
   * this call. Saves polling.
   */
  callbackUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1CollectionsRequestProperties: s.Shape<ApiV1CollectionsRequest> = {
  title: s.string(),
  instructions: s.optional(s.string()),
  questions: s.array(s.lazy(() => questionDeliverdDevCollectionsApiInternalSchema)),
  respondents: s.array(s.string()),
  requiredResponses: s.optional(s.int()),
  reportId: s.optional(s.string()),
  dueAt: s.optional(s.dateTime()),
  expiresAt: s.optional(s.dateTime()),
  externalId: s.optional(s.string()),
  flowId: s.optional(s.string()),
  agent: s.optional(s.lazy(() => agentDeliverdDevApprovalsApiInternalSchema)),
  model: s.optional(s.string()),
  metadata: s.optional(s.record(s.string(), s.unknown())),
  callbackUrl: s.optional(s.string()),
};

export const apiV1CollectionsRequestInternalSchema: Schema<ApiV1CollectionsRequest> =
  s.object<ApiV1CollectionsRequest>(apiV1CollectionsRequestProperties, { additionalProperties: s.json() });

export const apiV1CollectionsRequestSchema: Schema<ApiV1CollectionsRequest> = s.lazySchema(() =>
  s.object<ApiV1CollectionsRequest>(
    {
      ...apiV1CollectionsRequestProperties,
      title: s.string().check(s.minLength(1), s.maxLength(200)),
      instructions: s.optional(s.string().check(s.maxLength(4000))),
      questions: s
        .array(s.lazy(() => questionDeliverdDevCollectionsApiSchema))
        .check(s.minLength(1), s.maxLength(40)),
      respondents: s
        .array(s.string().check(s.minLength(1), s.maxLength(320)))
        .check(s.minLength(1), s.maxLength(50)),
      requiredResponses: s.optional(s.int().check(s.gte(1), s.lte(100))),
      externalId: s.optional(s.string().check(s.maxLength(200))),
      agent: s.optional(s.lazy(() => agentDeliverdDevApprovalsApiSchema)),
      model: s.optional(s.string().check(s.minLength(1), s.maxLength(200))),
      callbackUrl: s.optional(s.string().check(s.maxLength(2000), s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
