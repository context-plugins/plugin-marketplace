import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type InsightsConfiguration = {
  /** Set the InsightsEnabled value to true to enable insights or false to disable insights. */
  insightsEnabled?: boolean;
  /**
   * Set the NotificationsEnabled value to true to enable insights notifications. Notifications can
   * only be enabled on a group with InsightsEnabled set to true.
   */
  notificationsEnabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const insightsConfigurationSchema: Schema<InsightsConfiguration> = s.object<InsightsConfiguration>(
  {
    insightsEnabled: s.optional(s.boolean()),
    notificationsEnabled: s.optional(s.boolean()),
    _keysMap: {
      insightsEnabled: "InsightsEnabled",
      notificationsEnabled: "NotificationsEnabled",
    },
  },
  { additionalProperties: s.json() },
);
