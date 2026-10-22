import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformUsageSelector3Schema, type PlatformUsageSelector3 } from "./platform-usage-selector3.js";
import { platformUsageTarget3Schema, type PlatformUsageTarget3 } from "./platform-usage-target3.js";

/** All Of BaseType6, PlatformEvaluateUsageLimitRequest. */
export type PlatformEvaluateUsageLimitRequest = {
  /** Usage to evaluate for the target. */
  usageSelector: PlatformUsageSelector3;
  /** Concrete organization, user, or agent to evaluate. */
  target: PlatformUsageTarget3;
};

export const platformEvaluateUsageLimitRequestSchema: Schema<PlatformEvaluateUsageLimitRequest> =
  s.object<PlatformEvaluateUsageLimitRequest>({
    usageSelector: platformUsageSelector3Schema,
    target: platformUsageTarget3Schema,
    _keysMap: {
      usageSelector: "usage_selector",
    },
  });
