import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The config variable value of data type multi int. */
export type GoogleCloudApihubV1MultiIntValues = {
  /** Optional. The config variable value of data type multi int. */
  values?: number[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1MultiIntValuesSchema: Schema<GoogleCloudApihubV1MultiIntValues> =
  s.object<GoogleCloudApihubV1MultiIntValues>(
    {
      values: s.optional(s.array(s.int())),
    },
    { additionalProperties: s.json() },
  );
