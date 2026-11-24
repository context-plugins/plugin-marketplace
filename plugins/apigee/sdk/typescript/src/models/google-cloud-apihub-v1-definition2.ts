import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1AttributeValuesSchema,
  type GoogleCloudApihubV1AttributeValues,
} from "./google-cloud-apihub-v1-attribute-values.js";
import {
  googleCloudApihubV1Schema2Schema,
  type GoogleCloudApihubV1Schema2,
} from "./google-cloud-apihub-v1-schema2.js";
import { typeApigeeProjectsApiSchema, type TypeApigeeProjectsApi } from "./type-apigee-projects-api.js";

/**
 * This represents Definition resource in search results. Only name field is populated in search
 * results.
 */
export type GoogleCloudApihubV1Definition2 = {
  /** Output only. The value of a schema definition. */
  schema?: GoogleCloudApihubV1Schema2;
  /**
   * Identifier. The name of the definition. Format:
   * `projects/{project}/locations/{location}/apis/{api}/versions/{version}/definitions/{definition}`
   */
  name?: string;
  /**
   * Output only. The name of the spec from where the definition was parsed. Format is
   * `projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}`
   */
  spec?: string;
  /** Output only. The time at which the definition was created. */
  createTime?: string;
  /** Output only. The type of the definition. */
  type?: TypeApigeeProjectsApi;
  /** Output only. The time at which the definition was last updated. */
  updateTime?: string;
  /**
   * Optional. The list of user defined attributes associated with the definition resource. The key
   * is the attribute name. It will be of the format:
   * `projects/{project}/locations/{location}/attributes/{attribute}`. The value is the attribute
   * values associated with the resource.
   */
  attributes?: Record<string, GoogleCloudApihubV1AttributeValues>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1Definition2Schema: Schema<GoogleCloudApihubV1Definition2> =
  s.object<GoogleCloudApihubV1Definition2>(
    {
      schema: s.optional(s.lazy(() => googleCloudApihubV1Schema2Schema)),
      name: s.optional(s.string()),
      spec: s.optional(s.string()),
      createTime: s.optional(s.string()),
      type: s.optional(s.lazy(() => typeApigeeProjectsApiSchema)),
      updateTime: s.optional(s.string()),
      attributes: s.optional(
        s.record(
          s.string(),
          s.lazy(() => googleCloudApihubV1AttributeValuesSchema),
        ),
      ),
    },
    { additionalProperties: s.json() },
  );
