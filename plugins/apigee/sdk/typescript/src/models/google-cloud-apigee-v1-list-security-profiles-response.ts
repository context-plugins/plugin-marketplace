import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1SecurityProfileSchema,
  type GoogleCloudApigeeV1SecurityProfile,
} from "./google-cloud-apigee-v1-security-profile.js";

/** Response for ListSecurityProfiles. */
export type GoogleCloudApigeeV1ListSecurityProfilesResponse = {
  /**
   * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /**
   * List of security profiles in the organization. The profiles may be attached or unattached to
   * any environment. This will return latest revision of each profile.
   */
  securityProfiles?: GoogleCloudApigeeV1SecurityProfile[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListSecurityProfilesResponseSchema: Schema<GoogleCloudApigeeV1ListSecurityProfilesResponse> =
  s.object<GoogleCloudApigeeV1ListSecurityProfilesResponse>(
    {
      nextPageToken: s.optional(s.string()),
      securityProfiles: s.optional(s.array(s.lazy(() => googleCloudApigeeV1SecurityProfileSchema))),
    },
    { additionalProperties: s.json() },
  );
