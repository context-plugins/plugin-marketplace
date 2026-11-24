import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DataSourceIntrospectionModelFieldType = {
  /**
   * Specifies the classification of data. For example, this could be set to values like Scalar or
   * NonNull to indicate a fundamental property of the field. Valid values include: Scalar:
   * Indicates the value is a primitive type (scalar). NonNull: Indicates the field cannot be null.
   * List: Indicates the field contains a list.
   */
  kind?: string;
  /**
   * The name of the data type that represents the field. For example, String is a valid name value.
   */
  name?: string;
  type?: DataSourceIntrospectionModelFieldType;
  /**
   * The values of the type field. This field represents the AppSync data type equivalent of the
   * introspected field.
   */
  values?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataSourceIntrospectionModelFieldTypeSchema: Schema<DataSourceIntrospectionModelFieldType> =
  s.object<DataSourceIntrospectionModelFieldType>(
    {
      kind: s.optional(s.string()),
      name: s.optional(s.string()),
      type: s.optional(s.lazy(() => dataSourceIntrospectionModelFieldTypeSchema)),
      values: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
