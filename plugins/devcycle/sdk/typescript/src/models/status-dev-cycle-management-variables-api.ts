import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of a Variable. Must be one of [active | archived] */
export const StatusDevCycleManagementVariablesApi = {
  Active: "active",
  Archived: "archived",
} as const;
export type StatusDevCycleManagementVariablesApi =
  | (typeof StatusDevCycleManagementVariablesApi)[keyof typeof StatusDevCycleManagementVariablesApi]
  | (string & {});

export const statusDevCycleManagementVariablesApiSchema: EnumSchema<StatusDevCycleManagementVariablesApi> =
  s.enumOf<StatusDevCycleManagementVariablesApi>(StatusDevCycleManagementVariablesApi);
