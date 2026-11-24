import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataSourceIntrospectionModelFieldSchema,
  type DataSourceIntrospectionModelField,
} from "./data-source-introspection-model-field.js";
import {
  dataSourceIntrospectionModelIndexSchema,
  type DataSourceIntrospectionModelIndex,
} from "./data-source-introspection-model-index.js";

export type DataSourceIntrospectionModel = {
  /** The name of the model. For example, this could be the name of a single table in a database. */
  name?: string;
  /** The DataSourceIntrospectionModelField object data. */
  fields?: DataSourceIntrospectionModelField[];
  primaryKey?: DataSourceIntrospectionModelIndex;
  /** The array of DataSourceIntrospectionModelIndex objects. */
  indexes?: DataSourceIntrospectionModelIndex[];
  /**
   * Contains the output of the SDL that was generated from the introspected types. This is
   * controlled by the includeModelsSDL parameter of the GetDataSourceIntrospection operation.
   */
  sdl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataSourceIntrospectionModelSchema: Schema<DataSourceIntrospectionModel> =
  s.object<DataSourceIntrospectionModel>(
    {
      name: s.optional(s.string()),
      fields: s.optional(s.array(s.lazy(() => dataSourceIntrospectionModelFieldSchema))),
      primaryKey: s.optional(s.lazy(() => dataSourceIntrospectionModelIndexSchema)),
      indexes: s.optional(s.array(s.lazy(() => dataSourceIntrospectionModelIndexSchema))),
      sdl: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
