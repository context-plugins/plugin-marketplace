import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resultSchema, type Result } from "./result.js";
import {
  validateStateMachineDefinitionDiagnosticSchema,
  type ValidateStateMachineDefinitionDiagnostic,
} from "./validate-state-machine-definition-diagnostic.js";

export type ValidateStateMachineDefinitionOutput = {
  /**
   * The result value will be OK when no syntax errors are found, or FAIL if the workflow definition
   * does not pass verification.
   */
  result: Result;
  /**
   * An array of diagnostic errors and warnings found during validation of the state machine
   * definition. Since warnings do not prevent deploying your workflow definition, the result value
   * could be OK even when warning diagnostics are present in the response.
   */
  diagnostics: ValidateStateMachineDefinitionDiagnostic[];
  /**
   * The result value will be true if the number of diagnostics found in the workflow definition
   * exceeds maxResults. When all diagnostics results are returned, the value will be false.
   */
  truncated?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const validateStateMachineDefinitionOutputSchema: Schema<ValidateStateMachineDefinitionOutput> =
  s.object<ValidateStateMachineDefinitionOutput>(
    {
      result: resultSchema,
      diagnostics: s.array(s.lazy(() => validateStateMachineDefinitionDiagnosticSchema)),
      truncated: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
