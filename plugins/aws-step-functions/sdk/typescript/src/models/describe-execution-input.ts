import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { includedDataSchema, type IncludedData } from "./included-data.js";

export type DescribeExecutionInput = {
  /** The Amazon Resource Name (ARN) of the execution to describe. */
  executionArn: string;
  /**
   * If your state machine definition is encrypted with a KMS key, callers must have kms:Decrypt
   * permission to decrypt the definition. Alternatively, you can call DescribeStateMachine API with
   * includedData = METADATA_ONLY to get a successful response without the encrypted definition.
   */
  includedData?: IncludedData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeExecutionInputSchema: Schema<DescribeExecutionInput> = s.object<DescribeExecutionInput>(
  {
    executionArn: s.string(),
    includedData: s.optional(s.lazy(() => includedDataSchema)),
  },
  { additionalProperties: s.json() },
);
