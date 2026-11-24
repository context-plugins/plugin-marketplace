import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { inspectionDataSchema, type InspectionData } from "./inspection-data.js";
import {
  statusAwsStepFunctionsOperationsApiSchema,
  type StatusAwsStepFunctionsOperationsApi,
} from "./status-aws-step-functions-operations-api.js";

export type TestStateOutput = {
  /**
   * The JSON output data of the state. Length constraints apply to the payload size, and are
   * expressed as bytes in UTF-8 encoding.
   */
  output?: string;
  /** The error returned when the execution of a state fails. */
  error?: string;
  /** A detailed explanation of the cause for the error when the execution of a state fails. */
  cause?: string;
  inspectionData?: InspectionData;
  /**
   * The name of the next state to transition to. If you haven't defined a next state in your
   * definition or if the execution of the state fails, this field doesn't contain a value.
   */
  nextState?: string;
  /** The execution status of the state. */
  status?: StatusAwsStepFunctionsOperationsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const testStateOutputSchema: Schema<TestStateOutput> = s.object<TestStateOutput>(
  {
    output: s.optional(s.string()),
    error: s.optional(s.string()),
    cause: s.optional(s.string()),
    inspectionData: s.optional(s.lazy(() => inspectionDataSchema)),
    nextState: s.optional(s.string()),
    status: s.optional(s.lazy(() => statusAwsStepFunctionsOperationsApiSchema)),
  },
  { additionalProperties: s.json() },
);
