import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1ExternalApiSchema,
  type GoogleCloudApihubV1ExternalApi,
} from "./google-cloud-apihub-v1-external-api.js";

/** The ListExternalApis method's response. */
export type GoogleCloudApihubV1ListExternalApisResponse = {
  /** The External API resources present in the API hub. */
  externalApis?: GoogleCloudApihubV1ExternalApi[];
  /**
   * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ListExternalApisResponseSchema: Schema<GoogleCloudApihubV1ListExternalApisResponse> =
  s.object<GoogleCloudApihubV1ListExternalApisResponse>(
    {
      externalApis: s.optional(s.array(s.lazy(() => googleCloudApihubV1ExternalApiSchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
