import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Required. Immutable. The entity acting as the consumer in the dependency. */
export type GoogleCloudApihubV1DependencyEntityReference3 = {
  /**
   * The resource name of an external API in the API Hub. Format:
   * `projects/{project}/locations/{location}/externalApis/{external_api}`
   */
  externalApiResourceName?: string;
  /**
   * The resource name of an operation in the API Hub. Format:
   * `projects/{project}/locations/{location}/apis/{api}/versions/{version}/operations/{operation}`
   */
  operationResourceName?: string;
  /** Output only. Display name of the entity. */
  displayName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1DependencyEntityReference3Schema: Schema<GoogleCloudApihubV1DependencyEntityReference3> =
  s.object<GoogleCloudApihubV1DependencyEntityReference3>(
    {
      externalApiResourceName: s.optional(s.string()),
      operationResourceName: s.optional(s.string()),
      displayName: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
