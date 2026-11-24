import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fieldValidationModeSchema, type FieldValidationMode } from "./field-validation-mode.js";
import { mockErrorOutputSchema, type MockErrorOutput } from "./mock-error-output.js";

export type MockInput = {
  /** A JSON string containing the mocked result of the state invocation. */
  result?: string;
  errorOutput?: MockErrorOutput;
  /**
   * Determines the level of strictness when validating mocked results against their respective API
   * models. Values include: STRICT: All required fields must be present, and all present fields
   * must conform to the API's schema. PRESENT: All present fields must conform to the API's schema.
   * NONE: No validation is performed. If no value is specified, the default value is STRICT.
   */
  fieldValidationMode?: FieldValidationMode;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mockInputSchema: Schema<MockInput> = s.object<MockInput>(
  {
    result: s.optional(s.string()),
    errorOutput: s.optional(s.lazy(() => mockErrorOutputSchema)),
    fieldValidationMode: s.optional(s.lazy(() => fieldValidationModeSchema)),
  },
  { additionalProperties: s.json() },
);
