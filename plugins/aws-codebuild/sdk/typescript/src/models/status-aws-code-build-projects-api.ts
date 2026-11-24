import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the webhook. Valid values include: CREATING: The webhook is being created.
 * CREATE_FAILED: The webhook has failed to create. ACTIVE: The webhook has succeeded and is active.
 * DELETING: The webhook is being deleted.
 */
export const StatusAwsCodeBuildProjectsApi = {
  Creating: "CREATING",
  CreateFailed: "CREATE_FAILED",
  Active: "ACTIVE",
  Deleting: "DELETING",
} as const;
export type StatusAwsCodeBuildProjectsApi =
  | (typeof StatusAwsCodeBuildProjectsApi)[keyof typeof StatusAwsCodeBuildProjectsApi]
  | (string & {});

export const statusAwsCodeBuildProjectsApiSchema: EnumSchema<StatusAwsCodeBuildProjectsApi> =
  s.enumOf<StatusAwsCodeBuildProjectsApi>(StatusAwsCodeBuildProjectsApi);
