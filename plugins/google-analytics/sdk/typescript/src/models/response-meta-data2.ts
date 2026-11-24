import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataTruncationReasonSchema, type DataTruncationReason } from "./data-truncation-reason.js";
import { samplingMetadataSchema, type SamplingMetadata } from "./sampling-metadata.js";
import {
  schemaRestrictionResponse2Schema,
  type SchemaRestrictionResponse2,
} from "./schema-restriction-response2.js";

/** Metadata for the report. */
export type ResponseMetaData2 = {
  /**
   * Describes the schema restrictions actively enforced in creating this report. To learn more, see
   * [Access and data-restriction management](https://support.google.com/analytics/answer/10851388).
   */
  schemaRestrictionResponse?: SchemaRestrictionResponse2;
  /**
   * The currency code used in this report. Intended to be used in formatting currency metrics like
   * `purchaseRevenue` for visualization. If currency_code was specified in the request, this
   * response parameter will echo the request parameter; otherwise, this response parameter is the
   * property's current currency_code. Currency codes are string encodings of currency types from
   * the ISO 4217 standard (https://en.wikipedia.org/wiki/ISO_4217); for example "USD", "EUR",
   * "JPY". To learn more, see https://support.google.com/analytics/answer/9796179.
   */
  currencyCode?: string;
  /**
   * The property's current timezone. Intended to be used to interpret time-based dimensions like
   * `hour` and `minute`. Formatted as strings from the IANA Time Zone database
   * (https://www.iana.org/time-zones); for example "America/New_York" or "Asia/Tokyo".
   */
  timeZone?: string;
  /** If empty reason is specified, the report is empty for this reason. */
  emptyReason?: string;
  /**
   * If this report results is [sampled](https://support.google.com/analytics/answer/13331292), this
   * describes the percentage of events used in this report. One `samplingMetadatas` is populated
   * for each date range. Each `samplingMetadatas` corresponds to a date range in order that date
   * ranges were specified in the request. However if the results are not sampled, this field will
   * not be defined.
   */
  samplingMetadatas?: SamplingMetadata[];
  /**
   * If `subjectToThresholding` is true, this report is subject to thresholding and only returns
   * data that meets the minimum aggregation thresholds. It is possible for a request to be subject
   * to thresholding thresholding and no data is absent from the report, and this happens when all
   * data is above the thresholds. To learn more, see [Data
   * thresholds](https://support.google.com/analytics/answer/9383630).
   */
  subjectToThresholding?: boolean;
  /**
   * If true, indicates some buckets of dimension combinations are rolled into "(other)" row. This
   * can happen for high cardinality reports. The metadata parameter dataLossFromOtherRow is
   * populated based on the aggregated data table used in the report. The parameter will be
   * accurately populated regardless of the filters and limits in the report. For example, the
   * (other) row could be dropped from the report because the request contains a filter on
   * sessionSource = google. This parameter will still be populated if data loss from other row was
   * present in the input aggregate data used to generate this report. To learn more, see [About the
   * (other) row and data sampling](https://support.google.com/analytics/answer/13208658#reports).
   */
  dataLossFromOtherRow?: boolean;
  /** If set, indicate there is data truncation in the report. */
  dataTruncationReasons?: DataTruncationReason[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseMetaData2Schema: Schema<ResponseMetaData2> = s.object<ResponseMetaData2>(
  {
    schemaRestrictionResponse: s.optional(s.lazy(() => schemaRestrictionResponse2Schema)),
    currencyCode: s.optional(s.string()),
    timeZone: s.optional(s.string()),
    emptyReason: s.optional(s.string()),
    samplingMetadatas: s.optional(s.array(s.lazy(() => samplingMetadataSchema))),
    subjectToThresholding: s.optional(s.boolean()),
    dataLossFromOtherRow: s.optional(s.boolean()),
    dataTruncationReasons: s.optional(s.array(s.lazy(() => dataTruncationReasonSchema))),
  },
  { additionalProperties: s.json() },
);
