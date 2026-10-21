import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { facetValueSchema, type FacetValue } from "./facet-value.js";

export type FacetBucket = {
  /** Estimated number of results in this facet. */
  count?: number;
  /**
   * The datasource the value belongs to. This will be used by the all tab to show types across all
   * datasources.
   */
  datasource?: string;
  /** Estimated percentage of results in this facet. */
  percentage?: number;
  value?: FacetValue;
};

export const facetBucketSchema: Schema<FacetBucket> = s.object<FacetBucket>({
  count: s.optional(s.int()),
  datasource: s.optional(s.string()),
  percentage: s.optional(s.int()),
  value: s.optional(s.lazy(() => facetValueSchema)),
});
