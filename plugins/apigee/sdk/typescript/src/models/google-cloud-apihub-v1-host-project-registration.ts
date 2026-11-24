import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Host project registration refers to the registration of a Google cloud project with Api Hub as a
 * host project. This is the project where Api Hub is provisioned. It acts as the consumer project
 * for the Api Hub instance provisioned. Multiple runtime projects can be attached to the host
 * project and these attachments define the scope of Api Hub.
 */
export type GoogleCloudApihubV1HostProjectRegistration = {
  /**
   * Identifier. The name of the host project registration. Format:
   * "projects/{project}/locations/{location}/hostProjectRegistrations/{host_project_registration}".
   */
  name?: string;
  /** Output only. The time at which the host project registration was created. */
  createTime?: string;
  /**
   * Required. Immutable. Google cloud project name in the format: "projects/abc" or "projects/123".
   * As input, project name with either project id or number are accepted. As output, this field
   * will contain project number.
   */
  gcpProject?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1HostProjectRegistrationSchema: Schema<GoogleCloudApihubV1HostProjectRegistration> =
  s.object<GoogleCloudApihubV1HostProjectRegistration>(
    {
      name: s.optional(s.string()),
      createTime: s.optional(s.string()),
      gcpProject: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
