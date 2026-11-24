import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { curationTypeSchema, type CurationType } from "./curation-type.js";
import {
  googleCloudApihubV1CustomCuration1Schema,
  type GoogleCloudApihubV1CustomCuration1,
} from "./google-cloud-apihub-v1-custom-curation1.js";

/**
 * Optional. This configuration should be provided if the plugin action is publishing data to API
 * hub curate layer.
 */
export type GoogleCloudApihubV1CurationConfig2 = {
  /** Optional. Custom curation information for this plugin instance. */
  customCuration?: GoogleCloudApihubV1CustomCuration1;
  /** Required. The curation type for this plugin instance. */
  curationType?: CurationType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1CurationConfig2Schema: Schema<GoogleCloudApihubV1CurationConfig2> =
  s.object<GoogleCloudApihubV1CurationConfig2>(
    {
      customCuration: s.optional(s.lazy(() => googleCloudApihubV1CustomCuration1Schema)),
      curationType: s.optional(s.lazy(() => curationTypeSchema)),
    },
    { additionalProperties: s.json() },
  );
