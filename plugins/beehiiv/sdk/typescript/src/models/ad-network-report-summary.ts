import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  adNetworkReportSummaryMetrics1Schema,
  type AdNetworkReportSummaryMetrics1,
} from "./ad-network-report-summary-metrics1.js";
import {
  adNetworkReportSummaryMetrics2Schema,
  type AdNetworkReportSummaryMetrics2,
} from "./ad-network-report-summary-metrics2.js";

export type AdNetworkReportSummary = {
  /** The prefixed publication ID. Omitted from account-wide summaries. */
  publicationId?: string;
  /** The total approved number of unique opens. */
  opens: number;
  /** The total approved number of verified clicks. */
  verifiedClicks: number;
  /** The total formatted revenue approved for payment. */
  revenue: string;
  /** Metrics for advertisements accepted as on-demand offers. */
  oda: AdNetworkReportSummaryMetrics1;
  /** Metrics for advertisements placed through programmatic ad slots. */
  programmatic: AdNetworkReportSummaryMetrics2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adNetworkReportSummarySchema: Schema<AdNetworkReportSummary> = s.object<AdNetworkReportSummary>(
  {
    publicationId: s.optional(s.string()),
    opens: s.int(),
    verifiedClicks: s.int(),
    revenue: s.string(),
    oda: adNetworkReportSummaryMetrics1Schema,
    programmatic: adNetworkReportSummaryMetrics2Schema,
    _keysMap: {
      publicationId: "publication_id",
      verifiedClicks: "verified_clicks",
    },
  },
  { additionalProperties: s.json() },
);
