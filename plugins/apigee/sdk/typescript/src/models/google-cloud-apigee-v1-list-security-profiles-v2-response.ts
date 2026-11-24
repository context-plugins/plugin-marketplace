import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1SecurityProfileV2Schema,
  type GoogleCloudApigeeV1SecurityProfileV2,
} from "./google-cloud-apigee-v1-security-profile-v2.js";

/** Response for ListSecurityProfilesV2. */
export type GoogleCloudApigeeV1ListSecurityProfilesV2Response = {
  /**
   * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** List of security profiles in the organization. */
  securityProfilesV2?: GoogleCloudApigeeV1SecurityProfileV2[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListSecurityProfilesV2ResponseSchema: Schema<GoogleCloudApigeeV1ListSecurityProfilesV2Response> =
  s.object<GoogleCloudApigeeV1ListSecurityProfilesV2Response>(
    {
      nextPageToken: s.optional(s.string()),
      securityProfilesV2: s.optional(s.array(s.lazy(() => googleCloudApigeeV1SecurityProfileV2Schema))),
    },
    { additionalProperties: s.json() },
  );
