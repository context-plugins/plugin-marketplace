import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Oracle Column. */
export type OracleColumn = {
  /** The column name. */
  column?: string;
  /** Whether or not the column can accept a null value. */
  nullable?: boolean;
  /** The ordinal position of the column in the table. */
  ordinalPosition?: number;
  /** Whether or not the column represents a primary key. */
  primaryKey?: boolean;
  /** Column length. */
  length?: number;
  /** Column precision. */
  precision?: number;
  /** Column encoding. */
  encoding?: string;
  /** Column scale. */
  scale?: number;
  /** The Oracle data type. */
  dataType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oracleColumnSchema: Schema<OracleColumn> = s.object<OracleColumn>(
  {
    column: s.optional(s.string()),
    nullable: s.optional(s.boolean()),
    ordinalPosition: s.optional(s.int()),
    primaryKey: s.optional(s.boolean()),
    length: s.optional(s.int()),
    precision: s.optional(s.int()),
    encoding: s.optional(s.string()),
    scale: s.optional(s.int()),
    dataType: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
