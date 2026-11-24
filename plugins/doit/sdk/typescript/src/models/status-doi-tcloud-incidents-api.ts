import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The Status of the issue */
export const StatusDoiTCloudIncidentsApi = {
  Active: "active",
  Archived: "archived",
} as const;
export type StatusDoiTCloudIncidentsApi =
  | (typeof StatusDoiTCloudIncidentsApi)[keyof typeof StatusDoiTCloudIncidentsApi]
  | (string & {});

export const statusDoiTCloudIncidentsApiSchema: EnumSchema<StatusDoiTCloudIncidentsApi> =
  s.enumOf<StatusDoiTCloudIncidentsApi>(StatusDoiTCloudIncidentsApi);
