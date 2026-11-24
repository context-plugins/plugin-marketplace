import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Determines whether a Standard or Express state machine is created. The default is STANDARD. You
 * cannot update the type of a state machine once it has been created.
 */
export const TypeAwsStepFunctionsStateMachinesApi = {
  Standard: "STANDARD",
  Express: "EXPRESS",
} as const;
export type TypeAwsStepFunctionsStateMachinesApi =
  | (typeof TypeAwsStepFunctionsStateMachinesApi)[keyof typeof TypeAwsStepFunctionsStateMachinesApi]
  | (string & {});

export const typeAwsStepFunctionsStateMachinesApiSchema: EnumSchema<TypeAwsStepFunctionsStateMachinesApi> =
  s.enumOf<TypeAwsStepFunctionsStateMachinesApi>(TypeAwsStepFunctionsStateMachinesApi);
