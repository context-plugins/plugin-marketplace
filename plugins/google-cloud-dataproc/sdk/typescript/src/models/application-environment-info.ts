import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resourceProfileInfoSchema, type ResourceProfileInfo } from "./resource-profile-info.js";
import { sparkRuntimeInfoSchema, type SparkRuntimeInfo } from "./spark-runtime-info.js";

/** Details about the Environment that the application is running in. */
export type ApplicationEnvironmentInfo = {
  systemProperties?: Record<string, string>;
  runtime?: SparkRuntimeInfo;
  hadoopProperties?: Record<string, string>;
  metricsProperties?: Record<string, string>;
  classpathEntries?: Record<string, string>;
  resourceProfiles?: ResourceProfileInfo[];
  sparkProperties?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const applicationEnvironmentInfoSchema: Schema<ApplicationEnvironmentInfo> =
  s.object<ApplicationEnvironmentInfo>(
    {
      systemProperties: s.optional(s.record(s.string(), s.string())),
      runtime: s.optional(s.lazy(() => sparkRuntimeInfoSchema)),
      hadoopProperties: s.optional(s.record(s.string(), s.string())),
      metricsProperties: s.optional(s.record(s.string(), s.string())),
      classpathEntries: s.optional(s.record(s.string(), s.string())),
      resourceProfiles: s.optional(s.array(s.lazy(() => resourceProfileInfoSchema))),
      sparkProperties: s.optional(s.record(s.string(), s.string())),
    },
    { additionalProperties: s.json() },
  );
