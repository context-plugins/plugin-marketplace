import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1AutomationRichMessagesConversationsResponse = {
  conversationId: string;
  messageId?: string | null;
  externalMessageId?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1AutomationRichMessagesConversationsResponseSchema: Schema<ApiV1AutomationRichMessagesConversationsResponse> =
  s.object<ApiV1AutomationRichMessagesConversationsResponse>(
    {
      conversationId: s.string(),
      messageId: s.optionalNullable(s.string()),
      externalMessageId: s.optionalNullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
