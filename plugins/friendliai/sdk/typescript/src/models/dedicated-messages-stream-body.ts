import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { messagesInputMessageSchema, type MessagesInputMessage } from "./messages-input-message.js";
import { cacheControlSchema, type CacheControl } from "./unions/cache-control.js";
import { containerSchema, type Container } from "./unions/container.js";
import { contextManagerSchema, type ContextManager } from "./unions/context-manager.js";
import { inferenceGeoSchema, type InferenceGeo } from "./unions/inference-geo.js";
import { maxTokens14Schema, type MaxTokens14 } from "./unions/max-tokens14.js";
import { metadataSchema, type Metadata } from "./unions/metadata.js";
import { outputConfigSchema, type OutputConfig } from "./unions/output-config.js";
import { serviceTierSchema, type ServiceTier } from "./unions/service-tier.js";
import { stopSequencesSchema, type StopSequences } from "./unions/stop-sequences.js";
import { systemSchema, type System } from "./unions/system.js";
import { temperature16Schema, type Temperature16 } from "./unions/temperature16.js";
import { thinkingSchema, type Thinking } from "./unions/thinking.js";
import { toolChoiceModelSchema, type ToolChoiceModel } from "./unions/tool-choice-model.js";
import { tools2Schema, type Tools2 } from "./unions/tools2.js";
import { topK14Schema, type TopK14 } from "./unions/top-k14.js";
import { topP14Schema, type TopP14 } from "./unions/top-p14.js";

export type DedicatedMessagesStreamBody = {
  /**
   * A list of conversation messages ordered from oldest to newest. Must contain at least one item.
   */
  messages: MessagesInputMessage[];
  /**
   * Maximum number of tokens to generate for the assistant response. Must be greater than 0 when
   * provided.
   */
  maxTokens?: MaxTokens14;
  /**
   * ID of target endpoint. If you want to send request to specific adapter, use the format
   * "YOUR_ENDPOINT_ID:YOUR_ADAPTER_ROUTE". Otherwise, you can just use "YOUR_ENDPOINT_ID" alone.
   */
  model: string;
  /**
   * Optional top-level system instruction applied before conversation turns. Supports a plain
   * string or an array of text blocks.
   */
  system?: System;
  /**
   * Whether to stream the response. When set to `true`, events are sent as [server-sent
   * events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#event_stream_format)
   * once generated.
   *
   * @default true
   */
  stream?: boolean;
  /**
   * Sampling temperature. Lower values make outputs more deterministic; higher values increase
   * diversity.
   */
  temperature?: Temperature16;
  /**
   * Nucleus sampling parameter. The model samples from the smallest token set whose cumulative
   * probability reaches `top_p`.
   */
  topP?: TopP14;
  /** Limits sampling to the `k` most likely tokens at each decoding step. */
  topK?: TopK14;
  /**
   * Stop strings that terminate generation when matched in output. The matched value is returned in
   * `stop_sequence` when applicable.
   */
  stopSequences?: StopSequences;
  /**
   * Tool definitions available to the model. Use this to allow tool calls with structured
   * arguments.
   */
  tools?: Tools2;
  /**
   * Controls tool-calling behavior (`auto`, `any`, `tool`, `none`) and optional parallel-call
   * behavior.
   */
  toolChoice?: ToolChoiceModel;
  /**
   * Controls reasoning behavior with mode (`enabled`, `disabled`, `adaptive`). `enabled` requires
   * `budget_tokens`; `disabled` and `adaptive` must not include it.
   */
  thinking?: Thinking;
  /** Output generation options including effort level and structured output format settings. */
  outputConfig?: OutputConfig;
  /** Compatibility field accepted for request portability. Parsed but not used for generation. */
  cacheControl?: CacheControl;
  /** Compatibility field accepted for request portability. Parsed but not used for generation. */
  container?: Container;
  /** Compatibility field accepted for request portability. Parsed but not used for generation. */
  contextManager?: ContextManager;
  /** Compatibility field accepted for request portability. Parsed but not used for generation. */
  inferenceGeo?: InferenceGeo;
  /** Compatibility field accepted for request portability. Parsed but not used for generation. */
  metadata?: Metadata;
  /** Compatibility field accepted for request portability. Parsed but not used for generation. */
  serviceTier?: ServiceTier;
};

export const dedicatedMessagesStreamBodySchema: Schema<DedicatedMessagesStreamBody> =
  s.object<DedicatedMessagesStreamBody>({
    messages: s.array(s.lazy(() => messagesInputMessageSchema)),
    maxTokens: s.optional(s.lazy(() => maxTokens14Schema)),
    model: s.string(),
    system: s.optional(s.lazy(() => systemSchema)),
    stream: s.defaulted(s.boolean(), true),
    temperature: s.optional(s.lazy(() => temperature16Schema)),
    topP: s.optional(s.lazy(() => topP14Schema)),
    topK: s.optional(s.lazy(() => topK14Schema)),
    stopSequences: s.optional(s.lazy(() => stopSequencesSchema)),
    tools: s.optional(s.lazy(() => tools2Schema)),
    toolChoice: s.optional(s.lazy(() => toolChoiceModelSchema)),
    thinking: s.optional(s.lazy(() => thinkingSchema)),
    outputConfig: s.optional(s.lazy(() => outputConfigSchema)),
    cacheControl: s.optional(s.lazy(() => cacheControlSchema)),
    container: s.optional(s.lazy(() => containerSchema)),
    contextManager: s.optional(s.lazy(() => contextManagerSchema)),
    inferenceGeo: s.optional(s.lazy(() => inferenceGeoSchema)),
    metadata: s.optional(s.lazy(() => metadataSchema)),
    serviceTier: s.optional(s.lazy(() => serviceTierSchema)),
    _keysMap: {
      maxTokens: "max_tokens",
      topP: "top_p",
      topK: "top_k",
      stopSequences: "stop_sequences",
      toolChoice: "tool_choice",
      outputConfig: "output_config",
      cacheControl: "cache_control",
      contextManager: "context_manager",
      inferenceGeo: "inference_geo",
      serviceTier: "service_tier",
    },
  });
