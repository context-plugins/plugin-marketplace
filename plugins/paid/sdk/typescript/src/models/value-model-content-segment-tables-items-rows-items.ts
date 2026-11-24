import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ValueModelContentSegmentTablesItemsRowsItems = {
  segmentValues: Record<string, string>;
  variables: Record<string, number>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const valueModelContentSegmentTablesItemsRowsItemsSchema: Schema<ValueModelContentSegmentTablesItemsRowsItems> =
  s.object<ValueModelContentSegmentTablesItemsRowsItems>(
    {
      segmentValues: s.record(s.string(), s.string()),
      variables: s.record(s.string(), s.float64()),
    },
    { additionalProperties: s.json() },
  );
