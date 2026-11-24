import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cacheReportFilterSchema, type CacheReportFilter } from "./cache-report-filter.js";
import { tagSchema, type Tag } from "./tag.js";

export type StartCacheReportInput = {
  fileShareArn: string;
  /** The ARN of the IAM role used when saving the cache report to Amazon S3. */
  role: string;
  /**
   * The ARN of the Amazon S3 bucket where you want to save the cache report. We do not recommend
   * saving the cache report to the same Amazon S3 bucket for which you are generating the report.
   * This field does not accept access point ARNs.
   */
  locationArn: string;
  /**
   * The Amazon Web Services Region of the Amazon S3 bucket where you want to save the cache report.
   */
  bucketRegion: string;
  /**
   * The DNS name of the VPC endpoint associated with the Amazon S3 where you want to save the cache
   * report. Optional.
   */
  vpcEndpointDnsName?: string;
  /**
   * The list of filters and parameters that determine which files are included in the report. You
   * must specify at least one value for InclusionFilters or ExclusionFilters in a StartCacheReport
   * request.
   */
  inclusionFilters?: CacheReportFilter[];
  /**
   * The list of filters and parameters that determine which files are excluded from the report. You
   * must specify at least one value for InclusionFilters or ExclusionFilters in a StartCacheReport
   * request.
   */
  exclusionFilters?: CacheReportFilter[];
  /**
   * A unique identifier that you use to ensure idempotent report generation if you need to retry an
   * unsuccessful StartCacheReport request. If you retry a request, use the same ClientToken you
   * specified in the initial request.
   */
  clientToken: string;
  /**
   * A list of up to 50 key/value tags that you can assign to the cache report. Using tags can help
   * you categorize your reports and more easily locate them in search results.
   */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startCacheReportInputSchema: Schema<StartCacheReportInput> = s.object<StartCacheReportInput>(
  {
    fileShareArn: s.string(),
    role: s.string(),
    locationArn: s.string(),
    bucketRegion: s.string(),
    vpcEndpointDnsName: s.optional(s.string()),
    inclusionFilters: s.optional(s.array(s.lazy(() => cacheReportFilterSchema))),
    exclusionFilters: s.optional(s.array(s.lazy(() => cacheReportFilterSchema))),
    clientToken: s.string(),
    tags: s.optional(s.array(s.lazy(() => tagSchema))),
    _keysMap: {
      fileShareArn: "FileShareARN",
      role: "Role",
      locationArn: "LocationARN",
      bucketRegion: "BucketRegion",
      vpcEndpointDnsName: "VPCEndpointDNSName",
      inclusionFilters: "InclusionFilters",
      exclusionFilters: "ExclusionFilters",
      clientToken: "ClientToken",
      tags: "Tags",
    },
  },
  { additionalProperties: s.json() },
);
