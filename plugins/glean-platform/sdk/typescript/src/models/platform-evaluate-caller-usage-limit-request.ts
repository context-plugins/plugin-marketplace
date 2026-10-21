import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformUsageSelector6Schema, type PlatformUsageSelector6 } from "./platform-usage-selector6.js";
import { platformUsageTarget5Schema, type PlatformUsageTarget5 } from "./platform-usage-target5.js";

/** All Of BaseType9, PlatformEvaluateCallerUsageLimitRequest. */
export type PlatformEvaluateCallerUsageLimitRequest = {
  /** Usage to evaluate for the target; always required. */
  usageSelector: PlatformUsageSelector6;
  /** Optional self or editable agent target. Omit to evaluate self. */
  target?: PlatformUsageTarget5;
};

export const platformEvaluateCallerUsageLimitRequestSchema: Schema<PlatformEvaluateCallerUsageLimitRequest> =
  s.object<PlatformEvaluateCallerUsageLimitRequest>({
    usageSelector: platformUsageSelector6Schema,
    target: s.optional(s.lazy(() => platformUsageTarget5Schema)),
    _keysMap: {
      usageSelector: "usage_selector",
    },
  });
