import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";
import { metricGroupRepSchema, type MetricGroupRep } from "./metric-group-rep.js";

export type MetricGroupCollectionRep = {
  /** An array of metric groups */
  items: MetricGroupRep[];
  /** The location and content type of related resources */
  links?: Record<string, Link>;
  totalCount?: number;
};

export const metricGroupCollectionRepSchema: Schema<MetricGroupCollectionRep> =
  s.object<MetricGroupCollectionRep>({
    items: s.array(s.lazy(() => metricGroupRepSchema)),
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
