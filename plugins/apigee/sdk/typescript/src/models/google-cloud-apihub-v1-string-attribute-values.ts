import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The attribute values of data type string or JSON. */
export type GoogleCloudApihubV1StringAttributeValues = {
  /** Required. The attribute values in case attribute data type is string or JSON. */
  values?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1StringAttributeValuesSchema: Schema<GoogleCloudApihubV1StringAttributeValues> =
  s.object<GoogleCloudApihubV1StringAttributeValues>(
    {
      values: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
