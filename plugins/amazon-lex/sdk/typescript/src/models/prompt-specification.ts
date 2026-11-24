import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { messageGroupSchema, type MessageGroup } from "./message-group.js";
import {
  messageSelectionStrategySchema,
  type MessageSelectionStrategy,
} from "./message-selection-strategy.js";
import {
  promptAttemptSpecificationSchema,
  type PromptAttemptSpecification,
} from "./prompt-attempt-specification.js";

export type PromptSpecification = {
  /**
   * A collection of messages that Amazon Lex can send to the user. Amazon Lex chooses the actual
   * message to send at runtime.
   */
  messageGroups: MessageGroup[];
  /**
   * The maximum number of times the bot tries to elicit a response from the user using this prompt.
   */
  maxRetries: number;
  /** Indicates whether the user can interrupt a speech prompt from the bot. */
  allowInterrupt?: boolean;
  /** Indicates how a message is selected from a message group among retries. */
  messageSelectionStrategy?: MessageSelectionStrategy;
  /** Specifies the advanced settings on each attempt of the prompt. */
  promptAttemptsSpecification?: Record<string, PromptAttemptSpecification>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const promptSpecificationSchema: Schema<PromptSpecification> = s.object<PromptSpecification>(
  {
    messageGroups: s.array(s.lazy(() => messageGroupSchema)),
    maxRetries: s.int(),
    allowInterrupt: s.optional(s.boolean()),
    messageSelectionStrategy: s.optional(s.lazy(() => messageSelectionStrategySchema)),
    promptAttemptsSpecification: s.optional(
      s.record(
        s.string(),
        s.lazy(() => promptAttemptSpecificationSchema),
      ),
    ),
  },
  { additionalProperties: s.json() },
);
