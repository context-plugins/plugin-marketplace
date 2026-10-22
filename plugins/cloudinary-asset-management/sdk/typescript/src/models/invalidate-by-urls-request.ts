import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The set of delivery URLs whose derived assets should be invalidated. */
export type InvalidateByUrlsRequest = {
  /** The delivery URLs whose cached derived assets should be invalidated. */
  urls: string[];
  /**
   * Whether to skip recording this invalidation against the product environment usage. If false,
   * the invalidation is counted towards usage. Default is false.
   */
  skipReporting?: boolean;
};

export const invalidateByUrlsRequestSchema: Schema<InvalidateByUrlsRequest> =
  s.object<InvalidateByUrlsRequest>({
    urls: s.array(s.string()),
    skipReporting: s.optional(s.boolean()),
    _keysMap: {
      skipReporting: "skip_reporting",
    },
  });
