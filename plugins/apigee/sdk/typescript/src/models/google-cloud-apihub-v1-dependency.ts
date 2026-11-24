import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { discoveryModeSchema, type DiscoveryMode } from "./discovery-mode.js";
import {
  googleCloudApihubV1AttributeValuesSchema,
  type GoogleCloudApihubV1AttributeValues,
} from "./google-cloud-apihub-v1-attribute-values.js";
import {
  googleCloudApihubV1DependencyEntityReference1Schema,
  type GoogleCloudApihubV1DependencyEntityReference1,
} from "./google-cloud-apihub-v1-dependency-entity-reference1.js";
import {
  googleCloudApihubV1DependencyEntityReference3Schema,
  type GoogleCloudApihubV1DependencyEntityReference3,
} from "./google-cloud-apihub-v1-dependency-entity-reference3.js";
import {
  googleCloudApihubV1DependencyErrorDetail2Schema,
  type GoogleCloudApihubV1DependencyErrorDetail2,
} from "./google-cloud-apihub-v1-dependency-error-detail2.js";
import { state5ApigeeProjectsApiSchema, type State5ApigeeProjectsApi } from "./state5-apigee-projects-api.js";

/**
 * A dependency resource defined in the API hub describes a dependency directed from a consumer to a
 * supplier entity. A dependency can be defined between two Operations or between an Operation and
 * External API.
 */
export type GoogleCloudApihubV1Dependency = {
  /** Output only. The time at which the dependency was created. */
  createTime?: string;
  /** Optional. Human readable description corresponding of the dependency. */
  description?: string;
  /** Output only. The time at which the dependency was last updated. */
  updateTime?: string;
  /** Required. Immutable. The entity acting as the consumer in the dependency. */
  consumer?: GoogleCloudApihubV1DependencyEntityReference3;
  /** Required. Immutable. The entity acting as the supplier in the dependency. */
  supplier?: GoogleCloudApihubV1DependencyEntityReference1;
  /** Output only. Error details of a dependency if the system has detected it internally. */
  errorDetail?: GoogleCloudApihubV1DependencyErrorDetail2;
  /** Output only. State of the dependency. */
  state?: State5ApigeeProjectsApi;
  /**
   * Optional. The list of user defined attributes associated with the dependency resource. The key
   * is the attribute name. It will be of the format:
   * `projects/{project}/locations/{location}/attributes/{attribute}`. The value is the attribute
   * values associated with the resource.
   */
  attributes?: Record<string, GoogleCloudApihubV1AttributeValues>;
  /**
   * Identifier. The name of the dependency in the API Hub. Format:
   * `projects/{project}/locations/{location}/dependencies/{dependency}`
   */
  name?: string;
  /** Output only. Discovery mode of the dependency. */
  discoveryMode?: DiscoveryMode;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1DependencySchema: Schema<GoogleCloudApihubV1Dependency> =
  s.object<GoogleCloudApihubV1Dependency>(
    {
      createTime: s.optional(s.string()),
      description: s.optional(s.string()),
      updateTime: s.optional(s.string()),
      consumer: s.optional(s.lazy(() => googleCloudApihubV1DependencyEntityReference3Schema)),
      supplier: s.optional(s.lazy(() => googleCloudApihubV1DependencyEntityReference1Schema)),
      errorDetail: s.optional(s.lazy(() => googleCloudApihubV1DependencyErrorDetail2Schema)),
      state: s.optional(s.lazy(() => state5ApigeeProjectsApiSchema)),
      attributes: s.optional(
        s.record(
          s.string(),
          s.lazy(() => googleCloudApihubV1AttributeValuesSchema),
        ),
      ),
      name: s.optional(s.string()),
      discoveryMode: s.optional(s.lazy(() => discoveryModeSchema)),
    },
    { additionalProperties: s.json() },
  );
