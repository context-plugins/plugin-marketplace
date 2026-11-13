export { TodoistApiClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { TokenProvider, BasicAuthCredentials } from "./core/auth/credentials.js";

export { Authorization } from "./resources/authorization.js";
export { Ids } from "./resources/ids.js";
export { Workspace } from "./resources/workspace.js";
export { Projects } from "./resources/projects.js";
export { Comments } from "./resources/comments.js";
export { Templates } from "./resources/templates.js";
export { Sections } from "./resources/sections.js";
export { Tasks } from "./resources/tasks.js";
export { Labels } from "./resources/labels.js";
export { Folders } from "./resources/folders.js";
export { Uploads } from "./resources/uploads.js";
export { Filters } from "./resources/filters.js";
export { Reminders } from "./resources/reminders.js";
export { LocationReminders } from "./resources/location-reminders.js";
export { User } from "./resources/user.js";
export { Activity } from "./resources/activity.js";
export { Backups } from "./resources/backups.js";
export { Emails } from "./resources/emails.js";
export { Billing } from "./resources/billing.js";

export { ApiColorId, apiColorIdSchema } from "./models/api-color-id.js";
export { ApiColorId1, apiColorId1Schema } from "./models/api-color-id1.js";
export { apiColorId2Schema, type ApiColorId2 } from "./models/unions/api-color-id2.js";
export { AcquisitionSource, acquisitionSourceSchema } from "./models/acquisition-source.js";
export { actionViewSchema, type ActionView } from "./models/action-view.js";
export { ActivationMethod, activationMethodSchema } from "./models/activation-method.js";
export { activityEventsSchema, type ActivityEvents } from "./models/activity-events.js";
export { ActivityObjectType, activityObjectTypeSchema } from "./models/activity-object-type.js";
export { BillingCycle, billingCycleSchema } from "./models/billing-cycle.js";
export { BillingCycle1, billingCycle1Schema } from "./models/billing-cycle1.js";
export {
  billingPortalUrlResponseSchema,
  type BillingPortalUrlResponse,
} from "./models/billing-portal-url-response.js";
export { bodySchema, type Body } from "./models/body.js";
export { body1Schema, type Body1 } from "./models/body1.js";
export { body10Schema, type Body10 } from "./models/body10.js";
export { body11Schema, type Body11 } from "./models/body11.js";
export { body12Schema, type Body12 } from "./models/body12.js";
export { body13Schema, type Body13 } from "./models/body13.js";
export { body14Schema, type Body14 } from "./models/body14.js";
export { body15Schema, type Body15 } from "./models/body15.js";
export { body16Schema, type Body16 } from "./models/body16.js";
export { body17Schema, type Body17 } from "./models/body17.js";
export { body18Schema, type Body18 } from "./models/body18.js";
export { body19Schema, type Body19 } from "./models/body19.js";
export { body2Schema, type Body2 } from "./models/body2.js";
export { body20Schema, type Body20 } from "./models/body20.js";
export { body21Schema, type Body21 } from "./models/body21.js";
export { body22Schema, type Body22 } from "./models/body22.js";
export { body23Schema, type Body23 } from "./models/body23.js";
export { body24Schema, type Body24 } from "./models/body24.js";
export { body25Schema, type Body25 } from "./models/body25.js";
export { body26Schema, type Body26 } from "./models/body26.js";
export { body27Schema, type Body27 } from "./models/body27.js";
export { body28Schema, type Body28 } from "./models/body28.js";
export { body29Schema, type Body29 } from "./models/body29.js";
export { body3Schema, type Body3 } from "./models/body3.js";
export { body30Schema, type Body30 } from "./models/body30.js";
export { body31Schema, type Body31 } from "./models/body31.js";
export { body32Schema, type Body32 } from "./models/body32.js";
export { body33Schema, type Body33 } from "./models/body33.js";
export { body34Schema, type Body34 } from "./models/body34.js";
export { body35Schema, type Body35 } from "./models/body35.js";
export { body36Schema, type Body36 } from "./models/body36.js";
export { body37Schema, type Body37 } from "./models/body37.js";
export { body38Schema, type Body38 } from "./models/body38.js";
export { body39Schema, type Body39 } from "./models/body39.js";
export { body4Schema, type Body4 } from "./models/body4.js";
export { body40Schema, type Body40 } from "./models/body40.js";
export { body5Schema, type Body5 } from "./models/body5.js";
export { body6Schema, type Body6 } from "./models/body6.js";
export { body7Schema, type Body7 } from "./models/body7.js";
export { body8Schema, type Body8 } from "./models/body8.js";
export { body9Schema, type Body9 } from "./models/body9.js";
export {
  bodyCreateProjectFromCsvApiV1ProjectsImportPostSchema,
  type BodyCreateProjectFromCsvApiV1ProjectsImportPost,
} from "./models/body-create-project-from-csv-api-v1-projects-import-post.js";
export {
  bodyCreateProjectFromFileApiV1TemplatesCreateProjectFromFilePostSchema,
  type BodyCreateProjectFromFileApiV1TemplatesCreateProjectFromFilePost,
} from "./models/body-create-project-from-file-api-v1-templates-create-project-from-file-post.js";
export {
  bodyImportIntoProjectFromFileApiV1TemplatesImportIntoProjectFromFilePostSchema,
  type BodyImportIntoProjectFromFileApiV1TemplatesImportIntoProjectFromFilePost,
} from "./models/body-import-into-project-from-file-api-v1-templates-import-into-project-from-file-post.js";
export {
  bodyImportProjectCsvApiV1ProjectsProjectIdImportPostSchema,
  type BodyImportProjectCsvApiV1ProjectsProjectIdImportPost,
} from "./models/body-import-project-csv-api-v1-projects-project-id-import-post.js";
export {
  bodyImportUserTemplateFromFileApiV1TemplatesUserImportPostSchema,
  type BodyImportUserTemplateFromFileApiV1TemplatesUserImportPost,
} from "./models/body-import-user-template-from-file-api-v1-templates-user-import-post.js";
export {
  bodyPreviewUserTemplateApiV1TemplatesUserPreviewPostSchema,
  type BodyPreviewUserTemplateApiV1TemplatesUserPreviewPost,
} from "./models/body-preview-user-template-api-v1-templates-user-preview-post.js";
export {
  bodyUpdateLogoApiV1WorkspacesLogoPostSchema,
  type BodyUpdateLogoApiV1WorkspacesLogoPost,
} from "./models/body-update-logo-api-v1-workspaces-logo-post.js";
export {
  bodyUploadFileApiV1UploadsPostSchema,
  type BodyUploadFileApiV1UploadsPost,
} from "./models/body-upload-file-api-v1-uploads-post.js";
export { CalendarColor, calendarColorSchema } from "./models/calendar-color.js";
export { CalendarLayout, calendarLayoutSchema } from "./models/calendar-layout.js";
export { calendarSettingsSchema, type CalendarSettings } from "./models/calendar-settings.js";
export { categoriesResponseSchema, type CategoriesResponse } from "./models/categories-response.js";
export { collaboratorSchema, type Collaborator } from "./models/collaborator.js";
export { CollaboratorRole, collaboratorRoleSchema } from "./models/collaborator-role.js";
export { configurationSchema, type Configuration } from "./models/unions/configuration.js";
export {
  contentCalendarSettingsSchema,
  type ContentCalendarSettings,
} from "./models/content-calendar-settings.js";
export { contentDeadlineObjectSchema, type ContentDeadlineObject } from "./models/content-deadline-object.js";
export { contentDueObjectSchema, type ContentDueObject } from "./models/content-due-object.js";
export { contentDurationSchema, type ContentDuration } from "./models/content-duration.js";
export { contentFileAttachmentSchema, type ContentFileAttachment } from "./models/content-file-attachment.js";
export { contentItemSchema, type ContentItem } from "./models/content-item.js";
export { contentNoteSchema, type ContentNote } from "./models/content-note.js";
export { contentProjectSchema, type ContentProject } from "./models/content-project.js";
export { contentProjectNoteSchema, type ContentProjectNote } from "./models/content-project-note.js";
export {
  contentProjectViewOptionsDefaultsSchema,
  type ContentProjectViewOptionsDefaults,
} from "./models/content-project-view-options-defaults.js";
export { contentRawDeadlineSchema, type ContentRawDeadline } from "./models/content-raw-deadline.js";
export { contentRawDueSchema, type ContentRawDue } from "./models/content-raw-due.js";
export { contentSectionSchema, type ContentSection } from "./models/content-section.js";
export { contentfulCategorySchema, type ContentfulCategory } from "./models/contentful-category.js";
export { contentfulLinkSchema, type ContentfulLink } from "./models/contentful-link.js";
export { contentfulSeoSchema, type ContentfulSeo } from "./models/contentful-seo.js";
export {
  createFromTemplateIdResponseSchema,
  type CreateFromTemplateIdResponse,
} from "./models/create-from-template-id-response.js";
export {
  createUserTemplateResponseSchema,
  type CreateUserTemplateResponse,
} from "./models/create-user-template-response.js";
export { CreatedPlatform, createdPlatformSchema } from "./models/created-platform.js";
export { CreatorRole, creatorRoleSchema } from "./models/creator-role.js";
export { CurrentPlan, currentPlanSchema } from "./models/current-plan.js";
export { CurrentPlanStatus, currentPlanStatusSchema } from "./models/current-plan-status.js";
export { dailyCompletionItemSchema, type DailyCompletionItem } from "./models/daily-completion-item.js";
export { DateFormat, dateFormatSchema } from "./models/date-format.js";
export { DateType, dateTypeSchema } from "./models/date-type.js";
export { deadlineSchema, type Deadline } from "./models/unions/deadline.js";
export { DefaultAccessLevel, defaultAccessLevelSchema } from "./models/default-access-level.js";
export {
  defaultCollaboratorsSyncViewSchema,
  type DefaultCollaboratorsSyncView,
} from "./models/default-collaborators-sync-view.js";
export { Department, departmentSchema } from "./models/department.js";
export { DesktopWorkspaceModal, desktopWorkspaceModalSchema } from "./models/desktop-workspace-modal.js";
export { DevicePlatform, devicePlatformSchema } from "./models/device-platform.js";
export { discardedFieldSchema, type DiscardedField } from "./models/discarded-field.js";
export { DiscardedFieldName, discardedFieldNameSchema } from "./models/discarded-field-name.js";
export { DiscardedFieldReason, discardedFieldReasonSchema } from "./models/discarded-field-reason.js";
export { dueSchema, type Due } from "./models/unions/due.js";
export { durationSchema, type Duration } from "./models/unions/duration.js";
export { DurationUnit, durationUnitSchema } from "./models/duration-unit.js";
export { DurationUnit1, durationUnit1Schema } from "./models/duration-unit1.js";
export { effectScopeSchema, type EffectScope } from "./models/effect-scope.js";
export { EmailObjectType, emailObjectTypeSchema } from "./models/email-object-type.js";
export { exposedCollaboratorSchema, type ExposedCollaborator } from "./models/exposed-collaborator.js";
export { fileAttachmentSchema, type FileAttachment } from "./models/unions/file-attachment.js";
export { fileUrlResponseSchema, type FileUrlResponse } from "./models/file-url-response.js";
export { filterSyncViewSchema, type FilterSyncView } from "./models/filter-sync-view.js";
export { folderSyncViewSchema, type FolderSyncView } from "./models/folder-sync-view.js";
export { folderViewSchema, type FolderView } from "./models/folder-view.js";
export { formattedPriceSchema, type FormattedPrice } from "./models/formatted-price.js";
export { formattedPriceListingSchema, type FormattedPriceListing } from "./models/formatted-price-listing.js";
export {
  generateDescriptionResponseSchema,
  type GenerateDescriptionResponse,
} from "./models/generate-description-response.js";
export { goalsSettingsSchema, type GoalsSettings } from "./models/goals-settings.js";
export { graphPointSchema, type GraphPoint } from "./models/graph-point.js";
export { GroupBy, groupBySchema } from "./models/group-by.js";
export { GroupOption, groupOptionSchema } from "./models/group-option.js";
export { httpValidationErrorSchema, type HttpValidationError } from "./models/http-validation-error.js";
export { Hdyhau, hdyhauSchema } from "./models/hdyhau.js";
export { idMappingSchema, type IdMapping } from "./models/id-mapping.js";
export { Icon, iconSchema } from "./models/icon.js";
export { Icon1, icon1Schema } from "./models/icon1.js";
export { Icon2, icon2Schema } from "./models/icon2.js";
export { ImportedFrom, importedFromSchema } from "./models/imported-from.js";
export {
  importedProjectViewOptionsDefaultSchema,
  type ImportedProjectViewOptionsDefault,
} from "./models/imported-project-view-options-default.js";
export { Industry, industrySchema } from "./models/industry.js";
export { initiatorIdSchema, type InitiatorId } from "./models/unions/initiator-id.js";
export { IntendedTeamSize, intendedTeamSizeSchema } from "./models/intended-team-size.js";
export {
  inviteWorkspaceUsersResponseSchema,
  type InviteWorkspaceUsersResponse,
} from "./models/invite-workspace-users-response.js";
export { itemNoteSyncViewSchema, type ItemNoteSyncView } from "./models/item-note-sync-view.js";
export { itemSyncViewSchema, type ItemSyncView } from "./models/item-sync-view.js";
export { KarmaTrend, karmaTrendSchema } from "./models/karma-trend.js";
export {
  karmaUpdateReasonEntrySchema,
  type KarmaUpdateReasonEntry,
} from "./models/karma-update-reason-entry.js";
export { labelRestViewSchema, type LabelRestView } from "./models/label-rest-view.js";
export { labelSyncViewSchema, type LabelSyncView } from "./models/label-sync-view.js";
export { Lang, langSchema } from "./models/lang.js";
export { LocTrigger, locTriggerSchema } from "./models/loc-trigger.js";
export { LocTrigger1, locTrigger1Schema } from "./models/loc-trigger1.js";
export { LocTrigger2, locTrigger2Schema } from "./models/loc-trigger2.js";
export { locationSchema, type Location } from "./models/unions/location.js";
export { memberViewSchema, type MemberView } from "./models/member-view.js";
export { Mode, modeSchema } from "./models/mode.js";
export { nameSchema, type Name } from "./models/unions/name.js";
export { NegativeKarmaReason, negativeKarmaReasonSchema } from "./models/negative-karma-reason.js";
export { noteSyncViewSchema, type NoteSyncView } from "./models/note-sync-view.js";
export { NotificationChannel, notificationChannelSchema } from "./models/notification-channel.js";
export {
  notificationLocationSyncViewSchema,
  type NotificationLocationSyncView,
} from "./models/notification-location-sync-view.js";
export { notificationSyncViewSchema, type NotificationSyncView } from "./models/notification-sync-view.js";
export { NotificationType, notificationTypeSchema } from "./models/notification-type.js";
export { ObjName, objNameSchema } from "./models/obj-name.js";
export { objectIdSchema, type ObjectId } from "./models/unions/object-id.js";
export { ObjectType, objectTypeSchema } from "./models/object-type.js";
export { OnboardingLevel, onboardingLevelSchema } from "./models/onboarding-level.js";
export { OnboardingPersona, onboardingPersonaSchema } from "./models/onboarding-persona.js";
export { OnboardingRole, onboardingRoleSchema } from "./models/onboarding-role.js";
export { OnboardingUseCase, onboardingUseCaseSchema } from "./models/onboarding-use-case.js";
export { OrganizationSize, organizationSizeSchema } from "./models/organization-size.js";
export { paginatedListSchema, type PaginatedList } from "./models/paginated-list.js";
export { paginatedList1Schema, type PaginatedList1 } from "./models/paginated-list1.js";
export { paginatedList10Schema, type PaginatedList10 } from "./models/paginated-list10.js";
export { paginatedList11Schema, type PaginatedList11 } from "./models/paginated-list11.js";
export { paginatedList2Schema, type PaginatedList2 } from "./models/paginated-list2.js";
export { paginatedList3Schema, type PaginatedList3 } from "./models/paginated-list3.js";
export { paginatedList4Schema, type PaginatedList4 } from "./models/paginated-list4.js";
export { paginatedList5Schema, type PaginatedList5 } from "./models/paginated-list5.js";
export { paginatedList6Schema, type PaginatedList6 } from "./models/paginated-list6.js";
export { paginatedList7Schema, type PaginatedList7 } from "./models/paginated-list7.js";
export { paginatedList8Schema, type PaginatedList8 } from "./models/paginated-list8.js";
export { paginatedList9Schema, type PaginatedList9 } from "./models/paginated-list9.js";
export { parentItemIdSchema, type ParentItemId } from "./models/unions/parent-item-id.js";
export { parentProjectIdSchema, type ParentProjectId } from "./models/unions/parent-project-id.js";
export { pauseActivityEffectSchema, type PauseActivityEffect } from "./models/pause-activity-effect.js";
export {
  pauseNotificationsEffectSchema,
  type PauseNotificationsEffect,
} from "./models/pause-notifications-effect.js";
export { personSchema, type Person } from "./models/person.js";
export {
  personalProjectSyncViewSchema,
  type PersonalProjectSyncView,
} from "./models/personal-project-sync-view.js";
export { Plan, planSchema } from "./models/plan.js";
export { planPriceSchema, type PlanPrice } from "./models/plan-price.js";
export { PlanType, planTypeSchema } from "./models/plan-type.js";
export { PositiveKarmaReason, positiveKarmaReasonSchema } from "./models/positive-karma-reason.js";
export { PremiumStatus, premiumStatusSchema } from "./models/premium-status.js";
export {
  previewFromFileResponseSchema,
  type PreviewFromFileResponse,
} from "./models/preview-from-file-response.js";
export { ProductApp, productAppSchema } from "./models/product-app.js";
export {
  productivityStatsResponseSchema,
  type ProductivityStatsResponse,
} from "./models/productivity-stats-response.js";
export { projectSchema, type Project } from "./models/unions/project.js";
export { projectObjectSchema, type ProjectObject } from "./models/unions/project-object.js";
export { project6Schema, type Project6 } from "./models/unions/project6.js";
export { projectAccessViewSchema, type ProjectAccessView } from "./models/project-access-view.js";
export { projectCompletedItemSchema, type ProjectCompletedItem } from "./models/project-completed-item.js";
export {
  projectImportCreateResponseSchema,
  type ProjectImportCreateResponse,
} from "./models/project-import-create-response.js";
export {
  projectImportCreateResponseWithObjectsSchema,
  type ProjectImportCreateResponseWithObjects,
} from "./models/project-import-create-response-with-objects.js";
export { projectImportResponseSchema, type ProjectImportResponse } from "./models/project-import-response.js";
export { projectNoteSyncViewSchema, type ProjectNoteSyncView } from "./models/project-note-sync-view.js";
export { projectResponseSchema, type ProjectResponse } from "./models/project-response.js";
export { ProjectSortPreference, projectSortPreferenceSchema } from "./models/project-sort-preference.js";
export { ProjectStatus, projectStatusSchema } from "./models/project-status.js";
export {
  projectTemplatePreviewResponseSchema,
  type ProjectTemplatePreviewResponse,
} from "./models/project-template-preview-response.js";
export { ProjectViewStyle, projectViewStyleSchema } from "./models/project-view-style.js";
export { ProjectViewStyleV1, projectViewStyleV1Schema } from "./models/project-view-style-v1.js";
export { ProjectVisibility, projectVisibilitySchema } from "./models/project-visibility.js";
export { propertyAttributesSchema, type PropertyAttributes } from "./models/property-attributes.js";
export { propertySettingsSchema, type PropertySettings } from "./models/property-settings.js";
export {
  publicProjectConfigurationSchema,
  type PublicProjectConfiguration,
} from "./models/public-project-configuration.js";
export { publicTemplateSchema, type PublicTemplate } from "./models/public-template.js";
export {
  publicWorkspacePropertiesSchema,
  type PublicWorkspaceProperties,
} from "./models/public-workspace-properties.js";
export { ReminderType, reminderTypeSchema } from "./models/reminder-type.js";
export { reminderDueAttributeSchema, type ReminderDueAttribute } from "./models/reminder-due-attribute.js";
export { ReminderServiceType, reminderServiceTypeSchema } from "./models/reminder-service-type.js";
export {
  removeWorkspaceUserResponseSchema,
  type RemoveWorkspaceUserResponse,
} from "./models/remove-workspace-user-response.js";
export {
  RemovedNotificationType,
  removedNotificationTypeSchema,
} from "./models/removed-notification-type.js";
export {
  ResponseDeleteUploadApiV1UploadsDelete,
  responseDeleteUploadApiV1UploadsDeleteSchema,
} from "./models/response-delete-upload-api-v1-uploads-delete.js";
export {
  roleToActionMappingViewSchema,
  type RoleToActionMappingView,
} from "./models/role-to-action-mapping-view.js";
export { roleViewSchema, type RoleView } from "./models/role-view.js";
export { sectionSyncViewSchema, type SectionSyncView } from "./models/section-sync-view.js";
export {
  setupTemplatePreviewResponseSchema,
  type SetupTemplatePreviewResponse,
} from "./models/setup-template-preview-response.js";
export { Sort, sortSchema } from "./models/sort.js";
export { SortOrder1, sortOrder1Schema } from "./models/sort-order1.js";
export { SortOption, sortOptionSchema } from "./models/sort-option.js";
export { SortOrder, sortOrderSchema } from "./models/sort-order.js";
export { Status, statusSchema } from "./models/status.js";
export { Status1, status1Schema } from "./models/status1.js";
export { streakInfoSchema, type StreakInfo } from "./models/streak-info.js";
export { subprojectSchema, type Subproject } from "./models/unions/subproject.js";
export { subscriptionInfoSchema, type SubscriptionInfo } from "./models/subscription-info.js";
export {
  tasksCompletedDateResponseSchema,
  type TasksCompletedDateResponse,
} from "./models/tasks-completed-date-response.js";
export { TaxBehavior, taxBehaviorSchema } from "./models/tax-behavior.js";
export { TeamAcquisitionCohort, teamAcquisitionCohortSchema } from "./models/team-acquisition-cohort.js";
export { TemplateSource, templateSourceSchema } from "./models/template-source.js";
export { TemplateSource1, templateSource1Schema } from "./models/template-source1.js";
export { TemplateSource3, templateSource3Schema } from "./models/template-source3.js";
export { TemplateType, templateTypeSchema } from "./models/template-type.js";
export { TemplateType1, templateType1Schema } from "./models/template-type1.js";
export { TemplateType10, templateType10Schema } from "./models/template-type10.js";
export { TemplateType7, templateType7Schema } from "./models/template-type7.js";
export { TemplateType9, templateType9Schema } from "./models/template-type9.js";
export {
  templateCalendarSettingsSchema,
  type TemplateCalendarSettings,
} from "./models/template-calendar-settings.js";
export { templateContentSchema, type TemplateContent } from "./models/template-content.js";
export {
  templatePreviewResponseSchema,
  type TemplatePreviewResponse,
} from "./models/unions/template-preview-response.js";
export {
  templateProjectViewOptionsDefaultsSnapshotSchema,
  type TemplateProjectViewOptionsDefaultsSnapshot,
} from "./models/template-project-view-options-defaults-snapshot.js";
export { ThemeAppearance, themeAppearanceSchema } from "./models/theme-appearance.js";
export { TimeFormat, timeFormatSchema } from "./models/time-format.js";
export { todoistErrorSchema, type TodoistError } from "./models/todoist-error.js";
export { todoistErrorErrorSchema, type TodoistErrorError } from "./models/todoist-error-error.js";
export { TrialGrantSource, trialGrantSourceSchema } from "./models/trial-grant-source.js";
export { Type, typeSchema } from "./models/type.js";
export { Type1, type1Schema } from "./models/type1.js";
export { TypeOfWork, typeOfWorkSchema } from "./models/type-of-work.js";
export { Undefined, undefinedSchema } from "./models/undefined.js";
export { Unit, unitSchema } from "./models/unit.js";
export {
  updateUserTemplateResponseSchema,
  type UpdateUserTemplateResponse,
} from "./models/update-user-template-response.js";
export { UploadState, uploadStateSchema } from "./models/upload-state.js";
export { uploadResultSchema, type UploadResult } from "./models/upload-result.js";
export {
  urgentReminderDeviceViewSchema,
  type UrgentReminderDeviceView,
} from "./models/urgent-reminder-device-view.js";
export { UsageBlockReason, usageBlockReasonSchema } from "./models/usage-block-reason.js";
export { userStatusSchema, type UserStatus } from "./models/user-status.js";
export { userStatusEffectsSchema, type UserStatusEffects } from "./models/user-status-effects.js";
export { userSyncViewSchema, type UserSyncView } from "./models/user-sync-view.js";
export {
  userViewOptionsSyncViewSchema,
  type UserViewOptionsSyncView,
} from "./models/user-view-options-sync-view.js";
export { validationErrorSchema, type ValidationError } from "./models/validation-error.js";
export { VerificationStatus, verificationStatusSchema } from "./models/verification-status.js";
export { ViewMode, viewModeSchema } from "./models/view-mode.js";
export { ViewType, viewTypeSchema } from "./models/view-type.js";
export { VisibleDayCount, visibleDayCountSchema } from "./models/visible-day-count.js";
export { weeklyCompletionItemSchema, type WeeklyCompletionItem } from "./models/weekly-completion-item.js";
export { workspaceIdSchema, type WorkspaceId } from "./models/unions/workspace-id.js";
export {
  workspaceInvitationViewSchema,
  type WorkspaceInvitationView,
} from "./models/workspace-invitation-view.js";
export {
  workspaceLimitsSyncViewSchema,
  type WorkspaceLimitsSyncView,
} from "./models/workspace-limits-sync-view.js";
export {
  workspacePlanLimitSettingsSchema,
  type WorkspacePlanLimitSettings,
} from "./models/workspace-plan-limit-settings.js";
export {
  workspaceProjectSyncViewSchema,
  type WorkspaceProjectSyncView,
} from "./models/workspace-project-sync-view.js";
export { workspaceProjectViewSchema, type WorkspaceProjectView } from "./models/workspace-project-view.js";
export { workspacePropertiesSchema, type WorkspaceProperties } from "./models/workspace-properties.js";
export { WorkspaceRole, workspaceRoleSchema } from "./models/workspace-role.js";
export { workspaceSyncViewSchema, type WorkspaceSyncView } from "./models/workspace-sync-view.js";
export { workspaceUserViewSchema, type WorkspaceUserView } from "./models/workspace-user-view.js";
export { backupResponseSchema, type BackupResponse } from "./models/backup-response.js";
export { creditStateResponseSchema, type CreditStateResponse } from "./models/credit-state-response.js";
export { emailResponseSchema, type EmailResponse } from "./models/email-response.js";
export { getDataV2ResponseSchema, type GetDataV2Response } from "./models/get-data-v2-response.js";
export { historyEntrySchema, type HistoryEntry } from "./models/history-entry.js";
export { historyResponseSchema, type HistoryResponse } from "./models/history-response.js";
export {
  migratePersonalTokenResponseSchema,
  type MigratePersonalTokenResponse,
} from "./models/migrate-personal-token-response.js";
export { planDetailsResponseSchema, type PlanDetailsResponse } from "./models/plan-details-response.js";
export { projectsResponseSchema, type ProjectsResponse } from "./models/projects-response.js";
export { statusOkResponseSchema, type StatusOkResponse } from "./models/status-ok-response.js";
export { topUpResponseSchema, type TopUpResponse } from "./models/top-up-response.js";
export { trialGrantViewSchema, type TrialGrantView } from "./models/trial-grant-view.js";
export { usageGroupResponseSchema, type UsageGroupResponse } from "./models/usage-group-response.js";
export { usageSummaryResponseSchema, type UsageSummaryResponse } from "./models/usage-summary-response.js";
export { usersResponseSchema, type UsersResponse } from "./models/users-response.js";

export {
  CoreError as TodoistApiError,
  ResponseError,
  DecodeError,
  EncodeError,
  ConnectionError,
  TimeoutError,
  AuthError,
  PaginationError,
  ConfigurationError,
} from "./core/errors.js";
export { ApiError } from "./core/api-error.js";
export { SchemaError } from "./core/validation/schema-error.js";
export {
  defaultLoggingOptions,
  type LoggingOptions,
  type RequestLoggingOptions,
  type Logger,
  type LogDetails,
  type HttpRequestDetails,
  type RequestHeadersDetails,
  type RequestBodyDetails,
  type HttpResponseDetails,
  type ResponseHeadersDetails,
  type HttpRetryingDetails,
  type HttpFailedDetails,
  type LogLevel,
} from "./core/logging.js";
export type { ApiPromise, ApiResult } from "./core/api-promise.js";
export type { Pageable, PageableApiResult } from "./core/pagination/pageable.js";
export type { HttpMethod, RequestOptions } from "./core/api-request.js";
export type { RetryOptions, RequestRetryOptions, RetryAttempt, RetryReason } from "./core/retry.js";
export type { BinaryContent, BinaryData, BinaryErrorContent, FileData, FileInput } from "./core/binary.js";
export type { ErrorKind } from "./core/errors.js";
export type { Declared, Undeclared } from "./core/api-error.js";
export type { Schema, EnumSchema, Encoded, ValidationResult, JsonValue } from "./core/validation/schema.js";
