import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1Metadata2Schema,
  type GoogleCloudApigeeV1Metadata2,
} from "./google-cloud-apigee-v1-metadata2.js";
import {
  googleCloudApigeeV1StatsEnvironmentStatsSchema,
  type GoogleCloudApigeeV1StatsEnvironmentStats,
} from "./google-cloud-apigee-v1-stats-environment-stats.js";
import {
  googleCloudApigeeV1StatsHostStatsSchema,
  type GoogleCloudApigeeV1StatsHostStats,
} from "./google-cloud-apigee-v1-stats-host-stats.js";

/** Encapsulates a `stats` response. */
export type GoogleCloudApigeeV1Stats = {
  /** List of query results grouped by host. */
  hosts?: GoogleCloudApigeeV1StatsHostStats[];
  /** List of query results on the environment level. */
  environments?: GoogleCloudApigeeV1StatsEnvironmentStats[];
  /** Metadata information. */
  metaData?: GoogleCloudApigeeV1Metadata2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1StatsSchema: Schema<GoogleCloudApigeeV1Stats> =
  s.object<GoogleCloudApigeeV1Stats>(
    {
      hosts: s.optional(s.array(s.lazy(() => googleCloudApigeeV1StatsHostStatsSchema))),
      environments: s.optional(s.array(s.lazy(() => googleCloudApigeeV1StatsEnvironmentStatsSchema))),
      metaData: s.optional(s.lazy(() => googleCloudApigeeV1Metadata2Schema)),
    },
    { additionalProperties: s.json() },
  );
