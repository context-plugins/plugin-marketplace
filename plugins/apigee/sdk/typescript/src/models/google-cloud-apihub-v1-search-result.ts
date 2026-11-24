import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1ApiHubResource2Schema,
  type GoogleCloudApihubV1ApiHubResource2,
} from "./google-cloud-apihub-v1-api-hub-resource2.js";

/** Represents the search results. */
export type GoogleCloudApihubV1SearchResult = {
  /**
   * This represents the ApiHubResource. Note: Only selected fields of the resources are populated
   * in response.
   */
  resource?: GoogleCloudApihubV1ApiHubResource2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1SearchResultSchema: Schema<GoogleCloudApihubV1SearchResult> =
  s.object<GoogleCloudApihubV1SearchResult>(
    {
      resource: s.optional(s.lazy(() => googleCloudApihubV1ApiHubResource2Schema)),
    },
    { additionalProperties: s.json() },
  );
