import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Config for scheduling the request to create Compute Engine resources for the cluster, when
 * available.
 */
export type SchedulingConfig = {
  /**
   * Optional. Required lifetime of the resources, once provisioned. Min 10 mins, Max/Default 7 days
   * . Note that the cluster can still be deleted before reaching this time. This time is a maximum
   * amount of time before the cluster is forcibly deleted. Lower times are more likely to start
   * running sooner.
   */
  requestedRunDuration?: string;
  /**
   * Optional. How long to wait for worker resources to be allocated before failing the cluster
   * creation request. Max/Default value: 13 days
   */
  schedulingTimeout?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const schedulingConfigSchema: Schema<SchedulingConfig> = s.object<SchedulingConfig>(
  {
    requestedRunDuration: s.optional(s.string()),
    schedulingTimeout: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
