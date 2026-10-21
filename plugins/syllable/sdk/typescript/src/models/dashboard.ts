import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Deprecated. Please update to use DashboardTokenResponse. Basic information about a dashboard. */
export type Dashboard = {
  /** Superset embedded ID of the dashboard */
  embeddedId: string;
  /** Superset guest token of the dashboard */
  guestToken: string;
  /** Name of the dashboard */
  name: string;
  /** Superset URL of the dashboard */
  supersetUrl: string;
};

export const dashboardSchema: Schema<Dashboard> = s.object<Dashboard>({
  embeddedId: s.string(),
  guestToken: s.string(),
  name: s.string(),
  supersetUrl: s.string(),
  _keysMap: {
    embeddedId: "embedded_id",
    guestToken: "guest_token",
    supersetUrl: "superset_url",
  },
});
