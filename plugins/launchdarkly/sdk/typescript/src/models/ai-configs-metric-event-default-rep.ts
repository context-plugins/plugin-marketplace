import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AiConfigsMetricEventDefaultRep = {
  /**
   * Whether to disable defaulting missing unit events when calculating results. Defaults to false
   */
  disabled?: boolean;
  /**
   * The default value applied to missing unit events. Set to 0 when <code>disabled</code> is false.
   * No other values are currently supported.
   */
  value?: number;
};

export const aiConfigsMetricEventDefaultRepSchema: Schema<AiConfigsMetricEventDefaultRep> =
  s.object<AiConfigsMetricEventDefaultRep>({
    disabled: s.optional(s.boolean()),
    value: s.optional(s.float64()),
  });
