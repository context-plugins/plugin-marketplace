import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1TraceConfigOverrideSchema,
  type GoogleCloudApigeeV1TraceConfigOverride,
} from "./google-cloud-apigee-v1-trace-config-override.js";

/** Response for ListTraceConfigOverrides. */
export type GoogleCloudApigeeV1ListTraceConfigOverridesResponse = {
  /** Token value that can be passed as `page_token` to retrieve the next page of content. */
  nextPageToken?: string;
  /** List all trace configuration overrides in an environment. */
  traceConfigOverrides?: GoogleCloudApigeeV1TraceConfigOverride[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListTraceConfigOverridesResponseSchema: Schema<GoogleCloudApigeeV1ListTraceConfigOverridesResponse> =
  s.object<GoogleCloudApigeeV1ListTraceConfigOverridesResponse>(
    {
      nextPageToken: s.optional(s.string()),
      traceConfigOverrides: s.optional(s.array(s.lazy(() => googleCloudApigeeV1TraceConfigOverrideSchema))),
    },
    { additionalProperties: s.json() },
  );
