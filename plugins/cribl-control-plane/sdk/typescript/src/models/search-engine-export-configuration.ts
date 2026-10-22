import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SearchEngineExportConfiguration = {
  /** Id of the search job this function is running on. */
  searchJobId?: string;
  /** Id of the dataset */
  dataset?: string;
  /** Tee results to search. When set to true results will be shipped instead of stats */
  tee?: boolean;
  /** How often are stats flushed in ms */
  flushMs?: number;
  /** Disables generation of intermediate stats. When true stats will be emitted only on end */
  suppressPreviews?: boolean;
};

export const searchEngineExportConfigurationSchema: Schema<SearchEngineExportConfiguration> =
  s.object<SearchEngineExportConfiguration>({
    searchJobId: s.optional(s.string()),
    dataset: s.optional(s.string()),
    tee: s.optional(s.boolean()),
    flushMs: s.optional(s.float64()),
    suppressPreviews: s.optional(s.boolean()),
  });
