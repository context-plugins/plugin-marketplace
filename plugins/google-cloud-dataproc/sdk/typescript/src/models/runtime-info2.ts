import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cohortInfo2Schema, type CohortInfo2 } from "./cohort-info2.js";
import { propertiesInfo2Schema, type PropertiesInfo2 } from "./properties-info2.js";
import { usageMetrics1Schema, type UsageMetrics1 } from "./usage-metrics1.js";
import { usageSnapshot2Schema, type UsageSnapshot2 } from "./usage-snapshot2.js";

/** Output only. Runtime information about batch execution. */
export type RuntimeInfo2 = {
  /**
   * Output only. Approximate workload resource usage, calculated when the workload completes (see
   * Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)).Note: This
   * metric calculation may change in the future, for example, to capture cumulative workload
   * resource consumption during workload execution (see the Dataproc Serverless release notes
   * (https://cloud.google.com/dataproc-serverless/docs/release-notes) for announcements, changes,
   * fixes and other Dataproc developments).
   */
  approximateUsage?: UsageMetrics1;
  /** Output only. Information about the cohort that the workload belongs to. */
  cohortInfo?: CohortInfo2;
  /** Optional. Properties of the workload organized by origin. */
  propertiesInfo?: PropertiesInfo2;
  /** Output only. Snapshot of current workload resource usage. */
  currentUsage?: UsageSnapshot2;
  /** Output only. A URI pointing to the location of the stdout and stderr of the workload. */
  outputUri?: string;
  /** Output only. A URI pointing to the location of the diagnostics tarball. */
  diagnosticOutputUri?: string;
  /**
   * Output only. Map of remote access endpoints (such as web interfaces and APIs) to their URIs.
   */
  endpoints?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runtimeInfo2Schema: Schema<RuntimeInfo2> = s.object<RuntimeInfo2>(
  {
    approximateUsage: s.optional(s.lazy(() => usageMetrics1Schema)),
    cohortInfo: s.optional(s.lazy(() => cohortInfo2Schema)),
    propertiesInfo: s.optional(s.lazy(() => propertiesInfo2Schema)),
    currentUsage: s.optional(s.lazy(() => usageSnapshot2Schema)),
    outputUri: s.optional(s.string()),
    diagnosticOutputUri: s.optional(s.string()),
    endpoints: s.optional(s.record(s.string(), s.string())),
  },
  { additionalProperties: s.json() },
);
