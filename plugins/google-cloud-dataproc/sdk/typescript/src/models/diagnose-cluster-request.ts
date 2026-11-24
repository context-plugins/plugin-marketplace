import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { interval2Schema, type Interval2 } from "./interval2.js";
import { tarballAccessSchema, type TarballAccess } from "./tarball-access.js";

/** A request to collect cluster diagnostic information. */
export type DiagnoseClusterRequest = {
  /** Optional. Specifies a list of yarn applications on which diagnosis is to be performed. */
  yarnApplicationIds?: string[];
  /**
   * Optional. DEPRECATED Specifies the yarn application on which diagnosis is to be performed.
   *
   * @deprecated
   */
  yarnApplicationId?: string;
  /** Optional. Time interval in which diagnosis should be carried out on the cluster. */
  diagnosisInterval?: Interval2;
  /**
   * Optional. DEPRECATED Specifies the job on which diagnosis is to be performed. Format:
   * projects/{project}/regions/{region}/jobs/{job}
   *
   * @deprecated
   */
  job?: string;
  /**
   * Optional. (Optional) The access type to the diagnostic tarball. If not specified, falls back to
   * default access of the bucket
   */
  tarballAccess?: TarballAccess;
  /**
   * Optional. Specifies a list of jobs on which diagnosis is to be performed. Format:
   * projects/{project}/regions/{region}/jobs/{job}
   */
  jobs?: string[];
  /**
   * Optional. (Optional) The output Cloud Storage directory for the diagnostic tarball. If not
   * specified, a task-specific directory in the cluster's staging bucket will be used.
   */
  tarballGcsDir?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const diagnoseClusterRequestSchema: Schema<DiagnoseClusterRequest> = s.object<DiagnoseClusterRequest>(
  {
    yarnApplicationIds: s.optional(s.array(s.string())),
    yarnApplicationId: s.optional(s.string()),
    diagnosisInterval: s.optional(s.lazy(() => interval2Schema)),
    job: s.optional(s.string()),
    tarballAccess: s.optional(s.lazy(() => tarballAccessSchema)),
    jobs: s.optional(s.array(s.string())),
    tarballGcsDir: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
