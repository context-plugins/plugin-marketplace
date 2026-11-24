import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  includedDataAwsStepFunctionsStateMachinesApiSchema,
  type IncludedDataAwsStepFunctionsStateMachinesApi,
} from "./included-data-aws-step-functions-state-machines-api.js";

export type DescribeStateMachineForExecutionInputAwsStepFunctionsStateMachinesApi = {
  /** The Amazon Resource Name (ARN) of the execution you want state machine information for. */
  executionArn: string;
  /**
   * If your state machine definition is encrypted with a KMS key, callers must have kms:Decrypt
   * permission to decrypt the definition. Alternatively, you can call the API with includedData =
   * METADATA_ONLY to get a successful response without the encrypted definition.
   */
  includedData?: IncludedDataAwsStepFunctionsStateMachinesApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeStateMachineForExecutionInputAwsStepFunctionsStateMachinesApiSchema: Schema<DescribeStateMachineForExecutionInputAwsStepFunctionsStateMachinesApi> =
  s.object<DescribeStateMachineForExecutionInputAwsStepFunctionsStateMachinesApi>(
    {
      executionArn: s.string(),
      includedData: s.optional(s.lazy(() => includedDataAwsStepFunctionsStateMachinesApiSchema)),
    },
    { additionalProperties: s.json() },
  );
