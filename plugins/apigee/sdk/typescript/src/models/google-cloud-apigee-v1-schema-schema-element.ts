import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1SchemaSchemaProperty1Schema,
  type GoogleCloudApigeeV1SchemaSchemaProperty1,
} from "./google-cloud-apigee-v1-schema-schema-property1.js";

/** Message type for the schema element */
export type GoogleCloudApigeeV1SchemaSchemaElement = {
  /** Name of the field. */
  name?: string;
  /**
   * Properties for the schema field. For example: { "createTime": "2016-02-26T10:23:09.592Z",
   * "custom": "false", "type": "string" }
   */
  properties?: GoogleCloudApigeeV1SchemaSchemaProperty1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1SchemaSchemaElementSchema: Schema<GoogleCloudApigeeV1SchemaSchemaElement> =
  s.object<GoogleCloudApigeeV1SchemaSchemaElement>(
    {
      name: s.optional(s.string()),
      properties: s.optional(s.lazy(() => googleCloudApigeeV1SchemaSchemaProperty1Schema)),
    },
    { additionalProperties: s.json() },
  );
