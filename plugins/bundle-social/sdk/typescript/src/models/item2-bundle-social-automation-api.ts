import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  conversationMessageInternalSchema,
  conversationMessageSchema,
  type ConversationMessage,
} from "./conversation-message.js";
import { conversationSchema, type Conversation } from "./conversation.js";
import { errorSchema, type Error } from "./error.js";
import { fetchedCommentSchema, type FetchedComment } from "./fetched-comment.js";
import { flowVersionInternalSchema, flowVersionSchema, type FlowVersion } from "./flow-version.js";
import { flowInternalSchema, flowSchema, type Flow } from "./flow.js";
import { inputSchema, type Input } from "./input.js";
import { platformSchema, type Platform } from "./platform.js";
import { socialAccountSchema, type SocialAccount } from "./social-account.js";
import { status31Schema, type Status31 } from "./status31.js";
import { step32Schema, type Step32 } from "./step32.js";

export type Item2BundleSocialAutomationApi = {
  id: string;
  teamId: string;
  organizationId?: string | null;
  flowId: string;
  flowVersionId: string;
  triggerId?: string | null;
  platform: Platform;
  socialAccountId: string;
  conversationId?: string | null;
  conversationMessageId?: string | null;
  fetchedCommentId?: string | null;
  senderExternalId?: string | null;
  currentStepId?: string | null;
  status: Status31;
  idempotencyKey: string;
  input?: Input;
  output?: Record<string, unknown>;
  error?: Error | null;
  startedAt?: Date | null;
  completedAt?: Date | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  flow?: Flow;
  flowVersion?: FlowVersion;
  steps?: Step32[];
  conversation?: Conversation | null;
  conversationMessage?: ConversationMessage | null;
  fetchedComment?: FetchedComment | null;
  socialAccount?: SocialAccount;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const item2BundleSocialAutomationApiProperties: s.Shape<Item2BundleSocialAutomationApi> = {
  id: s.string(),
  teamId: s.string(),
  organizationId: s.optionalNullable(s.string()),
  flowId: s.string(),
  flowVersionId: s.string(),
  triggerId: s.optionalNullable(s.string()),
  platform: platformSchema,
  socialAccountId: s.string(),
  conversationId: s.optionalNullable(s.string()),
  conversationMessageId: s.optionalNullable(s.string()),
  fetchedCommentId: s.optionalNullable(s.string()),
  senderExternalId: s.optionalNullable(s.string()),
  currentStepId: s.optionalNullable(s.string()),
  status: status31Schema,
  idempotencyKey: s.string(),
  input: s.optional(s.lazy(() => inputSchema)),
  output: s.optional(s.record(s.string(), s.unknown())),
  error: s.optionalNullable(s.lazy(() => errorSchema)),
  startedAt: s.optionalNullable(s.dateTime()),
  completedAt: s.optionalNullable(s.dateTime()),
  createdAt: s.nullable(s.dateTime()),
  updatedAt: s.nullable(s.dateTime()),
  flow: s.optional(s.lazy(() => flowInternalSchema)),
  flowVersion: s.optional(s.lazy(() => flowVersionInternalSchema)),
  steps: s.optional(s.array(s.lazy(() => step32Schema))),
  conversation: s.optionalNullable(s.lazy(() => conversationSchema)),
  conversationMessage: s.optionalNullable(s.lazy(() => conversationMessageInternalSchema)),
  fetchedComment: s.optionalNullable(s.lazy(() => fetchedCommentSchema)),
  socialAccount: s.optional(s.lazy(() => socialAccountSchema)),
};

export const item2BundleSocialAutomationApiInternalSchema: Schema<Item2BundleSocialAutomationApi> =
  s.object<Item2BundleSocialAutomationApi>(item2BundleSocialAutomationApiProperties, {
    additionalProperties: s.json(),
  });

export const item2BundleSocialAutomationApiSchema: Schema<Item2BundleSocialAutomationApi> = s.lazySchema(() =>
  s.object<Item2BundleSocialAutomationApi>(
    {
      ...item2BundleSocialAutomationApiProperties,
      flow: s.optional(s.lazy(() => flowSchema)),
      flowVersion: s.optional(s.lazy(() => flowVersionSchema)),
      conversationMessage: s.optionalNullable(s.lazy(() => conversationMessageSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
