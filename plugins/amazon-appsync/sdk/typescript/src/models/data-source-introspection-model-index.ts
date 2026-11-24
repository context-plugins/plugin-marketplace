import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DataSourceIntrospectionModelIndex = {
  /** The name of the index. */
  name?: string;
  /** The fields of the index. */
  fields?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataSourceIntrospectionModelIndexSchema: Schema<DataSourceIntrospectionModelIndex> =
  s.object<DataSourceIntrospectionModelIndex>(
    {
      name: s.optional(s.string()),
      fields: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
