import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { adNetworkReportSchema, type AdNetworkReport } from "./ad-network-report.js";

export type AdNetworkReportsGetResponse = {
  /** Advertisement performance and payment reports for the publication. */
  data: AdNetworkReport[];
  /** The maximum number of reports returned. */
  limit: number;
  /** The page number returned. */
  page: number;
  /** The total number of reports. */
  totalResults: number;
  /** The total number of pages. */
  totalPages: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adNetworkReportsGetResponseSchema: Schema<AdNetworkReportsGetResponse> =
  s.object<AdNetworkReportsGetResponse>(
    {
      data: s.array(s.lazy(() => adNetworkReportSchema)),
      limit: s.int(),
      page: s.int(),
      totalResults: s.int(),
      totalPages: s.int(),
      _keysMap: {
        totalResults: "total_results",
        totalPages: "total_pages",
      },
    },
    { additionalProperties: s.json() },
  );
