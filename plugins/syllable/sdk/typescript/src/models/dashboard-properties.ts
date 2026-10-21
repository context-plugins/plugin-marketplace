import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Names of dashboard fields supported for filtering/sorting on list endpoint. */
export const DashboardProperties = {
  Id: "id",
  Name: "name",
  DisplayName: "display_name",
  Rank: "rank",
  Label: "label",
} as const;
export type DashboardProperties =
  | (typeof DashboardProperties)[keyof typeof DashboardProperties]
  | (string & {});

export const dashboardPropertiesSchema: EnumSchema<DashboardProperties> =
  s.enumOf<DashboardProperties>(DashboardProperties);
