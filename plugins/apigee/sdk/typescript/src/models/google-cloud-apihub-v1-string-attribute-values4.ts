import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * The attribute values associated with a resource in case attribute data type is URL, URI or IP,
 * like gs://bucket-name/object-name.
 */
export type GoogleCloudApihubV1StringAttributeValues4 = {
  /** Required. The attribute values in case attribute data type is string or JSON. */
  values?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1StringAttributeValues4Schema: Schema<GoogleCloudApihubV1StringAttributeValues4> =
  s.object<GoogleCloudApihubV1StringAttributeValues4>(
    {
      values: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
