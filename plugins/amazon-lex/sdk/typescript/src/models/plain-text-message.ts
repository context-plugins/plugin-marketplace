import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PlainTextMessage = {
  /** The message to send to the user. */
  value: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const plainTextMessageSchema: Schema<PlainTextMessage> = s.object<PlainTextMessage>(
  {
    value: s.string(),
  },
  { additionalProperties: s.json() },
);
