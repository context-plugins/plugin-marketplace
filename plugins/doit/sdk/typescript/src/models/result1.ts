import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mlFeatureSchema, type MlFeature } from "./ml-feature.js";
import { schemaFieldSchema, type SchemaField } from "./schema-field.js";
import { valueDoiTReportsApiSchema, type ValueDoiTReportsApi } from "./unions/value-doi-treports-api.js";

export type Result1 = {
  schema?: SchemaField[];
  mlFeatures?: MlFeature[];
  rows?: ValueDoiTReportsApi[][];
  /** Secondary time range rows. */
  secondaryRows?: ValueDoiTReportsApi[][];
  forecastRows?: ValueDoiTReportsApi[][];
  /** If true, results were fetched from the cache. */
  cacheHit?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const result1Schema: Schema<Result1> = s.object<Result1>(
  {
    schema: s.optional(s.array(s.lazy(() => schemaFieldSchema))),
    mlFeatures: s.optional(s.array(s.lazy(() => mlFeatureSchema))),
    rows: s.optional(s.array(s.array(s.lazy(() => valueDoiTReportsApiSchema)))),
    secondaryRows: s.optional(s.array(s.array(s.lazy(() => valueDoiTReportsApiSchema)))),
    forecastRows: s.optional(s.array(s.array(s.lazy(() => valueDoiTReportsApiSchema)))),
    cacheHit: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
