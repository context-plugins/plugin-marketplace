import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { projectAccessViewSchema, type ProjectAccessView } from "./project-access-view.js";
import { projectStatusSchema, type ProjectStatus } from "./project-status.js";

/**
 * A representation of a Workspace Project Sync View, extending the base ProjectSync View, to be
 * returned to clients in a sync (or sync-like) response.
 */
export type WorkspaceProjectSyncView = {
  /** String ID of the project. */
  id: string;
  /** Whether the current user can assign tasks in the project. */
  canAssignTasks: boolean;
  /** Whether the current user can comment in the project. */
  canComment: boolean;
  /** Position of the project among sibling projects. */
  childOrder: number;
  /**
   * Fractional-indexing order key among sibling projects, or `null` until assigned (backfill in
   * progress). Always `null` for workspace projects, which are ordered via folders instead.
   */
  orderKey: string | null;
  /** Whether the project is collapsed in the user's view. */
  isCollapsed: boolean;
  /** Project color name. */
  color: string;
  /**
   * Project icon name, or `null` for the default icon. More icons will be added over time, so
   * clients should fall back to the default icon for names they don't recognize.
   */
  icon?: string | null;
  /** String ID of the user who created the project. */
  creatorUid: string | null;
  /** Date and time when the project was created, or `null` if unknown. */
  createdAt: Date | null;
  /** Whether the project is archived. */
  isArchived: boolean;
  /** Whether the project is deleted. */
  isDeleted: boolean;
  /** Whether the project is marked as a favorite. */
  isFavorite: boolean;
  /** Whether the project is frozen and cannot be modified. */
  isFrozen: boolean;
  /** Project name. */
  name: string;
  /** Whether the project is shared with other users. */
  isShared: boolean;
  /** Date and time when the project was last updated, or `null` if unknown. */
  updatedAt: Date | null;
  /** Project view style. */
  viewStyle: string;
  /** Default order of the project in team views. */
  defaultOrder: number;
  /**
   * Fractional-indexing key for the workspace's shared default-ordering scope (folders and
   * workspace projects together). `null` for personal projects, and for workspace projects not yet
   * assigned one (backfill pending).
   */
  defaultOrderKey: string | null;
  /** Project description. */
  description: string;
  /** Public access key for the project, or an empty string when public access is disabled. */
  publicKey: string;
  /** Project access configuration. */
  access: ProjectAccessView | null;
  /** Current user's role in the project. */
  role: string | null;
  /** Default collaborator role for the workspace project. */
  collaboratorRoleDefault: string;
  /** String ID of the folder that contains the project, or `null`. */
  folderId: string | null;
  /** Whether joining the workspace project requires an invitation. */
  isInviteOnly: boolean | null;
  /** Whether invitation links are enabled for the project. */
  isLinkSharingEnabled: boolean;
  /** Project status. */
  status: ProjectStatus;
  /** String ID of the workspace that contains the project. */
  workspaceId: string;
  /** Whether default collaborator invitations are still being created in the background. */
  isPendingDefaultCollaboratorInvites: boolean;
  /** Whether project insights are enabled for the project. */
  isProjectInsightsEnabled: boolean;
  /** Always null for workspace projects. */
  parentId?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspaceProjectSyncViewSchema: Schema<WorkspaceProjectSyncView> =
  s.object<WorkspaceProjectSyncView>(
    {
      id: s.string(),
      canAssignTasks: s.boolean(),
      canComment: s.boolean(),
      childOrder: s.int(),
      orderKey: s.nullable(s.string()),
      isCollapsed: s.boolean(),
      color: s.string(),
      icon: s.optionalNullable(s.string()),
      creatorUid: s.nullable(s.string()),
      createdAt: s.nullable(s.dateTime()),
      isArchived: s.boolean(),
      isDeleted: s.boolean(),
      isFavorite: s.boolean(),
      isFrozen: s.boolean(),
      name: s.string(),
      isShared: s.boolean(),
      updatedAt: s.nullable(s.dateTime()),
      viewStyle: s.string(),
      defaultOrder: s.int(),
      defaultOrderKey: s.nullable(s.string()),
      description: s.string(),
      publicKey: s.string(),
      access: s.nullable(s.lazy(() => projectAccessViewSchema)),
      role: s.nullable(s.string()),
      collaboratorRoleDefault: s.string(),
      folderId: s.nullable(s.string()),
      isInviteOnly: s.nullable(s.boolean()),
      isLinkSharingEnabled: s.boolean(),
      status: projectStatusSchema,
      workspaceId: s.string(),
      isPendingDefaultCollaboratorInvites: s.boolean(),
      isProjectInsightsEnabled: s.boolean(),
      parentId: s.optionalNullable(s.string()),
      _keysMap: {
        canAssignTasks: "can_assign_tasks",
        canComment: "can_comment",
        childOrder: "child_order",
        orderKey: "order_key",
        isCollapsed: "is_collapsed",
        creatorUid: "creator_uid",
        createdAt: "created_at",
        isArchived: "is_archived",
        isDeleted: "is_deleted",
        isFavorite: "is_favorite",
        isFrozen: "is_frozen",
        isShared: "is_shared",
        updatedAt: "updated_at",
        viewStyle: "view_style",
        defaultOrder: "default_order",
        defaultOrderKey: "default_order_key",
        publicKey: "public_key",
        collaboratorRoleDefault: "collaborator_role_default",
        folderId: "folder_id",
        isInviteOnly: "is_invite_only",
        isLinkSharingEnabled: "is_link_sharing_enabled",
        workspaceId: "workspace_id",
        isPendingDefaultCollaboratorInvites: "is_pending_default_collaborator_invites",
        isProjectInsightsEnabled: "is_project_insights_enabled",
        parentId: "parent_id",
      },
    },
    { additionalProperties: s.json() },
  );
