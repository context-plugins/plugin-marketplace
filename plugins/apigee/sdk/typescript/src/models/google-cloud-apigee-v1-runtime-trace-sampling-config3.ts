import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { samplerSchema, type Sampler } from "./sampler.js";

/** Trace configuration for all API proxies in an environment. */
export type GoogleCloudApigeeV1RuntimeTraceSamplingConfig3 = {
  /**
   * Field sampling rate. This value is only applicable when using the PROBABILITY sampler. The
   * supported values are > 0 and <= 0.5.
   */
  samplingRate?: number;
  /** Sampler of distributed tracing. OFF is the default value. */
  sampler?: Sampler;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1RuntimeTraceSamplingConfig3Schema: Schema<GoogleCloudApigeeV1RuntimeTraceSamplingConfig3> =
  s.object<GoogleCloudApigeeV1RuntimeTraceSamplingConfig3>(
    {
      samplingRate: s.optional(s.float64()),
      sampler: s.optional(s.lazy(() => samplerSchema)),
    },
    { additionalProperties: s.json() },
  );
