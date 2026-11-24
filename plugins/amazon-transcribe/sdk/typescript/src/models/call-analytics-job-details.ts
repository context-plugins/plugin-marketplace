import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  callAnalyticsSkippedFeatureSchema,
  type CallAnalyticsSkippedFeature,
} from "./call-analytics-skipped-feature.js";

export type CallAnalyticsJobDetails = {
  /**
   * Contains information about any skipped analytics features during the analysis of a call
   * analytics job. This array lists all the analytics features that were skipped, along with their
   * corresponding reason code and message.
   */
  skipped?: CallAnalyticsSkippedFeature[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const callAnalyticsJobDetailsSchema: Schema<CallAnalyticsJobDetails> =
  s.object<CallAnalyticsJobDetails>(
    {
      skipped: s.optional(s.array(s.lazy(() => callAnalyticsSkippedFeatureSchema))),
      _keysMap: {
        skipped: "Skipped",
      },
    },
    { additionalProperties: s.json() },
  );
