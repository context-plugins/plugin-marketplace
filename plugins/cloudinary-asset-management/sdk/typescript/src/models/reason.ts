import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * A reason code explaining why progress is unavailable. Present only when processed_assets_count is
 * null.
 */
export const Reason = {
  ElasticsearchNotEnabled: "elasticsearch_not_enabled",
  NoResultsFromSearch: "no_results_from_search",
  NoAssetsWereProcessed: "no_assets_were_processed",
} as const;
export type Reason = (typeof Reason)[keyof typeof Reason] | (string & {});

export const reasonSchema: EnumSchema<Reason> = s.enumOf<Reason>(Reason);
