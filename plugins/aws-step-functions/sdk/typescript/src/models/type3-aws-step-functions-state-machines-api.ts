import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type3AwsStepFunctionsStateMachinesApi = {
  Standard: "STANDARD",
  Express: "EXPRESS",
} as const;
export type Type3AwsStepFunctionsStateMachinesApi =
  | (typeof Type3AwsStepFunctionsStateMachinesApi)[keyof typeof Type3AwsStepFunctionsStateMachinesApi]
  | (string & {});

export const type3AwsStepFunctionsStateMachinesApiSchema: EnumSchema<Type3AwsStepFunctionsStateMachinesApi> =
  s.enumOf<Type3AwsStepFunctionsStateMachinesApi>(Type3AwsStepFunctionsStateMachinesApi);
