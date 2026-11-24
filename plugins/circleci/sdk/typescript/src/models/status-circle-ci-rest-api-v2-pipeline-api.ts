import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current status of the workflow */
export const StatusCircleCiRestApiV2PipelineApi = {
  Success: "success",
  Running: "running",
  NotRun: "not_run",
  Failed: "failed",
  Error: "error",
  Failing: "failing",
  OnHold: "on_hold",
  Canceled: "canceled",
  Unauthorized: "unauthorized",
} as const;
export type StatusCircleCiRestApiV2PipelineApi =
  | (typeof StatusCircleCiRestApiV2PipelineApi)[keyof typeof StatusCircleCiRestApiV2PipelineApi]
  | (string & {});

export const statusCircleCiRestApiV2PipelineApiSchema: EnumSchema<StatusCircleCiRestApiV2PipelineApi> =
  s.enumOf<StatusCircleCiRestApiV2PipelineApi>(StatusCircleCiRestApiV2PipelineApi);
