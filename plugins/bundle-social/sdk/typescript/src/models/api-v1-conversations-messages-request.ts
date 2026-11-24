import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contentInternalSchema, contentSchema, type Content } from "./content.js";

export type ApiV1ConversationsMessagesRequest = {
  content: Content;
  replyToMessageId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1ConversationsMessagesRequestProperties: s.Shape<ApiV1ConversationsMessagesRequest> = {
  content: contentInternalSchema,
  replyToMessageId: s.optional(s.string()),
};

export const apiV1ConversationsMessagesRequestInternalSchema: Schema<ApiV1ConversationsMessagesRequest> =
  s.object<ApiV1ConversationsMessagesRequest>(apiV1ConversationsMessagesRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1ConversationsMessagesRequestSchema: Schema<ApiV1ConversationsMessagesRequest> =
  s.lazySchema(() =>
    s.object<ApiV1ConversationsMessagesRequest>(
      {
        ...apiV1ConversationsMessagesRequestProperties,
        content: contentSchema,
        replyToMessageId: s.optional(s.string().check(s.minLength(1))),
      },
      { additionalProperties: s.json() },
    ),
  );
