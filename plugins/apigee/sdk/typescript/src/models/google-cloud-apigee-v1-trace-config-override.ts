import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1TraceSamplingConfig2Schema,
  type GoogleCloudApigeeV1TraceSamplingConfig2,
} from "./google-cloud-apigee-v1-trace-sampling-config2.js";

/** A representation of a configuration override. */
export type GoogleCloudApigeeV1TraceConfigOverride = {
  /** ID of the trace configuration override specified as a system-generated UUID. */
  name?: string;
  /** ID of the API proxy that will have its trace configuration overridden. */
  apiProxy?: string;
  /** Trace configuration to override. */
  samplingConfig?: GoogleCloudApigeeV1TraceSamplingConfig2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1TraceConfigOverrideSchema: Schema<GoogleCloudApigeeV1TraceConfigOverride> =
  s.object<GoogleCloudApigeeV1TraceConfigOverride>(
    {
      name: s.optional(s.string()),
      apiProxy: s.optional(s.string()),
      samplingConfig: s.optional(s.lazy(() => googleCloudApigeeV1TraceSamplingConfig2Schema)),
    },
    { additionalProperties: s.json() },
  );
