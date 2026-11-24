import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The cause of the failure. To help diagnose issues, use this information to trace back the chain
 * of events leading up to this event. If cause is set to OPERATION_NOT_PERMITTED, the decision
 * failed because the IAM role attached to the execution lacked sufficient permissions. For details
 * and example IAM policies, see Lambda Tasks in the Amazon SWF Developer Guide.
 */
export const Cause14 = {
  AssumeRoleFailed: "ASSUME_ROLE_FAILED",
} as const;
export type Cause14 = (typeof Cause14)[keyof typeof Cause14] | (string & {});

export const cause14Schema: EnumSchema<Cause14> = s.enumOf<Cause14>(Cause14);
