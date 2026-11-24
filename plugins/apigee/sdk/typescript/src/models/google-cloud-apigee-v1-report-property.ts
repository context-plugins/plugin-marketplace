import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1AttributeSchema,
  type GoogleCloudApigeeV1Attribute,
} from "./google-cloud-apigee-v1-attribute.js";

export type GoogleCloudApigeeV1ReportProperty = {
  /** name of the property */
  property?: string;
  /** property values */
  value?: GoogleCloudApigeeV1Attribute[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ReportPropertySchema: Schema<GoogleCloudApigeeV1ReportProperty> =
  s.object<GoogleCloudApigeeV1ReportProperty>(
    {
      property: s.optional(s.string()),
      value: s.optional(s.array(s.lazy(() => googleCloudApigeeV1AttributeSchema))),
    },
    { additionalProperties: s.json() },
  );
