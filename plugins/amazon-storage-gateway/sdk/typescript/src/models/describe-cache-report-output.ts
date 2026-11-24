import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cacheReportInfoSchema, type CacheReportInfo } from "./cache-report-info.js";

export type DescribeCacheReportOutput = {
  cacheReportInfo?: CacheReportInfo;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeCacheReportOutputSchema: Schema<DescribeCacheReportOutput> =
  s.object<DescribeCacheReportOutput>(
    {
      cacheReportInfo: s.optional(s.lazy(() => cacheReportInfoSchema)),
      _keysMap: {
        cacheReportInfo: "CacheReportInfo",
      },
    },
    { additionalProperties: s.json() },
  );
