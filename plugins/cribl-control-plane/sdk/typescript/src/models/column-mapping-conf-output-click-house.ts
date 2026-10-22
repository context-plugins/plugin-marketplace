import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ColumnMappingConfOutputClickHouse = {
  /** Name of the column in ClickHouse that will store field value */
  columnName: string;
  /** Type of the column in the ClickHouse database */
  columnType?: string;
  /** JavaScript expression to compute value to be inserted into ClickHouse table */
  columnValueExpression: string;
};

export const columnMappingConfOutputClickHouseSchema: Schema<ColumnMappingConfOutputClickHouse> =
  s.object<ColumnMappingConfOutputClickHouse>({
    columnName: s.string(),
    columnType: s.optional(s.string()),
    columnValueExpression: s.string(),
  });
