import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * If your state machine definition is encrypted with a KMS key, callers must have kms:Decrypt
 * permission to decrypt the definition. Alternatively, you can call the API with includedData =
 * METADATA_ONLY to get a successful response without the encrypted definition. When calling a
 * labelled ARN for an encrypted state machine, the includedData = METADATA_ONLY parameter will not
 * apply because Step Functions needs to decrypt the entire state machine definition to get the
 * Distributed Map state’s definition. In this case, the API caller needs to have kms:Decrypt
 * permission.
 */
export const IncludedData1AwsStepFunctionsStateMachinesApi = {
  AllData: "ALL_DATA",
  MetadataOnly: "METADATA_ONLY",
} as const;
export type IncludedData1AwsStepFunctionsStateMachinesApi =
  | (typeof IncludedData1AwsStepFunctionsStateMachinesApi)[keyof typeof IncludedData1AwsStepFunctionsStateMachinesApi]
  | (string & {});

export const includedData1AwsStepFunctionsStateMachinesApiSchema: EnumSchema<IncludedData1AwsStepFunctionsStateMachinesApi> =
  s.enumOf<IncludedData1AwsStepFunctionsStateMachinesApi>(IncludedData1AwsStepFunctionsStateMachinesApi);
