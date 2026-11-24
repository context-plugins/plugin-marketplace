import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { severity1Schema, type Severity1 } from "./severity1.js";
import {
  typeAwsStepFunctionsOperationsApiSchema,
  type TypeAwsStepFunctionsOperationsApi,
} from "./type-aws-step-functions-operations-api.js";

export type ValidateStateMachineDefinitionInput = {
  /**
   * The Amazon States Language definition of the state machine. For more information, see Amazon
   * States Language (ASL).
   */
  definition: string;
  /** The target type of state machine for this definition. The default is STANDARD. */
  type?: TypeAwsStepFunctionsOperationsApi;
  /**
   * Minimum level of diagnostics to return. ERROR returns only ERROR diagnostics, whereas WARNING
   * returns both WARNING and ERROR diagnostics. The default is ERROR.
   */
  severity?: Severity1;
  /**
   * The maximum number of diagnostics that are returned per call. The default and maximum value is
   * 100. Setting the value to 0 will also use the default of 100. If the number of diagnostics
   * returned in the response exceeds maxResults, the value of the truncated field in the response
   * will be set to true.
   */
  maxResults?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const validateStateMachineDefinitionInputSchema: Schema<ValidateStateMachineDefinitionInput> =
  s.object<ValidateStateMachineDefinitionInput>(
    {
      definition: s.string(),
      type: s.optional(s.lazy(() => typeAwsStepFunctionsOperationsApiSchema)),
      severity: s.optional(s.lazy(() => severity1Schema)),
      maxResults: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
