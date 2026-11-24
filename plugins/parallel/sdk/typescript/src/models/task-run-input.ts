import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  advancedSettingsParallelAiTasksApiSchema,
  type AdvancedSettingsParallelAiTasksApi,
} from "./unions/advanced-settings-parallel-ai-tasks-api.js";
import { enableEventsSchema, type EnableEvents } from "./unions/enable-events.js";
import {
  inputParallelAiTasksApiSchema,
  type InputParallelAiTasksApi,
} from "./unions/input-parallel-ai-tasks-api.js";
import {
  mcpServersParallelAiTasksApiSchema,
  type McpServersParallelAiTasksApi,
} from "./unions/mcp-servers-parallel-ai-tasks-api.js";
import {
  memoryScopeKeyInternalSchema,
  memoryScopeKeySchema,
  type MemoryScopeKey,
} from "./unions/memory-scope-key.js";
import { metadata4Schema, type Metadata4 } from "./unions/metadata4.js";
import { previousInteractionIdSchema, type PreviousInteractionId } from "./unions/previous-interaction-id.js";
import { sourcePolicy1Schema, type SourcePolicy1 } from "./unions/source-policy1.js";
import { taskSpec1Schema, type TaskSpec1 } from "./unions/task-spec1.js";
import { webhook1Schema, type Webhook1 } from "./unions/webhook1.js";

/** Request to run a task. */
export type TaskRunInput = {
  /** Processor to use for the task. */
  processor: string;
  /**
   * User-provided metadata stored with the run. Keys and values must be strings with a maximum
   * length of 16 and 512 characters respectively.
   */
  metadata?: Metadata4;
  /**
   * User-provided key identifying the memory scope to use. Omit to use personal memory, if
   * available.
   */
  memoryScopeKey?: MemoryScopeKey;
  /** Optional source policy governing preferred and disallowed domains in web search results. */
  sourcePolicy?: SourcePolicy1;
  /** Advanced search configuration for the task run. */
  advancedSettings?: AdvancedSettingsParallelAiTasksApi;
  /** Task specification. If unspecified, defaults to auto output schema. */
  taskSpec?: TaskSpec1;
  /** Input to the task, either text or a JSON object. */
  input: InputParallelAiTasksApi;
  /** Interaction ID to use as context for this request. */
  previousInteractionId?: PreviousInteractionId;
  /** Optional list of MCP servers to use for the run. */
  mcpServers?: McpServersParallelAiTasksApi;
  /**
   * Controls tracking of task run execution progress. When set to true, progress events are
   * recorded and can be accessed via the [Task Run events](https://docs.parallel.ai/api-reference)
   * endpoint. When false, no progress events are tracked. Note that progress tracking cannot be
   * enabled after a run has been created. The flag is set to true by default for premium processors
   * (pro and above).
   */
  enableEvents?: EnableEvents;
  /**
   * Callback URL (webhook endpoint) that will receive an HTTP POST when the run completes. This
   * feature is not available via the Python SDK.
   */
  webhook?: Webhook1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const taskRunInputProperties: s.Shape<TaskRunInput> = {
  processor: s.string(),
  metadata: s.optional(s.lazy(() => metadata4Schema)),
  memoryScopeKey: s.optional(s.lazy(() => memoryScopeKeyInternalSchema)),
  sourcePolicy: s.optional(s.lazy(() => sourcePolicy1Schema)),
  advancedSettings: s.optional(s.lazy(() => advancedSettingsParallelAiTasksApiSchema)),
  taskSpec: s.optional(s.lazy(() => taskSpec1Schema)),
  input: inputParallelAiTasksApiSchema,
  previousInteractionId: s.optional(s.lazy(() => previousInteractionIdSchema)),
  mcpServers: s.optional(s.lazy(() => mcpServersParallelAiTasksApiSchema)),
  enableEvents: s.optional(s.lazy(() => enableEventsSchema)),
  webhook: s.optional(s.lazy(() => webhook1Schema)),
  _keysMap: {
    memoryScopeKey: "memory_scope_key",
    sourcePolicy: "source_policy",
    advancedSettings: "advanced_settings",
    taskSpec: "task_spec",
    previousInteractionId: "previous_interaction_id",
    mcpServers: "mcp_servers",
    enableEvents: "enable_events",
  },
};

export const taskRunInputInternalSchema: Schema<TaskRunInput> = s.object<TaskRunInput>(
  taskRunInputProperties,
  { additionalProperties: s.json() },
);

export const taskRunInputSchema: Schema<TaskRunInput> = s.lazySchema(() =>
  s.object<TaskRunInput>(
    {
      ...taskRunInputProperties,
      memoryScopeKey: s.optional(s.lazy(() => memoryScopeKeySchema)),
    },
    { additionalProperties: s.json() },
  ),
);
