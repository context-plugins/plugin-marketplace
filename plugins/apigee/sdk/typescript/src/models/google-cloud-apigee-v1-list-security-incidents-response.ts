import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1SecurityIncidentSchema,
  type GoogleCloudApigeeV1SecurityIncident,
} from "./google-cloud-apigee-v1-security-incident.js";

/** Response for ListSecurityIncidents. */
export type GoogleCloudApigeeV1ListSecurityIncidentsResponse = {
  /**
   * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** List of security incidents in the organization */
  securityIncidents?: GoogleCloudApigeeV1SecurityIncident[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListSecurityIncidentsResponseSchema: Schema<GoogleCloudApigeeV1ListSecurityIncidentsResponse> =
  s.object<GoogleCloudApigeeV1ListSecurityIncidentsResponse>(
    {
      nextPageToken: s.optional(s.string()),
      securityIncidents: s.optional(s.array(s.lazy(() => googleCloudApigeeV1SecurityIncidentSchema))),
    },
    { additionalProperties: s.json() },
  );
