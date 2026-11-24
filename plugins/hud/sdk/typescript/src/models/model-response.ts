import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { capacityInternalSchema, capacitySchema, type Capacity } from "./unions/capacity.js";
import { checkpointCountSchema, type CheckpointCount } from "./unions/checkpoint-count.js";
import { contextWindowSchema, type ContextWindow } from "./unions/context-window.js";
import { deprecatedAtSchema, type DeprecatedAt } from "./unions/deprecated-at.js";
import { deprecationMessageSchema, type DeprecationMessage } from "./unions/deprecation-message.js";
import { forkOfModelIdSchema, type ForkOfModelId } from "./unions/fork-of-model-id.js";
import { forkOfModelNameSchema, type ForkOfModelName } from "./unions/fork-of-model-name.js";
import { inferenceCountSchema, type InferenceCount } from "./unions/inference-count.js";
import { inputCostPerTokenSchema, type InputCostPerToken } from "./unions/input-cost-per-token.js";
import {
  nameHudPlatformJobsApiSchema,
  type NameHudPlatformJobsApi,
} from "./unions/name-hud-platform-jobs-api.js";
import { outputCostPerTokenSchema, type OutputCostPerToken } from "./unions/output-cost-per-token.js";
import { providerSchema, type Provider } from "./unions/provider.js";
import { releasedAtSchema, type ReleasedAt } from "./unions/released-at.js";

export type ModelResponse = {
  id: string;
  modelName: string;
  name?: NameHudPlatformJobsApi;
  provider?: Provider;
  routes?: string[];
  /** @default false */
  isBeta?: boolean;
  /** @default false */
  hidden?: boolean;
  /** @default false */
  isTrainable?: boolean;
  /** @default true */
  public?: boolean;
  checkpointCount?: CheckpointCount;
  /** Lifetime platform-wide inference-call count. Null for signed-out callers. */
  inferenceCount?: InferenceCount;
  forkOfModelId?: ForkOfModelId;
  forkOfModelName?: ForkOfModelName;
  contextWindow?: ContextWindow;
  sdkAgentType: string;
  inputCostPerToken?: InputCostPerToken;
  outputCostPerToken?: OutputCostPerToken;
  pricingConfig?: Record<string, unknown>;
  requestDefaults?: Record<string, unknown>;
  metadata?: Record<string, unknown>;
  createdAt: Date;
  /** Vendor-published release time. Null until an admin sets it; not catalog insert time. */
  releasedAt?: ReleasedAt;
  /**
   * Vendor retirement time. Null = not deprecated. A future value announces the date; once it
   * passes, the gateway rejects requests for the model.
   */
  deprecatedAt?: DeprecatedAt;
  /** Operator-set deprecation notice shown in the UI and returned on rejected requests. */
  deprecationMessage?: DeprecationMessage;
  /** @default false */
  canEdit?: boolean;
  /**
   * Hosted rollout capacity, on serving global models in signed-in list responses. Null otherwise,
   * or while no scheduler pass has run recently.
   */
  capacity?: Capacity;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const modelResponseProperties: s.Shape<ModelResponse> = {
  id: s.string(),
  modelName: s.string(),
  name: s.optional(s.lazy(() => nameHudPlatformJobsApiSchema)),
  provider: s.optional(s.lazy(() => providerSchema)),
  routes: s.optional(s.array(s.string())),
  isBeta: s.defaulted(s.boolean(), false),
  hidden: s.defaulted(s.boolean(), false),
  isTrainable: s.defaulted(s.boolean(), false),
  public: s.defaulted(s.boolean(), true),
  checkpointCount: s.optional(s.lazy(() => checkpointCountSchema)),
  inferenceCount: s.optional(s.lazy(() => inferenceCountSchema)),
  forkOfModelId: s.optional(s.lazy(() => forkOfModelIdSchema)),
  forkOfModelName: s.optional(s.lazy(() => forkOfModelNameSchema)),
  contextWindow: s.optional(s.lazy(() => contextWindowSchema)),
  sdkAgentType: s.string(),
  inputCostPerToken: s.optional(s.lazy(() => inputCostPerTokenSchema)),
  outputCostPerToken: s.optional(s.lazy(() => outputCostPerTokenSchema)),
  pricingConfig: s.optional(s.record(s.string(), s.unknown())),
  requestDefaults: s.optional(s.record(s.string(), s.unknown())),
  metadata: s.optional(s.record(s.string(), s.unknown())),
  createdAt: s.dateTime(),
  releasedAt: s.optional(s.lazy(() => releasedAtSchema)),
  deprecatedAt: s.optional(s.lazy(() => deprecatedAtSchema)),
  deprecationMessage: s.optional(s.lazy(() => deprecationMessageSchema)),
  canEdit: s.defaulted(s.boolean(), false),
  capacity: s.optional(s.lazy(() => capacityInternalSchema)),
  _keysMap: {
    modelName: "model_name",
    isBeta: "is_beta",
    isTrainable: "is_trainable",
    checkpointCount: "checkpoint_count",
    inferenceCount: "inference_count",
    forkOfModelId: "fork_of_model_id",
    forkOfModelName: "fork_of_model_name",
    contextWindow: "context_window",
    sdkAgentType: "sdk_agent_type",
    inputCostPerToken: "input_cost_per_token",
    outputCostPerToken: "output_cost_per_token",
    pricingConfig: "pricing_config",
    requestDefaults: "request_defaults",
    createdAt: "created_at",
    releasedAt: "released_at",
    deprecatedAt: "deprecated_at",
    deprecationMessage: "deprecation_message",
    canEdit: "can_edit",
  },
};

export const modelResponseInternalSchema: Schema<ModelResponse> = s.object<ModelResponse>(
  modelResponseProperties,
  { additionalProperties: s.json() },
);

export const modelResponseSchema: Schema<ModelResponse> = s.lazySchema(() =>
  s.object<ModelResponse>(
    {
      ...modelResponseProperties,
      capacity: s.optional(s.lazy(() => capacitySchema)),
    },
    { additionalProperties: s.json() },
  ),
);
