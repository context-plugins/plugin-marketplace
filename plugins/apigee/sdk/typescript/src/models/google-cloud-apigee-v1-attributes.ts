import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1AttributeSchema,
  type GoogleCloudApigeeV1Attribute,
} from "./google-cloud-apigee-v1-attribute.js";

export type GoogleCloudApigeeV1Attributes = {
  /** List of attributes. */
  attribute?: GoogleCloudApigeeV1Attribute[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1AttributesSchema: Schema<GoogleCloudApigeeV1Attributes> =
  s.object<GoogleCloudApigeeV1Attributes>(
    {
      attribute: s.optional(s.array(s.lazy(() => googleCloudApigeeV1AttributeSchema))),
    },
    { additionalProperties: s.json() },
  );
