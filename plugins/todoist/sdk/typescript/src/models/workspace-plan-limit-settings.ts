import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WorkspacePlanLimitSettings = {
  /** Name of the plan these limits belong to. */
  planName: string;
  /** Maximum number of active projects. */
  maxProjects: number;
  /** Maximum number of collaborators in one project. */
  maxCollaborators: number;
  /** Maximum size of a file upload, in MB. */
  uploadLimitMb: number;
  /** Whether automatic backups are made. */
  automaticBackups: boolean;
  /** Whether reminders can be added. */
  reminders: boolean;
  /** Whether reminders at the due time, the limited form, can be added. */
  remindersAtDue: boolean;
  /** Maximum number of guests in a workspace, personal or team. */
  maxGuestsPerWorkspace: number;
  /** Maximum number of folders in a workspace. */
  maxFoldersPerWorkspace: number;
  /**
   * Whether project members can be given granular permissions such as comment-only or view-only.
   */
  advancedPermissions: boolean;
  /** Whether task durations can be set. */
  durations: boolean;
  /** Whether the calendar layout is available for projects. @default false */
  calendarLayout?: boolean;
  /** Whether the table layout can be picked as a view option. @default false */
  tableLayout?: boolean;
  /** Whether tasks and comments can be added by email. @default true */
  emailForwarding?: boolean;
  /** Whether forwarded emails are parsed with AI. @default false */
  emailAiForwarding?: boolean;
  /** Whether projects can have a custom icon. @default false */
  projectIcons?: boolean;
  /** Maximum number of live notifications kept. @default 500 */
  maxLiveNotifications?: number;
  /** Maximum number of task capture sessions per calendar month. @default 10 */
  maxMonthlyCapture?: number;
  /** Deprecated mirror of `max_monthly_capture`. @default 10 */
  maxMonthlyRamble?: number;
  /** Whether the workspace has the admin and member roles. @default false */
  adminTools?: boolean;
  /** Whether the workspace has security settings. @default false */
  securityControls?: boolean;
  /** Maximum number of shared team filters. @default 3 */
  maxFilters?: number;
  /** Maximum number of members in the workspace. @default 0 */
  maxWorkspaceUsers?: number;
  /** Maximum number of workspaces a user can be a member of. @default 50 */
  maxWorkspaces?: number;
  /** Maximum number of templates in the workspace. @default 100 */
  maxWorkspaceTemplates?: number;
  /**
   * Whether the full Project Insights (sidebar, progress, completed counts and Project Health) are
   * available.
   *
   * @default false
   */
  projectInsights?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspacePlanLimitSettingsSchema: Schema<WorkspacePlanLimitSettings> =
  s.object<WorkspacePlanLimitSettings>(
    {
      planName: s.string(),
      maxProjects: s.int(),
      maxCollaborators: s.int(),
      uploadLimitMb: s.int(),
      automaticBackups: s.boolean(),
      reminders: s.boolean(),
      remindersAtDue: s.boolean(),
      maxGuestsPerWorkspace: s.int(),
      maxFoldersPerWorkspace: s.int(),
      advancedPermissions: s.boolean(),
      durations: s.boolean(),
      calendarLayout: s.defaulted(s.boolean(), false),
      tableLayout: s.defaulted(s.boolean(), false),
      emailForwarding: s.defaulted(s.boolean(), true),
      emailAiForwarding: s.defaulted(s.boolean(), false),
      projectIcons: s.defaulted(s.boolean(), false),
      maxLiveNotifications: s.defaulted(s.int(), 500),
      maxMonthlyCapture: s.defaulted(s.int(), 10),
      maxMonthlyRamble: s.defaulted(s.int(), 10),
      adminTools: s.defaulted(s.boolean(), false),
      securityControls: s.defaulted(s.boolean(), false),
      maxFilters: s.defaulted(s.int(), 3),
      maxWorkspaceUsers: s.defaulted(s.int(), 0),
      maxWorkspaces: s.defaulted(s.int(), 50),
      maxWorkspaceTemplates: s.defaulted(s.int(), 100),
      projectInsights: s.defaulted(s.boolean(), false),
      _keysMap: {
        planName: "plan_name",
        maxProjects: "max_projects",
        maxCollaborators: "max_collaborators",
        uploadLimitMb: "upload_limit_mb",
        automaticBackups: "automatic_backups",
        remindersAtDue: "reminders_at_due",
        maxGuestsPerWorkspace: "max_guests_per_workspace",
        maxFoldersPerWorkspace: "max_folders_per_workspace",
        advancedPermissions: "advanced_permissions",
        calendarLayout: "calendar_layout",
        tableLayout: "table_layout",
        emailForwarding: "email_forwarding",
        emailAiForwarding: "email_ai_forwarding",
        projectIcons: "project_icons",
        maxLiveNotifications: "max_live_notifications",
        maxMonthlyCapture: "max_monthly_capture",
        maxMonthlyRamble: "max_monthly_ramble",
        adminTools: "admin_tools",
        securityControls: "security_controls",
        maxFilters: "max_filters",
        maxWorkspaceUsers: "max_workspace_users",
        maxWorkspaces: "max_workspaces",
        maxWorkspaceTemplates: "max_workspace_templates",
        projectInsights: "project_insights",
      },
    },
    { additionalProperties: s.json() },
  );
