import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SkeletonContractOperationStateDto = {
  Ongoing: "ongoing",
  Completed: "completed",
  Failed: "failed",
  Canceled: "canceled",
} as const;
export type SkeletonContractOperationStateDto =
  | (typeof SkeletonContractOperationStateDto)[keyof typeof SkeletonContractOperationStateDto]
  | (string & {});

export const skeletonContractOperationStateDtoSchema: EnumSchema<SkeletonContractOperationStateDto> =
  s.enumOf<SkeletonContractOperationStateDto>(SkeletonContractOperationStateDto);
