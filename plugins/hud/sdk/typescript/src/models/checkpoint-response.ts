import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { checkpointRefSchema, type CheckpointRef } from "./checkpoint-ref.js";
import { checkpointNameSchema, type CheckpointName } from "./unions/checkpoint-name.js";
import { learningRateSchema, type LearningRate } from "./unions/learning-rate.js";
import { lossFnSchema, type LossFn } from "./unions/loss-fn.js";
import { meanRewardSchema, type MeanReward } from "./unions/mean-reward.js";
import {
  nameHudPlatformJobsApiSchema,
  type NameHudPlatformJobsApi,
} from "./unions/name-hud-platform-jobs-api.js";
import { numDatumsSchema, type NumDatums } from "./unions/num-datums.js";
import { numTokensSchema, type NumTokens } from "./unions/num-tokens.js";
import { numTracesSchema, type NumTraces } from "./unions/num-traces.js";
import {
  prevModelCheckpointIdSchema,
  type PrevModelCheckpointId,
} from "./unions/prev-model-checkpoint-id.js";
import {
  sessionIdHudPlatformModelsApiSchema,
  type SessionIdHudPlatformModelsApi,
} from "./unions/session-id-hud-platform-models-api.js";
import { sessionNameSchema, type SessionName } from "./unions/session-name.js";

/**
 * One node in a model's training-checkpoint tree.
 *
 * ``id`` is the ``model_checkpoints`` node id (what the tree keys + links on via
 * ``prev_model_checkpoint_id``). ``checkpoint_name`` is the served sampler path.
 */
export type CheckpointResponse = {
  id: string;
  name?: NameHudPlatformJobsApi;
  checkpointName?: CheckpointName;
  prevModelCheckpointId?: PrevModelCheckpointId;
  /** @default false */
  isActive?: boolean;
  createdAt: Date;
  numTraces?: NumTraces;
  numDatums?: NumDatums;
  numTokens?: NumTokens;
  meanReward?: MeanReward;
  learningRate?: LearningRate;
  lossFn?: LossFn;
  metrics?: Record<string, number>;
  jobs?: CheckpointRef[];
  tasksets?: CheckpointRef[];
  sessionId?: SessionIdHudPlatformModelsApi;
  sessionName?: SessionName;
  rewardGroups?: number[][];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const checkpointResponseSchema: Schema<CheckpointResponse> = s.object<CheckpointResponse>(
  {
    id: s.string(),
    name: s.optional(s.lazy(() => nameHudPlatformJobsApiSchema)),
    checkpointName: s.optional(s.lazy(() => checkpointNameSchema)),
    prevModelCheckpointId: s.optional(s.lazy(() => prevModelCheckpointIdSchema)),
    isActive: s.defaulted(s.boolean(), false),
    createdAt: s.dateTime(),
    numTraces: s.optional(s.lazy(() => numTracesSchema)),
    numDatums: s.optional(s.lazy(() => numDatumsSchema)),
    numTokens: s.optional(s.lazy(() => numTokensSchema)),
    meanReward: s.optional(s.lazy(() => meanRewardSchema)),
    learningRate: s.optional(s.lazy(() => learningRateSchema)),
    lossFn: s.optional(s.lazy(() => lossFnSchema)),
    metrics: s.optional(s.record(s.string(), s.float64())),
    jobs: s.optional(s.array(s.lazy(() => checkpointRefSchema))),
    tasksets: s.optional(s.array(s.lazy(() => checkpointRefSchema))),
    sessionId: s.optional(s.lazy(() => sessionIdHudPlatformModelsApiSchema)),
    sessionName: s.optional(s.lazy(() => sessionNameSchema)),
    rewardGroups: s.optional(s.array(s.array(s.float64()))),
    _keysMap: {
      checkpointName: "checkpoint_name",
      prevModelCheckpointId: "prev_model_checkpoint_id",
      isActive: "is_active",
      createdAt: "created_at",
      numTraces: "num_traces",
      numDatums: "num_datums",
      numTokens: "num_tokens",
      meanReward: "mean_reward",
      learningRate: "learning_rate",
      lossFn: "loss_fn",
      sessionId: "session_id",
      sessionName: "session_name",
      rewardGroups: "reward_groups",
    },
  },
  { additionalProperties: s.json() },
);
