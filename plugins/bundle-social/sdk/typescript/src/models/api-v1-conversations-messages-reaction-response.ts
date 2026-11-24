import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  conversationBundleSocialConversationApiSchema,
  type ConversationBundleSocialConversationApi,
} from "./conversation-bundle-social-conversation-api.js";
import {
  messageBundleSocialConversationApiInternalSchema,
  messageBundleSocialConversationApiSchema,
  type MessageBundleSocialConversationApi,
} from "./message-bundle-social-conversation-api.js";

export type ApiV1ConversationsMessagesReactionResponse = {
  conversation: ConversationBundleSocialConversationApi;
  message: MessageBundleSocialConversationApi;
  /** @default false */
  conflict?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1ConversationsMessagesReactionResponseProperties: s.Shape<ApiV1ConversationsMessagesReactionResponse> =
  {
    conversation: conversationBundleSocialConversationApiSchema,
    message: messageBundleSocialConversationApiInternalSchema,
    conflict: s.defaulted(s.boolean(), false),
  };

export const apiV1ConversationsMessagesReactionResponseInternalSchema: Schema<ApiV1ConversationsMessagesReactionResponse> =
  s.object<ApiV1ConversationsMessagesReactionResponse>(apiV1ConversationsMessagesReactionResponseProperties, {
    additionalProperties: s.json(),
  });

export const apiV1ConversationsMessagesReactionResponseSchema: Schema<ApiV1ConversationsMessagesReactionResponse> =
  s.lazySchema(() =>
    s.object<ApiV1ConversationsMessagesReactionResponse>(
      {
        ...apiV1ConversationsMessagesReactionResponseProperties,
        message: messageBundleSocialConversationApiSchema,
      },
      { additionalProperties: s.json() },
    ),
  );
