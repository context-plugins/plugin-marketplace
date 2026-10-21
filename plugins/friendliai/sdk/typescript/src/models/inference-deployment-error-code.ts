import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** ErrorCode type. */
export const InferenceDeploymentErrorCode = {
  WorkloadInitUnknownError: "WORKLOAD_INIT_UNKNOWN_ERROR",
  WorkloadInitSettingsError: "WORKLOAD_INIT_SETTINGS_ERROR",
  WorkloadInitGrpcError: "WORKLOAD_INIT_GRPC_ERROR",
  WorkloadInitManifestNotFoundError: "WORKLOAD_INIT_MANIFEST_NOT_FOUND_ERROR",
  WorkloadInitManifestTypeError: "WORKLOAD_INIT_MANIFEST_TYPE_ERROR",
  WorkloadInitDownloadError: "WORKLOAD_INIT_DOWNLOAD_ERROR",
  WorkloadInitInvalidTokenError: "WORKLOAD_INIT_INVALID_TOKEN_ERROR",
  WorkloadInitCannotAccessRepoError: "WORKLOAD_INIT_CANNOT_ACCESS_REPO_ERROR",
  WorkloadInitHfWandbApiError: "WORKLOAD_INIT_HF_WANDB_API_ERROR",
  WorkloadInitInsufficientDiskError: "WORKLOAD_INIT_INSUFFICIENT_DISK_ERROR",
  InferenceEngineUnknownError: "INFERENCE_ENGINE_UNKNOWN_ERROR",
  InferenceEngineInvalidArgumentError: "INFERENCE_ENGINE_INVALID_ARGUMENT_ERROR",
  InferenceEngineMemoryError: "INFERENCE_ENGINE_MEMORY_ERROR",
  InferenceEngineMeteringClientConfigError: "INFERENCE_ENGINE_METERING_CLIENT_CONFIG_ERROR",
} as const;
export type InferenceDeploymentErrorCode =
  | (typeof InferenceDeploymentErrorCode)[keyof typeof InferenceDeploymentErrorCode]
  | (string & {});

export const inferenceDeploymentErrorCodeSchema: EnumSchema<InferenceDeploymentErrorCode> =
  s.enumOf<InferenceDeploymentErrorCode>(InferenceDeploymentErrorCode);
