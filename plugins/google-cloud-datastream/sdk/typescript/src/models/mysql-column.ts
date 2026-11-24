import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** MySQL Column. */
export type MysqlColumn = {
  /**
   * The MySQL data type. Full data types list can be found here:
   * https://dev.mysql.com/doc/refman/8.0/en/data-types.html
   */
  dataType?: string;
  /** Column precision. */
  precision?: number;
  /** Whether or not the column represents a primary key. */
  primaryKey?: boolean;
  /** The ordinal position of the column in the table. */
  ordinalPosition?: number;
  /** The column name. */
  column?: string;
  /** Column collation. */
  collation?: string;
  /** Column scale. */
  scale?: number;
  /** Column length. */
  length?: number;
  /** Whether or not the column can accept a null value. */
  nullable?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mysqlColumnSchema: Schema<MysqlColumn> = s.object<MysqlColumn>(
  {
    dataType: s.optional(s.string()),
    precision: s.optional(s.int()),
    primaryKey: s.optional(s.boolean()),
    ordinalPosition: s.optional(s.int()),
    column: s.optional(s.string()),
    collation: s.optional(s.string()),
    scale: s.optional(s.int()),
    length: s.optional(s.int()),
    nullable: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
