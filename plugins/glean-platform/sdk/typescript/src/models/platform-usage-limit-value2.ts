import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformAmountMode1Schema, type PlatformAmountMode1 } from "./platform-amount-mode1.js";
import { platformEnforcement1Schema, type PlatformEnforcement1 } from "./platform-enforcement1.js";
import { platformUsageUnit1Schema, type PlatformUsageUnit1 } from "./platform-usage-unit1.js";

/** Configured cap before approved one-period grants; value.amount is not remaining headroom. */
export type PlatformUsageLimitValue2 = {
  /** Whether the limit has a finite cap or is unlimited. */
  mode: PlatformAmountMode1;
  /**
   * Plain non-negative decimal amount with at most six fractional digits; required when mode is
   * FINITE and forbidden when mode is UNLIMITED. Limits use single-precision (float32) storage:
   * inputs are rounded to that precision, and responses report the stored value rounded to six
   * fractional digits. For example, 100.10 can be returned as 100.099998. This storage limitation
   * does not reduce the precision of measured usage counters.
   */
  amount?: string;
  /**
   * Unit for the selected spend domain; must match its billing denomination. Aggregate agent limits
   * use the workspace plan denomination.
   */
  unit?: PlatformUsageUnit1;
  /** How the limit is enforced when reached. */
  enforcement?: PlatformEnforcement1;
};

export const platformUsageLimitValue2Schema: Schema<PlatformUsageLimitValue2> =
  s.object<PlatformUsageLimitValue2>({
    mode: platformAmountMode1Schema,
    amount: s.optional(s.string()),
    unit: s.optional(s.lazy(() => platformUsageUnit1Schema)),
    enforcement: s.optional(s.lazy(() => platformEnforcement1Schema)),
  });
