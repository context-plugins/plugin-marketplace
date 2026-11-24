import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Required. Immutable. The entity acting as the supplier in the dependency. */
export type GoogleCloudApihubV1DependencyEntityReference1 = {
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

export const googleCloudApihubV1DependencyEntityReference1Schema: Schema<GoogleCloudApihubV1DependencyEntityReference1> =
  s.object<GoogleCloudApihubV1DependencyEntityReference1>(
    {
      externalApiResourceName: s.optional(s.string()),
      operationResourceName: s.optional(s.string()),
      displayName: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
