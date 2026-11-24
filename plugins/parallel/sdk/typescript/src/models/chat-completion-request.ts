import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { chatMessageSchema, type ChatMessage } from "./chat-message.js";
import { frequencyPenaltySchema, type FrequencyPenalty } from "./unions/frequency-penalty.js";
import { maxTokensSchema, type MaxTokens } from "./unions/max-tokens.js";
import { nSchema, type N } from "./unions/n.js";
import { presencePenaltySchema, type PresencePenalty } from "./unions/presence-penalty.js";
import { previousInteractionIdSchema, type PreviousInteractionId } from "./unions/previous-interaction-id.js";
import { responseFormatSchema, type ResponseFormat } from "./unions/response-format.js";
import { streamSchema, type Stream } from "./unions/stream.js";
import { temperatureSchema, type Temperature } from "./unions/temperature.js";
import { topPSchema, type TopP } from "./unions/top-p.js";

/**
 * Request for the chat completions endpoint.
 *
 * Note that all parameters except for `model`, `stream`, and `response_format` are ignored.
 */
export type ChatCompletionRequest = {
  /** The model to use for chat completions. */
  model: string;
  /** The messages to use for chat completions. */
  messages: ChatMessage[];
  /** Whether to stream the chat completions. */
  stream?: Stream;
  /** The response format to use for chat completions. OpenAI compatible. */
  responseFormat?: ResponseFormat;
  /** The maximum number of tokens to generate. Unsupported. */
  maxTokens?: MaxTokens;
  /** The temperature to use for chat completions. Unsupported. */
  temperature?: Temperature;
  /** The top p to use for chat completions. Unsupported. */
  topP?: TopP;
  /** The number of chat completions to generate. Unsupported. */
  n?: N;
  /** The presence penalty to use for chat completions. Unsupported. */
  presencePenalty?: PresencePenalty;
  /** The frequency penalty to use for chat completions. Unsupported. */
  frequencyPenalty?: FrequencyPenalty;
  /** Interaction ID from a previous chat completion to use as context. */
  previousInteractionId?: PreviousInteractionId;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const chatCompletionRequestSchema: Schema<ChatCompletionRequest> = s.object<ChatCompletionRequest>(
  {
    model: s.string(),
    messages: s.array(s.lazy(() => chatMessageSchema)),
    stream: s.optional(s.lazy(() => streamSchema)),
    responseFormat: s.optional(s.lazy(() => responseFormatSchema)),
    maxTokens: s.optional(s.lazy(() => maxTokensSchema)),
    temperature: s.optional(s.lazy(() => temperatureSchema)),
    topP: s.optional(s.lazy(() => topPSchema)),
    n: s.optional(s.lazy(() => nSchema)),
    presencePenalty: s.optional(s.lazy(() => presencePenaltySchema)),
    frequencyPenalty: s.optional(s.lazy(() => frequencyPenaltySchema)),
    previousInteractionId: s.optional(s.lazy(() => previousInteractionIdSchema)),
    _keysMap: {
      responseFormat: "response_format",
      maxTokens: "max_tokens",
      topP: "top_p",
      presencePenalty: "presence_penalty",
      frequencyPenalty: "frequency_penalty",
      previousInteractionId: "previous_interaction_id",
    },
  },
  { additionalProperties: s.json() },
);
