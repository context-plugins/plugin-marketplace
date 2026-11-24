import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteCacheReportOutput = {
  /** The Amazon Resource Name (ARN) of the cache report you want to delete. */
  cacheReportArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteCacheReportOutputSchema: Schema<DeleteCacheReportOutput> =
  s.object<DeleteCacheReportOutput>(
    {
      cacheReportArn: s.optional(s.string()),
      _keysMap: {
        cacheReportArn: "CacheReportARN",
      },
    },
    { additionalProperties: s.json() },
  );
