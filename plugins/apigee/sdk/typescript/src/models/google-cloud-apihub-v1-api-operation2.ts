import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1AttributeValuesSchema,
  type GoogleCloudApihubV1AttributeValues,
} from "./google-cloud-apihub-v1-attribute-values.js";
import {
  googleCloudApihubV1OperationDetails2Schema,
  type GoogleCloudApihubV1OperationDetails2,
} from "./google-cloud-apihub-v1-operation-details2.js";
import {
  googleCloudApihubV1SourceMetadataSchema,
  type GoogleCloudApihubV1SourceMetadata,
} from "./google-cloud-apihub-v1-source-metadata.js";

/** Optional. The API operation. */
export type GoogleCloudApihubV1ApiOperation2 = {
  /**
   * Identifier. The name of the operation. Format:
   * `projects/{project}/locations/{location}/apis/{api}/versions/{version}/operations/{operation}`
   */
  name?: string;
  /**
   * Output only. The name of the spec will be of the format:
   * `projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}` Note:The
   * name of the spec will be empty if the operation is created via CreateApiOperation API.
   */
  spec?: string;
  /**
   * Optional. The deployments linked directly to this API operation. For operations parsed from a
   * spec, `UpdateApiOperation` returns `FAILED_PRECONDITION`; link the parent spec to the
   * deployment via `Spec.deployments` instead. Format is
   * `projects/{project}/locations/{location}/deployments/{deployment}`
   */
  deployments?: string[];
  /** Output only. The list of sources and metadata from the sources of the API operation. */
  sourceMetadata?: GoogleCloudApihubV1SourceMetadata[];
  /** Output only. The time at which the operation was created. */
  createTime?: string;
  /** Output only. The time at which the operation was last updated. */
  updateTime?: string;
  /**
   * Optional. The list of user defined attributes associated with the API operation resource. The
   * key is the attribute name. It will be of the format:
   * `projects/{project}/locations/{location}/attributes/{attribute}`. The value is the attribute
   * values associated with the resource.
   */
  attributes?: Record<string, GoogleCloudApihubV1AttributeValues>;
  /**
   * Optional. Operation details. Note: Even though this field is optional, it is required for
   * CreateApiOperation API and we will fail the request if not provided.
   */
  details?: GoogleCloudApihubV1OperationDetails2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ApiOperation2Schema: Schema<GoogleCloudApihubV1ApiOperation2> =
  s.object<GoogleCloudApihubV1ApiOperation2>(
    {
      name: s.optional(s.string()),
      spec: s.optional(s.string()),
      deployments: s.optional(s.array(s.string())),
      sourceMetadata: s.optional(s.array(s.lazy(() => googleCloudApihubV1SourceMetadataSchema))),
      createTime: s.optional(s.string()),
      updateTime: s.optional(s.string()),
      attributes: s.optional(
        s.record(
          s.string(),
          s.lazy(() => googleCloudApihubV1AttributeValuesSchema),
        ),
      ),
      details: s.optional(s.lazy(() => googleCloudApihubV1OperationDetails2Schema)),
    },
    { additionalProperties: s.json() },
  );
