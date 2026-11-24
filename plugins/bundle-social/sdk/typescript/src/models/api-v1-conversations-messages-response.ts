import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  item1BundleSocialConversationApiInternalSchema,
  item1BundleSocialConversationApiSchema,
  type Item1BundleSocialConversationApi,
} from "./item1-bundle-social-conversation-api.js";

export type ApiV1ConversationsMessagesResponse = {
  items: Item1BundleSocialConversationApi[];
  total?: number;
  nextCursor?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1ConversationsMessagesResponseProperties: s.Shape<ApiV1ConversationsMessagesResponse> = {
  items: s.array(s.lazy(() => item1BundleSocialConversationApiInternalSchema)),
  total: s.optional(s.float64()),
  nextCursor: s.optionalNullable(s.string()),
};

export const apiV1ConversationsMessagesResponseInternalSchema: Schema<ApiV1ConversationsMessagesResponse> =
  s.object<ApiV1ConversationsMessagesResponse>(apiV1ConversationsMessagesResponseProperties, {
    additionalProperties: s.json(),
  });

export const apiV1ConversationsMessagesResponseSchema: Schema<ApiV1ConversationsMessagesResponse> =
  s.lazySchema(() =>
    s.object<ApiV1ConversationsMessagesResponse>(
      {
        ...apiV1ConversationsMessagesResponseProperties,
        items: s.array(s.lazy(() => item1BundleSocialConversationApiSchema)),
      },
      { additionalProperties: s.json() },
    ),
  );
