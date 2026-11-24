import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Encryption type */
export const Type1AwsStepFunctionsStateMachinesApi = {
  AwsOwnedKey: "AWS_OWNED_KEY",
  CustomerManagedKmsKey: "CUSTOMER_MANAGED_KMS_KEY",
} as const;
export type Type1AwsStepFunctionsStateMachinesApi =
  | (typeof Type1AwsStepFunctionsStateMachinesApi)[keyof typeof Type1AwsStepFunctionsStateMachinesApi]
  | (string & {});

export const type1AwsStepFunctionsStateMachinesApiSchema: EnumSchema<Type1AwsStepFunctionsStateMachinesApi> =
  s.enumOf<Type1AwsStepFunctionsStateMachinesApi>(Type1AwsStepFunctionsStateMachinesApi);
