import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of notification being sent */
export const NotificationType = {
  NoteAdded: "note_added",
  ItemAssigned: "item_assigned",
  ItemCompleted: "item_completed",
  ItemUncompleted: "item_uncompleted",
  KarmaLevel: "karma_level",
  ShareInvitationSent: "share_invitation_sent",
  ShareInvitationAccepted: "share_invitation_accepted",
  ShareInvitationRejected: "share_invitation_rejected",
  ShareInvitationBlockedByProjectLimit: "share_invitation_blocked_by_project_limit",
  UserLeftProject: "user_left_project",
  UserRemovedFromProject: "user_removed_from_project",
  TeamsWorkspaceUpgraded: "teams_workspace_upgraded",
  TeamsWorkspaceCanceled: "teams_workspace_canceled",
  TeamsWorkspacePaymentFailed: "teams_workspace_payment_failed",
  ProTrialStarted: "pro_trial_started",
  ProTrialEnded: "pro_trial_ended",
  WorkspaceInvitationCreated: "workspace_invitation_created",
  WorkspaceInvitationAccepted: "workspace_invitation_accepted",
  WorkspaceInvitationRejected: "workspace_invitation_rejected",
  ProjectArchived: "project_archived",
  ProjectMoved: "project_moved",
  RemovedFromWorkspace: "removed_from_workspace",
  WorkspaceDeleted: "workspace_deleted",
  Message: "message",
  WorkspaceUserJoinedByDomain: "workspace_user_joined_by_domain",
  PriceIncreaseNewProUsers: "price_increase_new_pro_users",
  PriceIncreaseNewTeam: "price_increase_new_team",
  PriceIncreaseNewTeamTrial: "price_increase_new_team_trial",
  PriceIncreaseAndroid: "price_increase_android",
  WorkspaceTeamCohortTagged: "workspace_team_cohort_tagged",
} as const;
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType] | (string & {});

export const notificationTypeSchema: EnumSchema<NotificationType> =
  s.enumOf<NotificationType>(NotificationType);
