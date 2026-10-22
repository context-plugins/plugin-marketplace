import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { directionEnumSchema, type DirectionEnum } from "./direction-enum.js";
import { aggregate2Schema, type Aggregate2 } from "./unions/aggregate2.js";
import { withFieldSchema, type WithField } from "./with-field.js";

/** Common parameters for resource search operations. */
export type SearchParameters = {
  /**
   * The Lucene-like search expression. Supports token match (`field:value`), exact match
   * (`field=value`), trailing `*` for prefix match, ranges (`[a TO b]`, `{a TO b}`), and
   * comparisons (`>`, `<`, `>=`, `<=`). Combine terms with uppercase `AND`, `OR`, `NOT`, or
   * `+`/`-`, and group with parentheses. Wrap values containing reserved characters (spaces,
   * colons, etc.) in double quotes. See the [search expressions
   * guide](https://cloudinary.com/documentation/search_expressions.md) for the full syntax and
   * supported fields.
   */
  expression?: string;
  /**
   * An array of single-key objects mapping a field to a sort direction. Each object must contain
   * exactly one field name mapped to 'asc' or 'desc'. Default: [{"created_at": "desc"}].
   */
  sortBy?: DirectionEnum[];
  /**
   * The maximum number of results to return. Default - 50. Maximum - 500. Set to `0` to get only
   * `total_count` and `aggregations` without any resources in the response — useful for counting or
   * aggregation-only queries.
   */
  maxResults?: number;
  /**
   * The cursor value to get the next page of results. Available when a previous search returned
   * more results than max_results.
   */
  nextCursor?: string;
  /**
   * Fields or ranges to aggregate search results by. Requires a Tier 2 search plan; on Tier 1 the
   * field is accepted but aggregations are omitted from the response.
   */
  aggregate?: Aggregate2;
  /**
   * The additional asset attributes to include in each search result. The `fields` parameter takes
   * precedence over this parameter. `image_metadata`, `image_analysis`, and `metadata` require a
   * Tier 2 search plan.
   */
  withField?: WithField[];
  /**
   * A comma-separated list of fields to include in the response. Notes:
   * - This parameter takes precedence over the with_field parameter, so if you want any additional
   *   asset attributes returned, make sure to also include them in this list (e.g., tags or
   *   context).
   * - The following fields are always included in the response: public_id, asset_id, asset_folder,
   *   created_at, status, type, and resource_type.
   */
  fields?: string;
};

export const searchParametersSchema: Schema<SearchParameters> = s.object<SearchParameters>({
  expression: s.optional(s.string()),
  sortBy: s.optional(s.array(s.lazy(() => directionEnumSchema))),
  maxResults: s.optional(s.int()),
  nextCursor: s.optional(s.string()),
  aggregate: s.optional(s.lazy(() => aggregate2Schema)),
  withField: s.optional(s.array(s.lazy(() => withFieldSchema))),
  fields: s.optional(s.string()),
  _keysMap: {
    sortBy: "sort_by",
    maxResults: "max_results",
    nextCursor: "next_cursor",
    withField: "with_field",
  },
});
