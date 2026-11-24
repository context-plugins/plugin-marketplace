import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Specifies a bandwidth limit for an agent pool. */
export type BandwidthLimit = {
  /** Bandwidth rate in megabytes per second, distributed across all the agents in the pool. */
  limitMbps?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bandwidthLimitSchema: Schema<BandwidthLimit> = s.object<BandwidthLimit>(
  {
    limitMbps: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
