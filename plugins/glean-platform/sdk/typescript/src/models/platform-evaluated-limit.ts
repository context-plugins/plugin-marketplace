import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformUsageLimitDecision2Schema,
  type PlatformUsageLimitDecision2,
} from "./platform-usage-limit-decision2.js";
import {
  platformUsageLimitValue2Schema,
  type PlatformUsageLimitValue2,
} from "./platform-usage-limit-value2.js";
import {
  platformUsagePolicySourceTarget1Schema,
  type PlatformUsagePolicySourceTarget1,
} from "./platform-usage-policy-source-target1.js";
import { platformUsageSelector4Schema, type PlatformUsageSelector4 } from "./platform-usage-selector4.js";

/** Evaluation details for one independently applicable usage limit. */
export type PlatformEvaluatedLimit = {
  /**
   * Configured source of this limit. Default and group policies retain their source population;
   * used is the concrete evaluated user's or agent's counter. Non-admin evaluation withholds
   * IdP-group identities but returns the limit value, counter, and decision of every policy it
   * lists.
   */
  target: PlatformUsagePolicySourceTarget1;
  /**
   * Actual scope of this rule's counter. Client rules identify their client; aggregate agent rules
   * omit client_id even when evaluation selects a client.
   */
  usageSelector: PlatformUsageSelector4;
  /** Configured cap before approved one-period grants; value.amount is not remaining headroom. */
  value: PlatformUsageLimitValue2;
  /** Decimal amount of accrued usage for this limit. */
  used: string;
  /** Decision for this limit. */
  decision: PlatformUsageLimitDecision2;
};

export const platformEvaluatedLimitSchema: Schema<PlatformEvaluatedLimit> = s.object<PlatformEvaluatedLimit>({
  target: platformUsagePolicySourceTarget1Schema,
  usageSelector: platformUsageSelector4Schema,
  value: platformUsageLimitValue2Schema,
  used: s.string(),
  decision: platformUsageLimitDecision2Schema,
  _keysMap: {
    usageSelector: "usage_selector",
  },
});
