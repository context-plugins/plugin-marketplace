import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ValueModelContentSegmentTablesItemsColumnsItemsType = {
  Number: "number",
} as const;
export type ValueModelContentSegmentTablesItemsColumnsItemsType =
  | (typeof ValueModelContentSegmentTablesItemsColumnsItemsType)[keyof typeof ValueModelContentSegmentTablesItemsColumnsItemsType]
  | (string & {});

export const valueModelContentSegmentTablesItemsColumnsItemsTypeSchema: EnumSchema<ValueModelContentSegmentTablesItemsColumnsItemsType> =
  s.enumOf<ValueModelContentSegmentTablesItemsColumnsItemsType>(
    ValueModelContentSegmentTablesItemsColumnsItemsType,
  );
