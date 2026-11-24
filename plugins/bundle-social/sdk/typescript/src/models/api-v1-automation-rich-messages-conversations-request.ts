import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { messageInternalSchema, messageSchema, type Message } from "./message.js";

export type ApiV1AutomationRichMessagesConversationsRequest = {
  teamId?: string;
  message: Message;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1AutomationRichMessagesConversationsRequestProperties: s.Shape<ApiV1AutomationRichMessagesConversationsRequest> =
  {
    teamId: s.optional(s.string()),
    message: messageInternalSchema,
  };

export const apiV1AutomationRichMessagesConversationsRequestInternalSchema: Schema<ApiV1AutomationRichMessagesConversationsRequest> =
  s.object<ApiV1AutomationRichMessagesConversationsRequest>(
    apiV1AutomationRichMessagesConversationsRequestProperties,
    { additionalProperties: s.json() },
  );

export const apiV1AutomationRichMessagesConversationsRequestSchema: Schema<ApiV1AutomationRichMessagesConversationsRequest> =
  s.lazySchema(() =>
    s.object<ApiV1AutomationRichMessagesConversationsRequest>(
      {
        ...apiV1AutomationRichMessagesConversationsRequestProperties,
        message: messageSchema,
      },
      { additionalProperties: s.json() },
    ),
  );
