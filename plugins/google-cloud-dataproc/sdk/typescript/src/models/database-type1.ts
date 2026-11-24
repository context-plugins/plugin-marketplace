import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the database. */
export const DatabaseType1 = {
  DatabaseTypeUnspecified: "DATABASE_TYPE_UNSPECIFIED",
  Mysql: "MYSQL",
} as const;
export type DatabaseType1 = (typeof DatabaseType1)[keyof typeof DatabaseType1] | (string & {});

export const databaseType1Schema: EnumSchema<DatabaseType1> = s.enumOf<DatabaseType1>(DatabaseType1);
