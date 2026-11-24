import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { compressionSchema, type Compression } from "./compression.js";
import { schemaFileFormatSchema, type SchemaFileFormat } from "./schema-file-format.js";

/** JSON file format configuration. */
export type JsonFileFormat = {
  /** The schema file format along JSON data files. */
  schemaFileFormat?: SchemaFileFormat;
  /** Compression of the loaded JSON file. */
  compression?: Compression;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jsonFileFormatSchema: Schema<JsonFileFormat> = s.object<JsonFileFormat>(
  {
    schemaFileFormat: s.optional(s.lazy(() => schemaFileFormatSchema)),
    compression: s.optional(s.lazy(() => compressionSchema)),
  },
  { additionalProperties: s.json() },
);
