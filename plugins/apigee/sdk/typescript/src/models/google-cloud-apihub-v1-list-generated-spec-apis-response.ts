import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1GeneratedSpecApiSchema,
  type GoogleCloudApihubV1GeneratedSpecApi,
} from "./google-cloud-apihub-v1-generated-spec-api.js";

/** Response for ListGeneratedSpecApis. */
export type GoogleCloudApihubV1ListGeneratedSpecApisResponse = {
  /** The tracked APIs for the requested parent, ordered by `update_time desc`. */
  generatedSpecApis?: GoogleCloudApihubV1GeneratedSpecApi[];
  /** A token to retrieve the next page of results; empty when there are no more results. */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ListGeneratedSpecApisResponseSchema: Schema<GoogleCloudApihubV1ListGeneratedSpecApisResponse> =
  s.object<GoogleCloudApihubV1ListGeneratedSpecApisResponse>(
    {
      generatedSpecApis: s.optional(s.array(s.lazy(() => googleCloudApihubV1GeneratedSpecApiSchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
