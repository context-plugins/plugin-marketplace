import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ValueModelContentSegmentTablesItemsColumnsItems = {
  variableId: string;
  label: string;
  /** @default "number" */
  type?: "number";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const valueModelContentSegmentTablesItemsColumnsItemsSchema: Schema<ValueModelContentSegmentTablesItemsColumnsItems> =
  s.object<ValueModelContentSegmentTablesItemsColumnsItems>(
    {
      variableId: s.string(),
      label: s.string(),
      type: s.defaulted(s.literal("number"), "number"),
    },
    { additionalProperties: s.json() },
  );
