import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1ApiMetadataSchema,
  type GoogleCloudApihubV1ApiMetadata,
} from "./google-cloud-apihub-v1-api-metadata.js";

/** Optional. The list of API metadata. */
export type GoogleCloudApihubV1ApiMetadataList2 = {
  /** Required. The list of API metadata. */
  apiMetadata?: GoogleCloudApihubV1ApiMetadata[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ApiMetadataList2Schema: Schema<GoogleCloudApihubV1ApiMetadataList2> =
  s.object<GoogleCloudApihubV1ApiMetadataList2>(
    {
      apiMetadata: s.optional(s.array(s.lazy(() => googleCloudApihubV1ApiMetadataSchema))),
    },
    { additionalProperties: s.json() },
  );
