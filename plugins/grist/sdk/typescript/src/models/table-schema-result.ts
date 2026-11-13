import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { csvDialectSchema, type CsvDialect } from "./csv-dialect.js";
import { encodingSchema, type Encoding } from "./encoding.js";
import { formatSchema, type Format } from "./format.js";
import { mediatypeSchema, type Mediatype } from "./mediatype.js";
import { tableSchemaInternalSchema, tableSchemaSchema, type TableSchema } from "./table-schema.js";

export type TableSchemaResult = {
  /** The ID (technical name) of the table */
  name: string;
  /** The human readable name of the table */
  title: string;
  /** The URL to download the CSV */
  path?: string;
  format?: Format;
  mediatype?: Mediatype;
  encoding?: Encoding;
  /** The CSV dialect descriptor. */
  dialect?: CsvDialect;
  /**
   * A Table Schema for this resource, compliant with the [Table Schema](/tableschema/)
   * specification.
   */
  schema: TableSchema;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const tableSchemaResultProperties: s.Shape<TableSchemaResult> = {
  name: s.string(),
  title: s.string(),
  path: s.optional(s.string()),
  format: s.optional(s.lazy(() => formatSchema)),
  mediatype: s.optional(s.lazy(() => mediatypeSchema)),
  encoding: s.optional(s.lazy(() => encodingSchema)),
  dialect: s.optional(s.lazy(() => csvDialectSchema)),
  schema: tableSchemaInternalSchema,
};

export const tableSchemaResultInternalSchema: Schema<TableSchemaResult> = s.object<TableSchemaResult>(
  tableSchemaResultProperties,
  { additionalProperties: s.json() },
);

export const tableSchemaResultSchema: Schema<TableSchemaResult> = s.lazySchema(() =>
  s.object<TableSchemaResult>(
    {
      ...tableSchemaResultProperties,
      schema: tableSchemaSchema,
    },
    { additionalProperties: s.json() },
  ),
);
