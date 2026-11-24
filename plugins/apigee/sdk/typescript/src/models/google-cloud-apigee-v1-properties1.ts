import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1PropertySchema,
  type GoogleCloudApigeeV1Property,
} from "./google-cloud-apigee-v1-property.js";

/** Name value pairs used for DebugInfo ActionResult. */
export type GoogleCloudApigeeV1Properties1 = {
  /** List of all properties in the object */
  property?: GoogleCloudApigeeV1Property[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1Properties1Schema: Schema<GoogleCloudApigeeV1Properties1> =
  s.object<GoogleCloudApigeeV1Properties1>(
    {
      property: s.optional(s.array(s.lazy(() => googleCloudApigeeV1PropertySchema))),
    },
    { additionalProperties: s.json() },
  );
