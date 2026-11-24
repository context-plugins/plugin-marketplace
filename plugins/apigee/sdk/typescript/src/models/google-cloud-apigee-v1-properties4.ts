import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1PropertySchema,
  type GoogleCloudApigeeV1Property,
} from "./google-cloud-apigee-v1-property.js";

/** Optional. Properties defined in the Apigee organization profile. */
export type GoogleCloudApigeeV1Properties4 = {
  /** List of all properties in the object */
  property?: GoogleCloudApigeeV1Property[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1Properties4Schema: Schema<GoogleCloudApigeeV1Properties4> =
  s.object<GoogleCloudApigeeV1Properties4>(
    {
      property: s.optional(s.array(s.lazy(() => googleCloudApigeeV1PropertySchema))),
    },
    { additionalProperties: s.json() },
  );
