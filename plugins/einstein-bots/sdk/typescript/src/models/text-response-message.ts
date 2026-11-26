import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { scheduleSchema, type Schedule } from "./schedule.js";

export type TextResponseMessage = {
  /** Message type of a text message to the customer. @default "text" */
  type?: "text";
  /** UUID that references this message. */
  id: string;
  /** Message from the bot. */
  text: string;
  schedule?: Schedule;
  /** unique ID to identify the generation, used to submit feedback */
  feedbackId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const textResponseMessageSchema: Schema<TextResponseMessage> = s.object<TextResponseMessage>(
  {
    type: s.defaulted(s.literal("text"), "text"),
    id: s.string(),
    text: s.string(),
    schedule: s.optional(s.lazy(() => scheduleSchema)),
    feedbackId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
