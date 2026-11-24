import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataSourceSchema, type DataSource } from "./data-source.js";
import { schemaModelSchema, type SchemaModel } from "./schema-model.js";

export type TimeSeriesIdentifiers = {
  dataSource?: DataSource;
  schema?: SchemaModel;
  /** The format of the data, either CSV or PARQUET. */
  format?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const timeSeriesIdentifiersSchema: Schema<TimeSeriesIdentifiers> = s.object<TimeSeriesIdentifiers>(
  {
    dataSource: s.optional(s.lazy(() => dataSourceSchema)),
    schema: s.optional(s.lazy(() => schemaModelSchema)),
    format: s.optional(s.string()),
    _keysMap: {
      dataSource: "DataSource",
      schema: "Schema",
      format: "Format",
    },
  },
  { additionalProperties: s.json() },
);
