import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Optional. The type of the database dump. If unspecified, defaults to MYSQL. */
export const DatabaseDumpType1 = {
  TypeUnspecified: "TYPE_UNSPECIFIED",
  Mysql: "MYSQL",
  Avro: "AVRO",
} as const;
export type DatabaseDumpType1 = (typeof DatabaseDumpType1)[keyof typeof DatabaseDumpType1] | (string & {});

export const databaseDumpType1Schema: EnumSchema<DatabaseDumpType1> =
  s.enumOf<DatabaseDumpType1>(DatabaseDumpType1);
