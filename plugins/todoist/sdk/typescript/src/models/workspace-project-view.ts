import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { collaboratorRoleSchema, type CollaboratorRole } from "./collaborator-role.js";
import { projectAccessViewSchema, type ProjectAccessView } from "./project-access-view.js";
import { ProjectStatus, projectStatusSchema } from "./project-status.js";
import { ProjectViewStyleV1, projectViewStyleV1Schema } from "./project-view-style-v1.js";

export type WorkspaceProjectView = {
  /** Numeric ID of the user requesting the workspace project. */
  initiatedByUid: number;
  /** String ID of the project. */
  projectId: string;
  /** Numeric ID of the workspace that contains the project. */
  workspaceId: number;
  /** Whether the project is publicly accessible. */
  publicAccess: boolean;
  /** Project access configuration. */
  access: ProjectAccessView | null;
  /** Numeric ID of the folder that contains the project, or `null`. */
  folderId?: number | null;
  /** Whether joining the workspace project requires an invitation. @default false */
  isInviteOnly?: boolean | null;
  /** Whether the workspace project is archived. @default false */
  isArchived?: boolean;
  /** Unix timestamp for when the project was archived, or 0 if active. @default 0 */
  archivedTimestamp?: number;
  /** Date and time when the project was archived, or `null` if active. */
  archivedDate?: Date | null;
  /** Whether the project is frozen and cannot be modified. @default false */
  isFrozen?: boolean;
  /** Project name. */
  name?: string;
  /** Numeric project color code. @default 47 */
  color?: number | null;
  /** Project icon name, or `null` for the default icon. */
  icon?: string | null;
  /** Project view style. @default ProjectViewStyleV1.List */
  viewStyle?: ProjectViewStyleV1;
  /** Project description. */
  description?: string;
  /** Project status. @default ProjectStatus.InProgress */
  status?: ProjectStatus;
  /** Default order of the project in workspace views. @default 0 */
  defaultOrder?: number;
  /**
   * Fractional-indexing key for the workspace's shared default-ordering scope (folders and
   * workspace projects together). `null` until assigned (backfill pending).
   */
  defaultOrderKey?: string | null;
  /** Whether project insights are enabled for the project. @default true */
  isProjectInsightsEnabled?: boolean;
  role?: CollaboratorRole | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspaceProjectViewSchema: Schema<WorkspaceProjectView> = s.object<WorkspaceProjectView>(
  {
    initiatedByUid: s.int(),
    projectId: s.string(),
    workspaceId: s.int(),
    publicAccess: s.boolean(),
    access: s.nullable(s.lazy(() => projectAccessViewSchema)),
    folderId: s.optionalNullable(s.int()),
    isInviteOnly: s.defaulted(s.nullable(s.boolean()), false),
    isArchived: s.defaulted(s.boolean(), false),
    archivedTimestamp: s.defaulted(s.int(), 0),
    archivedDate: s.optionalNullable(s.dateTime()),
    isFrozen: s.defaulted(s.boolean(), false),
    name: s.optional(s.string()),
    color: s.defaulted(s.nullable(s.int()), 47),
    icon: s.optionalNullable(s.string()),
    viewStyle: s.defaulted(projectViewStyleV1Schema, ProjectViewStyleV1.List),
    description: s.optional(s.string()),
    status: s.defaulted(projectStatusSchema, ProjectStatus.InProgress),
    defaultOrder: s.defaulted(s.int(), 0),
    defaultOrderKey: s.optionalNullable(s.string()),
    isProjectInsightsEnabled: s.defaulted(s.boolean(), true),
    role: s.optionalNullable(s.lazy(() => collaboratorRoleSchema)),
    _keysMap: {
      initiatedByUid: "initiated_by_uid",
      projectId: "project_id",
      workspaceId: "workspace_id",
      publicAccess: "public_access",
      folderId: "folder_id",
      isInviteOnly: "is_invite_only",
      isArchived: "is_archived",
      archivedTimestamp: "archived_timestamp",
      archivedDate: "archived_date",
      isFrozen: "is_frozen",
      viewStyle: "view_style",
      defaultOrder: "default_order",
      defaultOrderKey: "default_order_key",
      isProjectInsightsEnabled: "is_project_insights_enabled",
      role: "_role",
    },
  },
  { additionalProperties: s.json() },
);
