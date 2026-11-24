import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Key-value pair to store extra metadata. */
export type GoogleCloudApigeeV1Attribute = {
  /** API key of the attribute. */
  name?: string;
  /** Value of the attribute. */
  value?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1AttributeSchema: Schema<GoogleCloudApigeeV1Attribute> =
  s.object<GoogleCloudApigeeV1Attribute>(
    {
      name: s.optional(s.string()),
      value: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
