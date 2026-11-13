import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * A primary key is a field name or an array of field names, whose values `MUST` uniquely identify
 * each row in the table.
 */
export type PrimaryKey = string[] | string;

export const primaryKeyInternalSchema: Schema<PrimaryKey> = s.of<PrimaryKey>(
  s.union([s.array(s.string()), s.string()]),
);

export const primaryKeySchema: Schema<PrimaryKey> = s.lazySchema(() =>
  s.of<PrimaryKey>(s.union([s.array(s.string()).check(s.minLength(1), s.uniqueItems()), s.string()])),
);
