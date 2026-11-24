import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { samplerSchema, type Sampler } from "./sampler.js";

/**
 * Distributed trace configuration for all API proxies in an environment. You can also override the
 * configuration for a specific API proxy using the distributed trace configuration overrides API.
 */
export type GoogleCloudApigeeV1TraceSamplingConfig3 = {
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

export const googleCloudApigeeV1TraceSamplingConfig3Schema: Schema<GoogleCloudApigeeV1TraceSamplingConfig3> =
  s.object<GoogleCloudApigeeV1TraceSamplingConfig3>(
    {
      samplingRate: s.optional(s.float64()),
      sampler: s.optional(s.lazy(() => samplerSchema)),
    },
    { additionalProperties: s.json() },
  );
