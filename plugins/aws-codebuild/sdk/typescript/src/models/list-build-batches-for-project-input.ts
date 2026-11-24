import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { buildBatchFilterSchema, type BuildBatchFilter } from "./build-batch-filter.js";
import { sortOrder1Schema, type SortOrder1 } from "./sort-order1.js";

export type ListBuildBatchesForProjectInput = {
  /** The name of the project. */
  projectName?: string;
  filter?: BuildBatchFilter;
  /** The maximum number of results to return. */
  maxResults?: number;
  /**
   * Specifies the sort order of the returned items. Valid values include: ASCENDING: List the batch
   * build identifiers in ascending order by identifier. DESCENDING: List the batch build
   * identifiers in descending order by identifier.
   */
  sortOrder?: SortOrder1;
  /**
   * The nextToken value returned from a previous call to ListBuildBatchesForProject. This specifies
   * the next item to return. To return the beginning of the list, exclude this parameter.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listBuildBatchesForProjectInputSchema: Schema<ListBuildBatchesForProjectInput> =
  s.object<ListBuildBatchesForProjectInput>(
    {
      projectName: s.optional(s.string()),
      filter: s.optional(s.lazy(() => buildBatchFilterSchema)),
      maxResults: s.optional(s.int()),
      sortOrder: s.optional(s.lazy(() => sortOrder1Schema)),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
