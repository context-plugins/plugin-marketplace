import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { autotuningConfig2Schema, type AutotuningConfig2 } from "./autotuning-config2.js";
import { repositoryConfig2Schema, type RepositoryConfig2 } from "./repository-config2.js";

/** Optional. Runtime configuration for the session execution. */
export type RuntimeConfig2 = {
  /**
   * Optional. A mapping of property names to values, which are used to configure workload
   * execution.
   */
  properties?: Record<string, string>;
  /** Optional. Dependency repository configuration. */
  repositoryConfig?: RepositoryConfig2;
  /**
   * Optional. Optional custom container image for the job runtime environment. If not specified, a
   * default container image will be used.
   */
  containerImage?: string;
  /** Optional. Version of the batch runtime. */
  version?: string;
  /** Optional. Autotuning configuration of the workload. */
  autotuningConfig?: AutotuningConfig2;
  /**
   * Optional. Cohort identifier. Identifies families of the workloads that have the same shape, for
   * example, daily ETL jobs.
   */
  cohort?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runtimeConfig2Schema: Schema<RuntimeConfig2> = s.object<RuntimeConfig2>(
  {
    properties: s.optional(s.record(s.string(), s.string())),
    repositoryConfig: s.optional(s.lazy(() => repositoryConfig2Schema)),
    containerImage: s.optional(s.string()),
    version: s.optional(s.string()),
    autotuningConfig: s.optional(s.lazy(() => autotuningConfig2Schema)),
    cohort: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
