import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  startConversationResponseEventStreamSchema,
  type StartConversationResponseEventStream,
} from "./start-conversation-response-event-stream.js";

export type StartConversationResponse = {
  /** Exactly one member is set. */
  responseEventStream?: StartConversationResponseEventStream;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startConversationResponseSchema: Schema<StartConversationResponse> =
  s.object<StartConversationResponse>(
    {
      responseEventStream: s.optional(s.lazy(() => startConversationResponseEventStreamSchema)),
    },
    { additionalProperties: s.json() },
  );
