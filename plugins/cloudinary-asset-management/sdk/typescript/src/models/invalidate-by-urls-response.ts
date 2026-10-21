import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The result of invalidating derived assets by delivery URLs. */
export type InvalidateByUrlsResponse = {
  /** Whether the assets were invalidated directly on the CDN. */
  cdnInvalidated?: boolean;
  /** The time the invalidation took, in seconds. */
  took?: number;
  /** The delivery URLs that were invalidated. */
  urls?: string[];
  /** The delivery URLs that were skipped because the caller lacked update permission. */
  unauthorizedUrls?: string[];
};

export const invalidateByUrlsResponseSchema: Schema<InvalidateByUrlsResponse> =
  s.object<InvalidateByUrlsResponse>({
    cdnInvalidated: s.optional(s.boolean()),
    took: s.optional(s.float64()),
    urls: s.optional(s.array(s.string())),
    unauthorizedUrls: s.optional(s.array(s.string())),
    _keysMap: {
      cdnInvalidated: "cdn_invalidated",
      unauthorizedUrls: "unauthorized_urls",
    },
  });
