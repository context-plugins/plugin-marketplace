import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { userCompactSchema, type UserCompact } from "./user-compact.js";
import { userTaskListResponse2Schema, type UserTaskListResponse2 } from "./user-task-list-response2.js";
import { vacationDatesSchema, type VacationDates } from "./vacation-dates.js";
import { workspaceCompactSchema, type WorkspaceCompact } from "./workspace-compact.js";

export type WorkspaceMembershipResponse = {
  /** Globally unique identifier of the resource, as a string. */
  gid?: string;
  /** The base type of this resource. */
  resourceType?: string;
  user?: UserCompact;
  workspace?: WorkspaceCompact;
  /** The user's "My Tasks" in the workspace. */
  userTaskList?: UserTaskListResponse2;
  /** Reflects if this user still a member of the workspace. */
  isActive?: boolean;
  /** Reflects if this user is an admin of the workspace. */
  isAdmin?: boolean;
  /** Reflects if this user is a guest of the workspace. */
  isGuest?: boolean;
  /**
   * Contains keys `start_on` and `end_on` for the vacation dates for the user in this workspace. If
   * `start_on` is null, the entire `vacation_dates` object will be null. If `end_on` is before
   * today, the entire `vacation_dates` object will be null.
   */
  vacationDates?: VacationDates | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspaceMembershipResponseSchema: Schema<WorkspaceMembershipResponse> =
  s.object<WorkspaceMembershipResponse>(
    {
      gid: s.optional(s.string()),
      resourceType: s.optional(s.string()),
      user: s.optional(s.lazy(() => userCompactSchema)),
      workspace: s.optional(s.lazy(() => workspaceCompactSchema)),
      userTaskList: s.optional(s.lazy(() => userTaskListResponse2Schema)),
      isActive: s.optional(s.boolean()),
      isAdmin: s.optional(s.boolean()),
      isGuest: s.optional(s.boolean()),
      vacationDates: s.optionalNullable(s.lazy(() => vacationDatesSchema)),
      _keysMap: {
        resourceType: "resource_type",
        userTaskList: "user_task_list",
        isActive: "is_active",
        isAdmin: "is_admin",
        isGuest: "is_guest",
        vacationDates: "vacation_dates",
      },
    },
    { additionalProperties: s.json() },
  );
