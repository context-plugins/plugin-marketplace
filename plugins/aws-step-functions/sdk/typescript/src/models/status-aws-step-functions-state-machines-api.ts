import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current status of the state machine. */
export const StatusAwsStepFunctionsStateMachinesApi = {
  Active: "ACTIVE",
  Deleting: "DELETING",
} as const;
export type StatusAwsStepFunctionsStateMachinesApi =
  | (typeof StatusAwsStepFunctionsStateMachinesApi)[keyof typeof StatusAwsStepFunctionsStateMachinesApi]
  | (string & {});

export const statusAwsStepFunctionsStateMachinesApiSchema: EnumSchema<StatusAwsStepFunctionsStateMachinesApi> =
  s.enumOf<StatusAwsStepFunctionsStateMachinesApi>(StatusAwsStepFunctionsStateMachinesApi);
