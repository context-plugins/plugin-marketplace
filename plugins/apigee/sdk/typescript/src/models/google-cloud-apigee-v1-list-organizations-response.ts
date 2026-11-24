import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1OrganizationProjectMappingSchema,
  type GoogleCloudApigeeV1OrganizationProjectMapping,
} from "./google-cloud-apigee-v1-organization-project-mapping.js";

export type GoogleCloudApigeeV1ListOrganizationsResponse = {
  /** List of Apigee organizations and associated Google Cloud projects. */
  organizations?: GoogleCloudApigeeV1OrganizationProjectMapping[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListOrganizationsResponseSchema: Schema<GoogleCloudApigeeV1ListOrganizationsResponse> =
  s.object<GoogleCloudApigeeV1ListOrganizationsResponse>(
    {
      organizations: s.optional(s.array(s.lazy(() => googleCloudApigeeV1OrganizationProjectMappingSchema))),
    },
    { additionalProperties: s.json() },
  );
