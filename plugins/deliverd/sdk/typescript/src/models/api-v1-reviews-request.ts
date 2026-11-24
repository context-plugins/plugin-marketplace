import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  agentDeliverdDevApprovalsApiInternalSchema,
  agentDeliverdDevApprovalsApiSchema,
  type AgentDeliverdDevApprovalsApi,
} from "./agent-deliverd-dev-approvals-api.js";

export type ApiV1ReviewsRequest = {
  /** What is being reviewed, as a headline the reviewer sees first */
  title: string;
  /**
   * What to check. Without this a reviewer decides what 'review' means, and usually decides it
   * means 'looks fine'
   */
  instructions?: string;
  /** The published report under review; the reviewer reads it and comments on it */
  reportId?: string;
  /** Pin a version, so publishing again mid-review does not move the ground under it */
  versionId?: string;
  /**
   * Emails or user ids. An active member, or a guest who can already open the report where the
   * organisation lets guests review — anyone else is refused rather than emailed
   */
  reviewers: string[];
  /**
   * How many approvals settle it; one when omitted. A single 'changes requested' settles it
   * regardless
   */
  requiredApprovals?: number;
  /** After this the review expires unanswered */
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

const apiV1ReviewsRequestProperties: s.Shape<ApiV1ReviewsRequest> = {
  title: s.string(),
  instructions: s.optional(s.string()),
  reportId: s.optional(s.string()),
  versionId: s.optional(s.string()),
  reviewers: s.array(s.string()),
  requiredApprovals: s.optional(s.int()),
  expiresAt: s.optional(s.dateTime()),
  externalId: s.optional(s.string()),
  flowId: s.optional(s.string()),
  agent: s.optional(s.lazy(() => agentDeliverdDevApprovalsApiInternalSchema)),
  model: s.optional(s.string()),
  metadata: s.optional(s.record(s.string(), s.unknown())),
  callbackUrl: s.optional(s.string()),
};

export const apiV1ReviewsRequestInternalSchema: Schema<ApiV1ReviewsRequest> = s.object<ApiV1ReviewsRequest>(
  apiV1ReviewsRequestProperties,
  { additionalProperties: s.json() },
);

export const apiV1ReviewsRequestSchema: Schema<ApiV1ReviewsRequest> = s.lazySchema(() =>
  s.object<ApiV1ReviewsRequest>(
    {
      ...apiV1ReviewsRequestProperties,
      title: s.string().check(s.minLength(1), s.maxLength(200)),
      instructions: s.optional(s.string().check(s.maxLength(4000))),
      reviewers: s
        .array(s.string().check(s.minLength(1), s.maxLength(320)))
        .check(s.minLength(1), s.maxLength(20)),
      requiredApprovals: s.optional(s.int().check(s.gte(1), s.lte(20))),
      externalId: s.optional(s.string().check(s.maxLength(200))),
      agent: s.optional(s.lazy(() => agentDeliverdDevApprovalsApiSchema)),
      model: s.optional(s.string().check(s.minLength(1), s.maxLength(200))),
      callbackUrl: s.optional(s.string().check(s.maxLength(2000), s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
