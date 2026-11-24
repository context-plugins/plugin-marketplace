import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { s3ConfigSchema, type S3Config } from "./s3-config.js";
import { schemaModelSchema, type SchemaModel } from "./schema-model.js";

export type TimeSeriesReplacementsDataSource = {
  s3Config: S3Config;
  schema: SchemaModel;
  /** The format of the replacement data, CSV or PARQUET. */
  format?: string;
  /** The timestamp format of the replacement data. */
  timestampFormat?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const timeSeriesReplacementsDataSourceSchema: Schema<TimeSeriesReplacementsDataSource> =
  s.object<TimeSeriesReplacementsDataSource>(
    {
      s3Config: s3ConfigSchema,
      schema: schemaModelSchema,
      format: s.optional(s.string()),
      timestampFormat: s.optional(s.string()),
      _keysMap: {
        s3Config: "S3Config",
        schema: "Schema",
        format: "Format",
        timestampFormat: "TimestampFormat",
      },
    },
    { additionalProperties: s.json() },
  );
