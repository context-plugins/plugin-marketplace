import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Specifies the bandwidth limit details. If this field is unspecified, the default value is set as
 * 'No Limit'.
 */
export type BandwidthLimit2 = {
  /** Bandwidth rate in megabytes per second, distributed across all the agents in the pool. */
  limitMbps?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bandwidthLimit2Schema: Schema<BandwidthLimit2> = s.object<BandwidthLimit2>(
  {
    limitMbps: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
