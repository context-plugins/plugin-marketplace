import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Import status. */
export const StatusDoiTCloudDiagramsApi = {
  Queued: "queued",
  InProgress: "in_progress",
  Success: "success",
  Failure: "failure",
} as const;
export type StatusDoiTCloudDiagramsApi =
  | (typeof StatusDoiTCloudDiagramsApi)[keyof typeof StatusDoiTCloudDiagramsApi]
  | (string & {});

export const statusDoiTCloudDiagramsApiSchema: EnumSchema<StatusDoiTCloudDiagramsApi> =
  s.enumOf<StatusDoiTCloudDiagramsApi>(StatusDoiTCloudDiagramsApi);
