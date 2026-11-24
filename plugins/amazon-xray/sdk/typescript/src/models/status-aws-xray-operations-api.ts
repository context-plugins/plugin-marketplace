import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status of the retrieval. */
export const StatusAwsXRayOperationsApi = {
  Pending: "PENDING",
  Active: "ACTIVE",
} as const;
export type StatusAwsXRayOperationsApi =
  | (typeof StatusAwsXRayOperationsApi)[keyof typeof StatusAwsXRayOperationsApi]
  | (string & {});

export const statusAwsXRayOperationsApiSchema: EnumSchema<StatusAwsXRayOperationsApi> =
  s.enumOf<StatusAwsXRayOperationsApi>(StatusAwsXRayOperationsApi);
