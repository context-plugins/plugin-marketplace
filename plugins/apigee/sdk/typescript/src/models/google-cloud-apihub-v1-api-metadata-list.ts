import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1ApiMetadataSchema,
  type GoogleCloudApihubV1ApiMetadata,
} from "./google-cloud-apihub-v1-api-metadata.js";

/** The message to hold repeated API metadata. */
export type GoogleCloudApihubV1ApiMetadataList = {
  /** Required. The list of API metadata. */
  apiMetadata?: GoogleCloudApihubV1ApiMetadata[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ApiMetadataListSchema: Schema<GoogleCloudApihubV1ApiMetadataList> =
  s.object<GoogleCloudApihubV1ApiMetadataList>(
    {
      apiMetadata: s.optional(s.array(s.lazy(() => googleCloudApihubV1ApiMetadataSchema))),
    },
    { additionalProperties: s.json() },
  );
