import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1HostProjectRegistrationSchema,
  type GoogleCloudApihubV1HostProjectRegistration,
} from "./google-cloud-apihub-v1-host-project-registration.js";

/** The ListHostProjectRegistrations method's response. */
export type GoogleCloudApihubV1ListHostProjectRegistrationsResponse = {
  /** The list of host project registrations. */
  hostProjectRegistrations?: GoogleCloudApihubV1HostProjectRegistration[];
  /**
   * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ListHostProjectRegistrationsResponseSchema: Schema<GoogleCloudApihubV1ListHostProjectRegistrationsResponse> =
  s.object<GoogleCloudApihubV1ListHostProjectRegistrationsResponse>(
    {
      hostProjectRegistrations: s.optional(
        s.array(s.lazy(() => googleCloudApihubV1HostProjectRegistrationSchema)),
      ),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
