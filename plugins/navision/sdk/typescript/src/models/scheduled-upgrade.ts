import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ScheduledUpgrade = {
  environmentName?: string;
  upgradeIsScheduled?: boolean;
  scheduledDate?: Date;
  registeredDate?: Date;
  targetVersion?: string;
  canTenantSelectDate?: boolean;
  ignoreUpgradeWindow?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const scheduledUpgradeSchema: Schema<ScheduledUpgrade> = s.object<ScheduledUpgrade>(
  {
    environmentName: s.optional(s.string()),
    upgradeIsScheduled: s.optional(s.boolean()),
    scheduledDate: s.optional(s.dateTime()),
    registeredDate: s.optional(s.dateTime()),
    targetVersion: s.optional(s.string()),
    canTenantSelectDate: s.optional(s.boolean()),
    ignoreUpgradeWindow: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
