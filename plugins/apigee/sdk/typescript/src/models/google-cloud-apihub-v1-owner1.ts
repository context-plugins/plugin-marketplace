import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Output only. Owner details for the spec. This maps to `info.contact` in OpenAPI spec. */
export type GoogleCloudApihubV1Owner1 = {
  /** Required. The email of the owner. */
  email?: string;
  /** Optional. The name of the owner. */
  displayName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1Owner1Schema: Schema<GoogleCloudApihubV1Owner1> =
  s.object<GoogleCloudApihubV1Owner1>(
    {
      email: s.optional(s.string()),
      displayName: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
