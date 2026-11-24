import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The target type of state machine for this definition. The default is STANDARD. */
export const TypeAwsStepFunctionsOperationsApi = {
  Standard: "STANDARD",
  Express: "EXPRESS",
} as const;
export type TypeAwsStepFunctionsOperationsApi =
  | (typeof TypeAwsStepFunctionsOperationsApi)[keyof typeof TypeAwsStepFunctionsOperationsApi]
  | (string & {});

export const typeAwsStepFunctionsOperationsApiSchema: EnumSchema<TypeAwsStepFunctionsOperationsApi> =
  s.enumOf<TypeAwsStepFunctionsOperationsApi>(TypeAwsStepFunctionsOperationsApi);
