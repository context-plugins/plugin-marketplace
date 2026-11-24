import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The attribute values associated with a resource in case attribute data type is string. */
export type GoogleCloudApihubV1StringAttributeValues1 = {
  /** Required. The attribute values in case attribute data type is string or JSON. */
  values?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1StringAttributeValues1Schema: Schema<GoogleCloudApihubV1StringAttributeValues1> =
  s.object<GoogleCloudApihubV1StringAttributeValues1>(
    {
      values: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
