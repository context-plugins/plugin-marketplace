import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current state of the schema (PROCESSING, FAILED, SUCCESS, or NOT_APPLICABLE). When the schema
 * is in the ACTIVE state, you can add data.
 */
export const StatusAwsAppSyncOperationsApi = {
  Processing: "PROCESSING",
  Active: "ACTIVE",
  Deleting: "DELETING",
  Failed: "FAILED",
  Success: "SUCCESS",
  NotApplicable: "NOT_APPLICABLE",
} as const;
export type StatusAwsAppSyncOperationsApi =
  | (typeof StatusAwsAppSyncOperationsApi)[keyof typeof StatusAwsAppSyncOperationsApi]
  | (string & {});

export const statusAwsAppSyncOperationsApiSchema: EnumSchema<StatusAwsAppSyncOperationsApi> =
  s.enumOf<StatusAwsAppSyncOperationsApi>(StatusAwsAppSyncOperationsApi);
