import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1ProfileConfigCategorySchema,
  type GoogleCloudApigeeV1ProfileConfigCategory,
} from "./google-cloud-apigee-v1-profile-config-category.js";

/**
 * ProfileConfig defines a set of categories and policies which will be used to compute security
 * score.
 */
export type GoogleCloudApigeeV1ProfileConfig = {
  /** List of categories of profile config. */
  categories?: GoogleCloudApigeeV1ProfileConfigCategory[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ProfileConfigSchema: Schema<GoogleCloudApigeeV1ProfileConfig> =
  s.object<GoogleCloudApigeeV1ProfileConfig>(
    {
      categories: s.optional(s.array(s.lazy(() => googleCloudApigeeV1ProfileConfigCategorySchema))),
    },
    { additionalProperties: s.json() },
  );
