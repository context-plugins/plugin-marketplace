import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gpuUsageSchema, type GpuUsage } from "./unions/gpu-usage.js";
import { inputCachedTokensSchema, type InputCachedTokens } from "./unions/input-cached-tokens.js";
import { inputTokens1Schema, type InputTokens1 } from "./unions/input-tokens1.js";
import { model30Schema, type Model30 } from "./unions/model30.js";
import { numModelRequestsSchema, type NumModelRequests } from "./unions/num-model-requests.js";
import { outputTokens1Schema, type OutputTokens1 } from "./unions/output-tokens1.js";
import {
  processedAudioLengthMsSchema,
  type ProcessedAudioLengthMs,
} from "./unions/processed-audio-length-ms.js";
import { productType1Schema, type ProductType1 } from "./unions/product-type1.js";
import { reservedGpuUsageSchema, type ReservedGpuUsage } from "./unions/reserved-gpu-usage.js";
import { userIdSchema, type UserId } from "./unions/user-id.js";

/** Usage result for a single group. */
export type UsageResult = {
  /**
   * When `group_by=product_type`, this field provides the product type of the grouped usage result.
   * Supported values are `model_apis` and `dedicated_endpoints`.
   */
  productType?: ProductType1;
  /**
   * When `group_by=model`, this field provides the model ID of the grouped usage result. For Model
   * APIs usage, this is the model ID. For Dedicated Endpoints usage, this is the endpoint ID.
   */
  model?: Model30;
  /** When `group_by=user_id`, this field provides the user ID of the grouped usage result. */
  userId?: UserId;
  /** The count of requests made. */
  numModelRequests?: NumModelRequests;
  /** The aggregated number of input tokens used, including cached tokens. */
  inputTokens?: InputTokens1;
  /** The aggregated number of input tokens that has been cached. */
  inputCachedTokens?: InputCachedTokens;
  /** The aggregated number of text output tokens used. */
  outputTokens?: OutputTokens1;
  /**
   * Total GPU time in seconds by GPU type, across both on-demand and reserved capacity. Missing
   * keys mean zero. With `group_by=user_id`, usage is attributed to the user who created the
   * endpoint.
   */
  gpuUsage?: GpuUsage;
  /**
   * Reserved GPU time in seconds by GPU type, covered by your reservation during the reservation
   * period. Included in `gpu_usage`; do not add them together. Missing keys mean zero. Usage is
   * reported per endpoint, but which endpoints consume reserved GPU time is determined
   * automatically and cannot be configured. With group_by=user_id, usage is attributed to the user
   * who created the endpoint.
   */
  reservedGpuUsage?: ReservedGpuUsage;
  /** The number of processed audio length in milliseconds. Zero when there is no audio usage. */
  processedAudioLengthMs?: ProcessedAudioLengthMs;
};

export const usageResultSchema: Schema<UsageResult> = s.object<UsageResult>({
  productType: s.optional(s.lazy(() => productType1Schema)),
  model: s.optional(s.lazy(() => model30Schema)),
  userId: s.optional(s.lazy(() => userIdSchema)),
  numModelRequests: s.optional(s.lazy(() => numModelRequestsSchema)),
  inputTokens: s.optional(s.lazy(() => inputTokens1Schema)),
  inputCachedTokens: s.optional(s.lazy(() => inputCachedTokensSchema)),
  outputTokens: s.optional(s.lazy(() => outputTokens1Schema)),
  gpuUsage: s.optional(s.lazy(() => gpuUsageSchema)),
  reservedGpuUsage: s.optional(s.lazy(() => reservedGpuUsageSchema)),
  processedAudioLengthMs: s.optional(s.lazy(() => processedAudioLengthMsSchema)),
  _keysMap: {
    productType: "product_type",
    userId: "user_id",
    numModelRequests: "num_model_requests",
    inputTokens: "input_tokens",
    inputCachedTokens: "input_cached_tokens",
    outputTokens: "output_tokens",
    gpuUsage: "gpu_usage",
    reservedGpuUsage: "reserved_gpu_usage",
    processedAudioLengthMs: "processed_audio_length_ms",
  },
});
