import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { organizationIdSchema, type OrganizationId } from "./unions/organization-id.js";
import { subOrganizationIdSchema, type SubOrganizationId } from "./unions/sub-organization-id.js";
import { subOrganizationSchema, type SubOrganization } from "./unions/sub-organization.js";

/** Request model to create a service incident. */
export type IncidentCreateRequest = {
  /** Description of the service incident */
  description: string;
  /** Start time of the incident */
  startDatetime: Date;
  /** Resolution time of the incident */
  resolutionDatetime: Date;
  /** Category of the impact */
  impactCategory: string;
  /** Number of sessions impacted */
  sessionsImpacted: number;
  /** Detailed markdown description of the incident */
  markdown: string;
  /** The ID of the organization */
  organizationId?: OrganizationId;
  /** The ID of the sub-organization */
  subOrganizationId?: SubOrganizationId;
  /**
   * The name of the sub-organization (DEPRECATED)
   *
   * @deprecated
   */
  subOrganization?: SubOrganization;
};

export const incidentCreateRequestSchema: Schema<IncidentCreateRequest> = s.object<IncidentCreateRequest>({
  description: s.string(),
  startDatetime: s.dateTime(),
  resolutionDatetime: s.dateTime(),
  impactCategory: s.string(),
  sessionsImpacted: s.int(),
  markdown: s.string(),
  organizationId: s.optional(s.lazy(() => organizationIdSchema)),
  subOrganizationId: s.optional(s.lazy(() => subOrganizationIdSchema)),
  subOrganization: s.optional(s.lazy(() => subOrganizationSchema)),
  _keysMap: {
    startDatetime: "start_datetime",
    resolutionDatetime: "resolution_datetime",
    impactCategory: "impact_category",
    sessionsImpacted: "sessions_impacted",
    organizationId: "organization_id",
    subOrganizationId: "sub_organization_id",
    subOrganization: "sub_organization",
  },
});
