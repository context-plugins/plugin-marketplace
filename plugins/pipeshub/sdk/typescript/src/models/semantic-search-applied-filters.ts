import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Present when KB filters were applied to the search request. */
export type SemanticSearchAppliedFilters = {
  kb: string[];
  kbCount: number;
};

export const semanticSearchAppliedFiltersSchema: Schema<SemanticSearchAppliedFilters> =
  s.object<SemanticSearchAppliedFilters>({
    kb: s.array(s.string()),
    kbCount: s.int(),
    _keysMap: {
      kbCount: "kb_count",
    },
  });
