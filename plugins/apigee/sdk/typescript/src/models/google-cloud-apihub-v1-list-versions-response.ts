import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1VersionSchema,
  type GoogleCloudApihubV1Version,
} from "./google-cloud-apihub-v1-version.js";

/** The ListVersions method's response. */
export type GoogleCloudApihubV1ListVersionsResponse = {
  /**
   * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** The versions corresponding to an API. */
  versions?: GoogleCloudApihubV1Version[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ListVersionsResponseSchema: Schema<GoogleCloudApihubV1ListVersionsResponse> =
  s.object<GoogleCloudApihubV1ListVersionsResponse>(
    {
      nextPageToken: s.optional(s.string()),
      versions: s.optional(s.array(s.lazy(() => googleCloudApihubV1VersionSchema))),
    },
    { additionalProperties: s.json() },
  );
