import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { stateSchema, type State } from "./state.js";

/**
 * A YARN application created by a job. Application information is a subset of
 * org.apache.hadoop.yarn.proto.YarnProtos.ApplicationReportProto.Beta Feature: This report is
 * available for testing purposes only. It may be changed before final release.
 */
export type YarnApplication = {
  /** Optional. The cumulative memory usage of the application for a job, measured in mb-seconds. */
  memoryMbSeconds?: string;
  /** Required. The numerical progress of the application, from 1 to 100. */
  progress?: number;
  /** Required. The application state. */
  state?: State;
  /** Required. The application name. */
  name?: string;
  /**
   * Optional. The HTTP URL of the ApplicationMaster, HistoryServer, or TimelineServer that provides
   * application-specific information. The URL uses the internal hostname, and requires a proxy
   * server for resolution and, possibly, access.
   */
  trackingUrl?: string;
  /**
   * Optional. The cumulative CPU time consumed by the application for a job, measured in
   * vcore-seconds.
   */
  vcoreSeconds?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const yarnApplicationSchema: Schema<YarnApplication> = s.object<YarnApplication>(
  {
    memoryMbSeconds: s.optional(s.string()),
    progress: s.optional(s.float64()),
    state: s.optional(s.lazy(() => stateSchema)),
    name: s.optional(s.string()),
    trackingUrl: s.optional(s.string()),
    vcoreSeconds: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
