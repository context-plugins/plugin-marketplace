import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  valueModelContentSegmentTablesItemsColumnsItemsSchema,
  type ValueModelContentSegmentTablesItemsColumnsItems,
} from "./value-model-content-segment-tables-items-columns-items.js";
import {
  valueModelContentSegmentTablesItemsRowsItemsSchema,
  type ValueModelContentSegmentTablesItemsRowsItems,
} from "./value-model-content-segment-tables-items-rows-items.js";

export type ValueModelContentSegmentTablesItems = {
  id: string;
  label: string;
  segmentKeys: string[];
  columns: ValueModelContentSegmentTablesItemsColumnsItems[];
  rows: ValueModelContentSegmentTablesItemsRowsItems[];
  defaultRow?: Record<string, number>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const valueModelContentSegmentTablesItemsSchema: Schema<ValueModelContentSegmentTablesItems> =
  s.object<ValueModelContentSegmentTablesItems>(
    {
      id: s.string(),
      label: s.string(),
      segmentKeys: s.array(s.string()),
      columns: s.array(s.lazy(() => valueModelContentSegmentTablesItemsColumnsItemsSchema)),
      rows: s.array(s.lazy(() => valueModelContentSegmentTablesItemsRowsItemsSchema)),
      defaultRow: s.optional(s.record(s.string(), s.float64())),
    },
    { additionalProperties: s.json() },
  );
