import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FacetBucketFilter = {
  /** The facet whose buckets should be filtered. */
  facet?: string;
  /** The per-term prefix that facet buckets should be filtered on. */
  prefix?: string;
};

export const facetBucketFilterSchema: Schema<FacetBucketFilter> = s.object<FacetBucketFilter>({
  facet: s.optional(s.string()),
  prefix: s.optional(s.string()),
});
