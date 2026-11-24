import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1SecurityIncident2Schema,
  type GoogleCloudApigeeV1SecurityIncident2,
} from "./google-cloud-apigee-v1-security-incident2.js";

/** Request for UpdateSecurityIncident. */
export type GoogleCloudApigeeV1UpdateSecurityIncidentRequest = {
  /**
   * Required. The security incident to update. Must contain all existing populated fields of the
   * current incident.
   */
  securityIncident?: GoogleCloudApigeeV1SecurityIncident2;
  /**
   * Required. The list of fields to update. Allowed fields are:
   * LINT.IfChange(allowed_update_fields_comment) - observability LINT.ThenChange()
   */
  updateMask?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1UpdateSecurityIncidentRequestSchema: Schema<GoogleCloudApigeeV1UpdateSecurityIncidentRequest> =
  s.object<GoogleCloudApigeeV1UpdateSecurityIncidentRequest>(
    {
      securityIncident: s.optional(s.lazy(() => googleCloudApigeeV1SecurityIncident2Schema)),
      updateMask: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
