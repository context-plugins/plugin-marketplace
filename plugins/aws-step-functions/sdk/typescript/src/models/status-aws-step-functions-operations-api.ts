import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The execution status of the state. */
export const StatusAwsStepFunctionsOperationsApi = {
  Succeeded: "SUCCEEDED",
  Failed: "FAILED",
  Retriable: "RETRIABLE",
  CaughtError: "CAUGHT_ERROR",
} as const;
export type StatusAwsStepFunctionsOperationsApi =
  | (typeof StatusAwsStepFunctionsOperationsApi)[keyof typeof StatusAwsStepFunctionsOperationsApi]
  | (string & {});

export const statusAwsStepFunctionsOperationsApiSchema: EnumSchema<StatusAwsStepFunctionsOperationsApi> =
  s.enumOf<StatusAwsStepFunctionsOperationsApi>(StatusAwsStepFunctionsOperationsApi);
