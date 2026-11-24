import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cacheReportFilterSchema, type CacheReportFilter } from "./cache-report-filter.js";
import { cacheReportStatusSchema, type CacheReportStatus } from "./cache-report-status.js";
import { tagSchema, type Tag } from "./tag.js";

export type CacheReportInfo = {
  /** The Amazon Resource Name (ARN) of the cache report you want to describe. */
  cacheReportArn?: string;
  /** The status of the specified cache report. */
  cacheReportStatus?: CacheReportStatus;
  /** The percentage of the report generation process that has been completed at time of inquiry. */
  reportCompletionPercent?: number;
  /** The time at which the gateway stopped generating the cache report. */
  endTime?: Date;
  role?: string;
  fileShareArn?: string;
  /** The ARN of the Amazon S3 bucket location where the cache report is saved. */
  locationArn?: string;
  /** The time at which the gateway started generating the cache report. */
  startTime?: Date;
  /** The list of filters and parameters that determine which files are included in the report. */
  inclusionFilters?: CacheReportFilter[];
  /** The list of filters and parameters that determine which files are excluded from the report. */
  exclusionFilters?: CacheReportFilter[];
  /** The file name of the completed cache report object stored in Amazon S3. */
  reportName?: string;
  /** The list of key/value tags associated with the report. */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cacheReportInfoSchema: Schema<CacheReportInfo> = s.object<CacheReportInfo>(
  {
    cacheReportArn: s.optional(s.string()),
    cacheReportStatus: s.optional(s.lazy(() => cacheReportStatusSchema)),
    reportCompletionPercent: s.optional(s.int()),
    endTime: s.optional(s.dateTime()),
    role: s.optional(s.string()),
    fileShareArn: s.optional(s.string()),
    locationArn: s.optional(s.string()),
    startTime: s.optional(s.dateTime()),
    inclusionFilters: s.optional(s.array(s.lazy(() => cacheReportFilterSchema))),
    exclusionFilters: s.optional(s.array(s.lazy(() => cacheReportFilterSchema))),
    reportName: s.optional(s.string()),
    tags: s.optional(s.array(s.lazy(() => tagSchema))),
    _keysMap: {
      cacheReportArn: "CacheReportARN",
      cacheReportStatus: "CacheReportStatus",
      reportCompletionPercent: "ReportCompletionPercent",
      endTime: "EndTime",
      role: "Role",
      fileShareArn: "FileShareARN",
      locationArn: "LocationARN",
      startTime: "StartTime",
      inclusionFilters: "InclusionFilters",
      exclusionFilters: "ExclusionFilters",
      reportName: "ReportName",
      tags: "Tags",
    },
  },
  { additionalProperties: s.json() },
);
