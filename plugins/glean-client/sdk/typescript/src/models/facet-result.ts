import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { facetBucketSchema, type FacetBucket } from "./facet-bucket.js";

export type FacetResult = {
  /** The source of this facet (e.g. container_name, type, last_updated_at). */
  sourceName?: string;
  /** How to display this facet. Currently supportes 'SelectSingle' and 'SelectMultiple'. */
  operatorName?: string;
  /** A list of unique buckets that exist within this result set. */
  buckets?: FacetBucket[];
  /**
   * Returns true if more buckets exist than those returned. Additional buckets can be retrieve by
   * requesting again with a higher facetBucketSize.
   */
  hasMoreBuckets?: boolean;
  /**
   * For most facets this will be the empty string, meaning the facet is high-level and applies to
   * all documents for the datasource. When non-empty, this is used to group facets together (i.e.
   * group facets for each doctype for a certain datasource)
   */
  groupName?: string;
};

export const facetResultSchema: Schema<FacetResult> = s.object<FacetResult>({
  sourceName: s.optional(s.string()),
  operatorName: s.optional(s.string()),
  buckets: s.optional(s.array(s.lazy(() => facetBucketSchema))),
  hasMoreBuckets: s.optional(s.boolean()),
  groupName: s.optional(s.string()),
});
