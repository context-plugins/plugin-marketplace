import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1SpaceSchema,
  type GoogleCloudApigeeV1Space,
} from "./google-cloud-apigee-v1-space.js";

/**
 * A response to a ListSpaces request containing the list of organization spaces and a page token
 * for the next page.
 */
export type GoogleCloudApigeeV1ListSpacesResponse = {
  /**
   * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** List of Apigee organization spaces. */
  spaces?: GoogleCloudApigeeV1Space[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListSpacesResponseSchema: Schema<GoogleCloudApigeeV1ListSpacesResponse> =
  s.object<GoogleCloudApigeeV1ListSpacesResponse>(
    {
      nextPageToken: s.optional(s.string()),
      spaces: s.optional(s.array(s.lazy(() => googleCloudApigeeV1SpaceSchema))),
    },
    { additionalProperties: s.json() },
  );
