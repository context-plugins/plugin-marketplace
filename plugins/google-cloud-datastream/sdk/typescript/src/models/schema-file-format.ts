import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The schema file format along JSON data files. */
export const SchemaFileFormat = {
  SchemaFileFormatUnspecified: "SCHEMA_FILE_FORMAT_UNSPECIFIED",
  NoSchemaFile: "NO_SCHEMA_FILE",
  AvroSchemaFile: "AVRO_SCHEMA_FILE",
} as const;
export type SchemaFileFormat = (typeof SchemaFileFormat)[keyof typeof SchemaFileFormat] | (string & {});

export const schemaFileFormatSchema: EnumSchema<SchemaFileFormat> =
  s.enumOf<SchemaFileFormat>(SchemaFileFormat);
