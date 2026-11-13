import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dateFormatSchema, type DateFormat } from "./date-format.js";
import { karmaTrendSchema, type KarmaTrend } from "./karma-trend.js";
import { langSchema, type Lang } from "./lang.js";
import { onboardingLevelSchema, type OnboardingLevel } from "./onboarding-level.js";
import { onboardingPersonaSchema, type OnboardingPersona } from "./onboarding-persona.js";
import { onboardingRoleSchema, type OnboardingRole } from "./onboarding-role.js";
import { onboardingUseCaseSchema, type OnboardingUseCase } from "./onboarding-use-case.js";
import { premiumStatusSchema, type PremiumStatus } from "./premium-status.js";
import { sortOrder1Schema, type SortOrder1 } from "./sort-order1.js";
import { themeAppearanceSchema, type ThemeAppearance } from "./theme-appearance.js";
import { timeFormatSchema, type TimeFormat } from "./time-format.js";
import {
  urgentReminderDeviceViewSchema,
  type UrgentReminderDeviceView,
} from "./urgent-reminder-device-view.js";
import { userStatusInternalSchema, userStatusSchema, type UserStatus } from "./user-status.js";
import { verificationStatusSchema, type VerificationStatus } from "./verification-status.js";

/**
 * A model for the user objects returned by the sync/REST API.
 *
 * This model is used purely for OpenAPI documentation generation and does not handle actual
 * serialization (which is handled by \@todoist.models.json.user.generate).
 */
export type UserSyncView = {
  /** User ID */
  id: string;
  /** User's email address */
  email: string;
  /** The user's real name formatted as Firstname Lastname */
  fullName: string;
  /**
   * Whether the user has a password set on the account. It will be false if they have only
   * authenticated without a password (e.g. using Google, Facebook, etc.)
   */
  hasPassword: boolean;
  /**
   * User's email verification status. unverified (just signed up), verified (verified email or
   * social login), blocked (failed to verify in 7 days), legacy (signed up before August 2022)
   */
  verificationStatus: VerificationStatus;
  /** Whether multi-factor authentication is enabled */
  mfaEnabled: boolean;
  /** The user's token that should be used to call the other API methods */
  token?: string | null;
  /** Whether the user has a Todoist Pro subscription (a true or false value) */
  isPremium: boolean;
  /**
   * Outlines why a user is premium, possible values are: not_premium, current_personal_plan,
   * legacy_personal_plan or teams_business_member
   */
  premiumStatus?: PremiumStatus | null;
  /**
   * The date when the user's Todoist Pro subscription ends (null if not a Todoist Pro user). This
   * should be used for informational purposes only as this does not include the grace period upon
   * expiration
   */
  premiumUntil?: string | null;
  /** Date when free trial expires (ISO 8601 format) */
  freeTrialExpires?: string | null;
  /** Whether the user has ever started a free trial */
  hasStartedATrial: boolean;
  /** Date when user joined Todoist (ISO 8601 format) */
  joinedAt?: string | null;
  /** Whether the user is deleted @default false */
  isDeleted?: boolean;
  /** Date when user was deleted (ISO 8601 format) */
  deletedAt?: string | null;
  /** The ID of the user's business account */
  businessAccountId?: number | null;
  /**
   * Whether to use the DD-MM-YYYY date format (if set to 0), or the MM-DD-YYYY format (if set to 1)
   */
  dateFormat: DateFormat;
  /**
   * Whether to use a 24h format such as 13:00 (if set to 0) when displaying time, or a 12h format
   * such as 1:00pm (if set to 1)
   */
  timeFormat?: TimeFormat | null;
  /**
   * Whether to show projects in an oldest dates first order (if set to 0), or a oldest dates last
   * order (if set to 1)
   */
  sortOrder: SortOrder1;
  /** The currently selected Todoist theme (a number between 0 and 13) */
  themeId: string;
  /** Whether Todoist uses a light theme, a dark theme, or follows the system appearance */
  themeAppearance: ThemeAppearance;
  /** The first day of the week (between 1 and 7, where 1 is Monday and 7 is Sunday) */
  startDay: number;
  /**
   * The day used when a user chooses to schedule a task for the 'Weekend' (between 1 and 7, where 1
   * is Monday and 7 is Sunday)
   */
  weekendStartDay: number;
  /**
   * The day of the next week, that tasks will be postponed to (between 1 and 7, where 1 is Monday
   * and 7 is Sunday)
   */
  nextWeek: number;
  /**
   * The default time in minutes for the automatic reminders set, whenever a due date has been
   * specified for a task
   */
  autoReminder: number;
  /**
   * The device that should ring urgent reminders. Contains device_id, device_token, device_platform
   * (ios or android), and optionally device_name.
   */
  urgentReminderDevice?: UrgentReminderDeviceView | null;
  /**
   * The user's status, shared across Todoist and Comms. `null` when the user has none or it has
   * expired. Set or clear it with `user_update`.
   */
  status?: UserStatus | null;
  /**
   * The user's default view on Todoist. The start page can be one of the following: inbox,
   * teaminbox, today, next7days, upcoming, assigned_to_me, project?id=1234 to open a project,
   * label?name=abc to open a label, filter?id=1234 to open a filter, or workspace_filter?id=1234 to
   * open a workspace filter
   */
  startPage: string;
  /** The ID of the user's Inbox project */
  inboxProjectId?: string | null;
  /** The user's language */
  lang: Lang;
  /**
   * The user's timezone (a dictionary structure), which includes the following elements: the
   * timezone as a string value, the hours and minutes difference from GMT, whether daylight saving
   * time applies denoted by is_dst, and a string value of the time difference from GMT that is
   * gmt_string
   */
  tzInfo: Record<string, unknown>;
  /** The user's karma score */
  karma: number;
  /** The user's karma trend. Can be 'up', 'down', or '-' (no change) */
  karmaTrend?: KarmaTrend | null;
  /** The daily goal number of completed tasks for karma */
  dailyGoal: number;
  /** The target number of tasks to complete per week */
  weeklyGoal: number;
  /**
   * Array of integers representing user's days off (between 1 and 7, where 1 is Monday and 7 is
   * Sunday)
   */
  daysOff: number[];
  /** Whether celebration animations are enabled */
  isCelebrationsEnabled: boolean;
  /** Total number of tasks completed by user */
  completedCount: number;
  /** Number of tasks completed today by the user */
  completedToday: number;
  /** Maximum number of collaborators allowed in shared projects */
  shareLimit: number;
  /** Feature flags and settings for the user */
  features: Record<string, unknown>;
  /** Feature identifier for feature flag evaluations */
  featureIdentifier: string;
  /** Information about workspaces the user can join */
  joinableWorkspace: Record<string, unknown> | null;
  /** Whether the user has completed onboarding */
  onboardingCompleted: boolean;
  /** Whether the user has initiated onboarding */
  onboardingInitiated: boolean;
  /** Whether the user has started onboarding */
  onboardingStarted: boolean;
  /** User's self-reported skill level during onboarding */
  onboardingLevel?: OnboardingLevel | null;
  /** User's onboarding persona selection */
  onboardingPersona?: OnboardingPersona | null;
  /** User's role selection during onboarding */
  onboardingRole?: OnboardingRole | null;
  /** Whether user selected team mode during onboarding */
  onboardingTeamMode?: string | null;
  /** Use cases the user selected during onboarding */
  onboardingUseCases?: OnboardingUseCase[] | null;
  /** List of project IDs for getting started guide */
  gettingStartedGuideProjects?: string[] | null;
  /**
   * True once the user has created at least 1 task with a due date that includes a time component
   * (excluding auto-seeded getting-started-guide tasks).
   */
  onboardedDatedTasksCreated?: boolean | null;
  /** True once the user has completed at least 3 tasks. */
  onboardedTasksCompleted?: boolean | null;
  /** True once the user has synced from iOS or Android. */
  onboardedMobileAccessed?: boolean | null;
  /** True once the user has synced from Web, macOS, or Windows. */
  onboardedDesktopAccessed?: boolean | null;
  /** True once the user skips Get Todoist on your computer. */
  onboardedDesktopSkipped?: boolean | null;
  /**
   * True once the user completes the onboarding card: both task criteria are met, the user has
   * accessed mobile, and has either accessed desktop or skipped the desktop step.
   */
  isOnboarded?: boolean | null;
  /** Whether the user is considered activated (completed key onboarding actions) */
  activatedUser: boolean;
  /** Whether the user has reached a magic number milestone */
  hasMagicNumber: boolean;
  /** The ID of the user's avatar */
  imageId?: string | null;
  /** The link to a 195x195 pixels image of the user's avatar */
  avatarBig?: string | null;
  /** The link to a 60x60 pixels image of the user's avatar */
  avatarMedium?: string | null;
  /** The link to a 640x640 pixels image of the user's avatar */
  avatarS640?: string | null;
  /** The link to a 35x35 pixels image of the user's avatar */
  avatarSmall?: string | null;
  /** WebSocket URL for real-time updates */
  websocketUrl: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const userSyncViewProperties: s.Shape<UserSyncView> = {
  id: s.string(),
  email: s.string(),
  fullName: s.string(),
  hasPassword: s.boolean(),
  verificationStatus: verificationStatusSchema,
  mfaEnabled: s.boolean(),
  token: s.optionalNullable(s.string()),
  isPremium: s.boolean(),
  premiumStatus: s.optionalNullable(s.lazy(() => premiumStatusSchema)),
  premiumUntil: s.optionalNullable(s.string()),
  freeTrialExpires: s.optionalNullable(s.string()),
  hasStartedATrial: s.boolean(),
  joinedAt: s.optionalNullable(s.string()),
  isDeleted: s.defaulted(s.boolean(), false),
  deletedAt: s.optionalNullable(s.string()),
  businessAccountId: s.optionalNullable(s.int()),
  dateFormat: dateFormatSchema,
  timeFormat: s.optionalNullable(s.lazy(() => timeFormatSchema)),
  sortOrder: sortOrder1Schema,
  themeId: s.string(),
  themeAppearance: themeAppearanceSchema,
  startDay: s.int(),
  weekendStartDay: s.int(),
  nextWeek: s.int(),
  autoReminder: s.int(),
  urgentReminderDevice: s.optionalNullable(s.lazy(() => urgentReminderDeviceViewSchema)),
  status: s.optionalNullable(s.lazy(() => userStatusInternalSchema)),
  startPage: s.string(),
  inboxProjectId: s.optionalNullable(s.string()),
  lang: langSchema,
  tzInfo: s.record(s.string(), s.unknown()),
  karma: s.float64(),
  karmaTrend: s.optionalNullable(s.lazy(() => karmaTrendSchema)),
  dailyGoal: s.int(),
  weeklyGoal: s.int(),
  daysOff: s.array(s.int()),
  isCelebrationsEnabled: s.boolean(),
  completedCount: s.int(),
  completedToday: s.int(),
  shareLimit: s.int(),
  features: s.record(s.string(), s.unknown()),
  featureIdentifier: s.string(),
  joinableWorkspace: s.nullable(s.record(s.string(), s.unknown())),
  onboardingCompleted: s.boolean(),
  onboardingInitiated: s.boolean(),
  onboardingStarted: s.boolean(),
  onboardingLevel: s.optionalNullable(s.lazy(() => onboardingLevelSchema)),
  onboardingPersona: s.optionalNullable(s.lazy(() => onboardingPersonaSchema)),
  onboardingRole: s.optionalNullable(s.lazy(() => onboardingRoleSchema)),
  onboardingTeamMode: s.optionalNullable(s.string()),
  onboardingUseCases: s.optionalNullable(s.array(s.lazy(() => onboardingUseCaseSchema))),
  gettingStartedGuideProjects: s.optionalNullable(s.array(s.string())),
  onboardedDatedTasksCreated: s.optionalNullable(s.boolean()),
  onboardedTasksCompleted: s.optionalNullable(s.boolean()),
  onboardedMobileAccessed: s.optionalNullable(s.boolean()),
  onboardedDesktopAccessed: s.optionalNullable(s.boolean()),
  onboardedDesktopSkipped: s.optionalNullable(s.boolean()),
  isOnboarded: s.optionalNullable(s.boolean()),
  activatedUser: s.boolean(),
  hasMagicNumber: s.boolean(),
  imageId: s.optionalNullable(s.string()),
  avatarBig: s.optionalNullable(s.string()),
  avatarMedium: s.optionalNullable(s.string()),
  avatarS640: s.optionalNullable(s.string()),
  avatarSmall: s.optionalNullable(s.string()),
  websocketUrl: s.string(),
  _keysMap: {
    fullName: "full_name",
    hasPassword: "has_password",
    verificationStatus: "verification_status",
    mfaEnabled: "mfa_enabled",
    isPremium: "is_premium",
    premiumStatus: "premium_status",
    premiumUntil: "premium_until",
    freeTrialExpires: "free_trial_expires",
    hasStartedATrial: "has_started_a_trial",
    joinedAt: "joined_at",
    isDeleted: "is_deleted",
    deletedAt: "deleted_at",
    businessAccountId: "business_account_id",
    dateFormat: "date_format",
    timeFormat: "time_format",
    sortOrder: "sort_order",
    themeId: "theme_id",
    themeAppearance: "theme_appearance",
    startDay: "start_day",
    weekendStartDay: "weekend_start_day",
    nextWeek: "next_week",
    autoReminder: "auto_reminder",
    urgentReminderDevice: "urgent_reminder_device",
    startPage: "start_page",
    inboxProjectId: "inbox_project_id",
    tzInfo: "tz_info",
    karmaTrend: "karma_trend",
    dailyGoal: "daily_goal",
    weeklyGoal: "weekly_goal",
    daysOff: "days_off",
    isCelebrationsEnabled: "is_celebrations_enabled",
    completedCount: "completed_count",
    completedToday: "completed_today",
    shareLimit: "share_limit",
    featureIdentifier: "feature_identifier",
    joinableWorkspace: "joinable_workspace",
    onboardingCompleted: "onboarding_completed",
    onboardingInitiated: "onboarding_initiated",
    onboardingStarted: "onboarding_started",
    onboardingLevel: "onboarding_level",
    onboardingPersona: "onboarding_persona",
    onboardingRole: "onboarding_role",
    onboardingTeamMode: "onboarding_team_mode",
    onboardingUseCases: "onboarding_use_cases",
    gettingStartedGuideProjects: "getting_started_guide_projects",
    onboardedDatedTasksCreated: "onboarded_dated_tasks_created",
    onboardedTasksCompleted: "onboarded_tasks_completed",
    onboardedMobileAccessed: "onboarded_mobile_accessed",
    onboardedDesktopAccessed: "onboarded_desktop_accessed",
    onboardedDesktopSkipped: "onboarded_desktop_skipped",
    isOnboarded: "is_onboarded",
    activatedUser: "activated_user",
    hasMagicNumber: "has_magic_number",
    imageId: "image_id",
    avatarBig: "avatar_big",
    avatarMedium: "avatar_medium",
    avatarS640: "avatar_s640",
    avatarSmall: "avatar_small",
    websocketUrl: "websocket_url",
  },
};

export const userSyncViewInternalSchema: Schema<UserSyncView> = s.object<UserSyncView>(
  userSyncViewProperties,
  { additionalProperties: s.json() },
);

export const userSyncViewSchema: Schema<UserSyncView> = s.lazySchema(() =>
  s.object<UserSyncView>(
    {
      ...userSyncViewProperties,
      startDay: s.int().check(s.gte(1), s.lte(7)),
      weekendStartDay: s.int().check(s.gte(1), s.lte(7)),
      nextWeek: s.int().check(s.gte(1), s.lte(7)),
      status: s.optionalNullable(s.lazy(() => userStatusSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
