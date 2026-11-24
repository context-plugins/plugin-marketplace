import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Immutable. The database type that the Metastore service stores its data. */
export const DatabaseType = {
  DatabaseTypeUnspecified: "DATABASE_TYPE_UNSPECIFIED",
  Mysql: "MYSQL",
  Spanner: "SPANNER",
} as const;
export type DatabaseType = (typeof DatabaseType)[keyof typeof DatabaseType] | (string & {});

export const databaseTypeSchema: EnumSchema<DatabaseType> = s.enumOf<DatabaseType>(DatabaseType);
