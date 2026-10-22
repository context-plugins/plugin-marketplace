import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Basic information about a dashboard. */
export type DashboardTokenResponse = {
  /** Superset embedded ID of the dashboard */
  embeddedId: string;
  /** Superset guest token of the dashboard */
  guestToken: string;
  /** Name of the dashboard */
  name: string;
  /** Display name of the dashboard */
  displayName: string;
  /** Base Superset URL of the dashboard */
  supersetUrl: string;
  /** Dashboard importance (0 is the highest) */
  rank: number;
  /** Dashboard label. Typically "report" or "dashboard" */
  label: string;
};

export const dashboardTokenResponseSchema: Schema<DashboardTokenResponse> = s.object<DashboardTokenResponse>({
  embeddedId: s.string(),
  guestToken: s.string(),
  name: s.string(),
  displayName: s.string(),
  supersetUrl: s.string(),
  rank: s.int(),
  label: s.string(),
  _keysMap: {
    embeddedId: "embedded_id",
    guestToken: "guest_token",
    displayName: "display_name",
    supersetUrl: "superset_url",
  },
});
