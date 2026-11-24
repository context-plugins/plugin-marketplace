import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  createOrDeleteStoryReactionSchema,
  type CreateOrDeleteStoryReaction,
} from "../models/create-or-delete-story-reaction.js";
import { createStoriesInternalSchema, type CreateStories } from "../models/create-stories.js";
import { createStoryCommentInternalSchema, type CreateStoryComment } from "../models/create-story-comment.js";
import {
  createStoryFromTemplateParamsInternalSchema,
  type CreateStoryFromTemplateParams,
} from "../models/create-story-from-template-params.js";
import { createStoryParamsInternalSchema, type CreateStoryParams } from "../models/create-story-params.js";
import { createTaskInternalSchema, type CreateTask } from "../models/create-task.js";
import { deleteStoriesInternalSchema, type DeleteStories } from "../models/delete-stories.js";
import { historyInternalSchema, type History } from "../models/history.js";
import { searchStoriesInternalSchema, type SearchStories } from "../models/search-stories.js";
import { storyCommentSchema, type StoryComment } from "../models/story-comment.js";
import { storyReactionSchema, type StoryReaction } from "../models/story-reaction.js";
import { storySlimInternalSchema, type StorySlim } from "../models/story-slim.js";
import { storyInternalSchema, type Story } from "../models/story.js";
import { taskSchema, type Task } from "../models/task.js";
import { updateStoriesInternalSchema, type UpdateStories } from "../models/update-stories.js";
import { updateStoryCommentInternalSchema, type UpdateStoryComment } from "../models/update-story-comment.js";
import { updateStoryInternalSchema, type UpdateStory } from "../models/update-story.js";
import { updateTaskInternalSchema, type UpdateTask } from "../models/update-task.js";
import type { Servers } from "../servers.js";

export class Stories {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Multiple Stories
   *
   * @remarks
   * Create Multiple Stories allows you to create multiple stories in a single request using the
   * same syntax as Create Story.
   *
   * @returns Resource
   *
   * @throws {@link Stories.CreateMultipleStoriesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createMultipleStories(
    request: Stories.CreateMultipleStoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<StorySlim[], Stories.CreateMultipleStoriesError> {
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
        errorFactory: Stories.CreateMultipleStoriesError,
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
   * @throws {@link Stories.CreateStoryError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createStory(
    request: Stories.CreateStoryRequest,
    options?: RequestOptions,
  ): ApiPromise<Story, Stories.CreateStoryError> {
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
        errorFactory: Stories.CreateStoryError,
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
   * @throws {@link Stories.CreateStoryCommentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createStoryComment(
    request: Stories.CreateStoryCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<StoryComment, Stories.CreateStoryCommentError> {
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
        errorFactory: Stories.CreateStoryCommentError,
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
   * @throws {@link Stories.CreateStoryFromTemplateError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createStoryFromTemplate(
    request: Stories.CreateStoryFromTemplateRequest,
    options?: RequestOptions,
  ): ApiPromise<Story, Stories.CreateStoryFromTemplateError> {
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
        errorFactory: Stories.CreateStoryFromTemplateError,
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
   * @throws {@link Stories.CreateStoryReactionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createStoryReaction(
    request: Stories.CreateStoryReactionRequest,
    options?: RequestOptions,
  ): ApiPromise<StoryReaction[], Stories.CreateStoryReactionError> {
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
        errorFactory: Stories.CreateStoryReactionError,
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
   * @throws {@link Stories.CreateTaskError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createTask(
    request: Stories.CreateTaskRequest,
    options?: RequestOptions,
  ): ApiPromise<Task, Stories.CreateTaskError> {
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
        errorFactory: Stories.CreateTaskError,
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
   * @throws {@link Stories.DeleteMultipleStoriesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteMultipleStories(
    request: Stories.DeleteMultipleStoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Stories.DeleteMultipleStoriesError> {
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
        errorFactory: Stories.DeleteMultipleStoriesError,
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
   * @throws {@link Stories.DeleteStoryError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteStory(
    request: Stories.DeleteStoryRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Stories.DeleteStoryError> {
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
        errorFactory: Stories.DeleteStoryError,
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
   * @throws {@link Stories.DeleteStoryCommentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteStoryComment(
    request: Stories.DeleteStoryCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Stories.DeleteStoryCommentError> {
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
        errorFactory: Stories.DeleteStoryCommentError,
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
   * @throws {@link Stories.DeleteStoryReactionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteStoryReaction(
    request: Stories.DeleteStoryReactionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Stories.DeleteStoryReactionError> {
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
        errorFactory: Stories.DeleteStoryReactionError,
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
   * @throws {@link Stories.DeleteTaskError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteTask(
    request: Stories.DeleteTaskRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Stories.DeleteTaskError> {
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
        errorFactory: Stories.DeleteTaskError,
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
   * @throws {@link Stories.GetStoryError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getStory(
    request: Stories.GetStoryRequest,
    options?: RequestOptions,
  ): ApiPromise<Story, Stories.GetStoryError> {
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
        errorFactory: Stories.GetStoryError,
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
   * @throws {@link Stories.GetStoryCommentError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getStoryComment(
    request: Stories.GetStoryCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<StoryComment, Stories.GetStoryCommentError> {
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
        errorFactory: Stories.GetStoryCommentError,
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
   * @throws {@link Stories.GetTaskError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTask(request: Stories.GetTaskRequest, options?: RequestOptions): ApiPromise<Task, Stories.GetTaskError> {
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
        errorFactory: Stories.GetTaskError,
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
   * @throws {@link Stories.ListStoryCommentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listStoryComment(
    request: Stories.ListStoryCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<StoryComment[], Stories.ListStoryCommentError> {
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
        errorFactory: Stories.ListStoryCommentError,
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
   * @throws {@link Stories.ListStorySubTasksError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listStorySubTasks(
    request: Stories.ListStorySubTasksRequest,
    options?: RequestOptions,
  ): ApiPromise<StorySlim[], Stories.ListStorySubTasksError> {
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
        errorFactory: Stories.ListStorySubTasksError,
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
   * @throws {@link Stories.QueryStoriesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryStories(
    request: Stories.QueryStoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<StorySlim[], Stories.QueryStoriesError> {
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
        errorFactory: Stories.QueryStoriesError,
      },
      options,
    );
  }

  /**
   * Story History
   *
   * @returns Resource
   *
   * @throws {@link Stories.StoryHistoryError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  storyHistory(
    request: Stories.StoryHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<History[], Stories.StoryHistoryError> {
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
        errorFactory: Stories.StoryHistoryError,
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
   * @throws {@link Stories.UnlinkCommentThreadFromSlackError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unlinkCommentThreadFromSlack(
    request: Stories.UnlinkCommentThreadFromSlackRequest,
    options?: RequestOptions,
  ): ApiPromise<StoryComment, Stories.UnlinkCommentThreadFromSlackError> {
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
        errorFactory: Stories.UnlinkCommentThreadFromSlackError,
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
   * @throws {@link Stories.UpdateMultipleStoriesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateMultipleStories(
    request: Stories.UpdateMultipleStoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<StorySlim[], Stories.UpdateMultipleStoriesError> {
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
        errorFactory: Stories.UpdateMultipleStoriesError,
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
   * @throws {@link Stories.UpdateStoryError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateStory(
    request: Stories.UpdateStoryRequest,
    options?: RequestOptions,
  ): ApiPromise<Story, Stories.UpdateStoryError> {
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
        errorFactory: Stories.UpdateStoryError,
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
   * @throws {@link Stories.UpdateStoryCommentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateStoryComment(
    request: Stories.UpdateStoryCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<StoryComment, Stories.UpdateStoryCommentError> {
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
        errorFactory: Stories.UpdateStoryCommentError,
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
   * @throws {@link Stories.UpdateTaskError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateTask(
    request: Stories.UpdateTaskRequest,
    options?: RequestOptions,
  ): ApiPromise<Task, Stories.UpdateTaskError> {
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
        errorFactory: Stories.UpdateTaskError,
      },
      options,
    );
  }
}

export namespace Stories {
  export type CreateMultipleStoriesRequest = {
    body: CreateStories;
  };

  export class CreateMultipleStoriesError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateMultipleStoriesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type CreateStoryRequest = {
    /** Request parameters for creating a story. */
    body: CreateStoryParams;
  };

  export class CreateStoryError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateStoryError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type CreateStoryCommentRequest = {
    /** The ID of the Story that the Comment is in. */
    storyPublicId: number;
    body: CreateStoryComment;
  };

  export class CreateStoryCommentError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateStoryCommentError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
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
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateStoryFromTemplateError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
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
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateStoryReactionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type CreateTaskRequest = {
    /** The ID of the Story that the Task will be in. */
    storyPublicId: number;
    body: CreateTask;
  };

  export class CreateTaskError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateTaskError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type DeleteMultipleStoriesRequest = {
    body: DeleteStories;
  };

  export class DeleteMultipleStoriesError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteMultipleStoriesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type DeleteStoryRequest = {
    /** The ID of the Story. */
    storyPublicId: number;
  };

  export class DeleteStoryError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteStoryError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
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
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteStoryCommentError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
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
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteStoryReactionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
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
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteTaskError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type GetStoryRequest = {
    /** The ID of the Story. */
    storyPublicId: number;
  };

  export class GetStoryError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetStoryError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
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
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetStoryCommentError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
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
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTaskError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type ListStoryCommentRequest = {
    /** The ID of the Story that the Comment is in. */
    storyPublicId: number;
  };

  export class ListStoryCommentError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListStoryCommentError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type ListStorySubTasksRequest = {
    /** The ID of the Story. */
    storyPublicId: number;
  };

  export class ListStorySubTasksError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListStorySubTasksError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type QueryStoriesRequest = {
    body: SearchStories;
  };

  export class QueryStoriesError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<QueryStoriesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type StoryHistoryRequest = {
    /** The ID of the Story. */
    storyPublicId: number;
  };

  export class StoryHistoryError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<StoryHistoryError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
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
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UnlinkCommentThreadFromSlackError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type UpdateMultipleStoriesRequest = {
    body: UpdateStories;
  };

  export class UpdateMultipleStoriesError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateMultipleStoriesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type UpdateStoryRequest = {
    /** The unique identifier of this story. */
    storyPublicId: number;
    body: UpdateStory;
  };

  export class UpdateStoryError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateStoryError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
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
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateStoryCommentError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
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
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateTaskError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
