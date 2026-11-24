import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional. The config variable value in case of config variable of type multi integer. */
export type GoogleCloudApihubV1MultiIntValues2 = {
  /** Optional. The config variable value of data type multi int. */
  values?: number[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1MultiIntValues2Schema: Schema<GoogleCloudApihubV1MultiIntValues2> =
  s.object<GoogleCloudApihubV1MultiIntValues2>(
    {
      values: s.optional(s.array(s.int())),
    },
    { additionalProperties: s.json() },
  );
