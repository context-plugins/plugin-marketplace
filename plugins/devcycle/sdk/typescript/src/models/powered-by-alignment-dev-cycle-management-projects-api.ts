import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PoweredByAlignmentDevCycleManagementProjectsApi = {
  Center: "center",
  Left: "left",
  Right: "right",
  Hidden: "hidden",
} as const;
export type PoweredByAlignmentDevCycleManagementProjectsApi =
  | (typeof PoweredByAlignmentDevCycleManagementProjectsApi)[keyof typeof PoweredByAlignmentDevCycleManagementProjectsApi]
  | (string & {});

export const poweredByAlignmentDevCycleManagementProjectsApiSchema: EnumSchema<PoweredByAlignmentDevCycleManagementProjectsApi> =
  s.enumOf<PoweredByAlignmentDevCycleManagementProjectsApi>(PoweredByAlignmentDevCycleManagementProjectsApi);
