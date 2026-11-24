import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeCacheReportInput = {
  /** The Amazon Resource Name (ARN) of the cache report you want to describe. */
  cacheReportArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeCacheReportInputSchema: Schema<DescribeCacheReportInput> =
  s.object<DescribeCacheReportInput>(
    {
      cacheReportArn: s.string(),
      _keysMap: {
        cacheReportArn: "CacheReportARN",
      },
    },
    { additionalProperties: s.json() },
  );
