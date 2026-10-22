import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Names of agent fields supported for filtering/sorting on list endpoint. */
export const IncidentProperties = {
  Id: "id",
  Description: "description",
  ImpactCategory: "impact_category",
  SessionsImpacted: "sessions_impacted",
  Markdown: "markdown",
  CreatedAt: "created_at",
  UpdatedAt: "updated_at",
  OrganizationId: "organization_id",
  SubOrganizationId: "sub_organization_id",
  StartDatetime: "start_datetime",
  EndDatetime: "end_datetime",
  ResolutionDatetime: "resolution_datetime",
} as const;
export type IncidentProperties = (typeof IncidentProperties)[keyof typeof IncidentProperties] | (string & {});

export const incidentPropertiesSchema: EnumSchema<IncidentProperties> =
  s.enumOf<IncidentProperties>(IncidentProperties);
