import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** PostgreSQL Column. */
export type PostgresqlColumn = {
  /** The PostgreSQL data type. */
  dataType?: string;
  /** The column name. */
  column?: string;
  /** Column scale. */
  scale?: number;
  /** The ordinal position of the column in the table. */
  ordinalPosition?: number;
  /** Column precision. */
  precision?: number;
  /** Whether or not the column represents a primary key. */
  primaryKey?: boolean;
  /** Column length. */
  length?: number;
  /** Whether or not the column can accept a null value. */
  nullable?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postgresqlColumnSchema: Schema<PostgresqlColumn> = s.object<PostgresqlColumn>(
  {
    dataType: s.optional(s.string()),
    column: s.optional(s.string()),
    scale: s.optional(s.int()),
    ordinalPosition: s.optional(s.int()),
    precision: s.optional(s.int()),
    primaryKey: s.optional(s.boolean()),
    length: s.optional(s.int()),
    nullable: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
