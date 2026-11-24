import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1QueryMetricSchema,
  type GoogleCloudApigeeV1QueryMetric,
} from "./google-cloud-apigee-v1-query-metric.js";

export type GoogleCloudApigeeV1Query = {
  /**
   * Required. Time range for the query. Can use the following predefined strings to specify the
   * time range: `last60minutes` `last24hours` `last7days` Or, specify the timeRange as a structure
   * describing start and end timestamps in the ISO format: yyyy-mm-ddThh:mm:ssZ. Example:
   * "timeRange": { "start": "2018-07-29T00:13:00Z", "end": "2018-08-01T00:18:00Z" }
   */
  timeRange?: Record<string, unknown>;
  /**
   * Delimiter used in the CSV file, if `outputFormat` is set to `csv`. Defaults to the `,` (comma)
   * character. Supported delimiter characters include comma (`,`), pipe (`|`), and tab (`\t`).
   */
  csvDelimiter?: string;
  /** A list of Metrics. */
  metrics?: GoogleCloudApigeeV1QueryMetric[];
  /**
   * A list of dimensions.
   * https://docs.apigee.com/api-platform/analytics/analytics-reference#dimensions
   */
  dimensions?: string[];
  /**
   * Time unit used to group the result set. Valid values include: second, minute, hour, day, week,
   * or month. If a query includes groupByTimeUnit, then the result is an aggregation based on the
   * specified time unit and the resultant timestamp does not include milliseconds precision. If a
   * query omits groupByTimeUnit, then the resultant timestamp includes milliseconds precision.
   */
  groupByTimeUnit?: string;
  /** Maximum number of rows that can be returned in the result. */
  limit?: number;
  /**
   * Valid values include: `csv` or `json`. Defaults to `json`. Note: Configure the delimiter for
   * CSV output using the csvDelimiter property.
   */
  outputFormat?: string;
  /** Asynchronous Query Name. */
  name?: string;
  /**
   * Boolean expression that can be used to filter data. Filter expressions can be combined using
   * AND/OR terms and should be fully parenthesized to avoid ambiguity. See Analytics metrics,
   * dimensions, and filters reference
   * https://docs.apigee.com/api-platform/analytics/analytics-reference for more information on the
   * fields available to filter on. For more information on the tokens that you use to build filter
   * expressions, see Filter expression syntax.
   * https://docs.apigee.com/api-platform/analytics/asynch-reports-api#filter-expression-syntax
   */
  filter?: string;
  /**
   * Hostname needs to be specified if query intends to run at host level. This field is only
   * allowed when query is submitted by CreateHostAsyncQuery where analytics data will be grouped by
   * organization and hostname.
   */
  envgroupHostname?: string;
  /** Asynchronous Report ID. */
  reportDefinitionId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1QuerySchema: Schema<GoogleCloudApigeeV1Query> =
  s.object<GoogleCloudApigeeV1Query>(
    {
      timeRange: s.optional(s.record(s.string(), s.unknown())),
      csvDelimiter: s.optional(s.string()),
      metrics: s.optional(s.array(s.lazy(() => googleCloudApigeeV1QueryMetricSchema))),
      dimensions: s.optional(s.array(s.string())),
      groupByTimeUnit: s.optional(s.string()),
      limit: s.optional(s.int()),
      outputFormat: s.optional(s.string()),
      name: s.optional(s.string()),
      filter: s.optional(s.string()),
      envgroupHostname: s.optional(s.string()),
      reportDefinitionId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
