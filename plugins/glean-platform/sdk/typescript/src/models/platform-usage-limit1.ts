import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformAllocationMode1Schema, type PlatformAllocationMode1 } from "./platform-allocation-mode1.js";
import {
  platformUsageLimitValue1Schema,
  type PlatformUsageLimitValue1,
} from "./platform-usage-limit-value1.js";
import { platformUsageSelector1Schema, type PlatformUsageSelector1 } from "./platform-usage-selector1.js";
import { platformUsageTarget1Schema, type PlatformUsageTarget1 } from "./platform-usage-target1.js";

/** The normalized usage limit. */
export type PlatformUsageLimit1 = {
  /** Population governed by this limit. */
  target: PlatformUsageTarget1;
  /** Usage counted against this limit. */
  usageSelector: PlatformUsageSelector1;
  /**
   * Required for ORGANIZATION, DEFAULT_USER, and DEFAULT_AGENT. Must not be provided for USER or
   * AGENT targets.
   */
  allocationMode?: PlatformAllocationMode1;
  /** Value, unit, and enforcement mode for the limit. */
  value: PlatformUsageLimitValue1;
};

export const platformUsageLimit1Schema: Schema<PlatformUsageLimit1> = s.object<PlatformUsageLimit1>({
  target: platformUsageTarget1Schema,
  usageSelector: platformUsageSelector1Schema,
  allocationMode: s.optional(s.lazy(() => platformAllocationMode1Schema)),
  value: platformUsageLimitValue1Schema,
  _keysMap: {
    usageSelector: "usage_selector",
    allocationMode: "allocation_mode",
  },
});
