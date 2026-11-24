import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { attachment52Schema, type Attachment52 } from "./attachment52.js";
import { directionSchema, type Direction } from "./direction.js";
import { platformData1InternalSchema, platformData1Schema, type PlatformData1 } from "./platform-data1.js";
import { platform30Schema, type Platform30 } from "./platform30.js";
import { privateReplyContextSchema, type PrivateReplyContext } from "./private-reply-context.js";
import { replyToSchema, type ReplyTo } from "./reply-to.js";
import { sourceSchema, type Source } from "./source.js";
import { status40Schema, type Status40 } from "./status40.js";

export type ConversationMessage = {
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
  attachments?: Attachment52[];
  sentAt?: Date | null;
  failedAt?: Date | null;
  error?: string | null;
  seenAt?: Date | null;
  replyTo?: ReplyTo | null;
  privateReplyContext?: PrivateReplyContext | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  platformData?: PlatformData1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const conversationMessageProperties: s.Shape<ConversationMessage> = {
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
  attachments: s.optional(s.array(s.lazy(() => attachment52Schema))),
  sentAt: s.optionalNullable(s.dateTime()),
  failedAt: s.optionalNullable(s.dateTime()),
  error: s.optionalNullable(s.string()),
  seenAt: s.optionalNullable(s.dateTime()),
  replyTo: s.optionalNullable(s.lazy(() => replyToSchema)),
  privateReplyContext: s.optionalNullable(s.lazy(() => privateReplyContextSchema)),
  createdAt: s.nullable(s.dateTime()),
  updatedAt: s.nullable(s.dateTime()),
  platformData: s.optional(s.lazy(() => platformData1InternalSchema)),
};

export const conversationMessageInternalSchema: Schema<ConversationMessage> = s.object<ConversationMessage>(
  conversationMessageProperties,
  { additionalProperties: s.json() },
);

export const conversationMessageSchema: Schema<ConversationMessage> = s.lazySchema(() =>
  s.object<ConversationMessage>(
    {
      ...conversationMessageProperties,
      platformData: s.optional(s.lazy(() => platformData1Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
