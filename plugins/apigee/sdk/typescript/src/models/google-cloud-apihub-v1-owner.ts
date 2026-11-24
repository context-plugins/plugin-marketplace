import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Owner details. */
export type GoogleCloudApihubV1Owner = {
  /** Required. The email of the owner. */
  email?: string;
  /** Optional. The name of the owner. */
  displayName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1OwnerSchema: Schema<GoogleCloudApihubV1Owner> =
  s.object<GoogleCloudApihubV1Owner>(
    {
      email: s.optional(s.string()),
      displayName: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
