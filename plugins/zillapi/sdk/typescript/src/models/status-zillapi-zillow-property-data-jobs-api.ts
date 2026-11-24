import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusZillapiZillowPropertyDataJobsApi = {
  Queued: "queued",
  Running: "running",
  Succeeded: "succeeded",
  Failed: "failed",
  TimedOut: "timed_out",
  Aborted: "aborted",
} as const;
export type StatusZillapiZillowPropertyDataJobsApi =
  | (typeof StatusZillapiZillowPropertyDataJobsApi)[keyof typeof StatusZillapiZillowPropertyDataJobsApi]
  | (string & {});

export const statusZillapiZillowPropertyDataJobsApiSchema: EnumSchema<StatusZillapiZillowPropertyDataJobsApi> =
  s.enumOf<StatusZillapiZillowPropertyDataJobsApi>(StatusZillapiZillowPropertyDataJobsApi);
