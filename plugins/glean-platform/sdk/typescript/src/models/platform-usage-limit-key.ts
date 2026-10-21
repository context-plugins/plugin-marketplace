import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformUsageSelector2Schema, type PlatformUsageSelector2 } from "./platform-usage-selector2.js";
import { platformUsageTarget2Schema, type PlatformUsageTarget2 } from "./platform-usage-target2.js";

/** Natural key for one configured usage limit. */
export type PlatformUsageLimitKey = {
  /** Population governed by the limit. */
  target: PlatformUsageTarget2;
  /** Usage counted against the limit. */
  usageSelector: PlatformUsageSelector2;
};

export const platformUsageLimitKeySchema: Schema<PlatformUsageLimitKey> = s.object<PlatformUsageLimitKey>({
  target: platformUsageTarget2Schema,
  usageSelector: platformUsageSelector2Schema,
  _keysMap: {
    usageSelector: "usage_selector",
  },
});
