import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { featureSchema, type Feature } from "./feature.js";
import { reasonCodeSchema, type ReasonCode } from "./reason-code.js";

export type CallAnalyticsSkippedFeature = {
  /**
   * Indicates the type of analytics feature that was skipped during the analysis of a call
   * analytics job.
   */
  feature?: Feature;
  /**
   * Provides a code indicating the reason why a specific analytics feature was skipped during the
   * analysis of a call analytics job.
   */
  reasonCode?: ReasonCode;
  /**
   * Contains additional information or a message explaining why a specific analytics feature was
   * skipped during the analysis of a call analytics job.
   */
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const callAnalyticsSkippedFeatureSchema: Schema<CallAnalyticsSkippedFeature> =
  s.object<CallAnalyticsSkippedFeature>(
    {
      feature: s.optional(s.lazy(() => featureSchema)),
      reasonCode: s.optional(s.lazy(() => reasonCodeSchema)),
      message: s.optional(s.string()),
      _keysMap: {
        feature: "Feature",
        reasonCode: "ReasonCode",
        message: "Message",
      },
    },
    { additionalProperties: s.json() },
  );
