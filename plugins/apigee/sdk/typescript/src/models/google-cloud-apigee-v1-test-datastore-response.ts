import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The response for TestDatastore */
export type GoogleCloudApigeeV1TestDatastoreResponse = {
  /** Output only. It could be `completed` or `failed` */
  state?: string;
  /** Output only. Error message of test connection failure */
  error?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1TestDatastoreResponseSchema: Schema<GoogleCloudApigeeV1TestDatastoreResponse> =
  s.object<GoogleCloudApigeeV1TestDatastoreResponse>(
    {
      state: s.optional(s.string()),
      error: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
