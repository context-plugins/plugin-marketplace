import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1ApiMetadataList2Schema,
  type GoogleCloudApihubV1ApiMetadataList2,
} from "./google-cloud-apihub-v1-api-metadata-list2.js";

/** The API data to be collected. */
export type GoogleCloudApihubV1ApiData = {
  /** Optional. The list of API metadata. */
  apiMetadataList?: GoogleCloudApihubV1ApiMetadataList2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ApiDataSchema: Schema<GoogleCloudApihubV1ApiData> =
  s.object<GoogleCloudApihubV1ApiData>(
    {
      apiMetadataList: s.optional(s.lazy(() => googleCloudApihubV1ApiMetadataList2Schema)),
    },
    { additionalProperties: s.json() },
  );
