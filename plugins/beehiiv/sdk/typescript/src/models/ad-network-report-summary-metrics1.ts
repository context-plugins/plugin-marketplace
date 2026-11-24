import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Metrics for advertisements accepted as on-demand offers. */
export type AdNetworkReportSummaryMetrics1 = {
  /** The approved number of unique opens. */
  opens: number;
  /** The approved number of verified clicks. */
  verifiedClicks: number;
  /** The formatted revenue approved for payment. */
  revenue: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adNetworkReportSummaryMetrics1Schema: Schema<AdNetworkReportSummaryMetrics1> =
  s.object<AdNetworkReportSummaryMetrics1>(
    {
      opens: s.int(),
      verifiedClicks: s.int(),
      revenue: s.string(),
      _keysMap: {
        verifiedClicks: "verified_clicks",
      },
    },
    { additionalProperties: s.json() },
  );
