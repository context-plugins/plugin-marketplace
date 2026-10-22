import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";
import { metricListingRepSchema, type MetricListingRep } from "./metric-listing-rep.js";

export type MetricCollectionRep = {
  /** An array of metrics */
  items?: MetricListingRep[];
  /** The location and content type of related resources */
  links?: Record<string, Link>;
  totalCount?: number;
};

export const metricCollectionRepSchema: Schema<MetricCollectionRep> = s.object<MetricCollectionRep>({
  items: s.optional(s.array(s.lazy(() => metricListingRepSchema))),
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
  ),
  totalCount: s.optional(s.int()),
  _keysMap: {
    links: "_links",
  },
});
