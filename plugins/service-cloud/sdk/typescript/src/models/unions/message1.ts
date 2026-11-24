import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { choiceMessageSchema, type ChoiceMessage } from "../choice-message.js";
import { redirectMessageSchema, type RedirectMessage } from "../redirect-message.js";
import { setVariablesMessageSchema, type SetVariablesMessage } from "../set-variables-message.js";
import { textMessageSchema, type TextMessage } from "../text-message.js";
import {
  transferFailedRequestMessageSchema,
  type TransferFailedRequestMessage,
} from "../transfer-failed-request-message.js";
import {
  transferSucceededRequestMessageSchema,
  type TransferSucceededRequestMessage,
} from "../transfer-succeeded-request-message.js";

/** Message to the bot. */
export type Message1 =
  | ChoiceMessage
  | TextMessage
  | TransferSucceededRequestMessage
  | TransferFailedRequestMessage
  | RedirectMessage
  | SetVariablesMessage;

export const message1Schema: Schema<Message1> = s.of<Message1>(
  s.union([
    s.lazy(() => choiceMessageSchema),
    s.lazy(() => textMessageSchema),
    s.lazy(() => transferSucceededRequestMessageSchema),
    s.lazy(() => transferFailedRequestMessageSchema),
    s.lazy(() => redirectMessageSchema),
    s.lazy(() => setVariablesMessageSchema),
  ]),
);
