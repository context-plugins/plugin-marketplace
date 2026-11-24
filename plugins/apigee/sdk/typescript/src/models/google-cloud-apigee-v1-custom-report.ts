import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1CustomReportMetricSchema,
  type GoogleCloudApigeeV1CustomReportMetric,
} from "./google-cloud-apigee-v1-custom-report-metric.js";
import {
  googleCloudApigeeV1ReportPropertySchema,
  type GoogleCloudApigeeV1ReportProperty,
} from "./google-cloud-apigee-v1-report-property.js";

export type GoogleCloudApigeeV1CustomReport = {
  /** Output only. Last viewed time of this entity as milliseconds since epoch */
  lastViewedAt?: string;
  /** Legacy field: not used. Contains the from time for the report */
  fromTime?: string;
  /**
   * Legacy field: not used. This field contains a list of comments associated with custom report
   */
  comments?: string[];
  /**
   * Legacy field: not used. This field contains the top k parameter value for restricting the
   * result
   */
  topk?: string;
  /** This field contains the chart type for the report */
  chartType?: string;
  /**
   * Output only. Modified time of this entity as milliseconds since epoch. json key: lastModifiedAt
   */
  lastModifiedAt?: string;
  /** This field contains report properties such as ui metadata etc. */
  properties?: GoogleCloudApigeeV1ReportProperty[];
  /** Legacy field: not used. This field contains a list of tags associated with custom report */
  tags?: string[];
  /** Legacy field: not used much. Contains the list of sort by columns */
  sortByCols?: string[];
  /** Legacy field: not used. This field contains the offset for the data */
  offset?: string;
  /** Legacy field: not used much. Contains the sort order for the sort columns */
  sortOrder?: string;
  /** Legacy field: not used This field contains the limit for the result retrieved */
  limit?: string;
  /** This field contains the time unit of aggregation for the report */
  timeUnit?: string;
  /** This field contains the filter expression */
  filter?: string;
  /** This is the display name for the report */
  displayName?: string;
  /** Output only. Environment name */
  environment?: string;
  /** Output only. Unix time when the app was created json key: createdAt */
  createdAt?: string;
  /** Required. This contains the list of metrics */
  metrics?: GoogleCloudApigeeV1CustomReportMetric[];
  /** Output only. Organization name */
  organization?: string;
  /** Legacy field: not used. Contains the end time for the report */
  toTime?: string;
  /** This contains the list of dimensions for the report */
  dimensions?: string[];
  /**
   * Required. Unique identifier for the report T his is a legacy field used to encode custom report
   * unique id
   */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1CustomReportSchema: Schema<GoogleCloudApigeeV1CustomReport> =
  s.object<GoogleCloudApigeeV1CustomReport>(
    {
      lastViewedAt: s.optional(s.string()),
      fromTime: s.optional(s.string()),
      comments: s.optional(s.array(s.string())),
      topk: s.optional(s.string()),
      chartType: s.optional(s.string()),
      lastModifiedAt: s.optional(s.string()),
      properties: s.optional(s.array(s.lazy(() => googleCloudApigeeV1ReportPropertySchema))),
      tags: s.optional(s.array(s.string())),
      sortByCols: s.optional(s.array(s.string())),
      offset: s.optional(s.string()),
      sortOrder: s.optional(s.string()),
      limit: s.optional(s.string()),
      timeUnit: s.optional(s.string()),
      filter: s.optional(s.string()),
      displayName: s.optional(s.string()),
      environment: s.optional(s.string()),
      createdAt: s.optional(s.string()),
      metrics: s.optional(s.array(s.lazy(() => googleCloudApigeeV1CustomReportMetricSchema))),
      organization: s.optional(s.string()),
      toTime: s.optional(s.string()),
      dimensions: s.optional(s.array(s.string())),
      name: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
