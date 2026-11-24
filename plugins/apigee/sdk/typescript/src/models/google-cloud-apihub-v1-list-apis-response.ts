import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { googleCloudApihubV1ApiSchema, type GoogleCloudApihubV1Api } from "./google-cloud-apihub-v1-api.js";

/** The ListApis method's response. */
export type GoogleCloudApihubV1ListApisResponse = {
  /**
   * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** The API resources present in the API hub. */
  apis?: GoogleCloudApihubV1Api[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ListApisResponseSchema: Schema<GoogleCloudApihubV1ListApisResponse> =
  s.object<GoogleCloudApihubV1ListApisResponse>(
    {
      nextPageToken: s.optional(s.string()),
      apis: s.optional(s.array(s.lazy(() => googleCloudApihubV1ApiSchema))),
    },
    { additionalProperties: s.json() },
  );
