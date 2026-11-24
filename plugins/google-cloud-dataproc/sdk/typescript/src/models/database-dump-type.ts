import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The type of the database dump. */
export const DatabaseDumpType = {
  TypeUnspecified: "TYPE_UNSPECIFIED",
  Mysql: "MYSQL",
  Avro: "AVRO",
} as const;
export type DatabaseDumpType = (typeof DatabaseDumpType)[keyof typeof DatabaseDumpType] | (string & {});

export const databaseDumpTypeSchema: EnumSchema<DatabaseDumpType> =
  s.enumOf<DatabaseDumpType>(DatabaseDumpType);
