import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1AppGroupSchema,
  type GoogleCloudApigeeV1AppGroup,
} from "./google-cloud-apigee-v1-app-group.js";

/**
 * ListAppGroupsResponse contains the 0 or more AppGroups, along with the optional page token and
 * the total count of apps.
 */
export type GoogleCloudApigeeV1ListAppGroupsResponse = {
  /** Total count of AppGroups. */
  totalSize?: number;
  /**
   * Token that can be sent as `next_page_token` to retrieve the next page. If this field is
   * omitted, there are no subsequent pages.
   */
  nextPageToken?: string;
  /** List of AppGroups. */
  appGroups?: GoogleCloudApigeeV1AppGroup[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListAppGroupsResponseSchema: Schema<GoogleCloudApigeeV1ListAppGroupsResponse> =
  s.object<GoogleCloudApigeeV1ListAppGroupsResponse>(
    {
      totalSize: s.optional(s.int()),
      nextPageToken: s.optional(s.string()),
      appGroups: s.optional(s.array(s.lazy(() => googleCloudApigeeV1AppGroupSchema))),
    },
    { additionalProperties: s.json() },
  );
