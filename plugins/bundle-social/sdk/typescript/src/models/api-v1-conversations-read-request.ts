import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ConversationsReadRequest = {
  readAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ConversationsReadRequestSchema: Schema<ApiV1ConversationsReadRequest> =
  s.object<ApiV1ConversationsReadRequest>(
    {
      readAt: s.optionalNullable(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
