export { ShortcutApiClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { TokenProvider } from "./core/auth/credentials.js";

export { Action, actionSchema } from "./models/action.js";
export { action1Schema, type Action1 } from "./models/unions/action1.js";
export { baseTaskParamsSchema, type BaseTaskParams } from "./models/base-task-params.js";
export { basicWorkspaceInfoSchema, type BasicWorkspaceInfo } from "./models/basic-workspace-info.js";
export { branchSchema, type Branch } from "./models/branch.js";
export { CardAgingMode, cardAgingModeSchema } from "./models/card-aging-mode.js";
export { CardAgingMode1, cardAgingMode1Schema } from "./models/card-aging-mode1.js";
export { categorySchema, type Category } from "./models/category.js";
export { ColorKey, colorKeySchema } from "./models/color-key.js";
export { ColorKey1, colorKey1Schema } from "./models/color-key1.js";
export { ColorKey2, colorKey2Schema } from "./models/color-key2.js";
export { commitSchema, type Commit } from "./models/commit.js";
export { ContentFormat, contentFormatSchema } from "./models/content-format.js";
export { ContentFormat1, contentFormat1Schema } from "./models/content-format1.js";
export { ContentFormat2, contentFormat2Schema } from "./models/content-format2.js";
export { createCategorySchema, type CreateCategory } from "./models/create-category.js";
export { createCategoryParamsSchema, type CreateCategoryParams } from "./models/create-category-params.js";
export { createCommentCommentSchema, type CreateCommentComment } from "./models/create-comment-comment.js";
export { createDocSchema, type CreateDoc } from "./models/create-doc.js";
export { createEntityTemplateSchema, type CreateEntityTemplate } from "./models/create-entity-template.js";
export { createEpicSchema, type CreateEpic } from "./models/create-epic.js";
export { createEpicCommentSchema, type CreateEpicComment } from "./models/create-epic-comment.js";
export { createEpicHealthSchema, type CreateEpicHealth } from "./models/create-epic-health.js";
export {
  createGenericIntegrationSchema,
  type CreateGenericIntegration,
} from "./models/create-generic-integration.js";
export { createGroupSchema, type CreateGroup } from "./models/create-group.js";
export { createIterationSchema, type CreateIteration } from "./models/create-iteration.js";
export { createLabelParamsSchema, type CreateLabelParams } from "./models/create-label-params.js";
export { createLinkedFileSchema, type CreateLinkedFile } from "./models/create-linked-file.js";
export { createMilestoneSchema, type CreateMilestone } from "./models/create-milestone.js";
export { createObjectiveSchema, type CreateObjective } from "./models/create-objective.js";
export { createObjectiveHealthSchema, type CreateObjectiveHealth } from "./models/create-objective-health.js";
export {
  createOrDeleteStoryReactionSchema,
  type CreateOrDeleteStoryReaction,
} from "./models/create-or-delete-story-reaction.js";
export { createProjectSchema, type CreateProject } from "./models/create-project.js";
export { createStoriesSchema, type CreateStories } from "./models/create-stories.js";
export { createStoryCommentSchema, type CreateStoryComment } from "./models/create-story-comment.js";
export {
  createStoryCommentParamsSchema,
  type CreateStoryCommentParams,
} from "./models/create-story-comment-params.js";
export { createStoryContentsSchema, type CreateStoryContents } from "./models/create-story-contents.js";
export {
  createStoryFromTemplateParamsSchema,
  type CreateStoryFromTemplateParams,
} from "./models/create-story-from-template-params.js";
export { createStoryLinkSchema, type CreateStoryLink } from "./models/create-story-link.js";
export {
  createStoryLinkParamsSchema,
  type CreateStoryLinkParams,
} from "./models/create-story-link-params.js";
export { createStoryParamsSchema, type CreateStoryParams } from "./models/create-story-params.js";
export { createSubTaskParamsSchema, type CreateSubTaskParams } from "./models/create-sub-task-params.js";
export { createTaskSchema, type CreateTask } from "./models/create-task.js";
export { createTaskParamsSchema, type CreateTaskParams } from "./models/create-task-params.js";
export { customFieldSchema, type CustomField } from "./models/custom-field.js";
export { customFieldEnumValueSchema, type CustomFieldEnumValue } from "./models/custom-field-enum-value.js";
export {
  customFieldValueParamsSchema,
  type CustomFieldValueParams,
} from "./models/custom-field-value-params.js";
export { dataConflictErrorSchema, type DataConflictError } from "./models/data-conflict-error.js";
export {
  dataConflictErrorErrorSchema,
  type DataConflictErrorError,
} from "./models/data-conflict-error-error.js";
export { deleteStoriesSchema, type DeleteStories } from "./models/delete-stories.js";
export { disabledFeatureErrorSchema, type DisabledFeatureError } from "./models/disabled-feature-error.js";
export {
  disabledFeatureErrorErrorSchema,
  type DisabledFeatureErrorError,
} from "./models/disabled-feature-error-error.js";
export { docSchema, type Doc } from "./models/doc.js";
export { docSearchResultsSchema, type DocSearchResults } from "./models/doc-search-results.js";
export { docSlimSchema, type DocSlim } from "./models/doc-slim.js";
export { entityTemplateSchema, type EntityTemplate } from "./models/entity-template.js";
export { epicSchema, type Epic } from "./models/epic.js";
export { epicAssociatedGroupSchema, type EpicAssociatedGroup } from "./models/epic-associated-group.js";
export { epicPaginatedResultsSchema, type EpicPaginatedResults } from "./models/epic-paginated-results.js";
export { epicSearchResultSchema, type EpicSearchResult } from "./models/epic-search-result.js";
export { epicSearchResultsSchema, type EpicSearchResults } from "./models/epic-search-results.js";
export { epicSlimSchema, type EpicSlim } from "./models/epic-slim.js";
export { epicStateSchema, type EpicState } from "./models/epic-state.js";
export { epicStatsSchema, type EpicStats } from "./models/epic-stats.js";
export { epicWorkflowSchema, type EpicWorkflow } from "./models/epic-workflow.js";
export { getDocSchema, type GetDoc } from "./models/get-doc.js";
export { groupSchema, type Group } from "./models/group.js";
export { healthSchema, type Health } from "./models/health.js";
export { historySchema, type History } from "./models/history.js";
export {
  historyActionBranchCreateSchema,
  type HistoryActionBranchCreate,
} from "./models/history-action-branch-create.js";
export {
  historyActionBranchMergeSchema,
  type HistoryActionBranchMerge,
} from "./models/history-action-branch-merge.js";
export {
  historyActionBranchPushSchema,
  type HistoryActionBranchPush,
} from "./models/history-action-branch-push.js";
export {
  historyActionLabelCreateSchema,
  type HistoryActionLabelCreate,
} from "./models/history-action-label-create.js";
export {
  historyActionLabelDeleteSchema,
  type HistoryActionLabelDelete,
} from "./models/history-action-label-delete.js";
export {
  historyActionLabelUpdateSchema,
  type HistoryActionLabelUpdate,
} from "./models/history-action-label-update.js";
export {
  historyActionProjectUpdateSchema,
  type HistoryActionProjectUpdate,
} from "./models/history-action-project-update.js";
export {
  historyActionPullRequestSchema,
  type HistoryActionPullRequest,
} from "./models/history-action-pull-request.js";
export {
  historyActionStoryCommentCreateSchema,
  type HistoryActionStoryCommentCreate,
} from "./models/history-action-story-comment-create.js";
export {
  historyActionStoryCreateSchema,
  type HistoryActionStoryCreate,
} from "./models/history-action-story-create.js";
export {
  historyActionStoryDeleteSchema,
  type HistoryActionStoryDelete,
} from "./models/history-action-story-delete.js";
export {
  historyActionStoryLinkCreateSchema,
  type HistoryActionStoryLinkCreate,
} from "./models/history-action-story-link-create.js";
export {
  historyActionStoryLinkDeleteSchema,
  type HistoryActionStoryLinkDelete,
} from "./models/history-action-story-link-delete.js";
export {
  historyActionStoryLinkUpdateSchema,
  type HistoryActionStoryLinkUpdate,
} from "./models/history-action-story-link-update.js";
export {
  historyActionStoryUpdateSchema,
  type HistoryActionStoryUpdate,
} from "./models/history-action-story-update.js";
export {
  historyActionTaskCreateSchema,
  type HistoryActionTaskCreate,
} from "./models/history-action-task-create.js";
export {
  historyActionTaskDeleteSchema,
  type HistoryActionTaskDelete,
} from "./models/history-action-task-delete.js";
export {
  historyActionTaskUpdateSchema,
  type HistoryActionTaskUpdate,
} from "./models/history-action-task-update.js";
export {
  historyActionWorkspace2BulkUpdateSchema,
  type HistoryActionWorkspace2BulkUpdate,
} from "./models/history-action-workspace2-bulk-update.js";
export { historyChangesStorySchema, type HistoryChangesStory } from "./models/history-changes-story.js";
export {
  historyChangesStoryLinkSchema,
  type HistoryChangesStoryLink,
} from "./models/history-changes-story-link.js";
export { historyChangesTaskSchema, type HistoryChangesTask } from "./models/history-changes-task.js";
export {
  historyReferenceBranchSchema,
  type HistoryReferenceBranch,
} from "./models/history-reference-branch.js";
export {
  historyReferenceCommitSchema,
  type HistoryReferenceCommit,
} from "./models/history-reference-commit.js";
export {
  historyReferenceCustomFieldEnumValueSchema,
  type HistoryReferenceCustomFieldEnumValue,
} from "./models/history-reference-custom-field-enum-value.js";
export { historyReferenceEpicSchema, type HistoryReferenceEpic } from "./models/history-reference-epic.js";
export {
  historyReferenceGeneralSchema,
  type HistoryReferenceGeneral,
} from "./models/history-reference-general.js";
export { historyReferenceGroupSchema, type HistoryReferenceGroup } from "./models/history-reference-group.js";
export {
  historyReferenceIterationSchema,
  type HistoryReferenceIteration,
} from "./models/history-reference-iteration.js";
export { historyReferenceLabelSchema, type HistoryReferenceLabel } from "./models/history-reference-label.js";
export {
  historyReferenceProjectSchema,
  type HistoryReferenceProject,
} from "./models/history-reference-project.js";
export { historyReferenceStorySchema, type HistoryReferenceStory } from "./models/history-reference-story.js";
export {
  historyReferenceStoryTaskSchema,
  type HistoryReferenceStoryTask,
} from "./models/history-reference-story-task.js";
export {
  historyReferenceWorkflowStateSchema,
  type HistoryReferenceWorkflowState,
} from "./models/history-reference-workflow-state.js";
export { iconSchema, type Icon } from "./models/icon.js";
export { idSchema, type Id } from "./models/unions/id.js";
export { identitySchema, type Identity } from "./models/identity.js";
export { iterationSchema, type Iteration } from "./models/iteration.js";
export {
  iterationAssociatedGroupSchema,
  type IterationAssociatedGroup,
} from "./models/iteration-associated-group.js";
export {
  iterationSearchResultsSchema,
  type IterationSearchResults,
} from "./models/iteration-search-results.js";
export { iterationSlimSchema, type IterationSlim } from "./models/iteration-slim.js";
export { iterationStatsSchema, type IterationStats } from "./models/iteration-stats.js";
export { keyResultSchema, type KeyResult } from "./models/key-result.js";
export { keyResultValueSchema, type KeyResultValue } from "./models/key-result-value.js";
export { labelSchema, type Label } from "./models/label.js";
export { labelSlimSchema, type LabelSlim } from "./models/label-slim.js";
export { labelStatsSchema, type LabelStats } from "./models/label-stats.js";
export { linkSubTaskParamsSchema, type LinkSubTaskParams } from "./models/link-sub-task-params.js";
export { linkedFileSchema, type LinkedFile } from "./models/linked-file.js";
export {
  maxSearchResultsExceededErrorSchema,
  type MaxSearchResultsExceededError,
} from "./models/max-search-results-exceeded-error.js";
export {
  maxSearchResultsExceededErrorErrorSchema,
  type MaxSearchResultsExceededErrorError,
} from "./models/max-search-results-exceeded-error-error.js";
export { memberSchema, type Member } from "./models/member.js";
export { memberInfoSchema, type MemberInfo } from "./models/member-info.js";
export {
  memberInfoOrganization2Schema,
  type MemberInfoOrganization2,
} from "./models/member-info-organization2.js";
export { milestoneSchema, type Milestone } from "./models/milestone.js";
export { milestoneStatsSchema, type MilestoneStats } from "./models/milestone-stats.js";
export { MoveTo, moveToSchema } from "./models/move-to.js";
export { objectiveSchema, type Objective } from "./models/objective.js";
export { objectiveSearchResultSchema, type ObjectiveSearchResult } from "./models/objective-search-result.js";
export {
  objectiveSearchResultsSchema,
  type ObjectiveSearchResults,
} from "./models/objective-search-results.js";
export { objectiveStatsSchema, type ObjectiveStats } from "./models/objective-stats.js";
export { primaryIdSchema, type PrimaryId } from "./models/unions/primary-id.js";
export { profileSchema, type Profile } from "./models/profile.js";
export { projectSchema, type Project } from "./models/project.js";
export { projectStatsSchema, type ProjectStats } from "./models/project-stats.js";
export { pullRequestSchema, type PullRequest } from "./models/pull-request.js";
export { pullRequestLabelSchema, type PullRequestLabel } from "./models/pull-request-label.js";
export { referenceSchema, type Reference } from "./models/unions/reference.js";
export {
  removeCustomFieldParamsSchema,
  type RemoveCustomFieldParams,
} from "./models/remove-custom-field-params.js";
export { removeLabelParamsSchema, type RemoveLabelParams } from "./models/remove-label-params.js";
export { repositorySchema, type Repository } from "./models/repository.js";
export { searchResultsSchema, type SearchResults } from "./models/search-results.js";
export { searchStoriesSchema, type SearchStories } from "./models/search-stories.js";
export { shortcutErrorSchema, type ShortcutError } from "./models/shortcut-error.js";
export { shortcutErrorErrorSchema, type ShortcutErrorError } from "./models/shortcut-error-error.js";
export { Size, sizeSchema } from "./models/size.js";
export { State, stateSchema } from "./models/state.js";
export { State1, state1Schema } from "./models/state1.js";
export { State2, state2Schema } from "./models/state2.js";
export { State3, state3Schema } from "./models/state3.js";
export { Status, statusSchema } from "./models/status.js";
export { Status1, status1Schema } from "./models/status1.js";
export { Status2, status2Schema } from "./models/status2.js";
export { storySchema, type Story } from "./models/story.js";
export { storyCommentSchema, type StoryComment } from "./models/story-comment.js";
export { storyContentsSchema, type StoryContents } from "./models/story-contents.js";
export { storyContentsTaskSchema, type StoryContentsTask } from "./models/story-contents-task.js";
export { storyCustomFieldSchema, type StoryCustomField } from "./models/story-custom-field.js";
export {
  storyHistoryChangeAddsRemovesIntSchema,
  type StoryHistoryChangeAddsRemovesInt,
} from "./models/story-history-change-adds-removes-int.js";
export {
  storyHistoryChangeAddsRemovesUuidSchema,
  type StoryHistoryChangeAddsRemovesUuid,
} from "./models/story-history-change-adds-removes-uuid.js";
export {
  storyHistoryChangeOldNewBoolSchema,
  type StoryHistoryChangeOldNewBool,
} from "./models/story-history-change-old-new-bool.js";
export {
  storyHistoryChangeOldNewIntSchema,
  type StoryHistoryChangeOldNewInt,
} from "./models/story-history-change-old-new-int.js";
export {
  storyHistoryChangeOldNewStrSchema,
  type StoryHistoryChangeOldNewStr,
} from "./models/story-history-change-old-new-str.js";
export {
  storyHistoryChangeOldNewUuidSchema,
  type StoryHistoryChangeOldNewUuid,
} from "./models/story-history-change-old-new-uuid.js";
export { storyLinkSchema, type StoryLink } from "./models/story-link.js";
export { storyReactionSchema, type StoryReaction } from "./models/story-reaction.js";
export { storySearchResultSchema, type StorySearchResult } from "./models/story-search-result.js";
export { storySearchResultsSchema, type StorySearchResults } from "./models/story-search-results.js";
export { storySlimSchema, type StorySlim } from "./models/story-slim.js";
export { storyStatsSchema, type StoryStats } from "./models/story-stats.js";
export { StoryType, storyTypeSchema } from "./models/story-type.js";
export { StoryType2, storyType2Schema } from "./models/story-type2.js";
export { StoryType3, storyType3Schema } from "./models/story-type3.js";
export { StoryType6, storyType6Schema } from "./models/story-type6.js";
export { subTaskSchema, type SubTask } from "./models/unions/sub-task.js";
export { syncedItemSchema, type SyncedItem } from "./models/synced-item.js";
export { taskSchema, type Task } from "./models/task.js";
export { threadedCommentSchema, type ThreadedComment } from "./models/threaded-comment.js";
export { Type, typeSchema } from "./models/type.js";
export { Type1, type1Schema } from "./models/type1.js";
export { Type2, type2Schema } from "./models/type2.js";
export { Type3, type3Schema } from "./models/type3.js";
export { Type4, type4Schema } from "./models/type4.js";
export { typedStoryLinkSchema, type TypedStoryLink } from "./models/typed-story-link.js";
export { unprocessableErrorSchema, type UnprocessableError } from "./models/unprocessable-error.js";
export {
  unprocessableErrorErrorSchema,
  type UnprocessableErrorError,
} from "./models/unprocessable-error-error.js";
export {
  unusableEntitlementErrorSchema,
  type UnusableEntitlementError,
} from "./models/unusable-entitlement-error.js";
export {
  unusableEntitlementErrorErrorSchema,
  type UnusableEntitlementErrorError,
} from "./models/unusable-entitlement-error-error.js";
export { updateCategorySchema, type UpdateCategory } from "./models/update-category.js";
export { updateCommentSchema, type UpdateComment } from "./models/update-comment.js";
export { updateCustomFieldSchema, type UpdateCustomField } from "./models/update-custom-field.js";
export {
  updateCustomFieldEnumValueSchema,
  type UpdateCustomFieldEnumValue,
} from "./models/update-custom-field-enum-value.js";
export { updateDocSchema, type UpdateDoc } from "./models/update-doc.js";
export { updateEntityTemplateSchema, type UpdateEntityTemplate } from "./models/update-entity-template.js";
export { updateEpicSchema, type UpdateEpic } from "./models/update-epic.js";
export { updateFileSchema, type UpdateFile } from "./models/update-file.js";
export { updateGroupSchema, type UpdateGroup } from "./models/update-group.js";
export { updateHealthSchema, type UpdateHealth } from "./models/update-health.js";
export { updateIterationSchema, type UpdateIteration } from "./models/update-iteration.js";
export { updateKeyResultSchema, type UpdateKeyResult } from "./models/update-key-result.js";
export { updateLabelSchema, type UpdateLabel } from "./models/update-label.js";
export { updateLinkedFileSchema, type UpdateLinkedFile } from "./models/update-linked-file.js";
export { updateMilestoneSchema, type UpdateMilestone } from "./models/update-milestone.js";
export { updateObjectiveSchema, type UpdateObjective } from "./models/update-objective.js";
export { updateProjectSchema, type UpdateProject } from "./models/update-project.js";
export { updateStoriesSchema, type UpdateStories } from "./models/update-stories.js";
export { updateStorySchema, type UpdateStory } from "./models/update-story.js";
export { updateStoryCommentSchema, type UpdateStoryComment } from "./models/update-story-comment.js";
export { updateStoryContentsSchema, type UpdateStoryContents } from "./models/update-story-contents.js";
export { updateStoryLinkSchema, type UpdateStoryLink } from "./models/update-story-link.js";
export { updateTaskSchema, type UpdateTask } from "./models/update-task.js";
export { uploadedFileSchema, type UploadedFile } from "./models/uploaded-file.js";
export { Verb, verbSchema } from "./models/verb.js";
export { Verb1, verb1Schema } from "./models/verb1.js";
export { Verb2, verb2Schema } from "./models/verb2.js";
export { workflowSchema, type Workflow } from "./models/workflow.js";
export { workflowStateSchema, type WorkflowState } from "./models/workflow-state.js";
export { WorkflowStateType, workflowStateTypeSchema } from "./models/workflow-state-type.js";
export { ContentFormat3, contentFormat3Schema } from "./models/content-format3.js";
export { Detail, detailSchema } from "./models/detail.js";
export { EntityType, entityTypeSchema } from "./models/entity-type.js";

export {
  CoreError as ShortcutApiError,
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
