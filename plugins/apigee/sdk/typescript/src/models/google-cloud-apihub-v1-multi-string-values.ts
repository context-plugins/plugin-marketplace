import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The config variable value of data type multi string. */
export type GoogleCloudApihubV1MultiStringValues = {
  /** Optional. The config variable value of data type multi string. */
  values?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1MultiStringValuesSchema: Schema<GoogleCloudApihubV1MultiStringValues> =
  s.object<GoogleCloudApihubV1MultiStringValues>(
    {
      values: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
