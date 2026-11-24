import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { samplingTargetDocumentSchema, type SamplingTargetDocument } from "./sampling-target-document.js";
import { unprocessedStatisticsSchema, type UnprocessedStatistics } from "./unprocessed-statistics.js";

export type GetSamplingTargetsResult = {
  /** Updated rules that the service should use to sample requests. */
  samplingTargetDocuments?: SamplingTargetDocument[];
  /**
   * The last time a user changed the sampling rule configuration. If the sampling rule
   * configuration changed since the service last retrieved it, the service should call
   * GetSamplingRules to get the latest version.
   */
  lastRuleModification?: Date;
  /** Information about SamplingStatisticsDocument that X-Ray could not process. */
  unprocessedStatistics?: UnprocessedStatistics[];
  /** Information about SamplingBoostStatisticsDocument that X-Ray could not process. */
  unprocessedBoostStatistics?: UnprocessedStatistics[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getSamplingTargetsResultSchema: Schema<GetSamplingTargetsResult> =
  s.object<GetSamplingTargetsResult>(
    {
      samplingTargetDocuments: s.optional(s.array(s.lazy(() => samplingTargetDocumentSchema))),
      lastRuleModification: s.optional(s.dateTime()),
      unprocessedStatistics: s.optional(s.array(s.lazy(() => unprocessedStatisticsSchema))),
      unprocessedBoostStatistics: s.optional(s.array(s.lazy(() => unprocessedStatisticsSchema))),
      _keysMap: {
        samplingTargetDocuments: "SamplingTargetDocuments",
        lastRuleModification: "LastRuleModification",
        unprocessedStatistics: "UnprocessedStatistics",
        unprocessedBoostStatistics: "UnprocessedBoostStatistics",
      },
    },
    { additionalProperties: s.json() },
  );
