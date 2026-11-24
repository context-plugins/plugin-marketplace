import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { emailMessageInternalSchema, emailMessageSchema, type EmailMessage } from "./email-message.js";

export type ApiV1EmailMessagesResponse = {
  data?: EmailMessage[];
  nextCursor?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1EmailMessagesResponseProperties: s.Shape<ApiV1EmailMessagesResponse> = {
  data: s.optional(s.array(s.lazy(() => emailMessageInternalSchema))),
  nextCursor: s.optionalNullable(s.string()),
};

export const apiV1EmailMessagesResponseInternalSchema: Schema<ApiV1EmailMessagesResponse> =
  s.object<ApiV1EmailMessagesResponse>(apiV1EmailMessagesResponseProperties, {
    additionalProperties: s.json(),
  });

export const apiV1EmailMessagesResponseSchema: Schema<ApiV1EmailMessagesResponse> = s.lazySchema(() =>
  s.object<ApiV1EmailMessagesResponse>(
    {
      ...apiV1EmailMessagesResponseProperties,
      data: s.optional(s.array(s.lazy(() => emailMessageSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
