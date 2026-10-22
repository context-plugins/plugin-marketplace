import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Invalidation = {
  /** Time taken for CDN invalidation in seconds */
  took?: number;
  /** Array of URLs that were invalidated */
  urls?: string[];
};

export const invalidationSchema: Schema<Invalidation> = s.object<Invalidation>({
  took: s.optional(s.float64()),
  urls: s.optional(s.array(s.string())),
});
