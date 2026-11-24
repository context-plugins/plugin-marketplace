import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** SQLServer Column. */
export type SqlServerColumn = {
  /** The column name. */
  column?: string;
  /** Whether or not the column represents a primary key. */
  primaryKey?: boolean;
  /** Whether or not the column can accept a null value. */
  nullable?: boolean;
  /** Column precision. */
  precision?: number;
  /** Column scale. */
  scale?: number;
  /** The SQLServer data type. */
  dataType?: string;
  /** Column length. */
  length?: number;
  /** The ordinal position of the column in the table. */
  ordinalPosition?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sqlServerColumnSchema: Schema<SqlServerColumn> = s.object<SqlServerColumn>(
  {
    column: s.optional(s.string()),
    primaryKey: s.optional(s.boolean()),
    nullable: s.optional(s.boolean()),
    precision: s.optional(s.int()),
    scale: s.optional(s.int()),
    dataType: s.optional(s.string()),
    length: s.optional(s.int()),
    ordinalPosition: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
