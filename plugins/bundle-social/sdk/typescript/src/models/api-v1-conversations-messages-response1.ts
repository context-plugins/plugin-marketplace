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

export type ApiV1ConversationsMessagesResponse1 = {
  conversation: ConversationBundleSocialConversationApi;
  message: MessageBundleSocialConversationApi;
  /** @default false */
  conflict?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1ConversationsMessagesResponse1Properties: s.Shape<ApiV1ConversationsMessagesResponse1> = {
  conversation: conversationBundleSocialConversationApiSchema,
  message: messageBundleSocialConversationApiInternalSchema,
  conflict: s.defaulted(s.boolean(), false),
};

export const apiV1ConversationsMessagesResponse1InternalSchema: Schema<ApiV1ConversationsMessagesResponse1> =
  s.object<ApiV1ConversationsMessagesResponse1>(apiV1ConversationsMessagesResponse1Properties, {
    additionalProperties: s.json(),
  });

export const apiV1ConversationsMessagesResponse1Schema: Schema<ApiV1ConversationsMessagesResponse1> =
  s.lazySchema(() =>
    s.object<ApiV1ConversationsMessagesResponse1>(
      {
        ...apiV1ConversationsMessagesResponse1Properties,
        message: messageBundleSocialConversationApiSchema,
      },
      { additionalProperties: s.json() },
    ),
  );
