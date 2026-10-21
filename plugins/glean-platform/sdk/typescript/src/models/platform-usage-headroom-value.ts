import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformAmountMode2Schema, type PlatformAmountMode2 } from "./platform-amount-mode2.js";
import { platformEnforcement2Schema, type PlatformEnforcement2 } from "./platform-enforcement2.js";
import { platformUsageUnit2Schema, type PlatformUsageUnit2 } from "./platform-usage-unit2.js";

/** Remaining configured budget in one unit, not a configured cap or runtime admission result. */
export type PlatformUsageHeadroomValue = {
  /** Whether remaining headroom is finite or unlimited. */
  mode: PlatformAmountMode2;
  /**
   * Non-negative decimal headroom after accrued usage and approved one-period grants, clamped to
   * zero when the configured limit is reached or exceeded. Required for FINITE; forbidden for
   * UNLIMITED.
   */
  remaining?: string;
  /** Unit of finite headroom; omitted for unlimited headroom. */
  unit?: PlatformUsageUnit2;
  /** Enforcement configuration of the tightest finite policy; omitted for unlimited headroom. */
  enforcement?: PlatformEnforcement2;
};

export const platformUsageHeadroomValueSchema: Schema<PlatformUsageHeadroomValue> =
  s.object<PlatformUsageHeadroomValue>({
    mode: platformAmountMode2Schema,
    remaining: s.optional(s.string()),
    unit: s.optional(s.lazy(() => platformUsageUnit2Schema)),
    enforcement: s.optional(s.lazy(() => platformEnforcement2Schema)),
  });
