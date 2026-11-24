import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const GenerateContractOperationStateDto = {
  Ongoing: "ongoing",
  Completed: "completed",
  Failed: "failed",
  Canceled: "canceled",
} as const;
export type GenerateContractOperationStateDto =
  | (typeof GenerateContractOperationStateDto)[keyof typeof GenerateContractOperationStateDto]
  | (string & {});

export const generateContractOperationStateDtoSchema: EnumSchema<GenerateContractOperationStateDto> =
  s.enumOf<GenerateContractOperationStateDto>(GenerateContractOperationStateDto);
