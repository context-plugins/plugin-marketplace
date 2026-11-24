import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status2DevCycleManagementVariablesApi = {
  Active: "active",
  Archived: "archived",
} as const;
export type Status2DevCycleManagementVariablesApi =
  | (typeof Status2DevCycleManagementVariablesApi)[keyof typeof Status2DevCycleManagementVariablesApi]
  | (string & {});

export const status2DevCycleManagementVariablesApiSchema: EnumSchema<Status2DevCycleManagementVariablesApi> =
  s.enumOf<Status2DevCycleManagementVariablesApi>(Status2DevCycleManagementVariablesApi);
