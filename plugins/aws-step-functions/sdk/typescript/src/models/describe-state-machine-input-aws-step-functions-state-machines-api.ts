import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  includedData1AwsStepFunctionsStateMachinesApiSchema,
  type IncludedData1AwsStepFunctionsStateMachinesApi,
} from "./included-data1-aws-step-functions-state-machines-api.js";

export type DescribeStateMachineInputAwsStepFunctionsStateMachinesApi = {
  /**
   * The Amazon Resource Name (ARN) of the state machine for which you want the information. If you
   * specify a state machine version ARN, this API returns details about that version. The version
   * ARN is a combination of state machine ARN and the version number separated by a colon (:). For
   * example, stateMachineARN:1.
   */
  stateMachineArn: string;
  /**
   * If your state machine definition is encrypted with a KMS key, callers must have kms:Decrypt
   * permission to decrypt the definition. Alternatively, you can call the API with includedData =
   * METADATA_ONLY to get a successful response without the encrypted definition. When calling a
   * labelled ARN for an encrypted state machine, the includedData = METADATA_ONLY parameter will
   * not apply because Step Functions needs to decrypt the entire state machine definition to get
   * the Distributed Map state’s definition. In this case, the API caller needs to have kms:Decrypt
   * permission.
   */
  includedData?: IncludedData1AwsStepFunctionsStateMachinesApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeStateMachineInputAwsStepFunctionsStateMachinesApiSchema: Schema<DescribeStateMachineInputAwsStepFunctionsStateMachinesApi> =
  s.object<DescribeStateMachineInputAwsStepFunctionsStateMachinesApi>(
    {
      stateMachineArn: s.string(),
      includedData: s.optional(s.lazy(() => includedData1AwsStepFunctionsStateMachinesApiSchema)),
    },
    { additionalProperties: s.json() },
  );
