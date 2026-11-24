import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1UpdateSecurityIncidentRequestSchema,
  type GoogleCloudApigeeV1UpdateSecurityIncidentRequest,
} from "./google-cloud-apigee-v1-update-security-incident-request.js";

/** Request for BatchUpdateSecurityIncident. */
export type GoogleCloudApigeeV1BatchUpdateSecurityIncidentsRequest = {
  /**
   * Optional. Required. The request message specifying the resources to update. A maximum of 1000
   * can be modified in a batch.
   */
  requests?: GoogleCloudApigeeV1UpdateSecurityIncidentRequest[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1BatchUpdateSecurityIncidentsRequestSchema: Schema<GoogleCloudApigeeV1BatchUpdateSecurityIncidentsRequest> =
  s.object<GoogleCloudApigeeV1BatchUpdateSecurityIncidentsRequest>(
    {
      requests: s.optional(s.array(s.lazy(() => googleCloudApigeeV1UpdateSecurityIncidentRequestSchema))),
    },
    { additionalProperties: s.json() },
  );
