import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional. Custom curation information for this plugin instance. */
export type GoogleCloudApihubV1CustomCuration1 = {
  /**
   * Required. The unique name of the curation resource. This will be the name of the curation
   * resource in the format: `projects/{project}/locations/{location}/curations/{curation}`
   */
  curation?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1CustomCuration1Schema: Schema<GoogleCloudApihubV1CustomCuration1> =
  s.object<GoogleCloudApihubV1CustomCuration1>(
    {
      curation: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
