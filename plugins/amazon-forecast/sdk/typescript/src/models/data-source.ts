import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { s3ConfigSchema, type S3Config } from "./s3-config.js";

export type DataSource = {
  s3Config: S3Config;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataSourceSchema: Schema<DataSource> = s.object<DataSource>(
  {
    s3Config: s3ConfigSchema,
    _keysMap: {
      s3Config: "S3Config",
    },
  },
  { additionalProperties: s.json() },
);
