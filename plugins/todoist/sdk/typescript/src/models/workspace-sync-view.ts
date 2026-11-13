import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  defaultCollaboratorsSyncViewSchema,
  type DefaultCollaboratorsSyncView,
} from "./default-collaborators-sync-view.js";
import { planTypeSchema, type PlanType } from "./plan-type.js";
import { projectSortPreferenceSchema, type ProjectSortPreference } from "./project-sort-preference.js";
import { workspaceLimitsSyncViewSchema, type WorkspaceLimitsSyncView } from "./workspace-limits-sync-view.js";
import { workspaceRoleSchema, type WorkspaceRole } from "./workspace-role.js";

/**
 * A class with fields representing a WorkspaceView which will be returned to clients in a sync (or
 * sync-like) response.
 *
 * Always construct instances through `from_view()`: `__json__` serializes with `exclude_unset=True`
 * so that fields `from_view()` deliberately leaves unset (member-only fields for non-members,
 * `logo_*` fields for workspaces without a logo) are omitted from the response, exactly like the
 * historical `WorkspaceView.__json__` output.
 */
export type WorkspaceSyncView = {
  /** String ID of the workspace. */
  id: string;
  /** Workspace name. */
  name: string;
  /** Workspace description. */
  description: string;
  /** String ID of the user who created the workspace. */
  creatorId: string;
  /** Date and time when the workspace was created. */
  createdAt: Date | null;
  /** Whether the workspace is deleted. */
  isDeleted: boolean;
  /** Whether the workspace is collapsed in the user's sidebar. */
  isCollapsed: boolean;
  /** Role of the current user in the workspace, or `null` if they are not part of it. */
  role: WorkspaceRole | null;
  /** The plan the workspace is currently on. */
  plan: PlanType;
  /** Emails with a pending invitation to the workspace. Only populated for workspace members. */
  pendingInvitations: string[];
  /** Whether joining the workspace via a link is enabled. `null` for non-members. */
  isLinkSharingEnabled: boolean | null;
  /** Whether guests are allowed in the workspace. */
  isGuestAllowed: boolean;
  /** Whether the workspace is waiting for trial confirmation. */
  isTrialPending: boolean;
  /** Opaque code to invite users to the workspace, or `null`. */
  inviteCode: string | null;
  /** Current and next plan limits for the workspace. */
  limits: WorkspaceLimitsSyncView;
  /** Number of members in the workspace. `null` for non-members. */
  currentMemberCount: number | null;
  /** Number of active projects in the workspace. `null` for non-members. */
  currentActiveProjects: number | null;
  /** Email domain associated with the workspace, or `null`. */
  domainName: string | null;
  /** Whether users with a matching email domain can discover the workspace. */
  domainDiscovery: boolean;
  /** Whether membership is restricted to allowed email domains. */
  restrictEmailDomains: boolean;
  /** Whether an admin has applied custom project sorting. */
  adminSortingApplied: boolean;
  /** Whether the current user has sorted their workspace sidebar before. */
  userSortingApplied: boolean;
  /** The current user's project sort preference. */
  projectSortPreference: ProjectSortPreference;
  /** Default collaborators for new workspace projects. */
  defaultCollaborators: DefaultCollaboratorsSyncView;
  /** Additional workspace properties. */
  properties: Record<string, unknown>;
  /** URL of the workspace logo (640px). */
  logoS640?: string | null;
  /** URL of the workspace logo (195px). */
  logoBig?: string | null;
  /** URL of the workspace logo (60px). */
  logoMedium?: string | null;
  /** URL of the workspace logo (35px). */
  logoSmall?: string | null;
  /** Number of active templates in the workspace. Only returned for workspace members. */
  currentTemplateCount?: number | null;
  /** Number of pending invitations by workspace role. Only returned for workspace members. */
  pendingInvitesByType?: Record<string, number> | null;
  /** Number of members by workspace role. Only returned for workspace members. */
  memberCountByType?: Record<string, number> | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspaceSyncViewSchema: Schema<WorkspaceSyncView> = s.object<WorkspaceSyncView>(
  {
    id: s.string(),
    name: s.string(),
    description: s.string(),
    creatorId: s.string(),
    createdAt: s.nullable(s.dateTime()),
    isDeleted: s.boolean(),
    isCollapsed: s.boolean(),
    role: s.nullable(s.lazy(() => workspaceRoleSchema)),
    plan: planTypeSchema,
    pendingInvitations: s.array(s.string()),
    isLinkSharingEnabled: s.nullable(s.boolean()),
    isGuestAllowed: s.boolean(),
    isTrialPending: s.boolean(),
    inviteCode: s.nullable(s.string()),
    limits: workspaceLimitsSyncViewSchema,
    currentMemberCount: s.nullable(s.int()),
    currentActiveProjects: s.nullable(s.int()),
    domainName: s.nullable(s.string()),
    domainDiscovery: s.boolean(),
    restrictEmailDomains: s.boolean(),
    adminSortingApplied: s.boolean(),
    userSortingApplied: s.boolean(),
    projectSortPreference: projectSortPreferenceSchema,
    defaultCollaborators: defaultCollaboratorsSyncViewSchema,
    properties: s.record(s.string(), s.unknown()),
    logoS640: s.optionalNullable(s.string()),
    logoBig: s.optionalNullable(s.string()),
    logoMedium: s.optionalNullable(s.string()),
    logoSmall: s.optionalNullable(s.string()),
    currentTemplateCount: s.optionalNullable(s.int()),
    pendingInvitesByType: s.optionalNullable(s.record(s.string(), s.int())),
    memberCountByType: s.optionalNullable(s.record(s.string(), s.int())),
    _keysMap: {
      creatorId: "creator_id",
      createdAt: "created_at",
      isDeleted: "is_deleted",
      isCollapsed: "is_collapsed",
      pendingInvitations: "pending_invitations",
      isLinkSharingEnabled: "is_link_sharing_enabled",
      isGuestAllowed: "is_guest_allowed",
      isTrialPending: "is_trial_pending",
      inviteCode: "invite_code",
      currentMemberCount: "current_member_count",
      currentActiveProjects: "current_active_projects",
      domainName: "domain_name",
      domainDiscovery: "domain_discovery",
      restrictEmailDomains: "restrict_email_domains",
      adminSortingApplied: "admin_sorting_applied",
      userSortingApplied: "user_sorting_applied",
      projectSortPreference: "project_sort_preference",
      defaultCollaborators: "default_collaborators",
      logoS640: "logo_s640",
      logoBig: "logo_big",
      logoMedium: "logo_medium",
      logoSmall: "logo_small",
      currentTemplateCount: "current_template_count",
      pendingInvitesByType: "pending_invites_by_type",
      memberCountByType: "member_count_by_type",
    },
  },
  { additionalProperties: s.json() },
);
