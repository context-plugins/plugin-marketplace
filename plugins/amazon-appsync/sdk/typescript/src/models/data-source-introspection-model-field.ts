import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataSourceIntrospectionModelFieldTypeSchema,
  type DataSourceIntrospectionModelFieldType,
} from "./data-source-introspection-model-field-type.js";

export type DataSourceIntrospectionModelField = {
  /** The name of the field that was retrieved from the introspected data. */
  name?: string;
  type?: DataSourceIntrospectionModelFieldType;
  /** The length value of the introspected field. */
  length?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataSourceIntrospectionModelFieldSchema: Schema<DataSourceIntrospectionModelField> =
  s.object<DataSourceIntrospectionModelField>(
    {
      name: s.optional(s.string()),
      type: s.optional(s.lazy(() => dataSourceIntrospectionModelFieldTypeSchema)),
      length: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
