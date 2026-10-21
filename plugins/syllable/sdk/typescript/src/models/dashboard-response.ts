import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Basic information about a dashboard with a description. */
export type DashboardResponse = {
  /** Name of the dashboard */
  name: string;
  /** Display name of the dashboard */
  displayName: string;
  /** Dashboard importance (0 is the highest) */
  rank: number;
  /** Dashboard label. Typically "report" or "dashboard" */
  label: string;
};

export const dashboardResponseSchema: Schema<DashboardResponse> = s.object<DashboardResponse>({
  name: s.string(),
  displayName: s.string(),
  rank: s.int(),
  label: s.string(),
  _keysMap: {
    displayName: "display_name",
  },
});
