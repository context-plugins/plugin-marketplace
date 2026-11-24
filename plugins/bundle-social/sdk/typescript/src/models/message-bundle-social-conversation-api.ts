import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  attachmentBundleSocialConversationApiSchema,
  type AttachmentBundleSocialConversationApi,
} from "./attachment-bundle-social-conversation-api.js";
import { directionSchema, type Direction } from "./direction.js";
import { platformData3InternalSchema, platformData3Schema, type PlatformData3 } from "./platform-data3.js";
import { platform30Schema, type Platform30 } from "./platform30.js";
import { privateReplyContextSchema, type PrivateReplyContext } from "./private-reply-context.js";
import { replyToSchema, type ReplyTo } from "./reply-to.js";
import { sourceSchema, type Source } from "./source.js";
import { status40Schema, type Status40 } from "./status40.js";

export type MessageBundleSocialConversationApi = {
  id: string;
  conversationId: string;
  teamId: string;
  socialAccountId: string;
  /**
   * Messaging platform. Extensible: new platforms are added over time, so handle unknown values
   * gracefully rather than switching exhaustively.
   */
  platform: Platform30;
  direction: Direction;
  status: Status40;
  source: Source;
  externalMessageId?: string | null;
  text?: string | null;
  attachments?: AttachmentBundleSocialConversationApi[];
  sentAt?: Date | null;
  failedAt?: Date | null;
  error?: string | null;
  seenAt?: Date | null;
  replyTo?: ReplyTo | null;
  privateReplyContext?: PrivateReplyContext | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  platformData?: PlatformData3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const messageBundleSocialConversationApiProperties: s.Shape<MessageBundleSocialConversationApi> = {
  id: s.string(),
  conversationId: s.string(),
  teamId: s.string(),
  socialAccountId: s.string(),
  platform: platform30Schema,
  direction: directionSchema,
  status: status40Schema,
  source: sourceSchema,
  externalMessageId: s.optionalNullable(s.string()),
  text: s.optionalNullable(s.string()),
  attachments: s.optional(s.array(s.lazy(() => attachmentBundleSocialConversationApiSchema))),
  sentAt: s.optionalNullable(s.dateTime()),
  failedAt: s.optionalNullable(s.dateTime()),
  error: s.optionalNullable(s.string()),
  seenAt: s.optionalNullable(s.dateTime()),
  replyTo: s.optionalNullable(s.lazy(() => replyToSchema)),
  privateReplyContext: s.optionalNullable(s.lazy(() => privateReplyContextSchema)),
  createdAt: s.nullable(s.dateTime()),
  updatedAt: s.nullable(s.dateTime()),
  platformData: s.optional(s.lazy(() => platformData3InternalSchema)),
};

export const messageBundleSocialConversationApiInternalSchema: Schema<MessageBundleSocialConversationApi> =
  s.object<MessageBundleSocialConversationApi>(messageBundleSocialConversationApiProperties, {
    additionalProperties: s.json(),
  });

export const messageBundleSocialConversationApiSchema: Schema<MessageBundleSocialConversationApi> =
  s.lazySchema(() =>
    s.object<MessageBundleSocialConversationApi>(
      {
        ...messageBundleSocialConversationApiProperties,
        platformData: s.optional(s.lazy(() => platformData3Schema)),
      },
      { additionalProperties: s.json() },
    ),
  );
