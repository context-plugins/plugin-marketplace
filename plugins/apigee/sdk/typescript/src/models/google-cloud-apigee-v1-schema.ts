import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1SchemaSchemaElementSchema,
  type GoogleCloudApigeeV1SchemaSchemaElement,
} from "./google-cloud-apigee-v1-schema-schema-element.js";

/** Response for Schema call */
export type GoogleCloudApigeeV1Schema = {
  /** List of schema fields grouped as dimensions. */
  dimensions?: GoogleCloudApigeeV1SchemaSchemaElement[];
  /**
   * Additional metadata associated with schema. This is a legacy field and usually consists of an
   * empty array of strings.
   */
  meta?: string[];
  /**
   * List of schema fields grouped as dimensions that can be used with an aggregate function such as
   * `sum`, `avg`, `min`, and `max`.
   */
  metrics?: GoogleCloudApigeeV1SchemaSchemaElement[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1SchemaSchema: Schema<GoogleCloudApigeeV1Schema> =
  s.object<GoogleCloudApigeeV1Schema>(
    {
      dimensions: s.optional(s.array(s.lazy(() => googleCloudApigeeV1SchemaSchemaElementSchema))),
      meta: s.optional(s.array(s.string())),
      metrics: s.optional(s.array(s.lazy(() => googleCloudApigeeV1SchemaSchemaElementSchema))),
    },
    { additionalProperties: s.json() },
  );
