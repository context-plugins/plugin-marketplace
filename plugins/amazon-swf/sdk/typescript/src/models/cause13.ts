import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The cause of the failure. To help diagnose issues, use this information to trace back the chain
 * of events leading up to this event. If cause is set to OPERATION_NOT_PERMITTED, the decision
 * failed because it lacked sufficient permissions. For details and example IAM policies, see Using
 * IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.
 */
export const Cause13 = {
  IdAlreadyInUse: "ID_ALREADY_IN_USE",
  OpenLambdaFunctionsLimitExceeded: "OPEN_LAMBDA_FUNCTIONS_LIMIT_EXCEEDED",
  LambdaFunctionCreationRateExceeded: "LAMBDA_FUNCTION_CREATION_RATE_EXCEEDED",
  LambdaServiceNotAvailableInRegion: "LAMBDA_SERVICE_NOT_AVAILABLE_IN_REGION",
} as const;
export type Cause13 = (typeof Cause13)[keyof typeof Cause13] | (string & {});

export const cause13Schema: EnumSchema<Cause13> = s.enumOf<Cause13>(Cause13);
