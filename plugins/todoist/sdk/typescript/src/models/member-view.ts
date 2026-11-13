import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { workspaceRoleSchema, type WorkspaceRole } from "./workspace-role.js";

export type MemberView = {
  /** String ID of the workspace member. */
  userId: string;
  /** String ID of the workspace. */
  workspaceId: string;
  /** Email address of the workspace member. */
  userEmail: string;
  /** Full name of the workspace member. */
  fullName: string;
  /** Timezone of the workspace member. */
  timezone: string;
  /** Workspace role assigned to the member. */
  role: WorkspaceRole;
  /** Avatar image ID of the workspace member, or `null`. */
  imageId?: string | null;
  /** Whether the workspace member is deleted. @default false */
  isDeleted?: boolean;
  /**
   * Whether the workspace member is an agent, such as `@todoist`, rather than a person. Only
   * present when `true`.
   *
   * @default false
   */
  isAgent?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const memberViewSchema: Schema<MemberView> = s.object<MemberView>(
  {
    userId: s.string(),
    workspaceId: s.string(),
    userEmail: s.string(),
    fullName: s.string(),
    timezone: s.string(),
    role: workspaceRoleSchema,
    imageId: s.optionalNullable(s.string()),
    isDeleted: s.defaulted(s.boolean(), false),
    isAgent: s.defaulted(s.boolean(), false),
    _keysMap: {
      userId: "user_id",
      workspaceId: "workspace_id",
      userEmail: "user_email",
      fullName: "full_name",
      imageId: "image_id",
      isDeleted: "is_deleted",
      isAgent: "is_agent",
    },
  },
  { additionalProperties: s.json() },
);
