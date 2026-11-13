import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { acquisitionSourceSchema, type AcquisitionSource } from "./acquisition-source.js";
import { createdPlatformSchema, type CreatedPlatform } from "./created-platform.js";
import { creatorRoleSchema, type CreatorRole } from "./creator-role.js";
import { DefaultAccessLevel, defaultAccessLevelSchema } from "./default-access-level.js";
import { departmentSchema, type Department } from "./department.js";
import { desktopWorkspaceModalSchema, type DesktopWorkspaceModal } from "./desktop-workspace-modal.js";
import { hdyhauSchema, type Hdyhau } from "./hdyhau.js";
import { importedFromSchema, type ImportedFrom } from "./imported-from.js";
import { industrySchema, type Industry } from "./industry.js";
import { intendedTeamSizeSchema, type IntendedTeamSize } from "./intended-team-size.js";
import { organizationSizeSchema, type OrganizationSize } from "./organization-size.js";
import { teamAcquisitionCohortSchema, type TeamAcquisitionCohort } from "./team-acquisition-cohort.js";
import { typeOfWorkSchema, type TypeOfWork } from "./type-of-work.js";

export type WorkspaceProperties = {
  /** Industry selected for the workspace. */
  industry?: Industry | null;
  /** Department selected for the workspace. */
  department?: Department | null;
  /** Organization size selected for the workspace. */
  organizationSize?: OrganizationSize | null;
  /** Number of collaborators the creator intends to work with, selected during onboarding. */
  intendedTeamSize?: IntendedTeamSize | null;
  /** Type of work the team primarily does, selected during onboarding. */
  typeOfWork?: TypeOfWork | null;
  /** Role selected by the workspace creator. */
  creatorRole?: CreatorRole | null;
  /** 2-letter continent code, possible values are `AF`, `AS`, `EU`, `NA`, `SA`, `OC`, and `AN`. */
  region?: string | null;
  /** 2-letter ISO 3166-1 alpha-2 country code. */
  country?: string | null;
  /** Default access level for new workspace projects. @default DefaultAccessLevel.Team */
  defaultAccessLevel?: DefaultAccessLevel | null;
  /** Desktop workspace modal variant shown to the user. */
  desktopWorkspaceModal?: DesktopWorkspaceModal | null;
  /** Whether beta features are enabled for the workspace. @default false */
  betaEnabled?: boolean;
  /** Workspace acquisition source. */
  acquisitionSource?: AcquisitionSource | null;
  /** Team acquisition cohort assigned to the workspace. */
  teamAcquisitionCohort?: TeamAcquisitionCohort | null;
  /** Date when the acquisition loop was last shown in YYYY-MM-DD format. */
  acquisitionLoopLastShow?: string | null;
  /** How did you hear about us marketing attribution field. */
  hdyhau?: Hdyhau | null;
  /** ID of the workspace assigned filter created during onboarding. */
  onboardingFilterId?: number | null;
  /** Platform used to create this workspace. */
  createdPlatform?: CreatedPlatform | null;
  /** Product that created this workspace through a trusted import flow. */
  importedFrom?: ImportedFrom | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspacePropertiesSchema: Schema<WorkspaceProperties> = s.object<WorkspaceProperties>(
  {
    industry: s.optionalNullable(s.lazy(() => industrySchema)),
    department: s.optionalNullable(s.lazy(() => departmentSchema)),
    organizationSize: s.optionalNullable(s.lazy(() => organizationSizeSchema)),
    intendedTeamSize: s.optionalNullable(s.lazy(() => intendedTeamSizeSchema)),
    typeOfWork: s.optionalNullable(s.lazy(() => typeOfWorkSchema)),
    creatorRole: s.optionalNullable(s.lazy(() => creatorRoleSchema)),
    region: s.optionalNullable(s.string()),
    country: s.optionalNullable(s.string()),
    defaultAccessLevel: s.defaulted(
      s.nullable(s.lazy(() => defaultAccessLevelSchema)),
      DefaultAccessLevel.Team,
    ),
    desktopWorkspaceModal: s.optionalNullable(s.lazy(() => desktopWorkspaceModalSchema)),
    betaEnabled: s.defaulted(s.boolean(), false),
    acquisitionSource: s.optionalNullable(s.lazy(() => acquisitionSourceSchema)),
    teamAcquisitionCohort: s.optionalNullable(s.lazy(() => teamAcquisitionCohortSchema)),
    acquisitionLoopLastShow: s.optionalNullable(s.string()),
    hdyhau: s.optionalNullable(s.lazy(() => hdyhauSchema)),
    onboardingFilterId: s.optionalNullable(s.int()),
    createdPlatform: s.optionalNullable(s.lazy(() => createdPlatformSchema)),
    importedFrom: s.optionalNullable(s.lazy(() => importedFromSchema)),
    _keysMap: {
      organizationSize: "organization_size",
      intendedTeamSize: "intended_team_size",
      typeOfWork: "type_of_work",
      creatorRole: "creator_role",
      defaultAccessLevel: "default_access_level",
      desktopWorkspaceModal: "desktop_workspace_modal",
      betaEnabled: "beta_enabled",
      acquisitionSource: "acquisition_source",
      teamAcquisitionCohort: "team_acquisition_cohort",
      acquisitionLoopLastShow: "acquisition_loop_last_show",
      onboardingFilterId: "onboarding_filter_id",
      createdPlatform: "created_platform",
      importedFrom: "imported_from",
    },
  },
  { additionalProperties: s.json() },
);
