import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { clusterTypeEnumSchema, type ClusterTypeEnum } from "./cluster-type-enum.js";
import { searchResultSchema, type SearchResult } from "./search-result.js";

export type ClusterGroup = {
  /** A list of results that should be displayed as associated with this result. */
  clusteredResults?: SearchResult[];
  /** The reason for inclusion of clusteredResults. */
  clusterType?: ClusterTypeEnum;
  /** The default number of results to display before truncating and showing a "see more" link */
  visibleCountHint: number;
};

export const clusterGroupSchema: Schema<ClusterGroup> = s.object<ClusterGroup>({
  clusteredResults: s.optional(s.array(s.lazy(() => searchResultSchema))),
  clusterType: s.optional(s.lazy(() => clusterTypeEnumSchema)),
  visibleCountHint: s.int(),
});
