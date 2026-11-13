import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { ApiError, type Declared, type Undeclared } from "./core/api-error.js";
import type { ApiPromise } from "./core/api-promise.js";
import type { RequestOptions } from "./core/api-request.js";
import type { FileInput } from "./core/binary.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import type { ErrorDecoders } from "./core/response-decoder.js";
import * as host from "./core/runtime-environment.js";
import { uuid } from "./core/uuid.js";
import * as s from "./core/validation/index.js";
import type { Schema } from "./core/validation/schema.js";
import { categoryInternalSchema, type Category } from "./models/category.js";
import { contentFormat3Schema, type ContentFormat3 } from "./models/content-format3.js";
import { createCategoryInternalSchema, type CreateCategory } from "./models/create-category.js";
import {
  createCommentCommentInternalSchema,
  type CreateCommentComment,
} from "./models/create-comment-comment.js";
import { createDocInternalSchema, type CreateDoc } from "./models/create-doc.js";
import {
  createEntityTemplateInternalSchema,
  type CreateEntityTemplate,
} from "./models/create-entity-template.js";
import { createEpicCommentInternalSchema, type CreateEpicComment } from "./models/create-epic-comment.js";
import { createEpicHealthSchema, type CreateEpicHealth } from "./models/create-epic-health.js";
import { createEpicInternalSchema, type CreateEpic } from "./models/create-epic.js";
import {
  createGenericIntegrationInternalSchema,
  type CreateGenericIntegration,
} from "./models/create-generic-integration.js";
import { createGroupInternalSchema, type CreateGroup } from "./models/create-group.js";
import { createIterationInternalSchema, type CreateIteration } from "./models/create-iteration.js";
import { createLabelParamsInternalSchema, type CreateLabelParams } from "./models/create-label-params.js";
import { createLinkedFileInternalSchema, type CreateLinkedFile } from "./models/create-linked-file.js";
import { createMilestoneInternalSchema, type CreateMilestone } from "./models/create-milestone.js";
import { createObjectiveHealthSchema, type CreateObjectiveHealth } from "./models/create-objective-health.js";
import { createObjectiveInternalSchema, type CreateObjective } from "./models/create-objective.js";
import {
  createOrDeleteStoryReactionSchema,
  type CreateOrDeleteStoryReaction,
} from "./models/create-or-delete-story-reaction.js";
import { createProjectInternalSchema, type CreateProject } from "./models/create-project.js";
import { createStoriesInternalSchema, type CreateStories } from "./models/create-stories.js";
import { createStoryCommentInternalSchema, type CreateStoryComment } from "./models/create-story-comment.js";
import {
  createStoryFromTemplateParamsInternalSchema,
  type CreateStoryFromTemplateParams,
} from "./models/create-story-from-template-params.js";
import { createStoryLinkSchema, type CreateStoryLink } from "./models/create-story-link.js";
import { createStoryParamsInternalSchema, type CreateStoryParams } from "./models/create-story-params.js";
import { createTaskInternalSchema, type CreateTask } from "./models/create-task.js";
import { customFieldInternalSchema, type CustomField } from "./models/custom-field.js";
import { dataConflictErrorSchema, type DataConflictError } from "./models/data-conflict-error.js";
import { deleteStoriesInternalSchema, type DeleteStories } from "./models/delete-stories.js";
import { detailSchema, type Detail } from "./models/detail.js";
import { disabledFeatureErrorSchema, type DisabledFeatureError } from "./models/disabled-feature-error.js";
import { docSearchResultsSchema, type DocSearchResults } from "./models/doc-search-results.js";
import { docSlimSchema, type DocSlim } from "./models/doc-slim.js";
import { docSchema, type Doc } from "./models/doc.js";
import { entityTemplateInternalSchema, type EntityTemplate } from "./models/entity-template.js";
import { entityTypeSchema, type EntityType } from "./models/entity-type.js";
import {
  epicPaginatedResultsInternalSchema,
  type EpicPaginatedResults,
} from "./models/epic-paginated-results.js";
import { epicSearchResultsInternalSchema, type EpicSearchResults } from "./models/epic-search-results.js";
import { epicSlimInternalSchema, type EpicSlim } from "./models/epic-slim.js";
import { epicWorkflowInternalSchema, type EpicWorkflow } from "./models/epic-workflow.js";
import { epicInternalSchema, type Epic } from "./models/epic.js";
import { getDocSchema, type GetDoc } from "./models/get-doc.js";
import { groupInternalSchema, type Group } from "./models/group.js";
import { healthSchema, type Health } from "./models/health.js";
import { historyInternalSchema, type History } from "./models/history.js";
import {
  iterationSearchResultsInternalSchema,
  type IterationSearchResults,
} from "./models/iteration-search-results.js";
import { iterationSlimInternalSchema, type IterationSlim } from "./models/iteration-slim.js";
import { iterationInternalSchema, type Iteration } from "./models/iteration.js";
import { keyResultSchema, type KeyResult } from "./models/key-result.js";
import { labelInternalSchema, type Label } from "./models/label.js";
import { linkedFileSchema, type LinkedFile } from "./models/linked-file.js";
import {
  maxSearchResultsExceededErrorSchema,
  type MaxSearchResultsExceededError,
} from "./models/max-search-results-exceeded-error.js";
import { memberInfoSchema, type MemberInfo } from "./models/member-info.js";
import { memberSchema, type Member } from "./models/member.js";
import { milestoneInternalSchema, type Milestone } from "./models/milestone.js";
import {
  objectiveSearchResultsInternalSchema,
  type ObjectiveSearchResults,
} from "./models/objective-search-results.js";
import { objectiveInternalSchema, type Objective } from "./models/objective.js";
import { projectInternalSchema, type Project } from "./models/project.js";
import { repositorySchema, type Repository } from "./models/repository.js";
import { searchResultsInternalSchema, type SearchResults } from "./models/search-results.js";
import { searchStoriesInternalSchema, type SearchStories } from "./models/search-stories.js";
import { shortcutErrorSchema, type ShortcutError } from "./models/shortcut-error.js";
import { storyCommentSchema, type StoryComment } from "./models/story-comment.js";
import { storyLinkSchema, type StoryLink } from "./models/story-link.js";
import { storyReactionSchema, type StoryReaction } from "./models/story-reaction.js";
import { storySearchResultsInternalSchema, type StorySearchResults } from "./models/story-search-results.js";
import { storySlimInternalSchema, type StorySlim } from "./models/story-slim.js";
import { storyInternalSchema, type Story } from "./models/story.js";
import { taskSchema, type Task } from "./models/task.js";
import { threadedCommentSchema, type ThreadedComment } from "./models/threaded-comment.js";
import { unprocessableErrorSchema, type UnprocessableError } from "./models/unprocessable-error.js";
import {
  unusableEntitlementErrorInternalSchema,
  type UnusableEntitlementError,
} from "./models/unusable-entitlement-error.js";
import { updateCategoryInternalSchema, type UpdateCategory } from "./models/update-category.js";
import { updateCommentSchema, type UpdateComment } from "./models/update-comment.js";
import { updateCustomFieldInternalSchema, type UpdateCustomField } from "./models/update-custom-field.js";
import { updateDocInternalSchema, type UpdateDoc } from "./models/update-doc.js";
import {
  updateEntityTemplateInternalSchema,
  type UpdateEntityTemplate,
} from "./models/update-entity-template.js";
import { updateEpicInternalSchema, type UpdateEpic } from "./models/update-epic.js";
import { updateFileInternalSchema, type UpdateFile } from "./models/update-file.js";
import { updateGroupInternalSchema, type UpdateGroup } from "./models/update-group.js";
import { updateHealthSchema, type UpdateHealth } from "./models/update-health.js";
import { updateIterationInternalSchema, type UpdateIteration } from "./models/update-iteration.js";
import { updateKeyResultInternalSchema, type UpdateKeyResult } from "./models/update-key-result.js";
import { updateLabelInternalSchema, type UpdateLabel } from "./models/update-label.js";
import { updateLinkedFileInternalSchema, type UpdateLinkedFile } from "./models/update-linked-file.js";
import { updateMilestoneInternalSchema, type UpdateMilestone } from "./models/update-milestone.js";
import { updateObjectiveInternalSchema, type UpdateObjective } from "./models/update-objective.js";
import { updateProjectInternalSchema, type UpdateProject } from "./models/update-project.js";
import { updateStoriesInternalSchema, type UpdateStories } from "./models/update-stories.js";
import { updateStoryCommentInternalSchema, type UpdateStoryComment } from "./models/update-story-comment.js";
import { updateStoryLinkSchema, type UpdateStoryLink } from "./models/update-story-link.js";
import { updateStoryInternalSchema, type UpdateStory } from "./models/update-story.js";
import { updateTaskInternalSchema, type UpdateTask } from "./models/update-task.js";
import { uploadedFileSchema, type UploadedFile } from "./models/uploaded-file.js";
import { workflowInternalSchema, type Workflow } from "./models/workflow.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Shortcut API
 */
export class ShortcutApiClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "SHORTCUT_API_CLIENT_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "ShortcutApiClient/3.0.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "3.0.0", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);

    this.#auth = buildAuthSchemes(options);
  }

  /**
   * Create Category
   *
   * @remarks
   * Create Category allows you to create a new Category in Shortcut.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.CreateCategoryError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCategory(
    request: ShortcutApiClient.CreateCategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<Category, ShortcutApiClient.CreateCategoryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/categories"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createCategoryInternalSchema },
      },
      {
        success: { kind: "json", schema: categoryInternalSchema },
        errorFactory: ShortcutApiClient.CreateCategoryError,
      },
      options,
    );
  }

  /**
   * Create Doc
   *
   * @remarks
   * Creates a new Doc. Supports markdown or HTML input via content_format parameter. WARNING: if
   * content_format is not supplied, `content` input defaults to html.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.CreateDocError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createDoc(
    request: ShortcutApiClient.CreateDocRequest,
    options?: RequestOptions,
  ): ApiPromise<DocSlim, ShortcutApiClient.CreateDocError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/documents"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createDocInternalSchema },
      },
      {
        success: { kind: "json", schema: docSlimSchema },
        errorFactory: ShortcutApiClient.CreateDocError,
      },
      options,
    );
  }

  /**
   * Create Entity Template
   *
   * @remarks
   * Create a new entity template for the Workspace.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.CreateEntityTemplateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createEntityTemplate(
    request: ShortcutApiClient.CreateEntityTemplateRequest,
    options?: RequestOptions,
  ): ApiPromise<EntityTemplate, ShortcutApiClient.CreateEntityTemplateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/entity-templates"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createEntityTemplateInternalSchema },
      },
      {
        success: { kind: "json", schema: entityTemplateInternalSchema },
        errorFactory: ShortcutApiClient.CreateEntityTemplateError,
      },
      options,
    );
  }

  /**
   * Create Epic
   *
   * @remarks
   * Create Epic allows you to create a new Epic in Shortcut.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.CreateEpicError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createEpic(
    request: ShortcutApiClient.CreateEpicRequest,
    options?: RequestOptions,
  ): ApiPromise<Epic, ShortcutApiClient.CreateEpicError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/epics"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createEpicInternalSchema },
      },
      {
        success: { kind: "json", schema: epicInternalSchema },
        errorFactory: ShortcutApiClient.CreateEpicError,
      },
      options,
    );
  }

  /**
   * Create Epic Comment
   *
   * @remarks
   * This endpoint allows you to create a threaded Comment on an Epic.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.CreateEpicCommentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createEpicComment(
    request: ShortcutApiClient.CreateEpicCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<ThreadedComment, ShortcutApiClient.CreateEpicCommentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/epics/{epic-public-id}/comments"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "epic-public-id", value: request.epicPublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createEpicCommentInternalSchema },
      },
      {
        success: { kind: "json", schema: threadedCommentSchema },
        errorFactory: ShortcutApiClient.CreateEpicCommentError,
      },
      options,
    );
  }

  /**
   * Create Epic Comment Comment
   *
   * @remarks
   * This endpoint allows you to create a nested Comment reply to an existing Epic Comment.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.CreateEpicCommentCommentError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createEpicCommentComment(
    request: ShortcutApiClient.CreateEpicCommentCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<ThreadedComment, ShortcutApiClient.CreateEpicCommentCommentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/epics/{epic-public-id}/comments/{comment-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "epic-public-id", value: request.epicPublicId, schema: s.int() },
          { name: "comment-public-id", value: request.commentPublicId, schema: s.int() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createCommentCommentInternalSchema },
      },
      {
        success: { kind: "json", schema: threadedCommentSchema },
        errorFactory: ShortcutApiClient.CreateEpicCommentCommentError,
      },
      options,
    );
  }

  /**
   * Create Epic Health
   *
   * @remarks
   * Create a new health status for the specified Epic.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.CreateEpicHealthError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createEpicHealth(
    request: ShortcutApiClient.CreateEpicHealthRequest,
    options?: RequestOptions,
  ): ApiPromise<Health, ShortcutApiClient.CreateEpicHealthError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/epics/{epic-public-id}/health"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "epic-public-id", value: request.epicPublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createEpicHealthSchema },
      },
      {
        success: { kind: "json", schema: healthSchema },
        errorFactory: ShortcutApiClient.CreateEpicHealthError,
      },
      options,
    );
  }

  /**
   * Create Generic Integration
   *
   * @returns No Content
   *
   * @throws {@link ShortcutApiClient.CreateGenericIntegrationError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createGenericIntegration(
    request: ShortcutApiClient.CreateGenericIntegrationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShortcutApiClient.CreateGenericIntegrationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/integrations/webhook"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createGenericIntegrationInternalSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShortcutApiClient.CreateGenericIntegrationError,
      },
      options,
    );
  }

  /**
   * Create Group
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.CreateGroupError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createGroup(
    request: ShortcutApiClient.CreateGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<Group, ShortcutApiClient.CreateGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/groups"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createGroupInternalSchema },
      },
      {
        success: { kind: "json", schema: groupInternalSchema },
        errorFactory: ShortcutApiClient.CreateGroupError,
      },
      options,
    );
  }

  /**
   * Create Iteration
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.CreateIterationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createIteration(
    request: ShortcutApiClient.CreateIterationRequest,
    options?: RequestOptions,
  ): ApiPromise<Iteration, ShortcutApiClient.CreateIterationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/iterations"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createIterationInternalSchema },
      },
      {
        success: { kind: "json", schema: iterationInternalSchema },
        errorFactory: ShortcutApiClient.CreateIterationError,
      },
      options,
    );
  }

  /**
   * Create Label
   *
   * @remarks
   * Create Label allows you to create a new Label in Shortcut.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.CreateLabelError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createLabel(
    request: ShortcutApiClient.CreateLabelRequest,
    options?: RequestOptions,
  ): ApiPromise<Label, ShortcutApiClient.CreateLabelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/labels"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createLabelParamsInternalSchema },
      },
      {
        success: { kind: "json", schema: labelInternalSchema },
        errorFactory: ShortcutApiClient.CreateLabelError,
      },
      options,
    );
  }

  /**
   * Create Linked File
   *
   * @remarks
   * Create Linked File allows you to create a new Linked File in Shortcut.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.CreateLinkedFileError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createLinkedFile(
    request: ShortcutApiClient.CreateLinkedFileRequest,
    options?: RequestOptions,
  ): ApiPromise<LinkedFile, ShortcutApiClient.CreateLinkedFileError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/linked-files"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createLinkedFileInternalSchema },
      },
      {
        success: { kind: "json", schema: linkedFileSchema },
        errorFactory: ShortcutApiClient.CreateLinkedFileError,
      },
      options,
    );
  }

  /**
   * Create Milestone
   *
   * @remarks
   * (Deprecated: Use 'Create Objective') Create Milestone allows you to create a new Milestone in
   * Shortcut.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.CreateMilestoneError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  createMilestone(
    request: ShortcutApiClient.CreateMilestoneRequest,
    options?: RequestOptions,
  ): ApiPromise<Milestone, ShortcutApiClient.CreateMilestoneError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/milestones"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createMilestoneInternalSchema },
      },
      {
        success: { kind: "json", schema: milestoneInternalSchema },
        errorFactory: ShortcutApiClient.CreateMilestoneError,
      },
      options,
    );
  }

  /**
   * Create Multiple Stories
   *
   * @remarks
   * Create Multiple Stories allows you to create multiple stories in a single request using the
   * same syntax as [Create Story](https://developer.shortcut.com/api/rest/v3#create-story).
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.CreateMultipleStoriesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createMultipleStories(
    request: ShortcutApiClient.CreateMultipleStoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<StorySlim[], ShortcutApiClient.CreateMultipleStoriesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/stories/bulk"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createStoriesInternalSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => storySlimInternalSchema)) },
        errorFactory: ShortcutApiClient.CreateMultipleStoriesError,
      },
      options,
    );
  }

  /**
   * Create Objective
   *
   * @remarks
   * Create Objective allows you to create a new Objective in Shortcut.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.CreateObjectiveError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createObjective(
    request: ShortcutApiClient.CreateObjectiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Objective, ShortcutApiClient.CreateObjectiveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/objectives"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createObjectiveInternalSchema },
      },
      {
        success: { kind: "json", schema: objectiveInternalSchema },
        errorFactory: ShortcutApiClient.CreateObjectiveError,
      },
      options,
    );
  }

  /**
   * Create Objective Health
   *
   * @remarks
   * Create a new health status for the specified Objective.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.CreateObjectiveHealthError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createObjectiveHealth(
    request: ShortcutApiClient.CreateObjectiveHealthRequest,
    options?: RequestOptions,
  ): ApiPromise<Health, ShortcutApiClient.CreateObjectiveHealthError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/objectives/{objective-public-id}/health"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "objective-public-id", value: request.objectivePublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createObjectiveHealthSchema },
      },
      {
        success: { kind: "json", schema: healthSchema },
        errorFactory: ShortcutApiClient.CreateObjectiveHealthError,
      },
      options,
    );
  }

  /**
   * Create Project
   *
   * @remarks
   * Create Project is used to create a new Shortcut Project.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.CreateProjectError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createProject(
    request: ShortcutApiClient.CreateProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<Project, ShortcutApiClient.CreateProjectError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/projects"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createProjectInternalSchema },
      },
      {
        success: { kind: "json", schema: projectInternalSchema },
        errorFactory: ShortcutApiClient.CreateProjectError,
      },
      options,
    );
  }

  /**
   * Create Story
   *
   * @remarks
   * Create Story is used to add a new story to your Shortcut Workspace. This endpoint requires that
   * either **workflow_state_id** or **project_id** be provided, but will reject the request if both
   * or neither are specified. The workflow_state_id has been marked as required and is the
   * recommended field to specify because we are in the process of sunsetting Projects in Shortcut.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.CreateStoryError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createStory(
    request: ShortcutApiClient.CreateStoryRequest,
    options?: RequestOptions,
  ): ApiPromise<Story, ShortcutApiClient.CreateStoryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/stories"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createStoryParamsInternalSchema },
      },
      {
        success: { kind: "json", schema: storyInternalSchema },
        errorFactory: ShortcutApiClient.CreateStoryError,
      },
      options,
    );
  }

  /**
   * Create Story Comment
   *
   * @remarks
   * Create Comment allows you to create a Comment on any Story.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.CreateStoryCommentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createStoryComment(
    request: ShortcutApiClient.CreateStoryCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<StoryComment, ShortcutApiClient.CreateStoryCommentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/stories/{story-public-id}/comments"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "story-public-id", value: request.storyPublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createStoryCommentInternalSchema },
      },
      {
        success: { kind: "json", schema: storyCommentSchema },
        errorFactory: ShortcutApiClient.CreateStoryCommentError,
      },
      options,
    );
  }

  /**
   * Create Story From Template
   *
   * @remarks
   * Create Story From Template is used to add a new story derived from a template to your Shortcut
   * Workspace.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.CreateStoryFromTemplateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createStoryFromTemplate(
    request: ShortcutApiClient.CreateStoryFromTemplateRequest,
    options?: RequestOptions,
  ): ApiPromise<Story, ShortcutApiClient.CreateStoryFromTemplateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/stories/from-template"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createStoryFromTemplateParamsInternalSchema },
      },
      {
        success: { kind: "json", schema: storyInternalSchema },
        errorFactory: ShortcutApiClient.CreateStoryFromTemplateError,
      },
      options,
    );
  }

  /**
   * Create Story Link
   *
   * @remarks
   * Story Links (called Story Relationships in the UI) allow you create semantic relationships
   * between two stories. The parameters read like an active voice grammatical sentence: subject ->
   * verb -> object.
   *
   * The subject story acts on the object Story; the object story is the direct object of the
   * sentence.
   *
   * The subject story "blocks", "duplicates", or "relates to" the object story. Examples:
   * - "story 5 blocks story 6” -- story 6 is now "blocked" until story 5 is moved to a Done
   *   workflow state.
   * - "story 2 duplicates story 1” -- Story 2 represents the same body of work as Story 1 (and
   *   should probably be archived).
   * - "story 7 relates to story 3”
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.CreateStoryLinkError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createStoryLink(
    request: ShortcutApiClient.CreateStoryLinkRequest,
    options?: RequestOptions,
  ): ApiPromise<StoryLink, ShortcutApiClient.CreateStoryLinkError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/story-links"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createStoryLinkSchema },
      },
      {
        success: { kind: "json", schema: storyLinkSchema },
        errorFactory: ShortcutApiClient.CreateStoryLinkError,
      },
      options,
    );
  }

  /**
   * Create Story Reaction
   *
   * @remarks
   * Create a reaction to a story comment.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.CreateStoryReactionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createStoryReaction(
    request: ShortcutApiClient.CreateStoryReactionRequest,
    options?: RequestOptions,
  ): ApiPromise<StoryReaction[], ShortcutApiClient.CreateStoryReactionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions",
        ),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "story-public-id", value: request.storyPublicId, schema: s.int() },
          { name: "comment-public-id", value: request.commentPublicId, schema: s.int() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createOrDeleteStoryReactionSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => storyReactionSchema)) },
        errorFactory: ShortcutApiClient.CreateStoryReactionError,
      },
      options,
    );
  }

  /**
   * Create Task
   *
   * @remarks
   * Create Task is used to create a new task in a Story.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.CreateTaskError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createTask(
    request: ShortcutApiClient.CreateTaskRequest,
    options?: RequestOptions,
  ): ApiPromise<Task, ShortcutApiClient.CreateTaskError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/stories/{story-public-id}/tasks"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "story-public-id", value: request.storyPublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createTaskInternalSchema },
      },
      {
        success: { kind: "json", schema: taskSchema },
        errorFactory: ShortcutApiClient.CreateTaskError,
      },
      options,
    );
  }

  /**
   * Delete Category
   *
   * @remarks
   * Delete Category can be used to delete any Category.
   *
   * @returns No Content
   *
   * @throws {@link ShortcutApiClient.DeleteCategoryError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteCategory(
    request: ShortcutApiClient.DeleteCategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShortcutApiClient.DeleteCategoryError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v3/categories/{category-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "category-public-id", value: request.categoryPublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShortcutApiClient.DeleteCategoryError,
      },
      options,
    );
  }

  /**
   * Delete Custom Field
   *
   * @returns No Content
   *
   * @throws {@link ShortcutApiClient.DeleteCustomFieldError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteCustomField(
    request: ShortcutApiClient.DeleteCustomFieldRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShortcutApiClient.DeleteCustomFieldError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v3/custom-fields/{custom-field-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "custom-field-public-id", value: request.customFieldPublicId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShortcutApiClient.DeleteCustomFieldError,
      },
      options,
    );
  }

  /**
   * Delete Doc
   *
   * @remarks
   * Permanently deletes a Doc and its associated data. Requires admin access to the doc. When a
   * document is deleted, connected clients will be notified via SSE events.
   *
   * @returns No Content
   *
   * @throws {@link ShortcutApiClient.DeleteDocError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteDoc(
    request: ShortcutApiClient.DeleteDocRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShortcutApiClient.DeleteDocError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v3/documents/{doc-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "doc-public-id", value: request.docPublicId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: getDocSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShortcutApiClient.DeleteDocError,
      },
      options,
    );
  }

  /**
   * Delete Entity Template
   *
   * @returns No Content
   *
   * @throws {@link ShortcutApiClient.DeleteEntityTemplateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteEntityTemplate(
    request: ShortcutApiClient.DeleteEntityTemplateRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShortcutApiClient.DeleteEntityTemplateError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v3/entity-templates/{entity-template-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "entity-template-public-id", value: request.entityTemplatePublicId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShortcutApiClient.DeleteEntityTemplateError,
      },
      options,
    );
  }

  /**
   * Delete Epic
   *
   * @remarks
   * Delete Epic can be used to delete the Epic. The only required parameter is Epic ID.
   *
   * @returns No Content
   *
   * @throws {@link ShortcutApiClient.DeleteEpicError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteEpic(
    request: ShortcutApiClient.DeleteEpicRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShortcutApiClient.DeleteEpicError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v3/epics/{epic-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "epic-public-id", value: request.epicPublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShortcutApiClient.DeleteEpicError,
      },
      options,
    );
  }

  /**
   * Delete Epic Comment
   *
   * @remarks
   * This endpoint allows you to delete a Comment from an Epic.
   *
   * @returns No Content
   *
   * @throws {@link ShortcutApiClient.DeleteEpicCommentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteEpicComment(
    request: ShortcutApiClient.DeleteEpicCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShortcutApiClient.DeleteEpicCommentError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v3/epics/{epic-public-id}/comments/{comment-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "epic-public-id", value: request.epicPublicId, schema: s.int() },
          { name: "comment-public-id", value: request.commentPublicId, schema: s.int() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShortcutApiClient.DeleteEpicCommentError,
      },
      options,
    );
  }

  /**
   * Delete File
   *
   * @remarks
   * Delete File deletes a previously uploaded file.
   *
   * @returns No Content
   *
   * @throws {@link ShortcutApiClient.DeleteFileError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteFile(
    request: ShortcutApiClient.DeleteFileRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShortcutApiClient.DeleteFileError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v3/files/{file-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "file-public-id", value: request.filePublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShortcutApiClient.DeleteFileError,
      },
      options,
    );
  }

  /**
   * Delete Generic Integration
   *
   * @returns No Content
   *
   * @throws {@link ShortcutApiClient.DeleteGenericIntegrationError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteGenericIntegration(
    request: ShortcutApiClient.DeleteGenericIntegrationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShortcutApiClient.DeleteGenericIntegrationError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v3/integrations/webhook/{integration-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "integration-public-id", value: request.integrationPublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShortcutApiClient.DeleteGenericIntegrationError,
      },
      options,
    );
  }

  /**
   * Delete Iteration
   *
   * @returns No Content
   *
   * @throws {@link ShortcutApiClient.DeleteIterationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteIteration(
    request: ShortcutApiClient.DeleteIterationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShortcutApiClient.DeleteIterationError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v3/iterations/{iteration-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "iteration-public-id", value: request.iterationPublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShortcutApiClient.DeleteIterationError,
      },
      options,
    );
  }

  /**
   * Delete Label
   *
   * @remarks
   * Delete Label can be used to delete any Label.
   *
   * @returns No Content
   *
   * @throws {@link ShortcutApiClient.DeleteLabelError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteLabel(
    request: ShortcutApiClient.DeleteLabelRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShortcutApiClient.DeleteLabelError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v3/labels/{label-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "label-public-id", value: request.labelPublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShortcutApiClient.DeleteLabelError,
      },
      options,
    );
  }

  /**
   * Delete Linked File
   *
   * @remarks
   * Delete Linked File can be used to delete any previously attached Linked-File.
   *
   * @returns No Content
   *
   * @throws {@link ShortcutApiClient.DeleteLinkedFileError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteLinkedFile(
    request: ShortcutApiClient.DeleteLinkedFileRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShortcutApiClient.DeleteLinkedFileError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v3/linked-files/{linked-file-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "linked-file-public-id", value: request.linkedFilePublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShortcutApiClient.DeleteLinkedFileError,
      },
      options,
    );
  }

  /**
   * Delete Milestone
   *
   * @remarks
   * (Deprecated: Use 'Delete Objective') Delete Milestone can be used to delete any Milestone.
   *
   * @returns No Content
   *
   * @throws {@link ShortcutApiClient.DeleteMilestoneError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  deleteMilestone(
    request: ShortcutApiClient.DeleteMilestoneRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShortcutApiClient.DeleteMilestoneError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v3/milestones/{milestone-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "milestone-public-id", value: request.milestonePublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShortcutApiClient.DeleteMilestoneError,
      },
      options,
    );
  }

  /**
   * Delete Multiple Stories
   *
   * @remarks
   * Delete Multiple Stories allows you to delete multiple archived stories at once.
   *
   * @returns No Content
   *
   * @throws {@link ShortcutApiClient.DeleteMultipleStoriesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteMultipleStories(
    request: ShortcutApiClient.DeleteMultipleStoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShortcutApiClient.DeleteMultipleStoriesError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v3/stories/bulk"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: deleteStoriesInternalSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShortcutApiClient.DeleteMultipleStoriesError,
      },
      options,
    );
  }

  /**
   * Delete Objective
   *
   * @remarks
   * Delete Objective can be used to delete any Objective.
   *
   * @returns No Content
   *
   * @throws {@link ShortcutApiClient.DeleteObjectiveError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteObjective(
    request: ShortcutApiClient.DeleteObjectiveRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShortcutApiClient.DeleteObjectiveError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v3/objectives/{objective-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "objective-public-id", value: request.objectivePublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShortcutApiClient.DeleteObjectiveError,
      },
      options,
    );
  }

  /**
   * Delete Project
   *
   * @remarks
   * Delete Project can be used to delete a Project. Projects can only be deleted if all associated
   * Stories are moved or deleted. In the case that the Project cannot be deleted, you will receive
   * a 422 response.
   *
   * @returns No Content
   *
   * @throws {@link ShortcutApiClient.DeleteProjectError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteProject(
    request: ShortcutApiClient.DeleteProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShortcutApiClient.DeleteProjectError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v3/projects/{project-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "project-public-id", value: request.projectPublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShortcutApiClient.DeleteProjectError,
      },
      options,
    );
  }

  /**
   * Delete Story
   *
   * @remarks
   * Delete Story can be used to delete any Story.
   *
   * @returns No Content
   *
   * @throws {@link ShortcutApiClient.DeleteStoryError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteStory(
    request: ShortcutApiClient.DeleteStoryRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShortcutApiClient.DeleteStoryError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v3/stories/{story-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "story-public-id", value: request.storyPublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShortcutApiClient.DeleteStoryError,
      },
      options,
    );
  }

  /**
   * Delete Story Comment
   *
   * @remarks
   * Delete a Comment from any story.
   *
   * @returns No Content
   *
   * @throws {@link ShortcutApiClient.DeleteStoryCommentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteStoryComment(
    request: ShortcutApiClient.DeleteStoryCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShortcutApiClient.DeleteStoryCommentError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v3/stories/{story-public-id}/comments/{comment-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "story-public-id", value: request.storyPublicId, schema: s.int() },
          { name: "comment-public-id", value: request.commentPublicId, schema: s.int() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShortcutApiClient.DeleteStoryCommentError,
      },
      options,
    );
  }

  /**
   * Delete Story Link
   *
   * @remarks
   * Removes the relationship between the stories for the given Story Link.
   *
   * @returns No Content
   *
   * @throws {@link ShortcutApiClient.DeleteStoryLinkError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteStoryLink(
    request: ShortcutApiClient.DeleteStoryLinkRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShortcutApiClient.DeleteStoryLinkError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v3/story-links/{story-link-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "story-link-public-id", value: request.storyLinkPublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShortcutApiClient.DeleteStoryLinkError,
      },
      options,
    );
  }

  /**
   * Delete Story Reaction
   *
   * @remarks
   * Delete a reaction from any story comment.
   *
   * @returns No Content
   *
   * @throws {@link ShortcutApiClient.DeleteStoryReactionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteStoryReaction(
    request: ShortcutApiClient.DeleteStoryReactionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShortcutApiClient.DeleteStoryReactionError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions",
        ),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "story-public-id", value: request.storyPublicId, schema: s.int() },
          { name: "comment-public-id", value: request.commentPublicId, schema: s.int() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createOrDeleteStoryReactionSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShortcutApiClient.DeleteStoryReactionError,
      },
      options,
    );
  }

  /**
   * Delete Task
   *
   * @remarks
   * Delete Task can be used to delete any previously created Task on a Story.
   *
   * @returns No Content
   *
   * @throws {@link ShortcutApiClient.DeleteTaskError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteTask(
    request: ShortcutApiClient.DeleteTaskRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShortcutApiClient.DeleteTaskError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v3/stories/{story-public-id}/tasks/{task-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "story-public-id", value: request.storyPublicId, schema: s.int() },
          { name: "task-public-id", value: request.taskPublicId, schema: s.int() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShortcutApiClient.DeleteTaskError,
      },
      options,
    );
  }

  /**
   * Disable Iterations
   *
   * @remarks
   * Disables Iterations for the current workspace
   *
   * @returns No Content
   *
   * @throws {@link ShortcutApiClient.DisableIterationsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  disableIterations(
    options?: RequestOptions,
  ): ApiPromise<undefined, ShortcutApiClient.DisableIterationsError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/iterations/disable"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShortcutApiClient.DisableIterationsError,
      },
      options,
    );
  }

  /**
   * Disable Story Templates
   *
   * @remarks
   * Disables the Story Template feature for the Workspace.
   *
   * @returns No Content
   *
   * @throws {@link ShortcutApiClient.DisableStoryTemplatesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  disableStoryTemplates(
    options?: RequestOptions,
  ): ApiPromise<undefined, ShortcutApiClient.DisableStoryTemplatesError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/entity-templates/disable"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShortcutApiClient.DisableStoryTemplatesError,
      },
      options,
    );
  }

  /**
   * Enable Iterations
   *
   * @remarks
   * Enables Iterations for the current workspace
   *
   * @returns No Content
   *
   * @throws {@link ShortcutApiClient.EnableIterationsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  enableIterations(options?: RequestOptions): ApiPromise<undefined, ShortcutApiClient.EnableIterationsError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/iterations/enable"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShortcutApiClient.EnableIterationsError,
      },
      options,
    );
  }

  /**
   * Enable Story Templates
   *
   * @remarks
   * Enables the Story Template feature for the Workspace.
   *
   * @returns No Content
   *
   * @throws {@link ShortcutApiClient.EnableStoryTemplatesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  enableStoryTemplates(
    options?: RequestOptions,
  ): ApiPromise<undefined, ShortcutApiClient.EnableStoryTemplatesError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/entity-templates/enable"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShortcutApiClient.EnableStoryTemplatesError,
      },
      options,
    );
  }

  /**
   * Get Category
   *
   * @remarks
   * Get Category returns information about the selected Category.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.GetCategoryError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCategory(
    request: ShortcutApiClient.GetCategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<Category, ShortcutApiClient.GetCategoryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/categories/{category-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "category-public-id", value: request.categoryPublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: categoryInternalSchema },
        errorFactory: ShortcutApiClient.GetCategoryError,
      },
      options,
    );
  }

  /**
   * Get Current Member Info
   *
   * @remarks
   * Returns information about the authenticated member.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.GetCurrentMemberInfoError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCurrentMemberInfo(
    options?: RequestOptions,
  ): ApiPromise<MemberInfo, ShortcutApiClient.GetCurrentMemberInfoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/member"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: memberInfoSchema },
        errorFactory: ShortcutApiClient.GetCurrentMemberInfoError,
      },
      options,
    );
  }

  /**
   * Get Custom Field
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.GetCustomFieldError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCustomField(
    request: ShortcutApiClient.GetCustomFieldRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomField, ShortcutApiClient.GetCustomFieldError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/custom-fields/{custom-field-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "custom-field-public-id", value: request.customFieldPublicId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customFieldInternalSchema },
        errorFactory: ShortcutApiClient.GetCustomFieldError,
      },
      options,
    );
  }

  /**
   * Get Doc
   *
   * @remarks
   * Get a Doc by its public ID with content. Use content_format=html query parameter to include
   * HTML content.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.GetDocError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDoc(
    request: ShortcutApiClient.GetDocRequest,
    options?: RequestOptions,
  ): ApiPromise<Doc, ShortcutApiClient.GetDocError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/documents/{doc-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "doc-public-id", value: request.docPublicId, schema: s.string() }],
        query: [
          {
            name: "content_format",
            value: request.contentFormat,
            schema: s.optional(s.lazy(() => contentFormat3Schema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: docSchema },
        errorFactory: ShortcutApiClient.GetDocError,
      },
      options,
    );
  }

  /**
   * Get Entity Template
   *
   * @remarks
   * Get Entity Template returns information about a given entity template.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.GetEntityTemplateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEntityTemplate(
    request: ShortcutApiClient.GetEntityTemplateRequest,
    options?: RequestOptions,
  ): ApiPromise<EntityTemplate, ShortcutApiClient.GetEntityTemplateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/entity-templates/{entity-template-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "entity-template-public-id", value: request.entityTemplatePublicId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: entityTemplateInternalSchema },
        errorFactory: ShortcutApiClient.GetEntityTemplateError,
      },
      options,
    );
  }

  /**
   * Get Epic
   *
   * @remarks
   * Get Epic returns information about the selected Epic.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.GetEpicError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEpic(
    request: ShortcutApiClient.GetEpicRequest,
    options?: RequestOptions,
  ): ApiPromise<Epic, ShortcutApiClient.GetEpicError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/epics/{epic-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "epic-public-id", value: request.epicPublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: epicInternalSchema },
        errorFactory: ShortcutApiClient.GetEpicError,
      },
      options,
    );
  }

  /**
   * Get Epic Comment
   *
   * @remarks
   * This endpoint returns information about the selected Epic Comment.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.GetEpicCommentError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEpicComment(
    request: ShortcutApiClient.GetEpicCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<ThreadedComment, ShortcutApiClient.GetEpicCommentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/epics/{epic-public-id}/comments/{comment-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "epic-public-id", value: request.epicPublicId, schema: s.int() },
          { name: "comment-public-id", value: request.commentPublicId, schema: s.int() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: threadedCommentSchema },
        errorFactory: ShortcutApiClient.GetEpicCommentError,
      },
      options,
    );
  }

  /**
   * Get Epic Health
   *
   * @remarks
   * Get the current health for the specified Epic.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.GetEpicHealthError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEpicHealth(
    request: ShortcutApiClient.GetEpicHealthRequest,
    options?: RequestOptions,
  ): ApiPromise<Health, ShortcutApiClient.GetEpicHealthError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/epics/{epic-public-id}/health"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "epic-public-id", value: request.epicPublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: healthSchema },
        errorFactory: ShortcutApiClient.GetEpicHealthError,
      },
      options,
    );
  }

  /**
   * Get Epic Workflow
   *
   * @remarks
   * Returns the Epic Workflow for the Workspace.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.GetEpicWorkflowError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEpicWorkflow(
    options?: RequestOptions,
  ): ApiPromise<EpicWorkflow, ShortcutApiClient.GetEpicWorkflowError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/epic-workflow"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: epicWorkflowInternalSchema },
        errorFactory: ShortcutApiClient.GetEpicWorkflowError,
      },
      options,
    );
  }

  /**
   * Get External Link Stories
   *
   * @remarks
   * Get Stories which have a given External Link associated with them.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.GetExternalLinkStoriesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getExternalLinkStories(
    request: ShortcutApiClient.GetExternalLinkStoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<StorySlim[], ShortcutApiClient.GetExternalLinkStoriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/external-link/stories"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [{ name: "external_link", value: request.externalLink, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => storySlimInternalSchema)) },
        errorFactory: ShortcutApiClient.GetExternalLinkStoriesError,
      },
      options,
    );
  }

  /**
   * Get File
   *
   * @remarks
   * Get File returns information about the selected UploadedFile.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.GetFileError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFile(
    request: ShortcutApiClient.GetFileRequest,
    options?: RequestOptions,
  ): ApiPromise<UploadedFile, ShortcutApiClient.GetFileError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/files/{file-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "file-public-id", value: request.filePublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: uploadedFileSchema },
        errorFactory: ShortcutApiClient.GetFileError,
      },
      options,
    );
  }

  /**
   * Get Generic Integration
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.GetGenericIntegrationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGenericIntegration(
    request: ShortcutApiClient.GetGenericIntegrationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShortcutApiClient.GetGenericIntegrationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/integrations/webhook/{integration-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "integration-public-id", value: request.integrationPublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShortcutApiClient.GetGenericIntegrationError,
      },
      options,
    );
  }

  /**
   * Get Group
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.GetGroupError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGroup(
    request: ShortcutApiClient.GetGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<Group, ShortcutApiClient.GetGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/groups/{group-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "group-public-id", value: request.groupPublicId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: groupInternalSchema },
        errorFactory: ShortcutApiClient.GetGroupError,
      },
      options,
    );
  }

  /**
   * Get Iteration
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.GetIterationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getIteration(
    request: ShortcutApiClient.GetIterationRequest,
    options?: RequestOptions,
  ): ApiPromise<Iteration, ShortcutApiClient.GetIterationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/iterations/{iteration-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "iteration-public-id", value: request.iterationPublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: iterationInternalSchema },
        errorFactory: ShortcutApiClient.GetIterationError,
      },
      options,
    );
  }

  /**
   * Get Key Result
   *
   * @remarks
   * Get Key Result returns information about a chosen Key Result.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.GetKeyResultError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getKeyResult(
    request: ShortcutApiClient.GetKeyResultRequest,
    options?: RequestOptions,
  ): ApiPromise<KeyResult, ShortcutApiClient.GetKeyResultError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/key-results/{key-result-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "key-result-public-id", value: request.keyResultPublicId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: keyResultSchema },
        errorFactory: ShortcutApiClient.GetKeyResultError,
      },
      options,
    );
  }

  /**
   * Get Label
   *
   * @remarks
   * Get Label returns information about the selected Label.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.GetLabelError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLabel(
    request: ShortcutApiClient.GetLabelRequest,
    options?: RequestOptions,
  ): ApiPromise<Label, ShortcutApiClient.GetLabelError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/labels/{label-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "label-public-id", value: request.labelPublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: labelInternalSchema },
        errorFactory: ShortcutApiClient.GetLabelError,
      },
      options,
    );
  }

  /**
   * Get Linked File
   *
   * @remarks
   * Get File returns information about the selected Linked File.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.GetLinkedFileError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLinkedFile(
    request: ShortcutApiClient.GetLinkedFileRequest,
    options?: RequestOptions,
  ): ApiPromise<LinkedFile, ShortcutApiClient.GetLinkedFileError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/linked-files/{linked-file-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "linked-file-public-id", value: request.linkedFilePublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: linkedFileSchema },
        errorFactory: ShortcutApiClient.GetLinkedFileError,
      },
      options,
    );
  }

  /**
   * Get Member
   *
   * @remarks
   * Returns information about a Member.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.GetMemberError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMember(
    request: ShortcutApiClient.GetMemberRequest,
    options?: RequestOptions,
  ): ApiPromise<Member, ShortcutApiClient.GetMemberError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/members/{member-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "member-public-id", value: request.memberPublicId, schema: s.string() }],
        query: [{ name: "org-public-id", value: request.orgPublicId, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: memberSchema },
        errorFactory: ShortcutApiClient.GetMemberError,
      },
      options,
    );
  }

  /**
   * Get Milestone
   *
   * @remarks
   * (Deprecated: Use 'Get Objective') Get Milestone returns information about a chosen Milestone.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.GetMilestoneError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  getMilestone(
    request: ShortcutApiClient.GetMilestoneRequest,
    options?: RequestOptions,
  ): ApiPromise<Milestone, ShortcutApiClient.GetMilestoneError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/milestones/{milestone-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "milestone-public-id", value: request.milestonePublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: milestoneInternalSchema },
        errorFactory: ShortcutApiClient.GetMilestoneError,
      },
      options,
    );
  }

  /**
   * Get Objective
   *
   * @remarks
   * Get Objective returns information about a chosen Objective.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.GetObjectiveError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getObjective(
    request: ShortcutApiClient.GetObjectiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Objective, ShortcutApiClient.GetObjectiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/objectives/{objective-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "objective-public-id", value: request.objectivePublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: objectiveInternalSchema },
        errorFactory: ShortcutApiClient.GetObjectiveError,
      },
      options,
    );
  }

  /**
   * Get Objective Health
   *
   * @remarks
   * Get the current health for the specified Objective.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.GetObjectiveHealthError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getObjectiveHealth(
    request: ShortcutApiClient.GetObjectiveHealthRequest,
    options?: RequestOptions,
  ): ApiPromise<Health, ShortcutApiClient.GetObjectiveHealthError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/objectives/{objective-public-id}/health"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "objective-public-id", value: request.objectivePublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: healthSchema },
        errorFactory: ShortcutApiClient.GetObjectiveHealthError,
      },
      options,
    );
  }

  /**
   * Get Project
   *
   * @remarks
   * Get Project returns information about the selected Project.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.GetProjectError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProject(
    request: ShortcutApiClient.GetProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<Project, ShortcutApiClient.GetProjectError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/projects/{project-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "project-public-id", value: request.projectPublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: projectInternalSchema },
        errorFactory: ShortcutApiClient.GetProjectError,
      },
      options,
    );
  }

  /**
   * Get Repository
   *
   * @remarks
   * Get Repository returns information about the selected Repository.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.GetRepositoryError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRepository(
    request: ShortcutApiClient.GetRepositoryRequest,
    options?: RequestOptions,
  ): ApiPromise<Repository, ShortcutApiClient.GetRepositoryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/repositories/{repo-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "repo-public-id", value: request.repoPublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: repositorySchema },
        errorFactory: ShortcutApiClient.GetRepositoryError,
      },
      options,
    );
  }

  /**
   * Get Story
   *
   * @remarks
   * Get Story returns information about a chosen Story.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.GetStoryError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getStory(
    request: ShortcutApiClient.GetStoryRequest,
    options?: RequestOptions,
  ): ApiPromise<Story, ShortcutApiClient.GetStoryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/stories/{story-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "story-public-id", value: request.storyPublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: storyInternalSchema },
        errorFactory: ShortcutApiClient.GetStoryError,
      },
      options,
    );
  }

  /**
   * Get Story Comment
   *
   * @remarks
   * Get Comment is used to get Comment information.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.GetStoryCommentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getStoryComment(
    request: ShortcutApiClient.GetStoryCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<StoryComment, ShortcutApiClient.GetStoryCommentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/stories/{story-public-id}/comments/{comment-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "story-public-id", value: request.storyPublicId, schema: s.int() },
          { name: "comment-public-id", value: request.commentPublicId, schema: s.int() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: storyCommentSchema },
        errorFactory: ShortcutApiClient.GetStoryCommentError,
      },
      options,
    );
  }

  /**
   * Get Story Link
   *
   * @remarks
   * Returns the stories and their relationship for the given Story Link.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.GetStoryLinkError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getStoryLink(
    request: ShortcutApiClient.GetStoryLinkRequest,
    options?: RequestOptions,
  ): ApiPromise<StoryLink, ShortcutApiClient.GetStoryLinkError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/story-links/{story-link-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "story-link-public-id", value: request.storyLinkPublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: storyLinkSchema },
        errorFactory: ShortcutApiClient.GetStoryLinkError,
      },
      options,
    );
  }

  /**
   * Get Task
   *
   * @remarks
   * Returns information about a chosen Task.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.GetTaskError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTask(
    request: ShortcutApiClient.GetTaskRequest,
    options?: RequestOptions,
  ): ApiPromise<Task, ShortcutApiClient.GetTaskError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/stories/{story-public-id}/tasks/{task-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "story-public-id", value: request.storyPublicId, schema: s.int() },
          { name: "task-public-id", value: request.taskPublicId, schema: s.int() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taskSchema },
        errorFactory: ShortcutApiClient.GetTaskError,
      },
      options,
    );
  }

  /**
   * Get Workflow
   *
   * @remarks
   * Get Workflow returns information about a chosen Workflow.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.GetWorkflowError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWorkflow(
    request: ShortcutApiClient.GetWorkflowRequest,
    options?: RequestOptions,
  ): ApiPromise<Workflow, ShortcutApiClient.GetWorkflowError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/workflows/{workflow-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "workflow-public-id", value: request.workflowPublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: workflowInternalSchema },
        errorFactory: ShortcutApiClient.GetWorkflowError,
      },
      options,
    );
  }

  /**
   * Link Document to Epic
   *
   * @remarks
   * Create a relationship between a Document and an Epic.
   *
   * @returns No Content
   *
   * @throws {@link ShortcutApiClient.LinkDocumentToEpicError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  linkDocumentToEpic(
    request: ShortcutApiClient.LinkDocumentToEpicRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShortcutApiClient.LinkDocumentToEpicError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/documents/{doc-public-id}/epics/{epic-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "doc-public-id", value: request.docPublicId, schema: s.string() },
          { name: "epic-public-id", value: request.epicPublicId, schema: s.int() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShortcutApiClient.LinkDocumentToEpicError,
      },
      options,
    );
  }

  /**
   * List Categories
   *
   * @remarks
   * List Categories returns a list of all Categories and their attributes.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.ListCategoriesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCategories(options?: RequestOptions): ApiPromise<Category[], ShortcutApiClient.ListCategoriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/categories"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => categoryInternalSchema)) },
        errorFactory: ShortcutApiClient.ListCategoriesError,
      },
      options,
    );
  }

  /**
   * List Category Milestones
   *
   * @remarks
   * List Category Milestones returns a list of all Milestones with the Category.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.ListCategoryMilestonesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCategoryMilestones(
    request: ShortcutApiClient.ListCategoryMilestonesRequest,
    options?: RequestOptions,
  ): ApiPromise<Milestone[], ShortcutApiClient.ListCategoryMilestonesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/categories/{category-public-id}/milestones"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "category-public-id", value: request.categoryPublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => milestoneInternalSchema)) },
        errorFactory: ShortcutApiClient.ListCategoryMilestonesError,
      },
      options,
    );
  }

  /**
   * List Category Objectives
   *
   * @remarks
   * Returns a list of all Objectives with the Category.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.ListCategoryObjectivesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCategoryObjectives(
    request: ShortcutApiClient.ListCategoryObjectivesRequest,
    options?: RequestOptions,
  ): ApiPromise<Milestone[], ShortcutApiClient.ListCategoryObjectivesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/categories/{category-public-id}/objectives"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "category-public-id", value: request.categoryPublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => milestoneInternalSchema)) },
        errorFactory: ShortcutApiClient.ListCategoryObjectivesError,
      },
      options,
    );
  }

  /**
   * List Custom Fields
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.ListCustomFieldsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCustomFields(
    options?: RequestOptions,
  ): ApiPromise<CustomField[], ShortcutApiClient.ListCustomFieldsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/custom-fields"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => customFieldInternalSchema)) },
        errorFactory: ShortcutApiClient.ListCustomFieldsError,
      },
      options,
    );
  }

  /**
   * List Docs
   *
   * @remarks
   * List Docs returns a list of Doc that the current user can read.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.ListDocsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listDocs(options?: RequestOptions): ApiPromise<DocSlim[], ShortcutApiClient.ListDocsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/documents"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => docSlimSchema)) },
        errorFactory: ShortcutApiClient.ListDocsError,
      },
      options,
    );
  }

  /**
   * List Document Epics
   *
   * @remarks
   * Get a list of all Epics related to this Document.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.ListDocumentEpicsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listDocumentEpics(
    request: ShortcutApiClient.ListDocumentEpicsRequest,
    options?: RequestOptions,
  ): ApiPromise<EpicSlim[], ShortcutApiClient.ListDocumentEpicsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/documents/{doc-public-id}/epics"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "doc-public-id", value: request.docPublicId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => epicSlimInternalSchema)) },
        errorFactory: ShortcutApiClient.ListDocumentEpicsError,
      },
      options,
    );
  }

  /**
   * List Entity Templates
   *
   * @remarks
   * List all the entity templates for the Workspace.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.ListEntityTemplatesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listEntityTemplates(
    options?: RequestOptions,
  ): ApiPromise<EntityTemplate[], ShortcutApiClient.ListEntityTemplatesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/entity-templates"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => entityTemplateInternalSchema)) },
        errorFactory: ShortcutApiClient.ListEntityTemplatesError,
      },
      options,
    );
  }

  /**
   * List Epic Comments
   *
   * @remarks
   * Get a list of all Comments on an Epic.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.ListEpicCommentsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listEpicComments(
    request: ShortcutApiClient.ListEpicCommentsRequest,
    options?: RequestOptions,
  ): ApiPromise<ThreadedComment[], ShortcutApiClient.ListEpicCommentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/epics/{epic-public-id}/comments"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "epic-public-id", value: request.epicPublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => threadedCommentSchema)) },
        errorFactory: ShortcutApiClient.ListEpicCommentsError,
      },
      options,
    );
  }

  /**
   * List Epic Documents
   *
   * @remarks
   * Get a list of all Documents related to this Epic.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.ListEpicDocumentsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listEpicDocuments(
    request: ShortcutApiClient.ListEpicDocumentsRequest,
    options?: RequestOptions,
  ): ApiPromise<DocSlim[], ShortcutApiClient.ListEpicDocumentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/epics/{epic-public-id}/documents"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "epic-public-id", value: request.epicPublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => docSlimSchema)) },
        errorFactory: ShortcutApiClient.ListEpicDocumentsError,
      },
      options,
    );
  }

  /**
   * List Epic Healths
   *
   * @remarks
   * List the history of health statuses for the specified Epic, most recent first.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.ListEpicHealthsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listEpicHealths(
    request: ShortcutApiClient.ListEpicHealthsRequest,
    options?: RequestOptions,
  ): ApiPromise<Health[], ShortcutApiClient.ListEpicHealthsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/epics/{epic-public-id}/health-history"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "epic-public-id", value: request.epicPublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => healthSchema)) },
        errorFactory: ShortcutApiClient.ListEpicHealthsError,
      },
      options,
    );
  }

  /**
   * List Epic Stories
   *
   * @remarks
   * Get a list of all Stories in an Epic.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.ListEpicStoriesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listEpicStories(
    request: ShortcutApiClient.ListEpicStoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<StorySlim[], ShortcutApiClient.ListEpicStoriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/epics/{epic-public-id}/stories"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "epic-public-id", value: request.epicPublicId, schema: s.int() }],
        query: [
          {
            name: "includes_description",
            value: request.includesDescription,
            schema: s.optional(s.boolean()),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => storySlimInternalSchema)) },
        errorFactory: ShortcutApiClient.ListEpicStoriesError,
      },
      options,
    );
  }

  /**
   * List Epics
   *
   * @remarks
   * List Epics returns a list of all Epics and their attributes.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.ListEpicsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listEpics(
    request: ShortcutApiClient.ListEpicsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<EpicSlim[], ShortcutApiClient.ListEpicsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/epics"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          {
            name: "includes_description",
            value: request.includesDescription,
            schema: s.optional(s.boolean()),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => epicSlimInternalSchema)) },
        errorFactory: ShortcutApiClient.ListEpicsError,
      },
      options,
    );
  }

  /**
   * List Epics Paginated
   *
   * @remarks
   * List Epics with pagination returns a paginated list of Epics and their attributes.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.ListEpicsPaginatedError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listEpicsPaginated(
    request: ShortcutApiClient.ListEpicsPaginatedRequest = {},
    options?: RequestOptions,
  ): ApiPromise<EpicPaginatedResults, ShortcutApiClient.ListEpicsPaginatedError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/epics/paginated"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          {
            name: "includes_description",
            value: request.includesDescription,
            schema: s.optional(s.boolean()),
          },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "page_size", value: request.pageSize, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: epicPaginatedResultsInternalSchema },
        errorFactory: ShortcutApiClient.ListEpicsPaginatedError,
      },
      options,
    );
  }

  /**
   * List Files
   *
   * @remarks
   * List Files returns a list of all UploadedFiles in the workspace.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.ListFilesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listFiles(options?: RequestOptions): ApiPromise<UploadedFile[], ShortcutApiClient.ListFilesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/files"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => uploadedFileSchema)) },
        errorFactory: ShortcutApiClient.ListFilesError,
      },
      options,
    );
  }

  /**
   * List Group Stories
   *
   * @remarks
   * List the Stories assigned to the Group. (By default, limited to 1,000).
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.ListGroupStoriesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listGroupStories(
    request: ShortcutApiClient.ListGroupStoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<StorySlim[], ShortcutApiClient.ListGroupStoriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/groups/{group-public-id}/stories"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "group-public-id", value: request.groupPublicId, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => storySlimInternalSchema)) },
        errorFactory: ShortcutApiClient.ListGroupStoriesError,
      },
      options,
    );
  }

  /**
   * List Groups
   *
   * @remarks
   * A group in our API maps to a "Team" within the Shortcut Product. A Team is a collection of
   * Users that can be associated to Stories, Epics, and Iterations within Shortcut.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.ListGroupsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listGroups(
    request: ShortcutApiClient.ListGroupsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Group[], ShortcutApiClient.ListGroupsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/groups"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [{ name: "archived", value: request.archived, schema: s.optional(s.boolean()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => groupInternalSchema)) },
        errorFactory: ShortcutApiClient.ListGroupsError,
      },
      options,
    );
  }

  /**
   * List Iteration Stories
   *
   * @remarks
   * Get a list of all Stories in an Iteration.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.ListIterationStoriesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listIterationStories(
    request: ShortcutApiClient.ListIterationStoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<StorySlim[], ShortcutApiClient.ListIterationStoriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/iterations/{iteration-public-id}/stories"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "iteration-public-id", value: request.iterationPublicId, schema: s.int() }],
        query: [
          {
            name: "includes_description",
            value: request.includesDescription,
            schema: s.optional(s.boolean()),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => storySlimInternalSchema)) },
        errorFactory: ShortcutApiClient.ListIterationStoriesError,
      },
      options,
    );
  }

  /**
   * List Iterations
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.ListIterationsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listIterations(
    options?: RequestOptions,
  ): ApiPromise<IterationSlim[], ShortcutApiClient.ListIterationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/iterations"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => iterationSlimInternalSchema)) },
        errorFactory: ShortcutApiClient.ListIterationsError,
      },
      options,
    );
  }

  /**
   * List Label Epics
   *
   * @remarks
   * List all of the Epics with the Label.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.ListLabelEpicsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listLabelEpics(
    request: ShortcutApiClient.ListLabelEpicsRequest,
    options?: RequestOptions,
  ): ApiPromise<EpicSlim[], ShortcutApiClient.ListLabelEpicsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/labels/{label-public-id}/epics"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "label-public-id", value: request.labelPublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => epicSlimInternalSchema)) },
        errorFactory: ShortcutApiClient.ListLabelEpicsError,
      },
      options,
    );
  }

  /**
   * List Label Stories
   *
   * @remarks
   * List all of the Stories with the Label.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.ListLabelStoriesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listLabelStories(
    request: ShortcutApiClient.ListLabelStoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<StorySlim[], ShortcutApiClient.ListLabelStoriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/labels/{label-public-id}/stories"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "label-public-id", value: request.labelPublicId, schema: s.int() }],
        query: [
          {
            name: "includes_description",
            value: request.includesDescription,
            schema: s.optional(s.boolean()),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => storySlimInternalSchema)) },
        errorFactory: ShortcutApiClient.ListLabelStoriesError,
      },
      options,
    );
  }

  /**
   * List Labels
   *
   * @remarks
   * List Labels returns a list of all Labels and their attributes.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.ListLabelsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listLabels(
    request: ShortcutApiClient.ListLabelsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Label[], ShortcutApiClient.ListLabelsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/labels"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [{ name: "slim", value: request.slim, schema: s.optional(s.boolean()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => labelInternalSchema)) },
        errorFactory: ShortcutApiClient.ListLabelsError,
      },
      options,
    );
  }

  /**
   * List Linked Files
   *
   * @remarks
   * List Linked Files returns a list of all Linked-Files and their attributes.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.ListLinkedFilesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listLinkedFiles(
    options?: RequestOptions,
  ): ApiPromise<LinkedFile[], ShortcutApiClient.ListLinkedFilesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/linked-files"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => linkedFileSchema)) },
        errorFactory: ShortcutApiClient.ListLinkedFilesError,
      },
      options,
    );
  }

  /**
   * List Members
   *
   * @remarks
   * Returns information about members of the Workspace.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.ListMembersError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listMembers(
    request: ShortcutApiClient.ListMembersRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Member[], ShortcutApiClient.ListMembersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/members"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          { name: "org-public-id", value: request.orgPublicId, schema: s.optional(s.string()) },
          { name: "disabled", value: request.disabled, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => memberSchema)) },
        errorFactory: ShortcutApiClient.ListMembersError,
      },
      options,
    );
  }

  /**
   * List Milestone Epics
   *
   * @remarks
   * (Deprecated: Use 'List Objective Epics') List all of the Epics within the Milestone.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.ListMilestoneEpicsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  listMilestoneEpics(
    request: ShortcutApiClient.ListMilestoneEpicsRequest,
    options?: RequestOptions,
  ): ApiPromise<EpicSlim[], ShortcutApiClient.ListMilestoneEpicsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/milestones/{milestone-public-id}/epics"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "milestone-public-id", value: request.milestonePublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => epicSlimInternalSchema)) },
        errorFactory: ShortcutApiClient.ListMilestoneEpicsError,
      },
      options,
    );
  }

  /**
   * List Milestones
   *
   * @remarks
   * (Deprecated: Use 'List Objectives') List Milestones returns a list of all Milestones and their
   * attributes.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.ListMilestonesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  listMilestones(options?: RequestOptions): ApiPromise<Milestone[], ShortcutApiClient.ListMilestonesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/milestones"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => milestoneInternalSchema)) },
        errorFactory: ShortcutApiClient.ListMilestonesError,
      },
      options,
    );
  }

  /**
   * List Objective Epics
   *
   * @remarks
   * List all of the Epics within the Objective.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.ListObjectiveEpicsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listObjectiveEpics(
    request: ShortcutApiClient.ListObjectiveEpicsRequest,
    options?: RequestOptions,
  ): ApiPromise<EpicSlim[], ShortcutApiClient.ListObjectiveEpicsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/objectives/{objective-public-id}/epics"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "objective-public-id", value: request.objectivePublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => epicSlimInternalSchema)) },
        errorFactory: ShortcutApiClient.ListObjectiveEpicsError,
      },
      options,
    );
  }

  /**
   * List Objective Healths
   *
   * @remarks
   * List the history of health statuses for the specified Objective, most recent first.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.ListObjectiveHealthsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listObjectiveHealths(
    request: ShortcutApiClient.ListObjectiveHealthsRequest,
    options?: RequestOptions,
  ): ApiPromise<Health[], ShortcutApiClient.ListObjectiveHealthsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/objectives/{objective-public-id}/health-history"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "objective-public-id", value: request.objectivePublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => healthSchema)) },
        errorFactory: ShortcutApiClient.ListObjectiveHealthsError,
      },
      options,
    );
  }

  /**
   * List Objectives
   *
   * @remarks
   * List Objectives returns a list of all Objectives and their attributes.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.ListObjectivesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listObjectives(options?: RequestOptions): ApiPromise<Objective[], ShortcutApiClient.ListObjectivesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/objectives"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => objectiveInternalSchema)) },
        errorFactory: ShortcutApiClient.ListObjectivesError,
      },
      options,
    );
  }

  /**
   * List Projects
   *
   * @remarks
   * List Projects returns a list of all Projects and their attributes.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.ListProjectsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listProjects(options?: RequestOptions): ApiPromise<Project[], ShortcutApiClient.ListProjectsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/projects"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => projectInternalSchema)) },
        errorFactory: ShortcutApiClient.ListProjectsError,
      },
      options,
    );
  }

  /**
   * List Repositories
   *
   * @remarks
   * List Repositories returns a list of all Repositories and their attributes.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.ListRepositoriesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listRepositories(
    options?: RequestOptions,
  ): ApiPromise<Repository[], ShortcutApiClient.ListRepositoriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/repositories"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => repositorySchema)) },
        errorFactory: ShortcutApiClient.ListRepositoriesError,
      },
      options,
    );
  }

  /**
   * List Stories
   *
   * @remarks
   * List Stories returns a list of all Stories in a selected Project and their attributes.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.ListStoriesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listStories(
    request: ShortcutApiClient.ListStoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<StorySlim[], ShortcutApiClient.ListStoriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/projects/{project-public-id}/stories"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "project-public-id", value: request.projectPublicId, schema: s.int() }],
        query: [
          {
            name: "includes_description",
            value: request.includesDescription,
            schema: s.optional(s.boolean()),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => storySlimInternalSchema)) },
        errorFactory: ShortcutApiClient.ListStoriesError,
      },
      options,
    );
  }

  /**
   * List Story Comment
   *
   * @remarks
   * Lists Comments associated with a Story
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.ListStoryCommentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listStoryComment(
    request: ShortcutApiClient.ListStoryCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<StoryComment[], ShortcutApiClient.ListStoryCommentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/stories/{story-public-id}/comments"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "story-public-id", value: request.storyPublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => storyCommentSchema)) },
        errorFactory: ShortcutApiClient.ListStoryCommentError,
      },
      options,
    );
  }

  /**
   * List Story Sub tasks
   *
   * @remarks
   * List Story Sub tasks returns a list of all Sub-task Stories for a given parent Story.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.ListStorySubTasksError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listStorySubTasks(
    request: ShortcutApiClient.ListStorySubTasksRequest,
    options?: RequestOptions,
  ): ApiPromise<StorySlim[], ShortcutApiClient.ListStorySubTasksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/stories/{story-public-id}/sub-tasks"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "story-public-id", value: request.storyPublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => storySlimInternalSchema)) },
        errorFactory: ShortcutApiClient.ListStorySubTasksError,
      },
      options,
    );
  }

  /**
   * List Workflows
   *
   * @remarks
   * Returns a list of all Workflows in the Workspace.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.ListWorkflowsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listWorkflows(options?: RequestOptions): ApiPromise<Workflow[], ShortcutApiClient.ListWorkflowsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/workflows"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => workflowInternalSchema)) },
        errorFactory: ShortcutApiClient.ListWorkflowsError,
      },
      options,
    );
  }

  /**
   * Query Stories
   *
   * @remarks
   * Search Stories lets you search Stories based on desired parameters.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.QueryStoriesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryStories(
    request: ShortcutApiClient.QueryStoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<StorySlim[], ShortcutApiClient.QueryStoriesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/stories/search"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: searchStoriesInternalSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => storySlimInternalSchema)) },
        errorFactory: ShortcutApiClient.QueryStoriesError,
      },
      options,
    );
  }

  /**
   * Search
   *
   * @remarks
   * Search lets you search Epics and Stories based on desired parameters. Since ordering of the
   * results can change over time (due to search ranking decay, new Epics and Stories being
   * created), the `next` value from the previous response can be used as the path and query string
   * for the next page to ensure stable ordering.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.SearchError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  search(
    request: ShortcutApiClient.SearchRequest,
    options?: RequestOptions,
  ): ApiPromise<SearchResults, ShortcutApiClient.SearchError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/search"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          { name: "query", value: request.query, schema: s.string() },
          { name: "page_size", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "detail", value: request.detail, schema: s.optional(s.lazy(() => detailSchema)) },
          { name: "next", value: request.next, schema: s.optional(s.string()) },
          {
            name: "entity_types",
            value: request.entityTypes,
            schema: s.optional(s.array(s.lazy(() => entityTypeSchema))),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: searchResultsInternalSchema },
        errorFactory: ShortcutApiClient.SearchError,
      },
      options,
    );
  }

  /**
   * Search Documents
   *
   * @remarks
   * Search Documents lets you search Documents based on desired parameters. Supports structured
   * filters: title, archived, created_by_me, followed_by_me.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.SearchDocumentsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchDocuments(
    request: ShortcutApiClient.SearchDocumentsRequest,
    options?: RequestOptions,
  ): ApiPromise<DocSearchResults, ShortcutApiClient.SearchDocumentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/search/documents"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          { name: "title", value: request.title, schema: s.string() },
          { name: "archived", value: request.archived, schema: s.optional(s.boolean()) },
          { name: "created_by_me", value: request.createdByMe, schema: s.optional(s.boolean()) },
          { name: "followed_by_me", value: request.followedByMe, schema: s.optional(s.boolean()) },
          { name: "page_size", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "next", value: request.next, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: docSearchResultsSchema },
        errorFactory: ShortcutApiClient.SearchDocumentsError,
      },
      options,
    );
  }

  /**
   * Search Epics
   *
   * @remarks
   * Search Epics lets you search Epics based on desired parameters. Since ordering of stories can
   * change over time (due to search ranking decay, new Epics being created), the `next` value from
   * the previous response can be used as the path and query string for the next page to ensure
   * stable ordering.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.SearchEpicsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchEpics(
    request: ShortcutApiClient.SearchEpicsRequest,
    options?: RequestOptions,
  ): ApiPromise<EpicSearchResults, ShortcutApiClient.SearchEpicsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/search/epics"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          { name: "query", value: request.query, schema: s.string() },
          { name: "page_size", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "detail", value: request.detail, schema: s.optional(s.lazy(() => detailSchema)) },
          { name: "next", value: request.next, schema: s.optional(s.string()) },
          {
            name: "entity_types",
            value: request.entityTypes,
            schema: s.optional(s.array(s.lazy(() => entityTypeSchema))),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: epicSearchResultsInternalSchema },
        errorFactory: ShortcutApiClient.SearchEpicsError,
      },
      options,
    );
  }

  /**
   * Search Iterations
   *
   * @remarks
   * Search Iterations lets you search Iterations based on desired parameters. Since ordering of
   * results can change over time (due to search ranking decay, new Iterations being created), the
   * `next` value from the previous response can be used as the path and query string for the next
   * page to ensure stable ordering.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.SearchIterationsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchIterations(
    request: ShortcutApiClient.SearchIterationsRequest,
    options?: RequestOptions,
  ): ApiPromise<IterationSearchResults, ShortcutApiClient.SearchIterationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/search/iterations"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          { name: "query", value: request.query, schema: s.string() },
          { name: "page_size", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "detail", value: request.detail, schema: s.optional(s.lazy(() => detailSchema)) },
          { name: "next", value: request.next, schema: s.optional(s.string()) },
          {
            name: "entity_types",
            value: request.entityTypes,
            schema: s.optional(s.array(s.lazy(() => entityTypeSchema))),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: iterationSearchResultsInternalSchema },
        errorFactory: ShortcutApiClient.SearchIterationsError,
      },
      options,
    );
  }

  /**
   * Search Milestones
   *
   * @remarks
   * Search Milestones lets you search Milestones based on desired parameters. Since ordering of
   * results can change over time (due to search ranking decay, new Milestones being created), the
   * `next` value from the previous response can be used as the path and query string for the next
   * page to ensure stable ordering.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.SearchMilestonesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchMilestones(
    request: ShortcutApiClient.SearchMilestonesRequest,
    options?: RequestOptions,
  ): ApiPromise<ObjectiveSearchResults, ShortcutApiClient.SearchMilestonesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/search/milestones"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          { name: "query", value: request.query, schema: s.string() },
          { name: "page_size", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "detail", value: request.detail, schema: s.optional(s.lazy(() => detailSchema)) },
          { name: "next", value: request.next, schema: s.optional(s.string()) },
          {
            name: "entity_types",
            value: request.entityTypes,
            schema: s.optional(s.array(s.lazy(() => entityTypeSchema))),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: objectiveSearchResultsInternalSchema },
        errorFactory: ShortcutApiClient.SearchMilestonesError,
      },
      options,
    );
  }

  /**
   * Search Objectives
   *
   * @remarks
   * Search Objectives lets you search Objectives based on desired parameters. Since ordering of
   * results can change over time (due to search ranking decay, new Objectives being created), the
   * `next` value from the previous response can be used as the path and query string for the next
   * page to ensure stable ordering.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.SearchObjectivesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchObjectives(
    request: ShortcutApiClient.SearchObjectivesRequest,
    options?: RequestOptions,
  ): ApiPromise<ObjectiveSearchResults, ShortcutApiClient.SearchObjectivesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/search/objectives"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          { name: "query", value: request.query, schema: s.string() },
          { name: "page_size", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "detail", value: request.detail, schema: s.optional(s.lazy(() => detailSchema)) },
          { name: "next", value: request.next, schema: s.optional(s.string()) },
          {
            name: "entity_types",
            value: request.entityTypes,
            schema: s.optional(s.array(s.lazy(() => entityTypeSchema))),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: objectiveSearchResultsInternalSchema },
        errorFactory: ShortcutApiClient.SearchObjectivesError,
      },
      options,
    );
  }

  /**
   * Search Stories
   *
   * @remarks
   * Search Stories lets you search Stories based on desired parameters. Since ordering of stories
   * can change over time (due to search ranking decay, new stories being created), the `next` value
   * from the previous response can be used as the path and query string for the next page to ensure
   * stable ordering.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.SearchStoriesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchStories(
    request: ShortcutApiClient.SearchStoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<StorySearchResults, ShortcutApiClient.SearchStoriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/search/stories"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          { name: "query", value: request.query, schema: s.string() },
          { name: "page_size", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "detail", value: request.detail, schema: s.optional(s.lazy(() => detailSchema)) },
          { name: "next", value: request.next, schema: s.optional(s.string()) },
          {
            name: "entity_types",
            value: request.entityTypes,
            schema: s.optional(s.array(s.lazy(() => entityTypeSchema))),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: storySearchResultsInternalSchema },
        errorFactory: ShortcutApiClient.SearchStoriesError,
      },
      options,
    );
  }

  /**
   * Story History
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.StoryHistoryError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  storyHistory(
    request: ShortcutApiClient.StoryHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<History[], ShortcutApiClient.StoryHistoryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/stories/{story-public-id}/history"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "story-public-id", value: request.storyPublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => historyInternalSchema)) },
        errorFactory: ShortcutApiClient.StoryHistoryError,
      },
      options,
    );
  }

  /**
   * Unlink Comment thread from Slack
   *
   * @remarks
   * Unlinks a Comment from its linked Slack thread (Comment replies and Slack replies will no
   * longer be synced)
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.UnlinkCommentThreadFromSlackError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unlinkCommentThreadFromSlack(
    request: ShortcutApiClient.UnlinkCommentThreadFromSlackRequest,
    options?: RequestOptions,
  ): ApiPromise<StoryComment, ShortcutApiClient.UnlinkCommentThreadFromSlackError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/api/v3/stories/{story-public-id}/comments/{comment-public-id}/unlink-from-slack",
        ),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "story-public-id", value: request.storyPublicId, schema: s.int() },
          { name: "comment-public-id", value: request.commentPublicId, schema: s.int() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: storyCommentSchema },
        errorFactory: ShortcutApiClient.UnlinkCommentThreadFromSlackError,
      },
      options,
    );
  }

  /**
   * Unlink Document from Epic
   *
   * @remarks
   * Remove a relationship between a Document and an Epic.
   *
   * @returns No Content
   *
   * @throws {@link ShortcutApiClient.UnlinkDocumentFromEpicError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unlinkDocumentFromEpic(
    request: ShortcutApiClient.UnlinkDocumentFromEpicRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShortcutApiClient.UnlinkDocumentFromEpicError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v3/documents/{doc-public-id}/epics/{epic-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "doc-public-id", value: request.docPublicId, schema: s.string() },
          { name: "epic-public-id", value: request.epicPublicId, schema: s.int() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShortcutApiClient.UnlinkDocumentFromEpicError,
      },
      options,
    );
  }

  /**
   * Update Category
   *
   * @remarks
   * Update Category allows you to replace a Category name with another name. If you try to name a
   * Category something that already exists, you will receive a 422 response.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.UpdateCategoryError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCategory(
    request: ShortcutApiClient.UpdateCategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<Category, ShortcutApiClient.UpdateCategoryError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/categories/{category-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "category-public-id", value: request.categoryPublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateCategoryInternalSchema },
      },
      {
        success: { kind: "json", schema: categoryInternalSchema },
        errorFactory: ShortcutApiClient.UpdateCategoryError,
      },
      options,
    );
  }

  /**
   * Update Custom Field
   *
   * @remarks
   * Update Custom Field can be used to update the definition of a Custom Field. The order of items
   * in the 'values' collection is interpreted to be their ascending sort order.To delete an
   * existing enum value, simply omit it from the 'values' collection. New enum values may be
   * created inline by including an object in the 'values' collection having a 'value' entry with no
   * 'id' (eg. {'value': 'myNewValue', 'color_key': 'green'}).
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.UpdateCustomFieldError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCustomField(
    request: ShortcutApiClient.UpdateCustomFieldRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomField, ShortcutApiClient.UpdateCustomFieldError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/custom-fields/{custom-field-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "custom-field-public-id", value: request.customFieldPublicId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateCustomFieldInternalSchema },
      },
      {
        success: { kind: "json", schema: customFieldInternalSchema },
        errorFactory: ShortcutApiClient.UpdateCustomFieldError,
      },
      options,
    );
  }

  /**
   * Update Doc
   *
   * @remarks
   * Updates an existing Doc's title and/or content. Supports markdown or HTML input via
   * content_format parameter. WARNING: if content_format is not supplied, `content` input defaults
   * to html. When a document is updated: (1) For Tiptap-migrated docs, SSE events notify connected
   * Tiptap clients to refresh. (2) For non-migrated docs, CKEditor cache is flushed and SSE events
   * notify connected CKEditor users.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.UpdateDocError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateDoc(
    request: ShortcutApiClient.UpdateDocRequest,
    options?: RequestOptions,
  ): ApiPromise<Doc, ShortcutApiClient.UpdateDocError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/documents/{doc-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "doc-public-id", value: request.docPublicId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateDocInternalSchema },
      },
      {
        success: { kind: "json", schema: docSchema },
        errorFactory: ShortcutApiClient.UpdateDocError,
      },
      options,
    );
  }

  /**
   * Update Entity Template
   *
   * @remarks
   * Update an entity template's name or its contents.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.UpdateEntityTemplateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateEntityTemplate(
    request: ShortcutApiClient.UpdateEntityTemplateRequest,
    options?: RequestOptions,
  ): ApiPromise<EntityTemplate, ShortcutApiClient.UpdateEntityTemplateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/entity-templates/{entity-template-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "entity-template-public-id", value: request.entityTemplatePublicId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateEntityTemplateInternalSchema },
      },
      {
        success: { kind: "json", schema: entityTemplateInternalSchema },
        errorFactory: ShortcutApiClient.UpdateEntityTemplateError,
      },
      options,
    );
  }

  /**
   * Update Epic
   *
   * @remarks
   * Update Epic can be used to update numerous fields in the Epic. The only required parameter is
   * Epic ID, which can be found in the Shortcut UI.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.UpdateEpicError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateEpic(
    request: ShortcutApiClient.UpdateEpicRequest,
    options?: RequestOptions,
  ): ApiPromise<Epic, ShortcutApiClient.UpdateEpicError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/epics/{epic-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "epic-public-id", value: request.epicPublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateEpicInternalSchema },
      },
      {
        success: { kind: "json", schema: epicInternalSchema },
        errorFactory: ShortcutApiClient.UpdateEpicError,
      },
      options,
    );
  }

  /**
   * Update Epic Comment
   *
   * @remarks
   * This endpoint allows you to update a threaded Comment on an Epic.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.UpdateEpicCommentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateEpicComment(
    request: ShortcutApiClient.UpdateEpicCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<ThreadedComment, ShortcutApiClient.UpdateEpicCommentError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/epics/{epic-public-id}/comments/{comment-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "epic-public-id", value: request.epicPublicId, schema: s.int() },
          { name: "comment-public-id", value: request.commentPublicId, schema: s.int() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateCommentSchema },
      },
      {
        success: { kind: "json", schema: threadedCommentSchema },
        errorFactory: ShortcutApiClient.UpdateEpicCommentError,
      },
      options,
    );
  }

  /**
   * Update File
   *
   * @remarks
   * Update File updates the properties of an UploadedFile (but not its content).
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.UpdateFileError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateFile(
    request: ShortcutApiClient.UpdateFileRequest,
    options?: RequestOptions,
  ): ApiPromise<UploadedFile, ShortcutApiClient.UpdateFileError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/files/{file-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "file-public-id", value: request.filePublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateFileInternalSchema },
      },
      {
        success: { kind: "json", schema: uploadedFileSchema },
        errorFactory: ShortcutApiClient.UpdateFileError,
      },
      options,
    );
  }

  /**
   * Update Group
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.UpdateGroupError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateGroup(
    request: ShortcutApiClient.UpdateGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<Group, ShortcutApiClient.UpdateGroupError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/groups/{group-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "group-public-id", value: request.groupPublicId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateGroupInternalSchema },
      },
      {
        success: { kind: "json", schema: groupInternalSchema },
        errorFactory: ShortcutApiClient.UpdateGroupError,
      },
      options,
    );
  }

  /**
   * Update Health
   *
   * @remarks
   * Update an existing health status by its ID.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.UpdateHealthError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateHealth(
    request: ShortcutApiClient.UpdateHealthRequest,
    options?: RequestOptions,
  ): ApiPromise<Health, ShortcutApiClient.UpdateHealthError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/health/{health-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "health-public-id", value: request.healthPublicId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateHealthSchema },
      },
      {
        success: { kind: "json", schema: healthSchema },
        errorFactory: ShortcutApiClient.UpdateHealthError,
      },
      options,
    );
  }

  /**
   * Update Iteration
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.UpdateIterationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateIteration(
    request: ShortcutApiClient.UpdateIterationRequest,
    options?: RequestOptions,
  ): ApiPromise<Iteration, ShortcutApiClient.UpdateIterationError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/iterations/{iteration-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "iteration-public-id", value: request.iterationPublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateIterationInternalSchema },
      },
      {
        success: { kind: "json", schema: iterationInternalSchema },
        errorFactory: ShortcutApiClient.UpdateIterationError,
      },
      options,
    );
  }

  /**
   * Update Key Result
   *
   * @remarks
   * Update Key Result allows updating a Key Result's name or initial, observed, or target values.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.UpdateKeyResultError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateKeyResult(
    request: ShortcutApiClient.UpdateKeyResultRequest,
    options?: RequestOptions,
  ): ApiPromise<KeyResult, ShortcutApiClient.UpdateKeyResultError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/key-results/{key-result-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "key-result-public-id", value: request.keyResultPublicId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateKeyResultInternalSchema },
      },
      {
        success: { kind: "json", schema: keyResultSchema },
        errorFactory: ShortcutApiClient.UpdateKeyResultError,
      },
      options,
    );
  }

  /**
   * Update Label
   *
   * @remarks
   * Update Label allows you to replace a Label name with another name. If you try to name a Label
   * something that already exists, you will receive a 422 response.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.UpdateLabelError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateLabel(
    request: ShortcutApiClient.UpdateLabelRequest,
    options?: RequestOptions,
  ): ApiPromise<Label, ShortcutApiClient.UpdateLabelError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/labels/{label-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "label-public-id", value: request.labelPublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateLabelInternalSchema },
      },
      {
        success: { kind: "json", schema: labelInternalSchema },
        errorFactory: ShortcutApiClient.UpdateLabelError,
      },
      options,
    );
  }

  /**
   * Update Linked File
   *
   * @remarks
   * Updated Linked File allows you to update properties of a previously attached Linked-File.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.UpdateLinkedFileError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateLinkedFile(
    request: ShortcutApiClient.UpdateLinkedFileRequest,
    options?: RequestOptions,
  ): ApiPromise<LinkedFile, ShortcutApiClient.UpdateLinkedFileError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/linked-files/{linked-file-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "linked-file-public-id", value: request.linkedFilePublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateLinkedFileInternalSchema },
      },
      {
        success: { kind: "json", schema: linkedFileSchema },
        errorFactory: ShortcutApiClient.UpdateLinkedFileError,
      },
      options,
    );
  }

  /**
   * Update Milestone
   *
   * @remarks
   * (Deprecated: Use 'Update Objective') Update Milestone can be used to update Milestone
   * properties.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.UpdateMilestoneError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  updateMilestone(
    request: ShortcutApiClient.UpdateMilestoneRequest,
    options?: RequestOptions,
  ): ApiPromise<Milestone, ShortcutApiClient.UpdateMilestoneError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/milestones/{milestone-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "milestone-public-id", value: request.milestonePublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateMilestoneInternalSchema },
      },
      {
        success: { kind: "json", schema: milestoneInternalSchema },
        errorFactory: ShortcutApiClient.UpdateMilestoneError,
      },
      options,
    );
  }

  /**
   * Update Multiple Stories
   *
   * @remarks
   * Update Multiple Stories allows you to make changes to numerous stories at once.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.UpdateMultipleStoriesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateMultipleStories(
    request: ShortcutApiClient.UpdateMultipleStoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<StorySlim[], ShortcutApiClient.UpdateMultipleStoriesError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/stories/bulk"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateStoriesInternalSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => storySlimInternalSchema)) },
        errorFactory: ShortcutApiClient.UpdateMultipleStoriesError,
      },
      options,
    );
  }

  /**
   * Update Objective
   *
   * @remarks
   * Update Objective can be used to update Objective properties.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.UpdateObjectiveError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateObjective(
    request: ShortcutApiClient.UpdateObjectiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Objective, ShortcutApiClient.UpdateObjectiveError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/objectives/{objective-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "objective-public-id", value: request.objectivePublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateObjectiveInternalSchema },
      },
      {
        success: { kind: "json", schema: objectiveInternalSchema },
        errorFactory: ShortcutApiClient.UpdateObjectiveError,
      },
      options,
    );
  }

  /**
   * Update Project
   *
   * @remarks
   * Update Project can be used to change properties of a Project.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.UpdateProjectError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateProject(
    request: ShortcutApiClient.UpdateProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<Project, ShortcutApiClient.UpdateProjectError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/projects/{project-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "project-public-id", value: request.projectPublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateProjectInternalSchema },
      },
      {
        success: { kind: "json", schema: projectInternalSchema },
        errorFactory: ShortcutApiClient.UpdateProjectError,
      },
      options,
    );
  }

  /**
   * Update Story
   *
   * @remarks
   * Update Story can be used to update Story properties.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.UpdateStoryError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateStory(
    request: ShortcutApiClient.UpdateStoryRequest,
    options?: RequestOptions,
  ): ApiPromise<Story, ShortcutApiClient.UpdateStoryError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/stories/{story-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "story-public-id", value: request.storyPublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateStoryInternalSchema },
      },
      {
        success: { kind: "json", schema: storyInternalSchema },
        errorFactory: ShortcutApiClient.UpdateStoryError,
      },
      options,
    );
  }

  /**
   * Update Story Comment
   *
   * @remarks
   * Update Comment replaces the text of the existing Comment.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.UpdateStoryCommentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateStoryComment(
    request: ShortcutApiClient.UpdateStoryCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<StoryComment, ShortcutApiClient.UpdateStoryCommentError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/stories/{story-public-id}/comments/{comment-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "story-public-id", value: request.storyPublicId, schema: s.int() },
          { name: "comment-public-id", value: request.commentPublicId, schema: s.int() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateStoryCommentInternalSchema },
      },
      {
        success: { kind: "json", schema: storyCommentSchema },
        errorFactory: ShortcutApiClient.UpdateStoryCommentError,
      },
      options,
    );
  }

  /**
   * Update Story Link
   *
   * @remarks
   * Updates the stories and/or the relationship for the given Story Link.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.UpdateStoryLinkError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateStoryLink(
    request: ShortcutApiClient.UpdateStoryLinkRequest,
    options?: RequestOptions,
  ): ApiPromise<StoryLink, ShortcutApiClient.UpdateStoryLinkError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/story-links/{story-link-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "story-link-public-id", value: request.storyLinkPublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateStoryLinkSchema },
      },
      {
        success: { kind: "json", schema: storyLinkSchema },
        errorFactory: ShortcutApiClient.UpdateStoryLinkError,
      },
      options,
    );
  }

  /**
   * Update Task
   *
   * @remarks
   * Update Task can be used to update Task properties.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.UpdateTaskError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateTask(
    request: ShortcutApiClient.UpdateTaskRequest,
    options?: RequestOptions,
  ): ApiPromise<Task, ShortcutApiClient.UpdateTaskError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/stories/{story-public-id}/tasks/{task-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "story-public-id", value: request.storyPublicId, schema: s.int() },
          { name: "task-public-id", value: request.taskPublicId, schema: s.int() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateTaskInternalSchema },
      },
      {
        success: { kind: "json", schema: taskSchema },
        errorFactory: ShortcutApiClient.UpdateTaskError,
      },
      options,
    );
  }

  /**
   * Upload Files
   *
   * @remarks
   * Upload Files uploads one or many files and optionally associates them with a story. Use the
   * multipart/form-data content-type to upload. Each `file` key should contain a separate file.
   * Each UploadedFile's name comes from the Content-Disposition header "filename" directive for
   * that field.
   *
   * @returns Resource
   *
   * @throws {@link ShortcutApiClient.UploadFilesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  uploadFiles(
    request: ShortcutApiClient.UploadFilesRequest,
    options?: RequestOptions,
  ): ApiPromise<UploadedFile[], ShortcutApiClient.UploadFilesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/files"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "file", name: "file0", value: request.file0 },
            { kind: "text", name: "story_id", value: request.storyId, schema: s.optional(s.int()) },
            { kind: "file", name: "file1", value: request.file1 },
            { kind: "file", name: "file2", value: request.file2 },
            { kind: "file", name: "file3", value: request.file3 },
          ],
        },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => uploadedFileSchema)) },
        errorFactory: ShortcutApiClient.UploadFilesError,
      },
      options,
    );
  }
}

export namespace ShortcutApiClient {
  export type CreateCategoryRequest = {
    body: CreateCategory;
  };

  export class CreateCategoryError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateCategoryError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type CreateDocRequest = {
    body: CreateDoc;
  };

  export class CreateDocError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"disabledFeatureError", DisabledFeatureError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateDocError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 403, kind: "disabledFeatureError", decode: { kind: "json", schema: disabledFeatureErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type CreateEntityTemplateRequest = {
    /** Request parameters for creating an entirely new entity template. */
    body: CreateEntityTemplate;
  };

  export class CreateEntityTemplateError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateEntityTemplateError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type CreateEpicRequest = {
    body: CreateEpic;
  };

  export class CreateEpicError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateEpicError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type CreateEpicCommentRequest = {
    /** The ID of the associated Epic. */
    epicPublicId: number;
    body: CreateEpicComment;
  };

  export class CreateEpicCommentError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateEpicCommentError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type CreateEpicCommentCommentRequest = {
    /** The ID of the associated Epic. */
    epicPublicId: number;
    /** The ID of the parent Epic Comment. */
    commentPublicId: number;
    body: CreateCommentComment;
  };

  export class CreateEpicCommentCommentError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateEpicCommentCommentError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type CreateEpicHealthRequest = {
    /** The unique ID of the Epic. */
    epicPublicId: number;
    body: CreateEpicHealth;
  };

  export class CreateEpicHealthError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateEpicHealthError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type CreateGenericIntegrationRequest = {
    body: CreateGenericIntegration;
  };

  export class CreateGenericIntegrationError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateGenericIntegrationError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type CreateGroupRequest = {
    body: CreateGroup;
  };

  export class CreateGroupError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"unusableEntitlementError", UnusableEntitlementError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateGroupError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      {
        on: 403,
        kind: "unusableEntitlementError",
        decode: { kind: "json", schema: unusableEntitlementErrorInternalSchema },
      },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type CreateIterationRequest = {
    body: CreateIteration;
  };

  export class CreateIterationError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateIterationError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type CreateLabelRequest = {
    /** Request parameters for creating a Label on a Shortcut Story. */
    body: CreateLabelParams;
  };

  export class CreateLabelError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateLabelError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type CreateLinkedFileRequest = {
    body: CreateLinkedFile;
  };

  export class CreateLinkedFileError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateLinkedFileError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type CreateMilestoneRequest = {
    body: CreateMilestone;
  };

  export class CreateMilestoneError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"unusableEntitlementError", UnusableEntitlementError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateMilestoneError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      {
        on: 403,
        kind: "unusableEntitlementError",
        decode: { kind: "json", schema: unusableEntitlementErrorInternalSchema },
      },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type CreateMultipleStoriesRequest = {
    body: CreateStories;
  };

  export class CreateMultipleStoriesError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateMultipleStoriesError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type CreateObjectiveRequest = {
    body: CreateObjective;
  };

  export class CreateObjectiveError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"unusableEntitlementError", UnusableEntitlementError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateObjectiveError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      {
        on: 403,
        kind: "unusableEntitlementError",
        decode: { kind: "json", schema: unusableEntitlementErrorInternalSchema },
      },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type CreateObjectiveHealthRequest = {
    /** The unique ID of the Objective. */
    objectivePublicId: number;
    body: CreateObjectiveHealth;
  };

  export class CreateObjectiveHealthError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateObjectiveHealthError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type CreateProjectRequest = {
    body: CreateProject;
  };

  export class CreateProjectError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateProjectError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type CreateStoryRequest = {
    /** Request parameters for creating a story. */
    body: CreateStoryParams;
  };

  export class CreateStoryError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateStoryError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type CreateStoryCommentRequest = {
    /** The ID of the Story that the Comment is in. */
    storyPublicId: number;
    body: CreateStoryComment;
  };

  export class CreateStoryCommentError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateStoryCommentError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type CreateStoryFromTemplateRequest = {
    /**
     * Request parameters for creating a story from a story template. These parameters are merged
     * with the values derived from the template.
     */
    body: CreateStoryFromTemplateParams;
  };

  export class CreateStoryFromTemplateError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateStoryFromTemplateError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type CreateStoryLinkRequest = {
    body: CreateStoryLink;
  };

  export class CreateStoryLinkError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateStoryLinkError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type CreateStoryReactionRequest = {
    /** The ID of the Story that the Comment is in. */
    storyPublicId: number;
    /** The ID of the Comment. */
    commentPublicId: number;
    body: CreateOrDeleteStoryReaction;
  };

  export class CreateStoryReactionError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateStoryReactionError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type CreateTaskRequest = {
    /** The ID of the Story that the Task will be in. */
    storyPublicId: number;
    body: CreateTask;
  };

  export class CreateTaskError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateTaskError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type DeleteCategoryRequest = {
    /** The unique ID of the Category. */
    categoryPublicId: number;
  };

  export class DeleteCategoryError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteCategoryError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type DeleteCustomFieldRequest = {
    /** The unique ID of the CustomField. */
    customFieldPublicId: string;
  };

  export class DeleteCustomFieldError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteCustomFieldError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type DeleteDocRequest = {
    /** The Doc's public ID */
    docPublicId: string;
    body: GetDoc;
  };

  export class DeleteDocError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"disabledFeatureError", DisabledFeatureError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteDocError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 403, kind: "disabledFeatureError", decode: { kind: "json", schema: disabledFeatureErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type DeleteEntityTemplateRequest = {
    /** The unique ID of the entity template. */
    entityTemplatePublicId: string;
  };

  export class DeleteEntityTemplateError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteEntityTemplateError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type DeleteEpicRequest = {
    /** The unique ID of the Epic. */
    epicPublicId: number;
  };

  export class DeleteEpicError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteEpicError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type DeleteEpicCommentRequest = {
    /** The ID of the associated Epic. */
    epicPublicId: number;
    /** The ID of the Comment. */
    commentPublicId: number;
  };

  export class DeleteEpicCommentError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteEpicCommentError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type DeleteFileRequest = {
    /** The File’s unique ID. */
    filePublicId: number;
  };

  export class DeleteFileError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteFileError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type DeleteGenericIntegrationRequest = {
    integrationPublicId: number;
  };

  export class DeleteGenericIntegrationError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteGenericIntegrationError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type DeleteIterationRequest = {
    /** The unique ID of the Iteration. */
    iterationPublicId: number;
  };

  export class DeleteIterationError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteIterationError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type DeleteLabelRequest = {
    /** The unique ID of the Label. */
    labelPublicId: number;
  };

  export class DeleteLabelError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteLabelError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type DeleteLinkedFileRequest = {
    /** The unique identifier of the linked file. */
    linkedFilePublicId: number;
  };

  export class DeleteLinkedFileError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteLinkedFileError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type DeleteMilestoneRequest = {
    /** The ID of the Milestone. */
    milestonePublicId: number;
  };

  export class DeleteMilestoneError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteMilestoneError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type DeleteMultipleStoriesRequest = {
    body: DeleteStories;
  };

  export class DeleteMultipleStoriesError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteMultipleStoriesError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type DeleteObjectiveRequest = {
    /** The ID of the Objective. */
    objectivePublicId: number;
  };

  export class DeleteObjectiveError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteObjectiveError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type DeleteProjectRequest = {
    /** The unique ID of the Project. */
    projectPublicId: number;
  };

  export class DeleteProjectError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteProjectError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type DeleteStoryRequest = {
    /** The ID of the Story. */
    storyPublicId: number;
  };

  export class DeleteStoryError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteStoryError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type DeleteStoryCommentRequest = {
    /** The ID of the Story that the Comment is in. */
    storyPublicId: number;
    /** The ID of the Comment. */
    commentPublicId: number;
  };

  export class DeleteStoryCommentError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteStoryCommentError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type DeleteStoryLinkRequest = {
    /** The unique ID of the Story Link. */
    storyLinkPublicId: number;
  };

  export class DeleteStoryLinkError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteStoryLinkError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type DeleteStoryReactionRequest = {
    /** The ID of the Story that the Comment is in. */
    storyPublicId: number;
    /** The ID of the Comment. */
    commentPublicId: number;
    body: CreateOrDeleteStoryReaction;
  };

  export class DeleteStoryReactionError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteStoryReactionError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type DeleteTaskRequest = {
    /** The unique ID of the Story this Task is associated with. */
    storyPublicId: number;
    /** The unique ID of the Task. */
    taskPublicId: number;
  };

  export class DeleteTaskError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteTaskError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export class DisableIterationsError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DisableIterationsError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export class DisableStoryTemplatesError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DisableStoryTemplatesError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export class EnableIterationsError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<EnableIterationsError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export class EnableStoryTemplatesError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<EnableStoryTemplatesError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type GetCategoryRequest = {
    /** The unique ID of the Category. */
    categoryPublicId: number;
  };

  export class GetCategoryError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCategoryError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export class GetCurrentMemberInfoError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCurrentMemberInfoError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type GetCustomFieldRequest = {
    /** The unique ID of the CustomField. */
    customFieldPublicId: string;
  };

  export class GetCustomFieldError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCustomFieldError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type GetDocRequest = {
    /** The Doc's public ID */
    docPublicId: string;
    /**
     * Default content_format: markdown. Format of the content to return. If 'html', includes HTML
     * content in response.
     */
    contentFormat?: ContentFormat3;
  };

  export class GetDocError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"disabledFeatureError", DisabledFeatureError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetDocError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 403, kind: "disabledFeatureError", decode: { kind: "json", schema: disabledFeatureErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type GetEntityTemplateRequest = {
    /** The unique ID of the entity template. */
    entityTemplatePublicId: string;
  };

  export class GetEntityTemplateError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetEntityTemplateError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type GetEpicRequest = {
    /** The unique ID of the Epic. */
    epicPublicId: number;
  };

  export class GetEpicError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetEpicError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type GetEpicCommentRequest = {
    /** The ID of the associated Epic. */
    epicPublicId: number;
    /** The ID of the Comment. */
    commentPublicId: number;
  };

  export class GetEpicCommentError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetEpicCommentError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type GetEpicHealthRequest = {
    /** The unique ID of the Epic. */
    epicPublicId: number;
  };

  export class GetEpicHealthError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetEpicHealthError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export class GetEpicWorkflowError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetEpicWorkflowError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type GetExternalLinkStoriesRequest = {
    /** The external link associated with one or more stories. */
    externalLink: string;
  };

  export const getExternalLinkStoriesRequestSchema: Schema<GetExternalLinkStoriesRequest> = s.lazySchema(() =>
    s.object<GetExternalLinkStoriesRequest>({
      externalLink: s.string().check(s.maxLength(2048), s.pattern("^https?://.+$")),
    }),
  );

  export class GetExternalLinkStoriesError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetExternalLinkStoriesError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type GetFileRequest = {
    /** The File’s unique ID. */
    filePublicId: number;
  };

  export class GetFileError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetFileError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type GetGenericIntegrationRequest = {
    integrationPublicId: number;
  };

  export class GetGenericIntegrationError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGenericIntegrationError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type GetGroupRequest = {
    /** The unique ID of the Group. */
    groupPublicId: string;
  };

  export class GetGroupError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGroupError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type GetIterationRequest = {
    /** The unique ID of the Iteration. */
    iterationPublicId: number;
  };

  export class GetIterationError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetIterationError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type GetKeyResultRequest = {
    /** The ID of the Key Result. */
    keyResultPublicId: string;
  };

  export class GetKeyResultError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetKeyResultError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type GetLabelRequest = {
    /** The unique ID of the Label. */
    labelPublicId: number;
  };

  export class GetLabelError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetLabelError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type GetLinkedFileRequest = {
    /** The unique identifier of the linked file. */
    linkedFilePublicId: number;
  };

  export class GetLinkedFileError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetLinkedFileError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type GetMemberRequest = {
    /** The Member's unique ID. */
    memberPublicId: string;
    /** The unique ID of the Organization to limit the lookup to. */
    orgPublicId?: string;
  };

  export class GetMemberError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMemberError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type GetMilestoneRequest = {
    /** The ID of the Milestone. */
    milestonePublicId: number;
  };

  export class GetMilestoneError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMilestoneError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type GetObjectiveRequest = {
    /** The ID of the Objective. */
    objectivePublicId: number;
  };

  export class GetObjectiveError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetObjectiveError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type GetObjectiveHealthRequest = {
    /** The unique ID of the Objective. */
    objectivePublicId: number;
  };

  export class GetObjectiveHealthError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetObjectiveHealthError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type GetProjectRequest = {
    /** The unique ID of the Project. */
    projectPublicId: number;
  };

  export class GetProjectError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetProjectError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type GetRepositoryRequest = {
    /** The unique ID of the Repository. */
    repoPublicId: number;
  };

  export class GetRepositoryError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetRepositoryError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type GetStoryRequest = {
    /** The ID of the Story. */
    storyPublicId: number;
  };

  export class GetStoryError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetStoryError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type GetStoryCommentRequest = {
    /** The ID of the Story that the Comment is in. */
    storyPublicId: number;
    /** The ID of the Comment. */
    commentPublicId: number;
  };

  export class GetStoryCommentError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetStoryCommentError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type GetStoryLinkRequest = {
    /** The unique ID of the Story Link. */
    storyLinkPublicId: number;
  };

  export class GetStoryLinkError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetStoryLinkError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type GetTaskRequest = {
    /** The unique ID of the Story this Task is associated with. */
    storyPublicId: number;
    /** The unique ID of the Task. */
    taskPublicId: number;
  };

  export class GetTaskError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTaskError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type GetWorkflowRequest = {
    /** The ID of the Workflow. */
    workflowPublicId: number;
  };

  export class GetWorkflowError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetWorkflowError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type LinkDocumentToEpicRequest = {
    /** The public ID of the Document. */
    docPublicId: string;
    /** The public ID of the Epic. */
    epicPublicId: number;
  };

  export class LinkDocumentToEpicError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"disabledFeatureError", DisabledFeatureError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"unprocessableError", UnprocessableError>
      | Undeclared;

    static readonly errors: ErrorDecoders<LinkDocumentToEpicError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 403, kind: "disabledFeatureError", decode: { kind: "json", schema: disabledFeatureErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "unprocessableError", decode: { kind: "json", schema: unprocessableErrorSchema } },
    ];
  }

  export class ListCategoriesError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCategoriesError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type ListCategoryMilestonesRequest = {
    /** The unique ID of the Category. */
    categoryPublicId: number;
  };

  export class ListCategoryMilestonesError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCategoryMilestonesError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type ListCategoryObjectivesRequest = {
    /** The unique ID of the Category. */
    categoryPublicId: number;
  };

  export class ListCategoryObjectivesError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCategoryObjectivesError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export class ListCustomFieldsError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCustomFieldsError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export class ListDocsError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"disabledFeatureError", DisabledFeatureError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListDocsError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 403, kind: "disabledFeatureError", decode: { kind: "json", schema: disabledFeatureErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type ListDocumentEpicsRequest = {
    /** The public ID of the Document. */
    docPublicId: string;
  };

  export class ListDocumentEpicsError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"disabledFeatureError", DisabledFeatureError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListDocumentEpicsError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 403, kind: "disabledFeatureError", decode: { kind: "json", schema: disabledFeatureErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export class ListEntityTemplatesError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListEntityTemplatesError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type ListEpicCommentsRequest = {
    /** The unique ID of the Epic. */
    epicPublicId: number;
  };

  export class ListEpicCommentsError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListEpicCommentsError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type ListEpicDocumentsRequest = {
    /** The unique ID of the Epic. */
    epicPublicId: number;
  };

  export class ListEpicDocumentsError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListEpicDocumentsError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type ListEpicHealthsRequest = {
    /** The unique ID of the Epic. */
    epicPublicId: number;
  };

  export class ListEpicHealthsError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListEpicHealthsError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type ListEpicStoriesRequest = {
    /** The unique ID of the Epic. */
    epicPublicId: number;
    /** A true/false boolean indicating whether to return Stories with their descriptions. */
    includesDescription?: boolean;
  };

  export class ListEpicStoriesError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListEpicStoriesError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type ListEpicsRequest = {
    /** A true/false boolean indicating whether to return Epics with their descriptions. */
    includesDescription?: boolean;
  };

  export class ListEpicsError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListEpicsError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type ListEpicsPaginatedRequest = {
    /** A true/false boolean indicating whether to return Epics with their descriptions. */
    includesDescription?: boolean;
    /** The page number to return, starting with 1. Defaults to 1. */
    page?: number;
    /** The number of Epics to return per page. Minimum 1, maximum 250, default 10. */
    pageSize?: number;
  };

  export class ListEpicsPaginatedError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListEpicsPaginatedError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export class ListFilesError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListFilesError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type ListGroupStoriesRequest = {
    /** The unique ID of the Group. */
    groupPublicId: string;
    /** The maximum number of results to return. (Defaults to 1000, max 1000) */
    limit?: number;
    /** The offset at which to begin returning results. (Defaults to 0) */
    offset?: number;
  };

  export class ListGroupStoriesError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListGroupStoriesError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type ListGroupsRequest = {
    /**
     * Filter groups by their archived state. If true, returns only archived groups. If false,
     * returns only unarchived groups. If not provided, returns all groups
     */
    archived?: boolean;
  };

  export class ListGroupsError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListGroupsError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type ListIterationStoriesRequest = {
    /** The unique ID of the Iteration. */
    iterationPublicId: number;
    /** A true/false boolean indicating whether to return Stories with their descriptions. */
    includesDescription?: boolean;
  };

  export class ListIterationStoriesError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListIterationStoriesError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export class ListIterationsError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListIterationsError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type ListLabelEpicsRequest = {
    /** The unique ID of the Label. */
    labelPublicId: number;
  };

  export class ListLabelEpicsError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListLabelEpicsError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type ListLabelStoriesRequest = {
    /** The unique ID of the Label. */
    labelPublicId: number;
    /** A true/false boolean indicating whether to return Stories with their descriptions. */
    includesDescription?: boolean;
  };

  export class ListLabelStoriesError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListLabelStoriesError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type ListLabelsRequest = {
    /** A true/false boolean indicating if the slim versions of the Label should be returned. */
    slim?: boolean;
  };

  export class ListLabelsError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListLabelsError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export class ListLinkedFilesError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListLinkedFilesError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type ListMembersRequest = {
    /** The unique ID of the Organization to limit the list to. */
    orgPublicId?: string;
    /**
     * Filter members by their disabled state. If true, return only disabled members. If false,
     * return only enabled members.
     */
    disabled?: boolean;
  };

  export class ListMembersError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListMembersError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type ListMilestoneEpicsRequest = {
    /** The ID of the Milestone. */
    milestonePublicId: number;
  };

  export class ListMilestoneEpicsError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListMilestoneEpicsError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export class ListMilestonesError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListMilestonesError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type ListObjectiveEpicsRequest = {
    /** The ID of the Objective. */
    objectivePublicId: number;
  };

  export class ListObjectiveEpicsError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListObjectiveEpicsError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type ListObjectiveHealthsRequest = {
    /** The unique ID of the Objective. */
    objectivePublicId: number;
  };

  export class ListObjectiveHealthsError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListObjectiveHealthsError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export class ListObjectivesError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListObjectivesError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export class ListProjectsError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListProjectsError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export class ListRepositoriesError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListRepositoriesError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type ListStoriesRequest = {
    /** The unique ID of the Project. */
    projectPublicId: number;
    /** A true/false boolean indicating whether to return Stories with their descriptions. */
    includesDescription?: boolean;
  };

  export class ListStoriesError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListStoriesError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type ListStoryCommentRequest = {
    /** The ID of the Story that the Comment is in. */
    storyPublicId: number;
  };

  export class ListStoryCommentError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListStoryCommentError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type ListStorySubTasksRequest = {
    /** The ID of the Story. */
    storyPublicId: number;
  };

  export class ListStorySubTasksError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListStorySubTasksError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export class ListWorkflowsError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListWorkflowsError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type QueryStoriesRequest = {
    body: SearchStories;
  };

  export class QueryStoriesError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<QueryStoriesError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type SearchRequest = {
    /**
     * See our help center article on [search
     * operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
     */
    query: string;
    /** The number of search results to include in a page. Minimum of 1 and maximum of 250. */
    pageSize?: number;
    /**
     * The amount of detail included in each result item. "full" will include all descriptions and
     * comments and more fields on related items such as pull requests, branches and tasks. "slim"
     * omits larger fulltext fields such as descriptions and comments and only references related
     * items by id. The default is "full".
     */
    detail?: Detail;
    /** The next page token. */
    next?: string;
    /**
     * A collection of entity_types to search. Defaults to story and epic. Supports: epic,
     * iteration, objective, story.
     */
    entityTypes?: EntityType[];
  };

  export const searchRequestSchema: Schema<SearchRequest> = s.lazySchema(() =>
    s.object<SearchRequest>({
      query: s.string().check(s.minLength(1)),
      pageSize: s.optional(s.int()),
      detail: s.optional(s.lazy(() => detailSchema)),
      next: s.optional(s.string()),
      entityTypes: s.optional(s.array(s.lazy(() => entityTypeSchema))),
    }),
  );

  export class SearchError extends ApiError {
    declare readonly payload:
      | Declared<"maxSearchResultsExceededError", MaxSearchResultsExceededError>
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchError> = [
      {
        on: 400,
        kind: "maxSearchResultsExceededError",
        decode: { kind: "json", schema: maxSearchResultsExceededErrorSchema },
      },
      { on: 404, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type SearchDocumentsRequest = {
    /** Search text to match against document titles. Supports fuzzy matching. Required. */
    title: string;
    /** When true, find archived documents. When false, find non-archived documents. */
    archived?: boolean;
    /**
     * When true, find documents created by the current user. When false, find documents NOT created
     * by current user.
     */
    createdByMe?: boolean;
    /**
     * When true, find documents that the current user is following. When false, find documents NOT
     * followed.
     */
    followedByMe?: boolean;
    /** The number of search results to include in a page. Minimum of 1 and maximum of 250. */
    pageSize?: number;
    /** The next page token. */
    next?: string;
  };

  export const searchDocumentsRequestSchema: Schema<SearchDocumentsRequest> = s.lazySchema(() =>
    s.object<SearchDocumentsRequest>({
      title: s.string().check(s.minLength(1)),
      archived: s.optional(s.boolean()),
      createdByMe: s.optional(s.boolean()),
      followedByMe: s.optional(s.boolean()),
      pageSize: s.optional(s.int()),
      next: s.optional(s.string()),
    }),
  );

  export class SearchDocumentsError extends ApiError {
    declare readonly payload:
      | Declared<"maxSearchResultsExceededError", MaxSearchResultsExceededError>
      | Declared<"disabledFeatureError", DisabledFeatureError>
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchDocumentsError> = [
      {
        on: 400,
        kind: "maxSearchResultsExceededError",
        decode: { kind: "json", schema: maxSearchResultsExceededErrorSchema },
      },
      { on: 403, kind: "disabledFeatureError", decode: { kind: "json", schema: disabledFeatureErrorSchema } },
      { on: 404, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type SearchEpicsRequest = {
    /**
     * See our help center article on [search
     * operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
     */
    query: string;
    /** The number of search results to include in a page. Minimum of 1 and maximum of 250. */
    pageSize?: number;
    /**
     * The amount of detail included in each result item. "full" will include all descriptions and
     * comments and more fields on related items such as pull requests, branches and tasks. "slim"
     * omits larger fulltext fields such as descriptions and comments and only references related
     * items by id. The default is "full".
     */
    detail?: Detail;
    /** The next page token. */
    next?: string;
    /**
     * A collection of entity_types to search. Defaults to story and epic. Supports: epic,
     * iteration, objective, story.
     */
    entityTypes?: EntityType[];
  };

  export const searchEpicsRequestSchema: Schema<SearchEpicsRequest> = s.lazySchema(() =>
    s.object<SearchEpicsRequest>({
      query: s.string().check(s.minLength(1)),
      pageSize: s.optional(s.int()),
      detail: s.optional(s.lazy(() => detailSchema)),
      next: s.optional(s.string()),
      entityTypes: s.optional(s.array(s.lazy(() => entityTypeSchema))),
    }),
  );

  export class SearchEpicsError extends ApiError {
    declare readonly payload:
      | Declared<"maxSearchResultsExceededError", MaxSearchResultsExceededError>
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchEpicsError> = [
      {
        on: 400,
        kind: "maxSearchResultsExceededError",
        decode: { kind: "json", schema: maxSearchResultsExceededErrorSchema },
      },
      { on: 404, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type SearchIterationsRequest = {
    /**
     * See our help center article on [search
     * operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
     */
    query: string;
    /** The number of search results to include in a page. Minimum of 1 and maximum of 250. */
    pageSize?: number;
    /**
     * The amount of detail included in each result item. "full" will include all descriptions and
     * comments and more fields on related items such as pull requests, branches and tasks. "slim"
     * omits larger fulltext fields such as descriptions and comments and only references related
     * items by id. The default is "full".
     */
    detail?: Detail;
    /** The next page token. */
    next?: string;
    /**
     * A collection of entity_types to search. Defaults to story and epic. Supports: epic,
     * iteration, objective, story.
     */
    entityTypes?: EntityType[];
  };

  export const searchIterationsRequestSchema: Schema<SearchIterationsRequest> = s.lazySchema(() =>
    s.object<SearchIterationsRequest>({
      query: s.string().check(s.minLength(1)),
      pageSize: s.optional(s.int()),
      detail: s.optional(s.lazy(() => detailSchema)),
      next: s.optional(s.string()),
      entityTypes: s.optional(s.array(s.lazy(() => entityTypeSchema))),
    }),
  );

  export class SearchIterationsError extends ApiError {
    declare readonly payload:
      | Declared<"maxSearchResultsExceededError", MaxSearchResultsExceededError>
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchIterationsError> = [
      {
        on: 400,
        kind: "maxSearchResultsExceededError",
        decode: { kind: "json", schema: maxSearchResultsExceededErrorSchema },
      },
      { on: 404, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type SearchMilestonesRequest = {
    /**
     * See our help center article on [search
     * operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
     */
    query: string;
    /** The number of search results to include in a page. Minimum of 1 and maximum of 250. */
    pageSize?: number;
    /**
     * The amount of detail included in each result item. "full" will include all descriptions and
     * comments and more fields on related items such as pull requests, branches and tasks. "slim"
     * omits larger fulltext fields such as descriptions and comments and only references related
     * items by id. The default is "full".
     */
    detail?: Detail;
    /** The next page token. */
    next?: string;
    /**
     * A collection of entity_types to search. Defaults to story and epic. Supports: epic,
     * iteration, objective, story.
     */
    entityTypes?: EntityType[];
  };

  export const searchMilestonesRequestSchema: Schema<SearchMilestonesRequest> = s.lazySchema(() =>
    s.object<SearchMilestonesRequest>({
      query: s.string().check(s.minLength(1)),
      pageSize: s.optional(s.int()),
      detail: s.optional(s.lazy(() => detailSchema)),
      next: s.optional(s.string()),
      entityTypes: s.optional(s.array(s.lazy(() => entityTypeSchema))),
    }),
  );

  export class SearchMilestonesError extends ApiError {
    declare readonly payload:
      | Declared<"maxSearchResultsExceededError", MaxSearchResultsExceededError>
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchMilestonesError> = [
      {
        on: 400,
        kind: "maxSearchResultsExceededError",
        decode: { kind: "json", schema: maxSearchResultsExceededErrorSchema },
      },
      { on: 404, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type SearchObjectivesRequest = {
    /**
     * See our help center article on [search
     * operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
     */
    query: string;
    /** The number of search results to include in a page. Minimum of 1 and maximum of 250. */
    pageSize?: number;
    /**
     * The amount of detail included in each result item. "full" will include all descriptions and
     * comments and more fields on related items such as pull requests, branches and tasks. "slim"
     * omits larger fulltext fields such as descriptions and comments and only references related
     * items by id. The default is "full".
     */
    detail?: Detail;
    /** The next page token. */
    next?: string;
    /**
     * A collection of entity_types to search. Defaults to story and epic. Supports: epic,
     * iteration, objective, story.
     */
    entityTypes?: EntityType[];
  };

  export const searchObjectivesRequestSchema: Schema<SearchObjectivesRequest> = s.lazySchema(() =>
    s.object<SearchObjectivesRequest>({
      query: s.string().check(s.minLength(1)),
      pageSize: s.optional(s.int()),
      detail: s.optional(s.lazy(() => detailSchema)),
      next: s.optional(s.string()),
      entityTypes: s.optional(s.array(s.lazy(() => entityTypeSchema))),
    }),
  );

  export class SearchObjectivesError extends ApiError {
    declare readonly payload:
      | Declared<"maxSearchResultsExceededError", MaxSearchResultsExceededError>
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchObjectivesError> = [
      {
        on: 400,
        kind: "maxSearchResultsExceededError",
        decode: { kind: "json", schema: maxSearchResultsExceededErrorSchema },
      },
      { on: 404, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type SearchStoriesRequest = {
    /**
     * See our help center article on [search
     * operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
     */
    query: string;
    /** The number of search results to include in a page. Minimum of 1 and maximum of 250. */
    pageSize?: number;
    /**
     * The amount of detail included in each result item. "full" will include all descriptions and
     * comments and more fields on related items such as pull requests, branches and tasks. "slim"
     * omits larger fulltext fields such as descriptions and comments and only references related
     * items by id. The default is "full".
     */
    detail?: Detail;
    /** The next page token. */
    next?: string;
    /**
     * A collection of entity_types to search. Defaults to story and epic. Supports: epic,
     * iteration, objective, story.
     */
    entityTypes?: EntityType[];
  };

  export const searchStoriesRequestSchema: Schema<SearchStoriesRequest> = s.lazySchema(() =>
    s.object<SearchStoriesRequest>({
      query: s.string().check(s.minLength(1)),
      pageSize: s.optional(s.int()),
      detail: s.optional(s.lazy(() => detailSchema)),
      next: s.optional(s.string()),
      entityTypes: s.optional(s.array(s.lazy(() => entityTypeSchema))),
    }),
  );

  export class SearchStoriesError extends ApiError {
    declare readonly payload:
      | Declared<"maxSearchResultsExceededError", MaxSearchResultsExceededError>
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchStoriesError> = [
      {
        on: 400,
        kind: "maxSearchResultsExceededError",
        decode: { kind: "json", schema: maxSearchResultsExceededErrorSchema },
      },
      { on: 404, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type StoryHistoryRequest = {
    /** The ID of the Story. */
    storyPublicId: number;
  };

  export class StoryHistoryError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<StoryHistoryError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type UnlinkCommentThreadFromSlackRequest = {
    /** The ID of the Story to unlink. */
    storyPublicId: number;
    /** The ID of the Comment to unlink. */
    commentPublicId: number;
  };

  export class UnlinkCommentThreadFromSlackError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UnlinkCommentThreadFromSlackError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type UnlinkDocumentFromEpicRequest = {
    /** The public ID of the Document. */
    docPublicId: string;
    /** The public ID of the Epic. */
    epicPublicId: number;
  };

  export class UnlinkDocumentFromEpicError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"disabledFeatureError", DisabledFeatureError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UnlinkDocumentFromEpicError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 403, kind: "disabledFeatureError", decode: { kind: "json", schema: disabledFeatureErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type UpdateCategoryRequest = {
    /** The unique ID of the Category you wish to update. */
    categoryPublicId: number;
    body: UpdateCategory;
  };

  export class UpdateCategoryError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateCategoryError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type UpdateCustomFieldRequest = {
    /** The unique ID of the CustomField. */
    customFieldPublicId: string;
    body: UpdateCustomField;
  };

  export class UpdateCustomFieldError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"dataConflictError", DataConflictError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateCustomFieldError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 409, kind: "dataConflictError", decode: { kind: "json", schema: dataConflictErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type UpdateDocRequest = {
    /** The Doc's public ID */
    docPublicId: string;
    body: UpdateDoc;
  };

  export class UpdateDocError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"disabledFeatureError", DisabledFeatureError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateDocError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 403, kind: "disabledFeatureError", decode: { kind: "json", schema: disabledFeatureErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type UpdateEntityTemplateRequest = {
    /** The unique ID of the template to be updated. */
    entityTemplatePublicId: string;
    /**
     * Request parameters for changing either a template's name or any of the attributes it is
     * designed to pre-populate.
     */
    body: UpdateEntityTemplate;
  };

  export class UpdateEntityTemplateError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateEntityTemplateError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type UpdateEpicRequest = {
    /** The unique ID of the Epic. */
    epicPublicId: number;
    body: UpdateEpic;
  };

  export class UpdateEpicError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateEpicError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type UpdateEpicCommentRequest = {
    /** The ID of the associated Epic. */
    epicPublicId: number;
    /** The ID of the Comment. */
    commentPublicId: number;
    body: UpdateComment;
  };

  export class UpdateEpicCommentError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateEpicCommentError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type UpdateFileRequest = {
    /** The unique ID assigned to the file in Shortcut. */
    filePublicId: number;
    body: UpdateFile;
  };

  export class UpdateFileError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateFileError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type UpdateGroupRequest = {
    /** The unique ID of the Group. */
    groupPublicId: string;
    body: UpdateGroup;
  };

  export class UpdateGroupError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"unusableEntitlementError", UnusableEntitlementError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateGroupError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      {
        on: 403,
        kind: "unusableEntitlementError",
        decode: { kind: "json", schema: unusableEntitlementErrorInternalSchema },
      },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type UpdateHealthRequest = {
    /** The unique ID of the Health record. */
    healthPublicId: string;
    body: UpdateHealth;
  };

  export class UpdateHealthError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateHealthError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type UpdateIterationRequest = {
    /** The unique ID of the Iteration. */
    iterationPublicId: number;
    body: UpdateIteration;
  };

  export class UpdateIterationError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateIterationError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type UpdateKeyResultRequest = {
    /** The ID of the Key Result. */
    keyResultPublicId: string;
    body: UpdateKeyResult;
  };

  export class UpdateKeyResultError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateKeyResultError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type UpdateLabelRequest = {
    /** The unique ID of the Label you wish to update. */
    labelPublicId: number;
    body: UpdateLabel;
  };

  export class UpdateLabelError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateLabelError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type UpdateLinkedFileRequest = {
    /** The unique identifier of the linked file. */
    linkedFilePublicId: number;
    body: UpdateLinkedFile;
  };

  export class UpdateLinkedFileError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateLinkedFileError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type UpdateMilestoneRequest = {
    /** The ID of the Milestone. */
    milestonePublicId: number;
    body: UpdateMilestone;
  };

  export class UpdateMilestoneError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateMilestoneError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type UpdateMultipleStoriesRequest = {
    body: UpdateStories;
  };

  export class UpdateMultipleStoriesError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateMultipleStoriesError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type UpdateObjectiveRequest = {
    /** The ID of the Objective. */
    objectivePublicId: number;
    body: UpdateObjective;
  };

  export class UpdateObjectiveError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateObjectiveError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type UpdateProjectRequest = {
    /** The unique ID of the Project. */
    projectPublicId: number;
    body: UpdateProject;
  };

  export class UpdateProjectError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateProjectError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type UpdateStoryRequest = {
    /** The unique identifier of this story. */
    storyPublicId: number;
    body: UpdateStory;
  };

  export class UpdateStoryError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateStoryError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type UpdateStoryCommentRequest = {
    /** The ID of the Story that the Comment is in. */
    storyPublicId: number;
    /** The ID of the Comment */
    commentPublicId: number;
    body: UpdateStoryComment;
  };

  export class UpdateStoryCommentError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateStoryCommentError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type UpdateStoryLinkRequest = {
    /** The unique ID of the Story Link. */
    storyLinkPublicId: number;
    body: UpdateStoryLink;
  };

  export class UpdateStoryLinkError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateStoryLinkError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type UpdateTaskRequest = {
    /** The unique identifier of the parent Story. */
    storyPublicId: number;
    /** The unique identifier of the Task you wish to update. */
    taskPublicId: number;
    body: UpdateTask;
  };

  export class UpdateTaskError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateTaskError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }

  export type UploadFilesRequest = {
    /** A file upload. At least one is required. */
    file0: FileInput;
    /** The story ID that these files will be associated with. */
    storyId?: number;
    /** Optional additional files. */
    file1?: FileInput;
    /** Optional additional files. */
    file2?: FileInput;
    /** Optional additional files. */
    file3?: FileInput;
  };

  export class UploadFilesError extends ApiError {
    declare readonly payload:
      | Declared<"shortcutError", ShortcutError>
      | Declared<"shortcutError2", ShortcutError>
      | Declared<"shortcutError3", ShortcutError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UploadFilesError> = [
      { on: 400, kind: "shortcutError", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 404, kind: "shortcutError2", decode: { kind: "json", schema: shortcutErrorSchema } },
      { on: 422, kind: "shortcutError3", decode: { kind: "json", schema: shortcutErrorSchema } },
    ];
  }
}
