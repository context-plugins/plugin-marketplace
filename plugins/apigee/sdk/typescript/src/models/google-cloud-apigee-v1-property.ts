import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A single property entry in the Properties message. */
export type GoogleCloudApigeeV1Property = {
  /** The property value */
  value?: string;
  /** The property key */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1PropertySchema: Schema<GoogleCloudApigeeV1Property> =
  s.object<GoogleCloudApigeeV1Property>(
    {
      value: s.optional(s.string()),
      name: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
