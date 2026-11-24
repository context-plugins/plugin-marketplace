import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Optional. The documentation of the spec. For OpenAPI spec, this will be populated from
 * `externalDocs` in OpenAPI spec.
 */
export type GoogleCloudApihubV1Documentation4 = {
  /** Optional. The uri of the externally hosted documentation. */
  externalUri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1Documentation4Schema: Schema<GoogleCloudApihubV1Documentation4> =
  s.object<GoogleCloudApihubV1Documentation4>(
    {
      externalUri: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
