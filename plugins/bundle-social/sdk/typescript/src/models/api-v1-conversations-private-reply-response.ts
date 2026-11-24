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

export type ApiV1ConversationsPrivateReplyResponse = {
  conversation: ConversationBundleSocialConversationApi;
  message: MessageBundleSocialConversationApi;
  /** @default false */
  conflict?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1ConversationsPrivateReplyResponseProperties: s.Shape<ApiV1ConversationsPrivateReplyResponse> = {
  conversation: conversationBundleSocialConversationApiSchema,
  message: messageBundleSocialConversationApiInternalSchema,
  conflict: s.defaulted(s.boolean(), false),
};

export const apiV1ConversationsPrivateReplyResponseInternalSchema: Schema<ApiV1ConversationsPrivateReplyResponse> =
  s.object<ApiV1ConversationsPrivateReplyResponse>(apiV1ConversationsPrivateReplyResponseProperties, {
    additionalProperties: s.json(),
  });

export const apiV1ConversationsPrivateReplyResponseSchema: Schema<ApiV1ConversationsPrivateReplyResponse> =
  s.lazySchema(() =>
    s.object<ApiV1ConversationsPrivateReplyResponse>(
      {
        ...apiV1ConversationsPrivateReplyResponseProperties,
        message: messageBundleSocialConversationApiSchema,
      },
      { additionalProperties: s.json() },
    ),
  );
