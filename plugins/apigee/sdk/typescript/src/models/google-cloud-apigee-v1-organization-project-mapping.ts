import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GoogleCloudApigeeV1OrganizationProjectMapping = {
  /** Google Cloud project associated with the Apigee organization */
  projectId?: string;
  /**
   * DEPRECATED: Use `project_id`. An Apigee Organization is mapped to a single project.
   *
   * @deprecated
   */
  projectIds?: string[];
  /** Name of the Apigee organization. */
  organization?: string;
  /**
   * Output only. The Google Cloud region where control plane data is located. For more information,
   * see https://cloud.google.com/about/locations/.
   */
  location?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1OrganizationProjectMappingSchema: Schema<GoogleCloudApigeeV1OrganizationProjectMapping> =
  s.object<GoogleCloudApigeeV1OrganizationProjectMapping>(
    {
      projectId: s.optional(s.string()),
      projectIds: s.optional(s.array(s.string())),
      organization: s.optional(s.string()),
      location: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
