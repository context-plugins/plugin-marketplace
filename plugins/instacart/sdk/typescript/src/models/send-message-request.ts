import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SendMessageRequest = {
  /** The text content of the message to send to the shopper. */
  body: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const sendMessageRequestProperties: s.Shape<SendMessageRequest> = {
  body: s.string(),
};

export const sendMessageRequestInternalSchema: Schema<SendMessageRequest> = s.object<SendMessageRequest>(
  sendMessageRequestProperties,
  { additionalProperties: s.json() },
);

export const sendMessageRequestSchema: Schema<SendMessageRequest> = s.lazySchema(() =>
  s.object<SendMessageRequest>(
    {
      ...sendMessageRequestProperties,
      body: s.string().check(s.maxLength(1000)),
    },
    { additionalProperties: s.json() },
  ),
);
