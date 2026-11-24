import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1SecurityIncidentSchema,
  type GoogleCloudApigeeV1SecurityIncident,
} from "./google-cloud-apigee-v1-security-incident.js";

/** Response for BatchUpdateSecurityIncident. */
export type GoogleCloudApigeeV1BatchUpdateSecurityIncidentsResponse = {
  /** Output only. Updated security incidents */
  securityIncidents?: GoogleCloudApigeeV1SecurityIncident[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1BatchUpdateSecurityIncidentsResponseSchema: Schema<GoogleCloudApigeeV1BatchUpdateSecurityIncidentsResponse> =
  s.object<GoogleCloudApigeeV1BatchUpdateSecurityIncidentsResponse>(
    {
      securityIncidents: s.optional(s.array(s.lazy(() => googleCloudApigeeV1SecurityIncidentSchema))),
    },
    { additionalProperties: s.json() },
  );
