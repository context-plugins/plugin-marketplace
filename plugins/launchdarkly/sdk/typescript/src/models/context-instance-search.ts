import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ContextInstanceSearch = {
  /** A collection of context instance filters */
  filter?: string;
  /**
   * Specifies a field by which to sort. LaunchDarkly supports sorting by timestamp in ascending
   * order by specifying <code>ts</code> for this value, or descending order by specifying
   * <code>-ts</code>.
   */
  sort?: string;
  /** Specifies the maximum number of items in the collection to return (max: 50, default: 20) */
  limit?: number;
  /**
   * Limits results to context instances with sort values after the value specified. You can use
   * this for pagination, however, we recommend using the <code>next</code> link instead, because
   * this value is an obfuscated string.
   */
  continuationToken?: string;
};

export const contextInstanceSearchSchema: Schema<ContextInstanceSearch> = s.object<ContextInstanceSearch>({
  filter: s.optional(s.string()),
  sort: s.optional(s.string()),
  limit: s.optional(s.int()),
  continuationToken: s.optional(s.string()),
});
