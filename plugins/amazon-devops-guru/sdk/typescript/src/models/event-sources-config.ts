import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  amazonCodeGuruProfilerIntegrationSchema,
  type AmazonCodeGuruProfilerIntegration,
} from "./amazon-code-guru-profiler-integration.js";

export type EventSourcesConfig = {
  amazonCodeGuruProfiler?: AmazonCodeGuruProfilerIntegration;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventSourcesConfigSchema: Schema<EventSourcesConfig> = s.object<EventSourcesConfig>(
  {
    amazonCodeGuruProfiler: s.optional(s.lazy(() => amazonCodeGuruProfilerIntegrationSchema)),
    _keysMap: {
      amazonCodeGuruProfiler: "AmazonCodeGuruProfiler",
    },
  },
  { additionalProperties: s.json() },
);
