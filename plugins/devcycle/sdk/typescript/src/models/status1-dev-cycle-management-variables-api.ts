import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status field indicating whether a variable is actively being used, or is archived. */
export const Status1DevCycleManagementVariablesApi = {
  Active: "active",
  Archived: "archived",
} as const;
export type Status1DevCycleManagementVariablesApi =
  | (typeof Status1DevCycleManagementVariablesApi)[keyof typeof Status1DevCycleManagementVariablesApi]
  | (string & {});

export const status1DevCycleManagementVariablesApiSchema: EnumSchema<Status1DevCycleManagementVariablesApi> =
  s.enumOf<Status1DevCycleManagementVariablesApi>(Status1DevCycleManagementVariablesApi);
