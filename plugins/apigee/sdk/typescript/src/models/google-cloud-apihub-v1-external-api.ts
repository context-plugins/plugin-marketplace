import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1AttributeValuesSchema,
  type GoogleCloudApihubV1AttributeValues,
} from "./google-cloud-apihub-v1-attribute-values.js";
import {
  googleCloudApihubV1Documentation6Schema,
  type GoogleCloudApihubV1Documentation6,
} from "./google-cloud-apihub-v1-documentation6.js";

/**
 * An external API represents an API being provided by external sources. This can be used to model
 * third-party APIs and can be used to define dependencies.
 */
export type GoogleCloudApihubV1ExternalApi = {
  /** Optional. List of endpoints on which this API is accessible. */
  endpoints?: string[];
  /** Output only. Last update timestamp. */
  updateTime?: string;
  /** Output only. Creation timestamp. */
  createTime?: string;
  /** Identifier. Format: `projects/{project}/locations/{location}/externalApi/{externalApi}`. */
  name?: string;
  /** Optional. List of paths served by this API. */
  paths?: string[];
  /**
   * Optional. Description of the external API. Max length is 500000 characters (Unicode Code
   * Points).
   */
  description?: string;
  /** Optional. Documentation of the external API. */
  documentation?: GoogleCloudApihubV1Documentation6;
  /**
   * Optional. The list of user defined attributes associated with the Version resource. The key is
   * the attribute name. It will be of the format:
   * `projects/{project}/locations/{location}/attributes/{attribute}`. The value is the attribute
   * values associated with the resource.
   */
  attributes?: Record<string, GoogleCloudApihubV1AttributeValues>;
  /**
   * Required. Display name of the external API. Max length is 500 characters (Unicode Code Points).
   */
  displayName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ExternalApiSchema: Schema<GoogleCloudApihubV1ExternalApi> =
  s.object<GoogleCloudApihubV1ExternalApi>(
    {
      endpoints: s.optional(s.array(s.string())),
      updateTime: s.optional(s.string()),
      createTime: s.optional(s.string()),
      name: s.optional(s.string()),
      paths: s.optional(s.array(s.string())),
      description: s.optional(s.string()),
      documentation: s.optional(s.lazy(() => googleCloudApihubV1Documentation6Schema)),
      attributes: s.optional(
        s.record(
          s.string(),
          s.lazy(() => googleCloudApihubV1AttributeValuesSchema),
        ),
      ),
      displayName: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
