import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicDashboard = {
  siteId?: number;
  enabled: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicDashboardSchema: Schema<PublicDashboard> = s.object<PublicDashboard>(
  {
    siteId: s.optional(s.int()),
    enabled: s.boolean(),
    _keysMap: {
      siteId: "site_id",
    },
  },
  { additionalProperties: s.json() },
);
