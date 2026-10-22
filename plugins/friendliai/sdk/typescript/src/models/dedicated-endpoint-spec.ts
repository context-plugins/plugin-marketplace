import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { currentReplicaCountSchema, type CurrentReplicaCount } from "./unions/current-replica-count.js";
import { desiredReplicaCountSchema, type DesiredReplicaCount } from "./unions/desired-replica-count.js";
import { instanceIdSchema, type InstanceId } from "./unions/instance-id.js";
import { maximumContextLengthSchema, type MaximumContextLength } from "./unions/maximum-context-length.js";
import { maximumInputLengthSchema, type MaximumInputLength } from "./unions/maximum-input-length.js";
import { updatedReplicaCountSchema, type UpdatedReplicaCount } from "./unions/updated-replica-count.js";

/** Dedicated endpoint specification. */
export type DedicatedEndpointSpec = {
  /** The name of the endpoint. */
  name: string;
  /** The type of GPU to use for the endpoint. */
  gpuType: string;
  /** The number of GPUs to use per replica. */
  numGpu: number;
  /** The ID of the instance. */
  instanceId?: InstanceId;
  /** The ID of the project that owns the endpoint. */
  projectId: string;
  /** The ID of the user who created the endpoint. */
  creatorId: string;
  /** The ID of the team that owns the endpoint. */
  teamId: string;
  /** The minimum number of replicas to maintain. */
  autoscalingMin: number;
  /** The maximum number of replicas allowed. */
  autoscalingMax: number;
  /** The cooldown period in seconds between scaling operations. */
  autoscalingCooldown: number;
  /** The maximum batch size for inference requests. */
  maxBatchSize: number;
  /** The maximum allowed input length. */
  maxInputLength?: MaximumInputLength;
  /** The maximum context length (input + output tokens) to serve with. */
  maxContextLength?: MaximumContextLength;
  /** Whether to skip special tokens in tokenizer output. */
  tokenizerSkipSpecialTokens: boolean;
  /** Whether to add special tokens in tokenizer input. */
  tokenizerAddSpecialTokens: boolean;
  /** The current number of replicas. */
  currReplicaCnt?: CurrentReplicaCount;
  /** The desired number of replicas. */
  desiredReplicaCnt?: DesiredReplicaCount;
  /** The updated number of replicas. */
  updatedReplicaCnt?: UpdatedReplicaCount;
};

export const dedicatedEndpointSpecSchema: Schema<DedicatedEndpointSpec> = s.object<DedicatedEndpointSpec>({
  name: s.string(),
  gpuType: s.string(),
  numGpu: s.int(),
  instanceId: s.optional(s.lazy(() => instanceIdSchema)),
  projectId: s.string(),
  creatorId: s.string(),
  teamId: s.string(),
  autoscalingMin: s.int(),
  autoscalingMax: s.int(),
  autoscalingCooldown: s.int(),
  maxBatchSize: s.int(),
  maxInputLength: s.optional(s.lazy(() => maximumInputLengthSchema)),
  maxContextLength: s.optional(s.lazy(() => maximumContextLengthSchema)),
  tokenizerSkipSpecialTokens: s.boolean(),
  tokenizerAddSpecialTokens: s.boolean(),
  currReplicaCnt: s.optional(s.lazy(() => currentReplicaCountSchema)),
  desiredReplicaCnt: s.optional(s.lazy(() => desiredReplicaCountSchema)),
  updatedReplicaCnt: s.optional(s.lazy(() => updatedReplicaCountSchema)),
});
