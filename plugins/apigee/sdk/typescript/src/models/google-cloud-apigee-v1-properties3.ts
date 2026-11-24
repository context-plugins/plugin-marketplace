import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1PropertySchema,
  type GoogleCloudApigeeV1Property,
} from "./google-cloud-apigee-v1-property.js";

/** Optional. Key-value pairs that may be used for customizing the environment. */
export type GoogleCloudApigeeV1Properties3 = {
  /** List of all properties in the object */
  property?: GoogleCloudApigeeV1Property[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1Properties3Schema: Schema<GoogleCloudApigeeV1Properties3> =
  s.object<GoogleCloudApigeeV1Properties3>(
    {
      property: s.optional(s.array(s.lazy(() => googleCloudApigeeV1PropertySchema))),
    },
    { additionalProperties: s.json() },
  );
