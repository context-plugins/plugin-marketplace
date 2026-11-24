import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional. The config variable value in case of config variable of type enum. */
export type GoogleCloudApihubV1ConfigValueOption1 = {
  /** Required. Display name of the option. */
  displayName?: string;
  /** Required. Id of the option. */
  id?: string;
  /** Optional. Description of the option. */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ConfigValueOption1Schema: Schema<GoogleCloudApihubV1ConfigValueOption1> =
  s.object<GoogleCloudApihubV1ConfigValueOption1>(
    {
      displayName: s.optional(s.string()),
      id: s.optional(s.string()),
      description: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
