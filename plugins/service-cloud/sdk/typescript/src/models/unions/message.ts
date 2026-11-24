import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { choicesResponseMessageSchema, type ChoicesResponseMessage } from "../choices-response-message.js";
import { escalateResponseMessageSchema, type EscalateResponseMessage } from "../escalate-response-message.js";
import {
  sessionEndedResponseMessageSchema,
  type SessionEndedResponseMessage,
} from "../session-ended-response-message.js";
import { textResponseMessageSchema, type TextResponseMessage } from "../text-response-message.js";

export type Message =
  | TextResponseMessage
  | ChoicesResponseMessage
  | EscalateResponseMessage
  | SessionEndedResponseMessage;

export const messageSchema: Schema<Message> = s.of<Message>(
  s.union([
    s.lazy(() => textResponseMessageSchema),
    s.lazy(() => choicesResponseMessageSchema),
    s.lazy(() => escalateResponseMessageSchema),
    s.lazy(() => sessionEndedResponseMessageSchema),
  ]),
);
