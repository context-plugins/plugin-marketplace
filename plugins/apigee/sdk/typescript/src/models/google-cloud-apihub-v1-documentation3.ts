import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional. The documentation for the API resource. */
export type GoogleCloudApihubV1Documentation3 = {
  /** Optional. The uri of the externally hosted documentation. */
  externalUri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1Documentation3Schema: Schema<GoogleCloudApihubV1Documentation3> =
  s.object<GoogleCloudApihubV1Documentation3>(
    {
      externalUri: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
