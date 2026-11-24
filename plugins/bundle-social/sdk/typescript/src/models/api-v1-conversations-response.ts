import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  itemBundleSocialConversationApiSchema,
  type ItemBundleSocialConversationApi,
} from "./item-bundle-social-conversation-api.js";

export type ApiV1ConversationsResponse = {
  items: ItemBundleSocialConversationApi[];
  total?: number;
  nextCursor?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ConversationsResponseSchema: Schema<ApiV1ConversationsResponse> =
  s.object<ApiV1ConversationsResponse>(
    {
      items: s.array(s.lazy(() => itemBundleSocialConversationApiSchema)),
      total: s.optional(s.float64()),
      nextCursor: s.optionalNullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
