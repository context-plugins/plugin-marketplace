import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional. The documentation of the plugin, that explains how to set up and use the plugin. */
export type GoogleCloudApihubV1Documentation5 = {
  /** Optional. The uri of the externally hosted documentation. */
  externalUri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1Documentation5Schema: Schema<GoogleCloudApihubV1Documentation5> =
  s.object<GoogleCloudApihubV1Documentation5>(
    {
      externalUri: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
