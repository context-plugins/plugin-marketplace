import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * If your state machine definition is encrypted with a KMS key, callers must have kms:Decrypt
 * permission to decrypt the definition. Alternatively, you can call the API with includedData =
 * METADATA_ONLY to get a successful response without the encrypted definition.
 */
export const IncludedDataAwsStepFunctionsStateMachinesApi = {
  AllData: "ALL_DATA",
  MetadataOnly: "METADATA_ONLY",
} as const;
export type IncludedDataAwsStepFunctionsStateMachinesApi =
  | (typeof IncludedDataAwsStepFunctionsStateMachinesApi)[keyof typeof IncludedDataAwsStepFunctionsStateMachinesApi]
  | (string & {});

export const includedDataAwsStepFunctionsStateMachinesApiSchema: EnumSchema<IncludedDataAwsStepFunctionsStateMachinesApi> =
  s.enumOf<IncludedDataAwsStepFunctionsStateMachinesApi>(IncludedDataAwsStepFunctionsStateMachinesApi);
