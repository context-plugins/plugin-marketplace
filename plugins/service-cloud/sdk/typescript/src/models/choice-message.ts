import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ChoiceMessage = {
  /** Message type for answering a question with choices from the bot. @default "choice" */
  type?: "choice";
  /**
   * Client-generated sequence number of the message in a session. Increase this number for each
   * subsequent message.
   */
  sequenceId: number;
  /** Message ID of the previous response you are replying to. */
  inReplyToMessageId?: string;
  /**
   * Index or alias of the chosen answer. The index starts with 1. Either `choiceIndex` or
   * `choiceId` is required.
   */
  choiceIndex?: number | null;
  /**
   * ID of the answer when you answer by clicking a choice button. Either `choiceIndex` or
   * `choiceId` is required.
   */
  choiceId?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const choiceMessageSchema: Schema<ChoiceMessage> = s.object<ChoiceMessage>(
  {
    type: s.defaulted(s.literal("choice"), "choice"),
    sequenceId: s.int(),
    inReplyToMessageId: s.optional(s.string()),
    choiceIndex: s.optionalNullable(s.int()),
    choiceId: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
