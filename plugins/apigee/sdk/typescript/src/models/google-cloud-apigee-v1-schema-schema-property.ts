import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Properties for the schema field. */
export type GoogleCloudApigeeV1SchemaSchemaProperty = {
  /** Time the field was created in RFC3339 string form. For example: `2016-02-26T10:23:09.592Z`. */
  createTime?: string;
  /** Data type of the field. */
  type?: string;
  /**
   * Flag that specifies whether the field is standard in the dataset or a custom field created by
   * the customer. `true` indicates that it is a custom field.
   */
  custom?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1SchemaSchemaPropertySchema: Schema<GoogleCloudApigeeV1SchemaSchemaProperty> =
  s.object<GoogleCloudApigeeV1SchemaSchemaProperty>(
    {
      createTime: s.optional(s.string()),
      type: s.optional(s.string()),
      custom: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
