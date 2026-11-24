import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1CurationSchema,
  type GoogleCloudApihubV1Curation,
} from "./google-cloud-apihub-v1-curation.js";

/** The ListCurations method's response. */
export type GoogleCloudApihubV1ListCurationsResponse = {
  /** The curation resources present in the API hub. */
  curations?: GoogleCloudApihubV1Curation[];
  /**
   * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ListCurationsResponseSchema: Schema<GoogleCloudApihubV1ListCurationsResponse> =
  s.object<GoogleCloudApihubV1ListCurationsResponse>(
    {
      curations: s.optional(s.array(s.lazy(() => googleCloudApihubV1CurationSchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
