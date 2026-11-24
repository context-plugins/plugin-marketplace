import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataSourceIntrospectionModelSchema,
  type DataSourceIntrospectionModel,
} from "./data-source-introspection-model.js";

export type DataSourceIntrospectionResult = {
  /** The array of DataSourceIntrospectionModel objects. */
  models?: DataSourceIntrospectionModel[];
  /**
   * Determines the number of types to be returned in a single response before paginating. This
   * value is typically taken from nextToken value from the previous response.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataSourceIntrospectionResultSchema: Schema<DataSourceIntrospectionResult> =
  s.object<DataSourceIntrospectionResult>(
    {
      models: s.optional(s.array(s.lazy(() => dataSourceIntrospectionModelSchema))),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
