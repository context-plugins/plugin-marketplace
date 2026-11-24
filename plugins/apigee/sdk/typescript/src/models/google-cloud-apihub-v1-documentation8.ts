import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Optional. Additional external documentation for this operation. For OpenAPI spec, this will map
 * to `operation.documentation` in the spec.
 */
export type GoogleCloudApihubV1Documentation8 = {
  /** Optional. The uri of the externally hosted documentation. */
  externalUri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1Documentation8Schema: Schema<GoogleCloudApihubV1Documentation8> =
  s.object<GoogleCloudApihubV1Documentation8>(
    {
      externalUri: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
