import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusAmazonDevOpsGuruEventSourcesApiSchema,
  type StatusAmazonDevOpsGuruEventSourcesApi,
} from "./status-amazon-dev-ops-guru-event-sources-api.js";

export type AmazonCodeGuruProfilerIntegration = {
  /**
   * The status of the CodeGuru Profiler integration. Specifies if DevOps Guru is enabled to consume
   * recommendations that are generated from Amazon CodeGuru Profiler.
   */
  status?: StatusAmazonDevOpsGuruEventSourcesApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const amazonCodeGuruProfilerIntegrationSchema: Schema<AmazonCodeGuruProfilerIntegration> =
  s.object<AmazonCodeGuruProfilerIntegration>(
    {
      status: s.optional(s.lazy(() => statusAmazonDevOpsGuruEventSourcesApiSchema)),
      _keysMap: {
        status: "Status",
      },
    },
    { additionalProperties: s.json() },
  );
