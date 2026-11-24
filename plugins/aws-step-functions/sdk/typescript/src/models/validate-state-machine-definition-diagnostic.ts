import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { severitySchema, type Severity } from "./severity.js";

export type ValidateStateMachineDefinitionDiagnostic = {
  /**
   * A value of ERROR means that you cannot create or update a state machine with this definition.
   * WARNING level diagnostics alert you to potential issues, but they will not prevent you from
   * creating or updating your state machine.
   */
  severity: Severity;
  /** Identifying code for the diagnostic. */
  code: string;
  /** Message describing the diagnostic condition. */
  message: string;
  /**
   * Location of the issue in the state machine, if available. For errors specific to a field, the
   * location could be in the format: /States//, for example: /States/FailState/ErrorPath.
   */
  location?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const validateStateMachineDefinitionDiagnosticSchema: Schema<ValidateStateMachineDefinitionDiagnostic> =
  s.object<ValidateStateMachineDefinitionDiagnostic>(
    {
      severity: severitySchema,
      code: s.string(),
      message: s.string(),
      location: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
