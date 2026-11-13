import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { epicSlimInternalSchema, epicSlimSchema, type EpicSlim } from "./epic-slim.js";

/** Results schema for paginated Epic listing. */
export type EpicPaginatedResults = {
  /** Array of Epic objects on the current page */
  data: EpicSlim[];
  /** The next page number if there are more results, or null for the last page */
  next: number | null;
  /** The total number of Epics matching the query over all pages */
  total: number;
};

const epicPaginatedResultsProperties: s.Shape<EpicPaginatedResults> = {
  data: s.array(s.lazy(() => epicSlimInternalSchema)),
  next: s.nullable(s.int()),
  total: s.int(),
};

export const epicPaginatedResultsInternalSchema: Schema<EpicPaginatedResults> =
  s.object<EpicPaginatedResults>(epicPaginatedResultsProperties);

export const epicPaginatedResultsSchema: Schema<EpicPaginatedResults> = s.lazySchema(() =>
  s.object<EpicPaginatedResults>({
    ...epicPaginatedResultsProperties,
    data: s.array(s.lazy(() => epicSlimSchema)),
  }),
);
