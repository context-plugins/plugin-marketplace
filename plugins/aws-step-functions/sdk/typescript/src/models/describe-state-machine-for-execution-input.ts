import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { includedData1Schema, type IncludedData1 } from "./included-data1.js";

export type DescribeStateMachineForExecutionInput = {
  /** The Amazon Resource Name (ARN) of the execution you want state machine information for. */
  executionArn: string;
  /**
   * If your state machine definition is encrypted with a KMS key, callers must have kms:Decrypt
   * permission to decrypt the definition. Alternatively, you can call the API with includedData =
   * METADATA_ONLY to get a successful response without the encrypted definition.
   */
  includedData?: IncludedData1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeStateMachineForExecutionInputSchema: Schema<DescribeStateMachineForExecutionInput> =
  s.object<DescribeStateMachineForExecutionInput>(
    {
      executionArn: s.string(),
      includedData: s.optional(s.lazy(() => includedData1Schema)),
    },
    { additionalProperties: s.json() },
  );
