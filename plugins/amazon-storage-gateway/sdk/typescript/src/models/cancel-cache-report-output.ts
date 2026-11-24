import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CancelCacheReportOutput = {
  /** The Amazon Resource Name (ARN) of the cache report you want to cancel. */
  cacheReportArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cancelCacheReportOutputSchema: Schema<CancelCacheReportOutput> =
  s.object<CancelCacheReportOutput>(
    {
      cacheReportArn: s.optional(s.string()),
      _keysMap: {
        cacheReportArn: "CacheReportARN",
      },
    },
    { additionalProperties: s.json() },
  );
