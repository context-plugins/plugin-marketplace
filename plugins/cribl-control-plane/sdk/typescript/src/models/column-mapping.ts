import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ColumnMapping = {
  /** Name of the column that will store field value */
  columnName: string;
  /** Type of the column in the database */
  columnType?: string;
  /** JavaScript expression to compute value to be inserted into the table */
  columnValueExpression: string;
};

export const columnMappingSchema: Schema<ColumnMapping> = s.object<ColumnMapping>({
  columnName: s.string(),
  columnType: s.optional(s.string()),
  columnValueExpression: s.string(),
});
