import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1EnumAttributeValues2Schema,
  type GoogleCloudApihubV1EnumAttributeValues2,
} from "./google-cloud-apihub-v1-enum-attribute-values2.js";
import {
  googleCloudApihubV1StringAttributeValues1Schema,
  type GoogleCloudApihubV1StringAttributeValues1,
} from "./google-cloud-apihub-v1-string-attribute-values1.js";
import {
  googleCloudApihubV1StringAttributeValues2Schema,
  type GoogleCloudApihubV1StringAttributeValues2,
} from "./google-cloud-apihub-v1-string-attribute-values2.js";
import {
  googleCloudApihubV1StringAttributeValues4Schema,
  type GoogleCloudApihubV1StringAttributeValues4,
} from "./google-cloud-apihub-v1-string-attribute-values4.js";

/**
 * Optional. The type of the API. This maps to the following system defined attribute:
 * `projects/{project}/locations/{location}/attributes/system-plugin-type` attribute. The number of
 * allowed values for this attribute will be based on the cardinality of the attribute. The same can
 * be retrieved via GetAttribute API. All values should be from the list of allowed values defined
 * for the attribute. Note this field is not required for plugins developed via plugin framework.
 */
export type GoogleCloudApihubV1AttributeValues19 = {
  /**
   * Output only. The name of the attribute. Format:
   * projects/{project}/locations/{location}/attributes/{attribute}
   */
  attribute?: string;
  /**
   * The attribute values associated with a resource in case attribute data type is URL, URI or IP,
   * like gs://bucket-name/object-name.
   */
  uriValues?: GoogleCloudApihubV1StringAttributeValues4;
  /** The attribute values associated with a resource in case attribute data type is string. */
  stringValues?: GoogleCloudApihubV1StringAttributeValues1;
  /** The attribute values associated with a resource in case attribute data type is enum. */
  enumValues?: GoogleCloudApihubV1EnumAttributeValues2;
  /** The attribute values associated with a resource in case attribute data type is JSON. */
  jsonValues?: GoogleCloudApihubV1StringAttributeValues2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1AttributeValues19Schema: Schema<GoogleCloudApihubV1AttributeValues19> =
  s.object<GoogleCloudApihubV1AttributeValues19>(
    {
      attribute: s.optional(s.string()),
      uriValues: s.optional(s.lazy(() => googleCloudApihubV1StringAttributeValues4Schema)),
      stringValues: s.optional(s.lazy(() => googleCloudApihubV1StringAttributeValues1Schema)),
      enumValues: s.optional(s.lazy(() => googleCloudApihubV1EnumAttributeValues2Schema)),
      jsonValues: s.optional(s.lazy(() => googleCloudApihubV1StringAttributeValues2Schema)),
    },
    { additionalProperties: s.json() },
  );
