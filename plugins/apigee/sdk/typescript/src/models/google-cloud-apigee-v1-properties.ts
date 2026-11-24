import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1PropertySchema,
  type GoogleCloudApigeeV1Property,
} from "./google-cloud-apigee-v1-property.js";

/** Message for compatibility with legacy Edge specification for Java Properties object in JSON. */
export type GoogleCloudApigeeV1Properties = {
  /** List of all properties in the object */
  property?: GoogleCloudApigeeV1Property[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1PropertiesSchema: Schema<GoogleCloudApigeeV1Properties> =
  s.object<GoogleCloudApigeeV1Properties>(
    {
      property: s.optional(s.array(s.lazy(() => googleCloudApigeeV1PropertySchema))),
    },
    { additionalProperties: s.json() },
  );
