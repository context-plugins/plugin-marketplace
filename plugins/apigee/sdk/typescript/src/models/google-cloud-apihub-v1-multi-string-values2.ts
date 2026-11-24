import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional. The config variable value in case of config variable of type multi string. */
export type GoogleCloudApihubV1MultiStringValues2 = {
  /** Optional. The config variable value of data type multi string. */
  values?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1MultiStringValues2Schema: Schema<GoogleCloudApihubV1MultiStringValues2> =
  s.object<GoogleCloudApihubV1MultiStringValues2>(
    {
      values: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
