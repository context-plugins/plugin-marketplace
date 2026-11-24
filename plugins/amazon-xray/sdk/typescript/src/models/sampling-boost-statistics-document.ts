import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SamplingBoostStatisticsDocument = {
  /** The name of the sampling rule. */
  ruleName: string;
  /** Matches the name that the service uses to identify itself in segments. */
  serviceName: string;
  /** The current time. */
  timestamp: Date;
  /** The number of requests with anomaly. */
  anomalyCount: number;
  /** The number of requests that associated to the rule. */
  totalCount: number;
  /** The number of requests with anomaly recorded. */
  sampledAnomalyCount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const samplingBoostStatisticsDocumentSchema: Schema<SamplingBoostStatisticsDocument> =
  s.object<SamplingBoostStatisticsDocument>(
    {
      ruleName: s.string(),
      serviceName: s.string(),
      timestamp: s.dateTime(),
      anomalyCount: s.int(),
      totalCount: s.int(),
      sampledAnomalyCount: s.int(),
      _keysMap: {
        ruleName: "RuleName",
        serviceName: "ServiceName",
        timestamp: "Timestamp",
        anomalyCount: "AnomalyCount",
        totalCount: "TotalCount",
        sampledAnomalyCount: "SampledAnomalyCount",
      },
    },
    { additionalProperties: s.json() },
  );
