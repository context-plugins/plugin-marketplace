import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cacheReportInfoSchema, type CacheReportInfo } from "./cache-report-info.js";

export type ListCacheReportsOutput = {
  /**
   * A list of existing cache reports for all file shares associated with your Amazon Web Services
   * account. This list includes all information provided by the DescribeCacheReport action, such as
   * report status, completion progress, start time, end time, filters, and tags.
   */
  cacheReportList?: CacheReportInfo[];
  /** If the request includes Marker, the response returns that value in this field. */
  marker?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listCacheReportsOutputSchema: Schema<ListCacheReportsOutput> = s.object<ListCacheReportsOutput>(
  {
    cacheReportList: s.optional(s.array(s.lazy(() => cacheReportInfoSchema))),
    marker: s.optional(s.string()),
    _keysMap: {
      cacheReportList: "CacheReportList",
      marker: "Marker",
    },
  },
  { additionalProperties: s.json() },
);
