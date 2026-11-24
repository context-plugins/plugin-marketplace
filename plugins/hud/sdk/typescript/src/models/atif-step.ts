import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  sourceHudPlatformJobsApiSchema,
  type SourceHudPlatformJobsApi,
} from "./source-hud-platform-jobs-api.js";
import { extraSchema, type Extra } from "./unions/extra.js";
import { isCopiedContextSchema, type IsCopiedContext } from "./unions/is-copied-context.js";
import {
  llmCallCountInternalSchema,
  llmCallCountSchema,
  type LlmCallCount,
} from "./unions/llm-call-count.js";
import { messageInternalSchema, messageSchema, type Message } from "./unions/message.js";
import {
  metricsHudPlatformJobsApiInternalSchema,
  metricsHudPlatformJobsApiSchema,
  type MetricsHudPlatformJobsApi,
} from "./unions/metrics-hud-platform-jobs-api.js";
import { modelNameSchema, type ModelName } from "./unions/model-name.js";
import { observationInternalSchema, observationSchema, type Observation } from "./unions/observation.js";
import { reasoningContentSchema, type ReasoningContent } from "./unions/reasoning-content.js";
import { reasoningEffortSchema, type ReasoningEffort } from "./unions/reasoning-effort.js";
import { timestampSchema, type Timestamp } from "./unions/timestamp.js";
import { toolCallsInternalSchema, toolCallsSchema, type ToolCalls } from "./unions/tool-calls.js";

export type AtifStep = {
  stepId: number;
  timestamp?: Timestamp;
  source: SourceHudPlatformJobsApi;
  modelName?: ModelName;
  reasoningEffort?: ReasoningEffort;
  message: Message;
  reasoningContent?: ReasoningContent;
  toolCalls?: ToolCalls;
  observation?: Observation;
  metrics?: MetricsHudPlatformJobsApi;
  isCopiedContext?: IsCopiedContext;
  llmCallCount?: LlmCallCount;
  extra?: Extra;
};

const atifStepProperties: s.Shape<AtifStep> = {
  stepId: s.int(),
  timestamp: s.optional(s.lazy(() => timestampSchema)),
  source: sourceHudPlatformJobsApiSchema,
  modelName: s.optional(s.lazy(() => modelNameSchema)),
  reasoningEffort: s.optional(s.lazy(() => reasoningEffortSchema)),
  message: messageInternalSchema,
  reasoningContent: s.optional(s.lazy(() => reasoningContentSchema)),
  toolCalls: s.optional(s.lazy(() => toolCallsInternalSchema)),
  observation: s.optional(s.lazy(() => observationInternalSchema)),
  metrics: s.optional(s.lazy(() => metricsHudPlatformJobsApiInternalSchema)),
  isCopiedContext: s.optional(s.lazy(() => isCopiedContextSchema)),
  llmCallCount: s.optional(s.lazy(() => llmCallCountInternalSchema)),
  extra: s.optional(s.lazy(() => extraSchema)),
  _keysMap: {
    stepId: "step_id",
    modelName: "model_name",
    reasoningEffort: "reasoning_effort",
    reasoningContent: "reasoning_content",
    toolCalls: "tool_calls",
    isCopiedContext: "is_copied_context",
    llmCallCount: "llm_call_count",
  },
};

export const atifStepInternalSchema: Schema<AtifStep> = s.object<AtifStep>(atifStepProperties);

export const atifStepSchema: Schema<AtifStep> = s.lazySchema(() =>
  s.object<AtifStep>({
    ...atifStepProperties,
    stepId: s.int().check(s.gte(1)),
    message: messageSchema,
    toolCalls: s.optional(s.lazy(() => toolCallsSchema)),
    observation: s.optional(s.lazy(() => observationSchema)),
    metrics: s.optional(s.lazy(() => metricsHudPlatformJobsApiSchema)),
    llmCallCount: s.optional(s.lazy(() => llmCallCountSchema)),
  }),
);
