import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * If this report results is [sampled](https://support.google.com/analytics/answer/13331292), this
 * describes the percentage of events used in this report. Sampling is the practice of analyzing a
 * subset of all data in order to uncover the meaningful information in the larger data set.
 */
export type SamplingMetadata = {
  /**
   * The total number of events present in this property's data that could have been analyzed in
   * this report for a date range. Sampling uncovers the meaningful information about the larger
   * data set, and this is the size of the larger data set. To calculate the percentage of available
   * data that was used in this report, compute `samplesReadCount/samplingSpaceSize`.
   */
  samplingSpaceSize?: string;
  /**
   * The total number of events read in this sampled report for a date range. This is the size of
   * the subset this property's data that was analyzed in this report.
   */
  samplesReadCount?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const samplingMetadataSchema: Schema<SamplingMetadata> = s.object<SamplingMetadata>(
  {
    samplingSpaceSize: s.optional(s.string()),
    samplesReadCount: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
