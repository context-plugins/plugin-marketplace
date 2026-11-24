import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { messageInternalSchema, messageSchema, type Message } from "./message.js";

export type Step1 = {
  id?: string;
  /** @default "SEND_MESSAGE" */
  type?: "SEND_MESSAGE";
  message: Message;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const step1Properties: s.Shape<Step1> = {
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("SEND_MESSAGE"), "SEND_MESSAGE"),
  message: messageInternalSchema,
};

export const step1InternalSchema: Schema<Step1> = s.object<Step1>(step1Properties, {
  additionalProperties: s.json(),
});

export const step1Schema: Schema<Step1> = s.lazySchema(() =>
  s.object<Step1>(
    {
      ...step1Properties,
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(36))),
      message: messageSchema,
    },
    { additionalProperties: s.json() },
  ),
);
