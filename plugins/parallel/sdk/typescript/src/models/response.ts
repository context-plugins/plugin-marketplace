import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { Model, modelSchema } from "./model.js";
import { responseOutputMessageSchema, type ResponseOutputMessage } from "./response-output-message.js";
import { backgroundSchema, type Background } from "./unions/background.js";
import { completedAtSchema, type CompletedAt } from "./unions/completed-at.js";
import {
  errorParallelAiResponsesApiSchema,
  type ErrorParallelAiResponsesApi,
} from "./unions/error-parallel-ai-responses-api.js";
import { incompleteDetails1Schema, type IncompleteDetails1 } from "./unions/incomplete-details1.js";
import { instructionsSchema, type Instructions } from "./unions/instructions.js";
import { maxOutputTokensSchema, type MaxOutputTokens } from "./unions/max-output-tokens.js";
import { maxToolCallsSchema, type MaxToolCalls } from "./unions/max-tool-calls.js";
import {
  metadataParallelAiResponsesApiSchema,
  type MetadataParallelAiResponsesApi,
} from "./unions/metadata-parallel-ai-responses-api.js";
import {
  moderation1ParallelAiResponsesApiSchema,
  type Moderation1ParallelAiResponsesApi,
} from "./unions/moderation1-parallel-ai-responses-api.js";
import { previousResponseIdSchema, type PreviousResponseId } from "./unions/previous-response-id.js";
import { promptCacheKeySchema, type PromptCacheKey } from "./unions/prompt-cache-key.js";
import { promptCacheRetention1Schema, type PromptCacheRetention1 } from "./unions/prompt-cache-retention1.js";
import { reasoningSchema, type Reasoning } from "./unions/reasoning.js";
import { safetyIdentifierSchema, type SafetyIdentifier } from "./unions/safety-identifier.js";
import { serviceTier1Schema, type ServiceTier1 } from "./unions/service-tier1.js";
import {
  status11ParallelAiResponsesApiSchema,
  type Status11ParallelAiResponsesApi,
} from "./unions/status11-parallel-ai-responses-api.js";
import { temperatureSchema, type Temperature } from "./unions/temperature.js";
import { text1Schema, type Text1 } from "./unions/text1.js";
import { topLogprobsSchema, type TopLogprobs } from "./unions/top-logprobs.js";
import { topPSchema, type TopP } from "./unions/top-p.js";
import { truncation1Schema, type Truncation1 } from "./unions/truncation1.js";
import {
  usageParallelAiResponsesApiSchema,
  type UsageParallelAiResponsesApi,
} from "./unions/usage-parallel-ai-responses-api.js";
import { userSchema, type User } from "./unions/user.js";

/**
 * A response from the `parallel` model. A completed response contains a single assistant message
 * whose text is annotated with URL citations grounding the answer.
 */
export type Response = {
  id: string;
  createdAt: number;
  error?: ErrorParallelAiResponsesApi;
  incompleteDetails?: IncompleteDetails1;
  instructions?: Instructions;
  metadata?: MetadataParallelAiResponsesApi;
  /** @default Model.Parallel */
  model?: Model;
  /** @default "response" */
  object?: "response";
  output: ResponseOutputMessage[];
  parallelToolCalls: boolean;
  temperature?: Temperature;
  /** @default "auto" */
  toolChoice?: string;
  tools?: Record<string, unknown>[];
  topP?: TopP;
  background?: Background;
  completedAt?: CompletedAt;
  conversation?: string | null;
  maxOutputTokens?: MaxOutputTokens;
  maxToolCalls?: MaxToolCalls;
  moderation?: Moderation1ParallelAiResponsesApi;
  previousResponseId?: PreviousResponseId;
  prompt?: string | null;
  promptCacheKey?: PromptCacheKey;
  promptCacheRetention?: PromptCacheRetention1;
  reasoning?: Reasoning;
  safetyIdentifier?: SafetyIdentifier;
  serviceTier?: ServiceTier1;
  status?: Status11ParallelAiResponsesApi;
  text?: Text1;
  topLogprobs?: TopLogprobs;
  truncation?: Truncation1;
  usage?: UsageParallelAiResponsesApi;
  user?: User;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseSchema: Schema<Response> = s.object<Response>(
  {
    id: s.string(),
    createdAt: s.float64(),
    error: s.optional(s.lazy(() => errorParallelAiResponsesApiSchema)),
    incompleteDetails: s.optional(s.lazy(() => incompleteDetails1Schema)),
    instructions: s.optional(s.lazy(() => instructionsSchema)),
    metadata: s.optional(s.lazy(() => metadataParallelAiResponsesApiSchema)),
    model: s.defaulted(modelSchema, Model.Parallel),
    object: s.defaulted(s.literal("response"), "response"),
    output: s.array(s.lazy(() => responseOutputMessageSchema)),
    parallelToolCalls: s.boolean(),
    temperature: s.optional(s.lazy(() => temperatureSchema)),
    toolChoice: s.defaulted(s.string(), "auto"),
    tools: s.optional(s.array(s.record(s.string(), s.unknown()))),
    topP: s.optional(s.lazy(() => topPSchema)),
    background: s.optional(s.lazy(() => backgroundSchema)),
    completedAt: s.optional(s.lazy(() => completedAtSchema)),
    conversation: s.optionalNullable(s.string()),
    maxOutputTokens: s.optional(s.lazy(() => maxOutputTokensSchema)),
    maxToolCalls: s.optional(s.lazy(() => maxToolCallsSchema)),
    moderation: s.optional(s.lazy(() => moderation1ParallelAiResponsesApiSchema)),
    previousResponseId: s.optional(s.lazy(() => previousResponseIdSchema)),
    prompt: s.optionalNullable(s.string()),
    promptCacheKey: s.optional(s.lazy(() => promptCacheKeySchema)),
    promptCacheRetention: s.optional(s.lazy(() => promptCacheRetention1Schema)),
    reasoning: s.optional(s.lazy(() => reasoningSchema)),
    safetyIdentifier: s.optional(s.lazy(() => safetyIdentifierSchema)),
    serviceTier: s.optional(s.lazy(() => serviceTier1Schema)),
    status: s.optional(s.lazy(() => status11ParallelAiResponsesApiSchema)),
    text: s.optional(s.lazy(() => text1Schema)),
    topLogprobs: s.optional(s.lazy(() => topLogprobsSchema)),
    truncation: s.optional(s.lazy(() => truncation1Schema)),
    usage: s.optional(s.lazy(() => usageParallelAiResponsesApiSchema)),
    user: s.optional(s.lazy(() => userSchema)),
    _keysMap: {
      createdAt: "created_at",
      incompleteDetails: "incomplete_details",
      parallelToolCalls: "parallel_tool_calls",
      toolChoice: "tool_choice",
      topP: "top_p",
      completedAt: "completed_at",
      maxOutputTokens: "max_output_tokens",
      maxToolCalls: "max_tool_calls",
      previousResponseId: "previous_response_id",
      promptCacheKey: "prompt_cache_key",
      promptCacheRetention: "prompt_cache_retention",
      safetyIdentifier: "safety_identifier",
      serviceTier: "service_tier",
      topLogprobs: "top_logprobs",
    },
  },
  { additionalProperties: s.json() },
);
