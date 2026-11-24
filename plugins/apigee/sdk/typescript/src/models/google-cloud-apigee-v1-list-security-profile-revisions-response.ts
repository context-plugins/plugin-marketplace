import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1SecurityProfileSchema,
  type GoogleCloudApigeeV1SecurityProfile,
} from "./google-cloud-apigee-v1-security-profile.js";

/** Response for ListSecurityProfileRevisions. */
export type GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse = {
  /**
   * List of security profile revisions. The revisions may be attached or unattached to any
   * environment.
   */
  securityProfiles?: GoogleCloudApigeeV1SecurityProfile[];
  /**
   * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListSecurityProfileRevisionsResponseSchema: Schema<GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse> =
  s.object<GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse>(
    {
      securityProfiles: s.optional(s.array(s.lazy(() => googleCloudApigeeV1SecurityProfileSchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
