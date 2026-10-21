import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dateRangeFilterSchema, type DateRangeFilter } from "./date-range-filter.js";
import { sizeRangeFilterSchema, type SizeRangeFilter } from "./size-range-filter.js";

/** Echo of applied filters; unused slots are JSON `null`. */
export type Applied1 = {
  q: string | null;
  nodeTypes: string[] | null;
  recordTypes: string[] | null;
  origins: string[] | null;
  connectorIds: string[] | null;
  indexingStatus: string[] | null;
  createdAt: DateRangeFilter | null;
  updatedAt: DateRangeFilter | null;
  size: SizeRangeFilter | null;
  /** Effective sort field after server normalisation. */
  sortBy: string;
  /** Effective sort order after server normalisation. */
  sortOrder: string;
};

export const applied1Schema: Schema<Applied1> = s.object<Applied1>({
  q: s.nullable(s.string()),
  nodeTypes: s.nullable(s.array(s.string())),
  recordTypes: s.nullable(s.array(s.string())),
  origins: s.nullable(s.array(s.string())),
  connectorIds: s.nullable(s.array(s.string())),
  indexingStatus: s.nullable(s.array(s.string())),
  createdAt: s.nullable(s.lazy(() => dateRangeFilterSchema)),
  updatedAt: s.nullable(s.lazy(() => dateRangeFilterSchema)),
  size: s.nullable(s.lazy(() => sizeRangeFilterSchema)),
  sortBy: s.string(),
  sortOrder: s.string(),
});
