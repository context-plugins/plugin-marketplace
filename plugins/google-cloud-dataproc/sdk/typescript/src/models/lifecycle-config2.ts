import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional. Lifecycle setting for the cluster. */
export type LifecycleConfig2 = {
  /**
   * Optional. The duration to keep the cluster alive while idling (when no jobs are running).
   * Passing this threshold will cause the cluster to be deleted. Minimum value is 5 minutes;
   * maximum value is 14 days (see JSON representation of Duration
   * (https://developers.google.com/protocol-buffers/docs/proto3#json)).
   */
  idleDeleteTtl?: string;
  /**
   * Optional. The duration to keep the cluster started while idling (when no jobs are running).
   * Passing this threshold will cause the cluster to be stopped. Minimum value is 5 minutes;
   * maximum value is 14 days (see JSON representation of Duration
   * (https://developers.google.com/protocol-buffers/docs/proto3#json)).
   */
  idleStopTtl?: string;
  /**
   * Optional. The lifetime duration of the cluster. The cluster will be auto-stopped at the end of
   * this period, calculated from the time of submission of the create or update cluster request.
   * Minimum value is 10 minutes; maximum value is 14 days (see JSON representation of Duration
   * (https://developers.google.com/protocol-buffers/docs/proto3#json)).
   */
  autoStopTtl?: string;
  /**
   * Optional. The time when cluster will be auto-deleted (see JSON representation of Timestamp
   * (https://developers.google.com/protocol-buffers/docs/proto3#json)).
   */
  autoDeleteTime?: string;
  /**
   * Optional. The lifetime duration of cluster. The cluster will be auto-deleted at the end of this
   * period. Minimum value is 10 minutes; maximum value is 14 days (see JSON representation of
   * Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).
   */
  autoDeleteTtl?: string;
  /**
   * Output only. The time when cluster became idle (most recent job finished) and became eligible
   * for deletion due to idleness (see JSON representation of Timestamp
   * (https://developers.google.com/protocol-buffers/docs/proto3#json)).
   */
  idleStartTime?: string;
  /**
   * Optional. The time when cluster will be auto-stopped (see JSON representation of Timestamp
   * (https://developers.google.com/protocol-buffers/docs/proto3#json)).
   */
  autoStopTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const lifecycleConfig2Schema: Schema<LifecycleConfig2> = s.object<LifecycleConfig2>(
  {
    idleDeleteTtl: s.optional(s.string()),
    idleStopTtl: s.optional(s.string()),
    autoStopTtl: s.optional(s.string()),
    autoDeleteTime: s.optional(s.string()),
    autoDeleteTtl: s.optional(s.string()),
    idleStartTime: s.optional(s.string()),
    autoStopTime: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
