import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bodySchema, type Body } from "../models/body.js";
import { body11InternalSchema, type Body11 } from "../models/body11.js";
import { body15Schema, type Body15 } from "../models/body15.js";
import { body23InternalSchema, type Body23 } from "../models/body23.js";
import { itemSyncViewSchema, type ItemSyncView } from "../models/item-sync-view.js";
import { paginatedList4Schema, type PaginatedList4 } from "../models/paginated-list4.js";
import {
  tasksCompletedDateResponseSchema,
  type TasksCompletedDateResponse,
} from "../models/tasks-completed-date-response.js";
import { todoistErrorSchema, type TodoistError } from "../models/todoist-error.js";
import type { Servers } from "../servers.js";

export class Tasks {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Close Task
   *
   * @remarks
   * Closes a task.
   *
   * The command performs in the same way as our official clients:
   *
   * Regular tasks are marked complete and moved to history, along with their subtasks. Tasks with
   * [recurring due
   * dates](https://todoist.com/help/articles/introduction-to-recurring-dates-YUYVJJAV) will be
   * scheduled to their next occurrence.
   *
   * @returns No Content (what the live API returns)
   *
   * @throws {@link Tasks.CloseTaskApiV1TasksTaskIdClosePostError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  closeTaskApiV1TasksTaskIdClosePost(
    request: Tasks.CloseTaskApiV1TasksTaskIdClosePostRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Tasks.CloseTaskApiV1TasksTaskIdClosePostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/tasks/{task_id}/close"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "task_id", value: request.taskId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Tasks.CloseTaskApiV1TasksTaskIdClosePostError,
      },
      options,
    );
  }

  /**
   * Create Task
   *
   * @remarks
   * Create a new task.
   *
   * @returns Successful Response
   *
   * @throws {@link Tasks.CreateTaskApiV1TasksPostError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createTaskApiV1TasksPost(
    request: Tasks.CreateTaskApiV1TasksPostRequest,
    options?: RequestOptions,
  ): ApiPromise<ItemSyncView, Tasks.CreateTaskApiV1TasksPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/tasks"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: body11InternalSchema },
      },
      {
        success: { kind: "json", schema: itemSyncViewSchema },
        errorFactory: Tasks.CreateTaskApiV1TasksPostError,
      },
      options,
    );
  }

  /**
   * Delete Task
   *
   * @remarks
   * Delete a task and all of its subtasks.
   *
   * Returns `NOT_FOUND` when the task does not exist and `FORBIDDEN` when the authenticated user
   * cannot modify the task.
   *
   * @returns No Content (what the live API returns)
   *
   * @throws {@link Tasks.DeleteTaskApiV1TasksTaskIdDeleteError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteTaskApiV1TasksTaskIdDelete(
    request: Tasks.DeleteTaskApiV1TasksTaskIdDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Tasks.DeleteTaskApiV1TasksTaskIdDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/tasks/{task_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "task_id", value: request.taskId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Tasks.DeleteTaskApiV1TasksTaskIdDeleteError,
      },
      options,
    );
  }

  /**
   * Get Task
   *
   * @remarks
   * Returns a single active (non-completed) task by ID
   *
   * @returns Successful Response
   *
   * @throws {@link Tasks.GetTaskApiV1TasksTaskIdGetError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTaskApiV1TasksTaskIdGet(
    request: Tasks.GetTaskApiV1TasksTaskIdGetRequest,
    options?: RequestOptions,
  ): ApiPromise<ItemSyncView, Tasks.GetTaskApiV1TasksTaskIdGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/tasks/{task_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "task_id", value: request.taskId, schema: s.string() }],
        query: [{ name: "public_key", value: request.publicKey, schema: s.optionalNullable(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: itemSyncViewSchema },
        errorFactory: Tasks.GetTaskApiV1TasksTaskIdGetError,
      },
      options,
    );
  }

  /**
   * Get Tasks
   *
   * @remarks
   * Get all active tasks for the user.
   *
   * All provided parameters are used to narrow down the list of tasks.
   *
   * This is a paginated endpoint. See the [Pagination guide](#tag/Pagination) for details on using
   * cursor-based pagination.
   *
   * @returns Successful Response
   *
   * @throws {@link Tasks.GetTasksApiV1TasksGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTasksApiV1TasksGet(
    request: Tasks.GetTasksApiV1TasksGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PaginatedList4, Tasks.GetTasksApiV1TasksGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/tasks"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "project_id", value: request.projectId, schema: s.optionalNullable(s.string()) },
          { name: "section_id", value: request.sectionId, schema: s.optionalNullable(s.string()) },
          { name: "parent_id", value: request.parentId, schema: s.optionalNullable(s.string()) },
          { name: "label", value: request.label, schema: s.optionalNullable(s.string()) },
          { name: "ids", value: request.ids, schema: s.optionalNullable(s.string()) },
          { name: "cursor", value: request.cursor, schema: s.optionalNullable(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedList4Schema },
        errorFactory: Tasks.GetTasksApiV1TasksGetError,
      },
      options,
    );
  }

  /**
   * Get Tasks By Filter
   *
   * @remarks
   * Get all tasks matching the filter.
   *
   * This is a paginated endpoint. See the [Pagination guide](#tag/Pagination) for details on using
   * cursor-based pagination.
   *
   * @returns Successful Response
   *
   * @throws {@link Tasks.GetTasksByFilterApiV1TasksFilterGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTasksByFilterApiV1TasksFilterGet(
    request: Tasks.GetTasksByFilterApiV1TasksFilterGetRequest,
    options?: RequestOptions,
  ): ApiPromise<PaginatedList4, Tasks.GetTasksByFilterApiV1TasksFilterGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/tasks/filter"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "query", value: request.query, schema: s.string() },
          { name: "lang", value: request.lang, schema: s.optionalNullable(s.string()) },
          { name: "cursor", value: request.cursor, schema: s.optionalNullable(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedList4Schema },
        errorFactory: Tasks.GetTasksByFilterApiV1TasksFilterGetError,
      },
      options,
    );
  }

  /**
   * Move Task
   *
   * @remarks
   * Moves task to another project, section or parent.
   *
   * @returns Successful Response
   *
   * @throws {@link Tasks.MoveTaskApiV1TasksTaskIdMovePostError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  moveTaskApiV1TasksTaskIdMovePost(
    request: Tasks.MoveTaskApiV1TasksTaskIdMovePostRequest,
    options?: RequestOptions,
  ): ApiPromise<ItemSyncView, Tasks.MoveTaskApiV1TasksTaskIdMovePostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/tasks/{task_id}/move"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "task_id", value: request.taskId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bodySchema },
      },
      {
        success: { kind: "json", schema: itemSyncViewSchema },
        errorFactory: Tasks.MoveTaskApiV1TasksTaskIdMovePostError,
      },
      options,
    );
  }

  /**
   * Quick Add
   *
   * @remarks
   * Add a new task using Quick Add with natural language processing.
   *
   * Quick Add allows creating tasks with rich metadata using natural language text. This endpoint
   * uses the same parsing engine as Todoist's official clients, supporting dates, projects, labels,
   * priorities, assignees, and more in a single text string.
   *
   * ## Basic Syntax Overview
   *
   * - **Due dates**: Natural language like `today`, `tomorrow at 5pm`, `next Monday`
   * - **Projects**: `#ProjectName` (use `#My\\ Project` for names with spaces)
   * - **Sections**: `/SectionName` (requires a project to be specified)
   * - **Labels**: `@labelname` (multiple labels supported)
   * - **Priority**: `p1` to `p4`, `P1` to `P4`, or `!!1` to `!!4`
   * - **Assignees**: `+Name` (requires a project to be specified)
   * - **Deadlines**: `{date expression}` (e.g., `{tomorrow}`, `{in 3 days}`)
   * - **Reminders**: `!30m` (30 min before), `!1h` (1 hour before), `!0mb` (at due time), `!14:00`
   *   (absolute time), `!30 min before` (verbose, English only)
   * - **Descriptions**: ` // description text` (must be at the end)
   *
   * ## Examples
   *
   * - `"Buy milk today at 5pm #Shopping \@groceries p1"`
   * - `"Team meeting next Monday at 10am #Work +JohnDoe !30m"`
   * - `"Review PR {Friday} // Check the new authentication flow"`
   * - `"Submit report tomorrow #Work /Urgent \@important // Include Q3 metrics"`
   *
   * ## Important Notes
   *
   * - Natural language date parsing supports multiple languages based on account settings
   * - If parsing fails for any element, the task is still created (with unparsed text remaining in
   *   the content)
   * - Use the `meta` parameter to see detailed parsing results for debugging
   *
   * For comprehensive documentation including all supported date formats, language support, and
   * advanced syntax, see the [Quick Add help
   * article](https://www.todoist.com/help/articles/use-task-quick-add-in-todoist-va4Lhpzz).
   *
   * @returns Successful Response
   *
   * @throws {@link Tasks.QuickAddApiV1TasksQuickPostError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  quickAddApiV1TasksQuickPost(
    request: Tasks.QuickAddApiV1TasksQuickPostRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Tasks.QuickAddApiV1TasksQuickPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/tasks/quick"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: body15Schema },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Tasks.QuickAddApiV1TasksQuickPostError,
      },
      options,
    );
  }

  /**
   * Reopen Task
   *
   * @remarks
   * Reopens a task.
   *
   * Any ancestor tasks or sections will also be marked as uncomplete and restored from history.
   *
   * The reinstated tasks and sections will appear at the end of the list within their parent, after
   * any previously active tasks.
   *
   * @returns No Content (what the live API returns)
   *
   * @throws {@link Tasks.ReopenTaskApiV1TasksTaskIdReopenPostError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  reopenTaskApiV1TasksTaskIdReopenPost(
    request: Tasks.ReopenTaskApiV1TasksTaskIdReopenPostRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Tasks.ReopenTaskApiV1TasksTaskIdReopenPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/tasks/{task_id}/reopen"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "task_id", value: request.taskId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Tasks.ReopenTaskApiV1TasksTaskIdReopenPostError,
      },
      options,
    );
  }

  /**
   * Tasks Completed By Completion Date
   *
   * @remarks
   * Retrieves a list of completed tasks strictly limited by the specified completion date range (up
   * to 3 months).
   *
   * It can retrieve completed items:
   *
   * - From all the projects the user has joined in a workspace
   * - From all the projects of the user
   * - That match many [supported
   *   filters](https://todoist.com/help/articles/introduction-to-filters-V98wIH)
   *
   * By default, the response is limited to a page containing a maximum of 50 items (configurable
   * using `limit`).
   *
   * Subsequent pages of results can be fetched by using the `next_cursor` value from the response
   * as the `cursor` value for the next request.
   *
   * @returns Successful Response
   *
   * @throws {@link Tasks.TasksCompletedByCompletionDateApiV1TasksCompletedByCompletionDateGetError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  tasksCompletedByCompletionDateApiV1TasksCompletedByCompletionDateGet(
    request: Tasks.TasksCompletedByCompletionDateApiV1TasksCompletedByCompletionDateGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TasksCompletedDateResponse,
    Tasks.TasksCompletedByCompletionDateApiV1TasksCompletedByCompletionDateGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/tasks/completed/by_completion_date"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "since", value: request.since, schema: s.dateTime() },
          { name: "until", value: request.until, schema: s.dateTime() },
          { name: "workspace_id", value: request.workspaceId, schema: s.optionalNullable(s.int()) },
          { name: "project_id", value: request.projectId, schema: s.optionalNullable(s.string()) },
          { name: "section_id", value: request.sectionId, schema: s.optionalNullable(s.string()) },
          { name: "parent_id", value: request.parentId, schema: s.optionalNullable(s.string()) },
          { name: "filter_query", value: request.filterQuery, schema: s.optionalNullable(s.string()) },
          { name: "filter_lang", value: request.filterLang, schema: s.optionalNullable(s.string()) },
          { name: "cursor", value: request.cursor, schema: s.optionalNullable(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
          { name: "public_key", value: request.publicKey, schema: s.optionalNullable(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tasksCompletedDateResponseSchema },
        errorFactory: Tasks.TasksCompletedByCompletionDateApiV1TasksCompletedByCompletionDateGetError,
      },
      options,
    );
  }

  /**
   * Tasks Completed By Due Date
   *
   * @remarks
   * Retrieves a list of completed items strictly limited by the specified due date range (up to 6
   * weeks).
   *
   * It can retrieve completed items:
   *
   * - From within a project, section, or parent item
   * - From all the projects the user has joined in a workspace
   * - From all the projects of the user
   * - That match many [supported
   *   filters](https://todoist.com/help/articles/introduction-to-filters-V98wIH)
   *
   * By default, the response is limited to a page containing a maximum of 50 items (configurable
   * using `limit`).
   *
   * Subsequent pages of results can be fetched by using the `next_cursor` value from the response
   * as the `cursor` value for the next request.
   *
   * @returns Successful Response
   *
   * @throws {@link Tasks.TasksCompletedByDueDateApiV1TasksCompletedByDueDateGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  tasksCompletedByDueDateApiV1TasksCompletedByDueDateGet(
    request: Tasks.TasksCompletedByDueDateApiV1TasksCompletedByDueDateGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TasksCompletedDateResponse,
    Tasks.TasksCompletedByDueDateApiV1TasksCompletedByDueDateGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/tasks/completed/by_due_date"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "since", value: request.since, schema: s.dateTime() },
          { name: "until", value: request.until, schema: s.dateTime() },
          { name: "workspace_id", value: request.workspaceId, schema: s.optionalNullable(s.int()) },
          { name: "project_id", value: request.projectId, schema: s.optionalNullable(s.string()) },
          { name: "section_id", value: request.sectionId, schema: s.optionalNullable(s.string()) },
          { name: "parent_id", value: request.parentId, schema: s.optionalNullable(s.string()) },
          { name: "filter_query", value: request.filterQuery, schema: s.optionalNullable(s.string()) },
          { name: "filter_lang", value: request.filterLang, schema: s.optionalNullable(s.string()) },
          { name: "cursor", value: request.cursor, schema: s.optionalNullable(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tasksCompletedDateResponseSchema },
        errorFactory: Tasks.TasksCompletedByDueDateApiV1TasksCompletedByDueDateGetError,
      },
      options,
    );
  }

  /**
   * Update Task
   *
   * @remarks
   * Updates an existing task.
   *
   * @returns Successful Response
   *
   * @throws {@link Tasks.UpdateTaskApiV1TasksTaskIdPostError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateTaskApiV1TasksTaskIdPost(
    request: Tasks.UpdateTaskApiV1TasksTaskIdPostRequest,
    options?: RequestOptions,
  ): ApiPromise<ItemSyncView, Tasks.UpdateTaskApiV1TasksTaskIdPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/tasks/{task_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "task_id", value: request.taskId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: body23InternalSchema },
      },
      {
        success: { kind: "json", schema: itemSyncViewSchema },
        errorFactory: Tasks.UpdateTaskApiV1TasksTaskIdPostError,
      },
      options,
    );
  }
}

export namespace Tasks {
  export type CloseTaskApiV1TasksTaskIdClosePostRequest = {
    taskId: string;
  };

  export class CloseTaskApiV1TasksTaskIdClosePostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CloseTaskApiV1TasksTaskIdClosePostError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type CreateTaskApiV1TasksPostRequest = {
    body: Body11;
  };

  export class CreateTaskApiV1TasksPostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateTaskApiV1TasksPostError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type DeleteTaskApiV1TasksTaskIdDeleteRequest = {
    taskId: string;
  };

  export class DeleteTaskApiV1TasksTaskIdDeleteError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteTaskApiV1TasksTaskIdDeleteError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type GetTaskApiV1TasksTaskIdGetRequest = {
    taskId: string;
    publicKey?: string | null;
  };

  export class GetTaskApiV1TasksTaskIdGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTaskApiV1TasksTaskIdGetError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type GetTasksApiV1TasksGetRequest = {
    projectId?: string | null;
    sectionId?: string | null;
    parentId?: string | null;
    label?: string | null;
    ids?: string | null;
    cursor?: string | null;
    /** @default 50 */
    limit?: number;
  };

  export const getTasksApiV1TasksGetRequestSchema: Schema<GetTasksApiV1TasksGetRequest> = s.lazySchema(() =>
    s.object<GetTasksApiV1TasksGetRequest>({
      projectId: s.optionalNullable(s.string()),
      sectionId: s.optionalNullable(s.string()),
      parentId: s.optionalNullable(s.string()),
      label: s.optionalNullable(s.string()),
      ids: s.optionalNullable(s.string()),
      cursor: s.optionalNullable(
        s.string().check(s.minLength(1), s.pattern("^[0-9a-zA-Z_-]+\\.[0-9a-zA-Z_-]+$")),
      ),
      limit: s.defaulted(s.int().check(s.gt(0), s.lte(200)), 50),
    }),
  );

  export class GetTasksApiV1TasksGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTasksApiV1TasksGetError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type GetTasksByFilterApiV1TasksFilterGetRequest = {
    query: string;
    lang?: string | null;
    cursor?: string | null;
    /** @default 50 */
    limit?: number;
  };

  export const getTasksByFilterApiV1TasksFilterGetRequestSchema: Schema<GetTasksByFilterApiV1TasksFilterGetRequest> =
    s.lazySchema(() =>
      s.object<GetTasksByFilterApiV1TasksFilterGetRequest>({
        query: s.string().check(s.minLength(1), s.maxLength(1024)),
        lang: s.optionalNullable(s.string()),
        cursor: s.optionalNullable(
          s.string().check(s.minLength(1), s.pattern("^[0-9a-zA-Z_-]+\\.[0-9a-zA-Z_-]+$")),
        ),
        limit: s.defaulted(s.int().check(s.gt(0), s.lte(200)), 50),
      }),
    );

  export class GetTasksByFilterApiV1TasksFilterGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTasksByFilterApiV1TasksFilterGetError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type MoveTaskApiV1TasksTaskIdMovePostRequest = {
    taskId: string;
    body: Body;
  };

  export class MoveTaskApiV1TasksTaskIdMovePostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<MoveTaskApiV1TasksTaskIdMovePostError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type QuickAddApiV1TasksQuickPostRequest = {
    body: Body15;
  };

  export class QuickAddApiV1TasksQuickPostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<QuickAddApiV1TasksQuickPostError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type ReopenTaskApiV1TasksTaskIdReopenPostRequest = {
    taskId: string;
  };

  export class ReopenTaskApiV1TasksTaskIdReopenPostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ReopenTaskApiV1TasksTaskIdReopenPostError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type TasksCompletedByCompletionDateApiV1TasksCompletedByCompletionDateGetRequest = {
    since: Date;
    until: Date;
    workspaceId?: number | null;
    projectId?: string | null;
    sectionId?: string | null;
    parentId?: string | null;
    filterQuery?: string | null;
    filterLang?: string | null;
    cursor?: string | null;
    /** @default 50 */
    limit?: number;
    publicKey?: string | null;
  };

  export const tasksCompletedByCompletionDateApiV1TasksCompletedByCompletionDateGetRequestSchema: Schema<TasksCompletedByCompletionDateApiV1TasksCompletedByCompletionDateGetRequest> =
    s.lazySchema(() =>
      s.object<TasksCompletedByCompletionDateApiV1TasksCompletedByCompletionDateGetRequest>({
        since: s.dateTime(),
        until: s.dateTime(),
        workspaceId: s.optionalNullable(s.int()),
        projectId: s.optionalNullable(s.string()),
        sectionId: s.optionalNullable(s.string()),
        parentId: s.optionalNullable(s.string()),
        filterQuery: s.optionalNullable(s.string().check(s.minLength(1), s.maxLength(1024))),
        filterLang: s.optionalNullable(s.string()),
        cursor: s.optionalNullable(
          s.string().check(s.minLength(1), s.pattern("^[0-9a-zA-Z_-]+\\.[0-9a-zA-Z_-]+$")),
        ),
        limit: s.defaulted(s.int(), 50),
        publicKey: s.optionalNullable(s.string()),
      }),
    );

  export class TasksCompletedByCompletionDateApiV1TasksCompletedByCompletionDateGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<TasksCompletedByCompletionDateApiV1TasksCompletedByCompletionDateGetError> =
      [
        { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
      ];
  }

  export type TasksCompletedByDueDateApiV1TasksCompletedByDueDateGetRequest = {
    since: Date;
    until: Date;
    workspaceId?: number | null;
    projectId?: string | null;
    sectionId?: string | null;
    parentId?: string | null;
    filterQuery?: string | null;
    filterLang?: string | null;
    cursor?: string | null;
    /** @default 50 */
    limit?: number;
  };

  export const tasksCompletedByDueDateApiV1TasksCompletedByDueDateGetRequestSchema: Schema<TasksCompletedByDueDateApiV1TasksCompletedByDueDateGetRequest> =
    s.lazySchema(() =>
      s.object<TasksCompletedByDueDateApiV1TasksCompletedByDueDateGetRequest>({
        since: s.dateTime(),
        until: s.dateTime(),
        workspaceId: s.optionalNullable(s.int()),
        projectId: s.optionalNullable(s.string()),
        sectionId: s.optionalNullable(s.string()),
        parentId: s.optionalNullable(s.string()),
        filterQuery: s.optionalNullable(s.string().check(s.minLength(1), s.maxLength(1024))),
        filterLang: s.optionalNullable(s.string()),
        cursor: s.optionalNullable(
          s.string().check(s.minLength(1), s.pattern("^[0-9a-zA-Z_-]+\\.[0-9a-zA-Z_-]+$")),
        ),
        limit: s.defaulted(s.int(), 50),
      }),
    );

  export class TasksCompletedByDueDateApiV1TasksCompletedByDueDateGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<TasksCompletedByDueDateApiV1TasksCompletedByDueDateGetError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type UpdateTaskApiV1TasksTaskIdPostRequest = {
    taskId: string;
    body: Body23;
  };

  export class UpdateTaskApiV1TasksTaskIdPostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateTaskApiV1TasksTaskIdPostError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }
}
