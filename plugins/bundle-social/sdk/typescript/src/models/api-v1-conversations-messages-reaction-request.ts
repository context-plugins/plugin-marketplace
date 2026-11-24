import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { action4Schema, type Action4 } from "./action4.js";
import { reaction2Schema, type Reaction2 } from "./reaction2.js";

export type ApiV1ConversationsMessagesReactionRequest = {
  action: Action4;
  reaction?: Reaction2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ConversationsMessagesReactionRequestSchema: Schema<ApiV1ConversationsMessagesReactionRequest> =
  s.object<ApiV1ConversationsMessagesReactionRequest>(
    {
      action: action4Schema,
      reaction: s.optional(s.lazy(() => reaction2Schema)),
    },
    { additionalProperties: s.json() },
  );
