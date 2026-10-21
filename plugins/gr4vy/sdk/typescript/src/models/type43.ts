import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Always `monitoring.metric`. */
export const Type43 = {
  MonitoringMetric: "monitoring.metric",
} as const;
export type Type43 = (typeof Type43)[keyof typeof Type43] | (string & {});

export const type43Schema: EnumSchema<Type43> = s.enumOf<Type43>(Type43);
