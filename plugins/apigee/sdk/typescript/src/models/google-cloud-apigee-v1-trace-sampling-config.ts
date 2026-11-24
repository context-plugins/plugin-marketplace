import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { samplerSchema, type Sampler } from "./sampler.js";

/**
 * TraceSamplingConfig represents the detail settings of distributed tracing. Only the fields that
 * are defined in the distributed trace configuration can be overridden using the distribute trace
 * configuration override APIs.
 */
export type GoogleCloudApigeeV1TraceSamplingConfig = {
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

export const googleCloudApigeeV1TraceSamplingConfigSchema: Schema<GoogleCloudApigeeV1TraceSamplingConfig> =
  s.object<GoogleCloudApigeeV1TraceSamplingConfig>(
    {
      samplingRate: s.optional(s.float64()),
      sampler: s.optional(s.lazy(() => samplerSchema)),
    },
    { additionalProperties: s.json() },
  );
