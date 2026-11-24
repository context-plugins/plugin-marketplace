import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the CodeGuru Profiler integration. Specifies if DevOps Guru is enabled to consume
 * recommendations that are generated from Amazon CodeGuru Profiler.
 */
export const StatusAmazonDevOpsGuruEventSourcesApi = {
  Enabled: "ENABLED",
  Disabled: "DISABLED",
} as const;
export type StatusAmazonDevOpsGuruEventSourcesApi =
  | (typeof StatusAmazonDevOpsGuruEventSourcesApi)[keyof typeof StatusAmazonDevOpsGuruEventSourcesApi]
  | (string & {});

export const statusAmazonDevOpsGuruEventSourcesApiSchema: EnumSchema<StatusAmazonDevOpsGuruEventSourcesApi> =
  s.enumOf<StatusAmazonDevOpsGuruEventSourcesApi>(StatusAmazonDevOpsGuruEventSourcesApi);
