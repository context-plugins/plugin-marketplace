import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1ComputeEnvironmentScoresRequestFilterSchema,
  type GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter,
} from "./google-cloud-apigee-v1-compute-environment-scores-request-filter.js";
import { googleTypeInterval1Schema, type GoogleTypeInterval1 } from "./google-type-interval1.js";

/** Request for ComputeEnvironmentScores. */
export type GoogleCloudApigeeV1ComputeEnvironmentScoresRequest = {
  /**
   * Optional. A token that can be sent as `page_token` to retrieve the next page. If this field is
   * omitted, there are no subsequent pages.
   */
  pageToken?: string;
  /**
   * Required. Time range for score calculation. At most 14 days of scores will be returned, and
   * both the start and end dates must be within the last 90 days.
   */
  timeRange?: GoogleTypeInterval1;
  /**
   * Optional. The maximum number of subcomponents to be returned in a single page. The service may
   * return fewer than this value. If unspecified, at most 100 subcomponents will be returned in a
   * single page.
   */
  pageSize?: number;
  /**
   * Optional. Filters are used to filter scored components. Return all the components if no filter
   * is mentioned. Example: [{ "scorePath":
   * "/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/source" }, { "scorePath":
   * "/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/target", }] This will return
   * components with path: "/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/source"
   * OR "/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/target"
   */
  filters?: GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ComputeEnvironmentScoresRequestSchema: Schema<GoogleCloudApigeeV1ComputeEnvironmentScoresRequest> =
  s.object<GoogleCloudApigeeV1ComputeEnvironmentScoresRequest>(
    {
      pageToken: s.optional(s.string()),
      timeRange: s.optional(s.lazy(() => googleTypeInterval1Schema)),
      pageSize: s.optional(s.int()),
      filters: s.optional(
        s.array(s.lazy(() => googleCloudApigeeV1ComputeEnvironmentScoresRequestFilterSchema)),
      ),
    },
    { additionalProperties: s.json() },
  );
