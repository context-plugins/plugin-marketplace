import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional. Owner details for the API resource. */
export type GoogleCloudApihubV1Owner3 = {
  /** Required. The email of the owner. */
  email?: string;
  /** Optional. The name of the owner. */
  displayName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1Owner3Schema: Schema<GoogleCloudApihubV1Owner3> =
  s.object<GoogleCloudApihubV1Owner3>(
    {
      email: s.optional(s.string()),
      displayName: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
