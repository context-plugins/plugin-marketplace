import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional. The documentation of the version. */
export type GoogleCloudApihubV1Documentation2 = {
  /** Optional. The uri of the externally hosted documentation. */
  externalUri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1Documentation2Schema: Schema<GoogleCloudApihubV1Documentation2> =
  s.object<GoogleCloudApihubV1Documentation2>(
    {
      externalUri: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
