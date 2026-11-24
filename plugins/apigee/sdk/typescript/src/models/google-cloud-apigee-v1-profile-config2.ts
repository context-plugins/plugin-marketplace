import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1ProfileConfigCategorySchema,
  type GoogleCloudApigeeV1ProfileConfigCategory,
} from "./google-cloud-apigee-v1-profile-config-category.js";

/** Required. Customized profile configuration that computes the security score. */
export type GoogleCloudApigeeV1ProfileConfig2 = {
  /** List of categories of profile config. */
  categories?: GoogleCloudApigeeV1ProfileConfigCategory[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ProfileConfig2Schema: Schema<GoogleCloudApigeeV1ProfileConfig2> =
  s.object<GoogleCloudApigeeV1ProfileConfig2>(
    {
      categories: s.optional(s.array(s.lazy(() => googleCloudApigeeV1ProfileConfigCategorySchema))),
    },
    { additionalProperties: s.json() },
  );
