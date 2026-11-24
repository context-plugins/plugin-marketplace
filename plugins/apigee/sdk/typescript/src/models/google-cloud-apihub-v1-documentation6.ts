import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional. Documentation of the external API. */
export type GoogleCloudApihubV1Documentation6 = {
  /** Optional. The uri of the externally hosted documentation. */
  externalUri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1Documentation6Schema: Schema<GoogleCloudApihubV1Documentation6> =
  s.object<GoogleCloudApihubV1Documentation6>(
    {
      externalUri: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
