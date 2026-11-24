import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional. The documentation of the deployment. */
export type GoogleCloudApihubV1Documentation1 = {
  /** Optional. The uri of the externally hosted documentation. */
  externalUri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1Documentation1Schema: Schema<GoogleCloudApihubV1Documentation1> =
  s.object<GoogleCloudApihubV1Documentation1>(
    {
      externalUri: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
