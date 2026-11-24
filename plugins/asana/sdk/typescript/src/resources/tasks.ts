import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  projectsTasksResponseSchema,
  type ProjectsTasksResponse,
} from "../models/projects-tasks-response.js";
import {
  ResourceSubtype2AsanaTasksApi,
  resourceSubtype2AsanaTasksApiSchema,
} from "../models/resource-subtype2-asana-tasks-api.js";
import {
  sectionsTasksResponseSchema,
  type SectionsTasksResponse,
} from "../models/sections-tasks-response.js";
import { SortBy, sortBySchema } from "../models/sort-by.js";
import { tagsTasksResponseSchema, type TagsTasksResponse } from "../models/tags-tasks-response.js";
import {
  tasksAddDependenciesRequestSchema,
  type TasksAddDependenciesRequest,
} from "../models/tasks-add-dependencies-request.js";
import {
  tasksAddDependenciesResponseSchema,
  type TasksAddDependenciesResponse,
} from "../models/tasks-add-dependencies-response.js";
import {
  tasksAddDependentsRequestSchema,
  type TasksAddDependentsRequest,
} from "../models/tasks-add-dependents-request.js";
import {
  tasksAddDependentsResponseSchema,
  type TasksAddDependentsResponse,
} from "../models/tasks-add-dependents-response.js";
import {
  tasksAddFollowersRequestSchema,
  type TasksAddFollowersRequest,
} from "../models/tasks-add-followers-request.js";
import {
  tasksAddFollowersResponseSchema,
  type TasksAddFollowersResponse,
} from "../models/tasks-add-followers-response.js";
import {
  tasksAddProjectRequestSchema,
  type TasksAddProjectRequest,
} from "../models/tasks-add-project-request.js";
import {
  tasksAddProjectResponseSchema,
  type TasksAddProjectResponse,
} from "../models/tasks-add-project-response.js";
import { tasksAddTagRequestSchema, type TasksAddTagRequest } from "../models/tasks-add-tag-request.js";
import { tasksAddTagResponseSchema, type TasksAddTagResponse } from "../models/tasks-add-tag-response.js";
import {
  tasksDependenciesResponseSchema,
  type TasksDependenciesResponse,
} from "../models/tasks-dependencies-response.js";
import {
  tasksDependentsResponseSchema,
  type TasksDependentsResponse,
} from "../models/tasks-dependents-response.js";
import {
  tasksDuplicateRequestSchema,
  type TasksDuplicateRequest,
} from "../models/tasks-duplicate-request.js";
import {
  tasksDuplicateResponseSchema,
  type TasksDuplicateResponse,
} from "../models/tasks-duplicate-response.js";
import {
  tasksRemoveDependenciesRequestSchema,
  type TasksRemoveDependenciesRequest,
} from "../models/tasks-remove-dependencies-request.js";
import {
  tasksRemoveDependenciesResponseSchema,
  type TasksRemoveDependenciesResponse,
} from "../models/tasks-remove-dependencies-response.js";
import {
  tasksRemoveDependentsRequestSchema,
  type TasksRemoveDependentsRequest,
} from "../models/tasks-remove-dependents-request.js";
import {
  tasksRemoveDependentsResponseSchema,
  type TasksRemoveDependentsResponse,
} from "../models/tasks-remove-dependents-response.js";
import {
  tasksRemoveFollowersRequestSchema,
  type TasksRemoveFollowersRequest,
} from "../models/tasks-remove-followers-request.js";
import {
  tasksRemoveFollowersResponseSchema,
  type TasksRemoveFollowersResponse,
} from "../models/tasks-remove-followers-response.js";
import {
  tasksRemoveProjectRequestSchema,
  type TasksRemoveProjectRequest,
} from "../models/tasks-remove-project-request.js";
import {
  tasksRemoveProjectResponseSchema,
  type TasksRemoveProjectResponse,
} from "../models/tasks-remove-project-response.js";
import {
  tasksRemoveTagRequestSchema,
  type TasksRemoveTagRequest,
} from "../models/tasks-remove-tag-request.js";
import {
  tasksRemoveTagResponseSchema,
  type TasksRemoveTagResponse,
} from "../models/tasks-remove-tag-response.js";
import { tasksRequestSchema, type TasksRequest } from "../models/tasks-request.js";
import { tasksResponseSchema, type TasksResponse } from "../models/tasks-response.js";
import { tasksResponse1Schema, type TasksResponse1 } from "../models/tasks-response1.js";
import { tasksResponse4Schema, type TasksResponse4 } from "../models/tasks-response4.js";
import {
  tasksSetParentRequestSchema,
  type TasksSetParentRequest,
} from "../models/tasks-set-parent-request.js";
import {
  tasksSetParentResponseSchema,
  type TasksSetParentResponse,
} from "../models/tasks-set-parent-response.js";
import { tasksSubtasksRequestSchema, type TasksSubtasksRequest } from "../models/tasks-subtasks-request.js";
import {
  tasksSubtasksResponseSchema,
  type TasksSubtasksResponse,
} from "../models/tasks-subtasks-response.js";
import {
  tasksSubtasksResponse1Schema,
  type TasksSubtasksResponse1,
} from "../models/tasks-subtasks-response1.js";
import {
  userTaskListsTasksResponseSchema,
  type UserTaskListsTasksResponse,
} from "../models/user-task-lists-tasks-response.js";
import {
  workspacesTasksSearchResponseSchema,
  type WorkspacesTasksSearchResponse,
} from "../models/workspaces-tasks-search-response.js";
import type { Servers } from "../servers.js";

/**
 * The task is the basic object around which many operations in Asana are centered. In the Asana
 * application, multiple tasks populate the middle pane according to some view parameters, and the
 * set of selected tasks determines the more detailed information presented in the details pane.
 *
 * Sections are unique in that they will be included in the `memberships` field of task objects
 * returned in the API when the task is within a section. They can also be used to manipulate the
 * ordering of a task within a project.
 *
 * Queries return a compact representation of each task object. To retrieve *all* fields or
 * *specific set* of the fields, use field selectors to manipulate what data is included in a
 * response.
 */
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
   * Set dependencies for a task
   *
   * @remarks
   * Marks a set of tasks as dependencies of this task, if they are not already dependencies. *A
   * task can have at most 30 dependents and dependencies combined*.
   *
   * @returns Successfully set the specified dependencies on the task.
   *
   * @throws {@link Tasks.AddDependenciesForTaskError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addDependenciesForTask(
    request: Tasks.AddDependenciesForTaskRequest,
    options?: RequestOptions,
  ): ApiPromise<TasksAddDependenciesResponse, Tasks.AddDependenciesForTaskError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/tasks/{task_gid}/addDependencies"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "task_gid", value: request.taskGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: tasksAddDependenciesRequestSchema },
      },
      {
        success: { kind: "json", schema: tasksAddDependenciesResponseSchema },
        errorFactory: Tasks.AddDependenciesForTaskError,
      },
      options,
    );
  }

  /**
   * Set dependents for a task
   *
   * @remarks
   * Marks a set of tasks as dependents of this task, if they are not already dependents. *A task
   * can have at most 30 dependents and dependencies combined*.
   *
   * @returns Successfully set the specified dependents on the given task.
   *
   * @throws {@link Tasks.AddDependentsForTaskError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addDependentsForTask(
    request: Tasks.AddDependentsForTaskRequest,
    options?: RequestOptions,
  ): ApiPromise<TasksAddDependentsResponse, Tasks.AddDependentsForTaskError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/tasks/{task_gid}/addDependents"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "task_gid", value: request.taskGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: tasksAddDependentsRequestSchema },
      },
      {
        success: { kind: "json", schema: tasksAddDependentsResponseSchema },
        errorFactory: Tasks.AddDependentsForTaskError,
      },
      options,
    );
  }

  /**
   * Add followers to a task
   *
   * @remarks
   * Adds followers to a task. Returns an empty data block. Each task can be associated with zero or
   * more followers in the system. Requests to add/remove followers, if successful, will return the
   * complete updated task record, described above.
   *
   * @returns Successfully added the specified followers to the task.
   *
   * @throws {@link Tasks.AddFollowersForTaskError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addFollowersForTask(
    request: Tasks.AddFollowersForTaskRequest,
    options?: RequestOptions,
  ): ApiPromise<TasksAddFollowersResponse, Tasks.AddFollowersForTaskError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/tasks/{task_gid}/addFollowers"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "task_gid", value: request.taskGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: tasksAddFollowersRequestSchema },
      },
      {
        success: { kind: "json", schema: tasksAddFollowersResponseSchema },
        errorFactory: Tasks.AddFollowersForTaskError,
      },
      options,
    );
  }

  /**
   * Add a project to a task
   *
   * @remarks
   * Adds the task to the specified project, in the optional location specified. If no location
   * arguments are given, the task will be added to the end of the project.
   *
   * `addProject` can also be used to reorder a task within a project or section that already
   * contains it.
   *
   * At most one of `insert_before`, `insert_after`, or `section` should be specified. Inserting
   * into a section in an non-order-dependent way can be done by specifying section, otherwise, to
   * insert within a section in a particular place, specify `insert_before` or `insert_after` and a
   * task within the section to anchor the position of this task.
   *
   * Returns an empty data block.
   *
   * @returns Successfully added the specified project to the task.
   *
   * @throws {@link Tasks.AddProjectForTaskError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addProjectForTask(
    request: Tasks.AddProjectForTaskRequest,
    options?: RequestOptions,
  ): ApiPromise<TasksAddProjectResponse, Tasks.AddProjectForTaskError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/tasks/{task_gid}/addProject"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "task_gid", value: request.taskGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: tasksAddProjectRequestSchema },
      },
      {
        success: { kind: "json", schema: tasksAddProjectResponseSchema },
        errorFactory: Tasks.AddProjectForTaskError,
      },
      options,
    );
  }

  /**
   * Add a tag to a task
   *
   * @remarks
   * Adds a tag to a task. Returns an empty data block.
   *
   * @returns Successfully added the specified tag to the task.
   *
   * @throws {@link Tasks.AddTagForTaskError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addTagForTask(
    request: Tasks.AddTagForTaskRequest,
    options?: RequestOptions,
  ): ApiPromise<TasksAddTagResponse, Tasks.AddTagForTaskError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/tasks/{task_gid}/addTag"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "task_gid", value: request.taskGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: tasksAddTagRequestSchema },
      },
      {
        success: { kind: "json", schema: tasksAddTagResponseSchema },
        errorFactory: Tasks.AddTagForTaskError,
      },
      options,
    );
  }

  /**
   * Create a subtask
   *
   * @remarks
   * Creates a new subtask and adds it to the parent task. Returns the full record for the newly
   * created subtask.
   *
   * @returns Successfully created the specified subtask.
   *
   * @throws {@link Tasks.CreateSubtaskForTaskError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSubtaskForTask(
    request: Tasks.CreateSubtaskForTaskRequest,
    options?: RequestOptions,
  ): ApiPromise<TasksSubtasksResponse1, Tasks.CreateSubtaskForTaskError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/tasks/{task_gid}/subtasks"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "task_gid", value: request.taskGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: tasksSubtasksRequestSchema },
      },
      {
        success: { kind: "json", schema: tasksSubtasksResponse1Schema },
        errorFactory: Tasks.CreateSubtaskForTaskError,
      },
      options,
    );
  }

  /**
   * Create a task
   *
   * @remarks
   * Creating a new task is as easy as POSTing to the `/tasks` endpoint with a data block containing
   * the fields you’d like to set on the task. Any unspecified fields will take on default values.
   *
   * Every task is required to be created in a specific workspace, and this workspace cannot be
   * changed once set. The workspace need not be set explicitly if you specify `projects` or a
   * `parent` task instead.
   *
   * @returns Successfully created a new task.
   *
   * @throws {@link Tasks.CreateTaskError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createTask(
    request: Tasks.CreateTaskRequest,
    options?: RequestOptions,
  ): ApiPromise<TasksResponse1, Tasks.CreateTaskError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/tasks"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: tasksRequestSchema },
      },
      {
        success: { kind: "json", schema: tasksResponse1Schema },
        errorFactory: Tasks.CreateTaskError,
      },
      options,
    );
  }

  /**
   * Delete a task
   *
   * @remarks
   * A specific, existing task can be deleted by making a DELETE request on the URL for that task.
   * Deleted tasks go into the “trash” of the user making the delete request. Tasks can be recovered
   * from the trash within a period of 30 days; afterward they are completely removed from the
   * system.
   *
   * Returns an empty data record.
   *
   * @returns Successfully deleted the specified task.
   *
   * @throws {@link Tasks.DeleteTaskError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteTask(
    request: Tasks.DeleteTaskRequest,
    options?: RequestOptions,
  ): ApiPromise<TasksResponse4, Tasks.DeleteTaskError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/tasks/{task_gid}"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "task_gid", value: request.taskGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tasksResponse4Schema },
        errorFactory: Tasks.DeleteTaskError,
      },
      options,
    );
  }

  /**
   * Duplicate a task
   *
   * @remarks
   * Creates and returns a job that will asynchronously handle the duplication.
   *
   * @returns Successfully created the job to handle duplication.
   *
   * @throws {@link Tasks.DuplicateTaskError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  duplicateTask(
    request: Tasks.DuplicateTaskRequest,
    options?: RequestOptions,
  ): ApiPromise<TasksDuplicateResponse, Tasks.DuplicateTaskError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/tasks/{task_gid}/duplicate"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "task_gid", value: request.taskGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: tasksDuplicateRequestSchema },
      },
      {
        success: { kind: "json", schema: tasksDuplicateResponseSchema },
        errorFactory: Tasks.DuplicateTaskError,
      },
      options,
    );
  }

  /**
   * Get dependencies from a task
   *
   * @remarks
   * Returns the compact representations of all of the dependencies of a task.
   *
   * @returns Successfully retrieved the specified task's dependencies.
   *
   * @throws {@link Tasks.GetDependenciesForTaskError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDependenciesForTask(
    request: Tasks.GetDependenciesForTaskRequest,
    options?: RequestOptions,
  ): ApiPromise<TasksDependenciesResponse, Tasks.GetDependenciesForTaskError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/tasks/{task_gid}/dependencies"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "task_gid", value: request.taskGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tasksDependenciesResponseSchema },
        errorFactory: Tasks.GetDependenciesForTaskError,
      },
      options,
    );
  }

  /**
   * Get dependents from a task
   *
   * @remarks
   * Returns the compact representations of all of the dependents of a task.
   *
   * @returns Successfully retrieved the specified dependents of the task.
   *
   * @throws {@link Tasks.GetDependentsForTaskError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDependentsForTask(
    request: Tasks.GetDependentsForTaskRequest,
    options?: RequestOptions,
  ): ApiPromise<TasksDependentsResponse, Tasks.GetDependentsForTaskError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/tasks/{task_gid}/dependents"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "task_gid", value: request.taskGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tasksDependentsResponseSchema },
        errorFactory: Tasks.GetDependentsForTaskError,
      },
      options,
    );
  }

  /**
   * Get subtasks from a task
   *
   * @remarks
   * Returns a compact representation of all of the subtasks of a task.
   *
   * @returns Successfully retrieved the specified task's subtasks.
   *
   * @throws {@link Tasks.GetSubtasksForTaskError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSubtasksForTask(
    request: Tasks.GetSubtasksForTaskRequest,
    options?: RequestOptions,
  ): ApiPromise<TasksSubtasksResponse, Tasks.GetSubtasksForTaskError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/tasks/{task_gid}/subtasks"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "task_gid", value: request.taskGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tasksSubtasksResponseSchema },
        errorFactory: Tasks.GetSubtasksForTaskError,
      },
      options,
    );
  }

  /**
   * Get a task
   *
   * @remarks
   * Returns the complete task record for a single task.
   *
   * @returns Successfully retrieved the specified task.
   *
   * @throws {@link Tasks.GetTaskError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTask(
    request: Tasks.GetTaskRequest,
    options?: RequestOptions,
  ): ApiPromise<TasksResponse1, Tasks.GetTaskError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/tasks/{task_gid}"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "task_gid", value: request.taskGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tasksResponse1Schema },
        errorFactory: Tasks.GetTaskError,
      },
      options,
    );
  }

  /**
   * Get multiple tasks
   *
   * @remarks
   * Returns the compact task records for some filtered set of tasks. Use one or more of the
   * parameters provided to filter the tasks returned. You must specify a `project` or `tag` if you
   * do not specify `assignee` and `workspace`.
   *
   * For more complex task retrieval, use workspaces/{workspace_gid}/tasks/search.
   *
   * @returns Successfully retrieved requested tasks.
   *
   * @throws {@link Tasks.GetTasksError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTasks(
    request: Tasks.GetTasksRequest = {},
    options?: RequestOptions,
  ): ApiPromise<TasksResponse, Tasks.GetTasksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/tasks"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.string()) },
          { name: "assignee", value: request.assignee, schema: s.optional(s.string()) },
          { name: "project", value: request.project, schema: s.optional(s.string()) },
          { name: "section", value: request.section, schema: s.optional(s.string()) },
          { name: "workspace", value: request.workspace, schema: s.optional(s.string()) },
          { name: "completed_since", value: request.completedSince, schema: s.optional(s.dateTime()) },
          { name: "modified_since", value: request.modifiedSince, schema: s.optional(s.dateTime()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tasksResponseSchema },
        errorFactory: Tasks.GetTasksError,
      },
      options,
    );
  }

  /**
   * Get tasks from a project
   *
   * @remarks
   * Returns the compact task records for all tasks within the given project, ordered by their
   * priority within the project. Tasks can exist in more than one project at a time.
   *
   * @returns Successfully retrieved the requested project's tasks.
   *
   * @throws {@link Tasks.GetTasksForProjectError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTasksForProject(
    request: Tasks.GetTasksForProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectsTasksResponse, Tasks.GetTasksForProjectError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/projects/{project_gid}/tasks"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "project_gid", value: request.projectGid, schema: s.string() }],
        query: [
          { name: "completed_since", value: request.completedSince, schema: s.optional(s.string()) },
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: projectsTasksResponseSchema },
        errorFactory: Tasks.GetTasksForProjectError,
      },
      options,
    );
  }

  /**
   * Get tasks from a section
   *
   * @remarks
   * *Board view only*: Returns the compact section records for all tasks within the given section.
   *
   * @returns Successfully retrieved the section's tasks.
   *
   * @throws {@link Tasks.GetTasksForSectionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTasksForSection(
    request: Tasks.GetTasksForSectionRequest,
    options?: RequestOptions,
  ): ApiPromise<SectionsTasksResponse, Tasks.GetTasksForSectionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sections/{section_gid}/tasks"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "section_gid", value: request.sectionGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sectionsTasksResponseSchema },
        errorFactory: Tasks.GetTasksForSectionError,
      },
      options,
    );
  }

  /**
   * Get tasks from a tag
   *
   * @remarks
   * Returns the compact task records for all tasks with the given tag. Tasks can have more than one
   * tag at a time.
   *
   * @returns Successfully retrieved the tasks associated with the specified tag.
   *
   * @throws {@link Tasks.GetTasksForTagError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTasksForTag(
    request: Tasks.GetTasksForTagRequest,
    options?: RequestOptions,
  ): ApiPromise<TagsTasksResponse, Tasks.GetTasksForTagError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/tags/{tag_gid}/tasks"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "tag_gid", value: request.tagGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tagsTasksResponseSchema },
        errorFactory: Tasks.GetTasksForTagError,
      },
      options,
    );
  }

  /**
   * Get tasks from a user task list
   *
   * @remarks
   * Returns the compact list of tasks in a user’s My Tasks list. *Note: Access control is enforced
   * for this endpoint as with all Asana API endpoints, meaning a user’s private tasks will be
   * filtered out if the API-authenticated user does not have access to them.* *Note: Both complete
   * and incomplete tasks are returned by default unless they are filtered out (for example, setting
   * `completed_since=now` will return only incomplete tasks, which is the default view for “My
   * Tasks” in Asana.)*
   *
   * @returns Successfully retrieved the user task list's tasks.
   *
   * @throws {@link Tasks.GetTasksForUserTaskListError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTasksForUserTaskList(
    request: Tasks.GetTasksForUserTaskListRequest,
    options?: RequestOptions,
  ): ApiPromise<UserTaskListsTasksResponse, Tasks.GetTasksForUserTaskListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/user_task_lists/{user_task_list_gid}/tasks"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "user_task_list_gid", value: request.userTaskListGid, schema: s.string() }],
        query: [
          { name: "completed_since", value: request.completedSince, schema: s.optional(s.string()) },
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userTaskListsTasksResponseSchema },
        errorFactory: Tasks.GetTasksForUserTaskListError,
      },
      options,
    );
  }

  /**
   * Unlink dependencies from a task
   *
   * @remarks
   * Unlinks a set of dependencies from this task.
   *
   * @returns Successfully unlinked the dependencies from the specified task.
   *
   * @throws {@link Tasks.RemoveDependenciesForTaskError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeDependenciesForTask(
    request: Tasks.RemoveDependenciesForTaskRequest,
    options?: RequestOptions,
  ): ApiPromise<TasksRemoveDependenciesResponse, Tasks.RemoveDependenciesForTaskError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/tasks/{task_gid}/removeDependencies"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "task_gid", value: request.taskGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: tasksRemoveDependenciesRequestSchema },
      },
      {
        success: { kind: "json", schema: tasksRemoveDependenciesResponseSchema },
        errorFactory: Tasks.RemoveDependenciesForTaskError,
      },
      options,
    );
  }

  /**
   * Unlink dependents from a task
   *
   * @remarks
   * Unlinks a set of dependents from this task.
   *
   * @returns Successfully unlinked the specified tasks as dependents.
   *
   * @throws {@link Tasks.RemoveDependentsForTaskError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeDependentsForTask(
    request: Tasks.RemoveDependentsForTaskRequest,
    options?: RequestOptions,
  ): ApiPromise<TasksRemoveDependentsResponse, Tasks.RemoveDependentsForTaskError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/tasks/{task_gid}/removeDependents"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "task_gid", value: request.taskGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: tasksRemoveDependentsRequestSchema },
      },
      {
        success: { kind: "json", schema: tasksRemoveDependentsResponseSchema },
        errorFactory: Tasks.RemoveDependentsForTaskError,
      },
      options,
    );
  }

  /**
   * Remove followers from a task
   *
   * @remarks
   * Removes each of the specified followers from the task if they are following. Returns the
   * complete, updated record for the affected task.
   *
   * @returns Successfully removed the specified followers from the task.
   *
   * @throws {@link Tasks.RemoveFollowerForTaskError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeFollowerForTask(
    request: Tasks.RemoveFollowerForTaskRequest,
    options?: RequestOptions,
  ): ApiPromise<TasksRemoveFollowersResponse, Tasks.RemoveFollowerForTaskError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/tasks/{task_gid}/removeFollowers"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "task_gid", value: request.taskGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: tasksRemoveFollowersRequestSchema },
      },
      {
        success: { kind: "json", schema: tasksRemoveFollowersResponseSchema },
        errorFactory: Tasks.RemoveFollowerForTaskError,
      },
      options,
    );
  }

  /**
   * Remove a project from a task
   *
   * @remarks
   * Removes the task from the specified project. The task will still exist in the system, but it
   * will not be in the project anymore.
   *
   * Returns an empty data block.
   *
   * @returns Successfully removed the specified project from the task.
   *
   * @throws {@link Tasks.RemoveProjectForTaskError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeProjectForTask(
    request: Tasks.RemoveProjectForTaskRequest,
    options?: RequestOptions,
  ): ApiPromise<TasksRemoveProjectResponse, Tasks.RemoveProjectForTaskError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/tasks/{task_gid}/removeProject"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "task_gid", value: request.taskGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: tasksRemoveProjectRequestSchema },
      },
      {
        success: { kind: "json", schema: tasksRemoveProjectResponseSchema },
        errorFactory: Tasks.RemoveProjectForTaskError,
      },
      options,
    );
  }

  /**
   * Remove a tag from a task
   *
   * @remarks
   * Removes a tag from a task. Returns an empty data block.
   *
   * @returns Successfully removed the specified tag from the task.
   *
   * @throws {@link Tasks.RemoveTagForTaskError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeTagForTask(
    request: Tasks.RemoveTagForTaskRequest,
    options?: RequestOptions,
  ): ApiPromise<TasksRemoveTagResponse, Tasks.RemoveTagForTaskError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/tasks/{task_gid}/removeTag"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "task_gid", value: request.taskGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: tasksRemoveTagRequestSchema },
      },
      {
        success: { kind: "json", schema: tasksRemoveTagResponseSchema },
        errorFactory: Tasks.RemoveTagForTaskError,
      },
      options,
    );
  }

  /**
   * Search tasks in a workspace
   *
   * @remarks
   * To mirror the functionality of the Asana web app's advanced search feature, the Asana API has a
   * task search endpoint that allows you to build complex filters to find and retrieve the exact
   * data you need.
   * #### Premium access
   * Like the Asana web product's advance search feature, this search endpoint will only be
   * available to premium Asana users. A user is premium if any of the following is true:
   *
   * - The workspace in which the search is being performed is a premium workspace - The user is a
   *   member of a premium team inside the workspace
   *
   * Even if a user is only a member of a premium team inside a non-premium workspace, search will
   * allow them to find data anywhere in the workspace, not just inside the premium team. Making a
   * search request using credentials of a non-premium user will result in a `402 Payment Required`
   * error.
   * #### Pagination
   * Search results are not stable; repeating the same query multiple times may return the data in a
   * different order, even if the data do not change. Because of this, the traditional pagination
   * available elsewhere in the Asana API is not available here. However, you can paginate manually
   * by sorting the search results by their creation time and then modifying each subsequent query
   * to exclude data you have already seen. Page sizes are limited to a maximum of 100 items, and
   * can be specified by the `limit` query parameter.
   * #### Eventual consistency
   * Changes in Asana (regardless of whether they’re made though the web product or the API) are
   * forwarded to our search infrastructure to be indexed. This process can take between 10 and 60
   * seconds to complete under normal operation, and longer during some production incidents. Making
   * a change to a task that would alter its presence in a particular search query will not be
   * reflected immediately. This is also true of the advanced search feature in the web product.
   * #### Rate limits
   * You may receive a `429 Too Many Requests` response if you hit any of our rate limits.
   * #### Custom field parameters
   * | Parameter name | Custom field type | Accepted type |
   * |---|---|---|
   * | custom_fields.{gid}.is_set | All | Boolean |
   * | custom_fields.{gid}.value | Text | String |
   * | custom_fields.{gid}.value | Number | Number |
   * | custom_fields.{gid}.value | Enum | Enum option ID |
   * | custom_fields.{gid}.starts_with | Text only | String |
   * | custom_fields.{gid}.ends_with | Text only | String |
   * | custom_fields.{gid}.contains | Text only | String |
   * | custom_fields.{gid}.less_than | Number only | Number |
   * | custom_fields.{gid}.greater_than | Number only | Number |
   *
   * For example, if the gid of the custom field is 12345, these query parameter to find tasks where
   * it is set would be `custom_fields.12345.is_set=true`. To match an exact value for an enum
   * custom field, use the gid of the desired enum option and not the name of the enum option:
   * `custom_fields.12345.value=67890`.
   *
   * **Not Supported**: searching for multiple exact matches of a custom field, searching for
   * multi-enum custom field
   *
   * *Note: If you specify `projects.any` and `sections.any`, you will receive tasks for the project
   * **and** tasks for the section. If you're looking for only tasks in a section, omit the
   * `projects.any` from the request.*
   *
   * @returns Successfully retrieved the section's tasks.
   *
   * @throws {@link Tasks.SearchTasksForWorkspaceError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchTasksForWorkspace(
    request: Tasks.SearchTasksForWorkspaceRequest,
    options?: RequestOptions,
  ): ApiPromise<WorkspacesTasksSearchResponse, Tasks.SearchTasksForWorkspaceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/workspaces/{workspace_gid}/tasks/search"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "workspace_gid", value: request.workspaceGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
          { name: "text", value: request.text, schema: s.optional(s.string()) },
          {
            name: "resource_subtype",
            value: request.resourceSubtype,
            schema: s.defaulted(resourceSubtype2AsanaTasksApiSchema, ResourceSubtype2AsanaTasksApi.Milestone),
          },
          { name: "assignee.any", value: request.assigneeAny, schema: s.optional(s.string()) },
          { name: "assignee.not", value: request.assigneeNot, schema: s.optional(s.string()) },
          { name: "portfolios.any", value: request.portfoliosAny, schema: s.optional(s.string()) },
          { name: "projects.any", value: request.projectsAny, schema: s.optional(s.string()) },
          { name: "projects.not", value: request.projectsNot, schema: s.optional(s.string()) },
          { name: "projects.all", value: request.projectsAll, schema: s.optional(s.string()) },
          { name: "sections.any", value: request.sectionsAny, schema: s.optional(s.string()) },
          { name: "sections.not", value: request.sectionsNot, schema: s.optional(s.string()) },
          { name: "sections.all", value: request.sectionsAll, schema: s.optional(s.string()) },
          { name: "tags.any", value: request.tagsAny, schema: s.optional(s.string()) },
          { name: "tags.not", value: request.tagsNot, schema: s.optional(s.string()) },
          { name: "tags.all", value: request.tagsAll, schema: s.optional(s.string()) },
          { name: "teams.any", value: request.teamsAny, schema: s.optional(s.string()) },
          { name: "followers.not", value: request.followersNot, schema: s.optional(s.string()) },
          { name: "created_by.any", value: request.createdByAny, schema: s.optional(s.string()) },
          { name: "created_by.not", value: request.createdByNot, schema: s.optional(s.string()) },
          { name: "assigned_by.any", value: request.assignedByAny, schema: s.optional(s.string()) },
          { name: "assigned_by.not", value: request.assignedByNot, schema: s.optional(s.string()) },
          { name: "liked_by.not", value: request.likedByNot, schema: s.optional(s.string()) },
          { name: "commented_on_by.not", value: request.commentedOnByNot, schema: s.optional(s.string()) },
          { name: "due_on.before", value: request.dueOnBefore, schema: s.optional(s.dateOnly()) },
          { name: "due_on.after", value: request.dueOnAfter, schema: s.optional(s.dateOnly()) },
          { name: "due_on", value: request.dueOn, schema: s.optionalNullable(s.dateOnly()) },
          { name: "due_at.before", value: request.dueAtBefore, schema: s.optional(s.dateTime()) },
          { name: "due_at.after", value: request.dueAtAfter, schema: s.optional(s.dateTime()) },
          { name: "start_on.before", value: request.startOnBefore, schema: s.optional(s.dateOnly()) },
          { name: "start_on.after", value: request.startOnAfter, schema: s.optional(s.dateOnly()) },
          { name: "start_on", value: request.startOn, schema: s.optionalNullable(s.dateOnly()) },
          { name: "created_on.before", value: request.createdOnBefore, schema: s.optional(s.dateOnly()) },
          { name: "created_on.after", value: request.createdOnAfter, schema: s.optional(s.dateOnly()) },
          { name: "created_on", value: request.createdOn, schema: s.optionalNullable(s.dateOnly()) },
          { name: "created_at.before", value: request.createdAtBefore, schema: s.optional(s.dateTime()) },
          { name: "created_at.after", value: request.createdAtAfter, schema: s.optional(s.dateTime()) },
          { name: "completed_on.before", value: request.completedOnBefore, schema: s.optional(s.dateOnly()) },
          { name: "completed_on.after", value: request.completedOnAfter, schema: s.optional(s.dateOnly()) },
          { name: "completed_on", value: request.completedOn, schema: s.optionalNullable(s.dateOnly()) },
          { name: "completed_at.before", value: request.completedAtBefore, schema: s.optional(s.dateTime()) },
          { name: "completed_at.after", value: request.completedAtAfter, schema: s.optional(s.dateTime()) },
          { name: "modified_on.before", value: request.modifiedOnBefore, schema: s.optional(s.dateOnly()) },
          { name: "modified_on.after", value: request.modifiedOnAfter, schema: s.optional(s.dateOnly()) },
          { name: "modified_on", value: request.modifiedOn, schema: s.optionalNullable(s.dateOnly()) },
          { name: "modified_at.before", value: request.modifiedAtBefore, schema: s.optional(s.dateTime()) },
          { name: "modified_at.after", value: request.modifiedAtAfter, schema: s.optional(s.dateTime()) },
          { name: "is_blocking", value: request.isBlocking, schema: s.optional(s.boolean()) },
          { name: "is_blocked", value: request.isBlocked, schema: s.optional(s.boolean()) },
          { name: "has_attachment", value: request.hasAttachment, schema: s.optional(s.boolean()) },
          { name: "completed", value: request.completed, schema: s.optional(s.boolean()) },
          { name: "is_subtask", value: request.isSubtask, schema: s.optional(s.boolean()) },
          { name: "sort_by", value: request.sortBy, schema: s.defaulted(sortBySchema, SortBy.ModifiedAt) },
          { name: "sort_ascending", value: request.sortAscending, schema: s.defaulted(s.boolean(), false) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: workspacesTasksSearchResponseSchema },
        errorFactory: Tasks.SearchTasksForWorkspaceError,
      },
      options,
    );
  }

  /**
   * Set the parent of a task
   *
   * @remarks
   * parent, or no parent task at all. Returns an empty data block. When using `insert_before` and
   * `insert_after`, at most one of those two options can be specified, and they must already be
   * subtasks of the parent.
   *
   * @returns Successfully changed the parent of the specified subtask.
   *
   * @throws {@link Tasks.SetParentForTaskError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  setParentForTask(
    request: Tasks.SetParentForTaskRequest,
    options?: RequestOptions,
  ): ApiPromise<TasksSetParentResponse, Tasks.SetParentForTaskError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/tasks/{task_gid}/setParent"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "task_gid", value: request.taskGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: tasksSetParentRequestSchema },
      },
      {
        success: { kind: "json", schema: tasksSetParentResponseSchema },
        errorFactory: Tasks.SetParentForTaskError,
      },
      options,
    );
  }

  /**
   * Update a task
   *
   * @remarks
   * A specific, existing task can be updated by making a PUT request on the URL for that task. Only
   * the fields provided in the `data` block will be updated; any unspecified fields will remain
   * unchanged.
   *
   * When using this method, it is best to specify only those fields you wish to change, or else you
   * may overwrite changes made by another user since you last retrieved the task.
   *
   * Returns the complete updated task record.
   *
   * @returns Successfully updated the specified task.
   *
   * @throws {@link Tasks.UpdateTaskError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateTask(
    request: Tasks.UpdateTaskRequest,
    options?: RequestOptions,
  ): ApiPromise<TasksResponse1, Tasks.UpdateTaskError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/tasks/{task_gid}"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "task_gid", value: request.taskGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: tasksRequestSchema },
      },
      {
        success: { kind: "json", schema: tasksResponse1Schema },
        errorFactory: Tasks.UpdateTaskError,
      },
      options,
    );
  }
}

export namespace Tasks {
  export type AddDependenciesForTaskRequest = {
    /** The task to operate on. */
    taskGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /** The list of tasks to set as dependencies. */
    body: TasksAddDependenciesRequest;
  };

  export class AddDependenciesForTaskError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<AddDependenciesForTaskError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 402, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type AddDependentsForTaskRequest = {
    /** The task to operate on. */
    taskGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /** The list of tasks to add as dependents. */
    body: TasksAddDependentsRequest;
  };

  export class AddDependentsForTaskError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<AddDependentsForTaskError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 402, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type AddFollowersForTaskRequest = {
    /** The task to operate on. */
    taskGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /** The followers to add to the task. */
    body: TasksAddFollowersRequest;
  };

  export class AddFollowersForTaskError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<AddFollowersForTaskError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type AddProjectForTaskRequest = {
    /** The task to operate on. */
    taskGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /** The project to add the task to. */
    body: TasksAddProjectRequest;
  };

  export class AddProjectForTaskError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<AddProjectForTaskError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type AddTagForTaskRequest = {
    /** The task to operate on. */
    taskGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /** The tag to add to the task. */
    body: TasksAddTagRequest;
  };

  export class AddTagForTaskError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<AddTagForTaskError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type CreateSubtaskForTaskRequest = {
    /** The task to operate on. */
    taskGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /** The new subtask to create. */
    body: TasksSubtasksRequest;
  };

  export class CreateSubtaskForTaskError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateSubtaskForTaskError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type CreateTaskRequest = {
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /** The task to create. */
    body: TasksRequest;
  };

  export class CreateTaskError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateTaskError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteTaskRequest = {
    /** The task to operate on. */
    taskGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
  };

  export class DeleteTaskError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteTaskError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DuplicateTaskRequest = {
    /** The task to operate on. */
    taskGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /** Describes the duplicate's name and the fields that will be duplicated. */
    body: TasksDuplicateRequest;
  };

  export class DuplicateTaskError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DuplicateTaskError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetDependenciesForTaskRequest = {
    /** The task to operate on. */
    taskGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /**
     * Results per page. The number of objects to return per page. The value must be between 1 and
     * 100.
     */
    limit?: number;
    /**
     * Offset token. An offset to the next page returned by the API. A pagination request will
     * return an offset token, which can be used as an input parameter to the next request. If an
     * offset is not passed in, the API will return the first page of results. 'Note: You can only
     * pass in an offset that was returned to you via a previously paginated request.'
     */
    offset?: string;
  };

  export class GetDependenciesForTaskError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetDependenciesForTaskError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 402, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetDependentsForTaskRequest = {
    /** The task to operate on. */
    taskGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /**
     * Results per page. The number of objects to return per page. The value must be between 1 and
     * 100.
     */
    limit?: number;
    /**
     * Offset token. An offset to the next page returned by the API. A pagination request will
     * return an offset token, which can be used as an input parameter to the next request. If an
     * offset is not passed in, the API will return the first page of results. 'Note: You can only
     * pass in an offset that was returned to you via a previously paginated request.'
     */
    offset?: string;
  };

  export class GetDependentsForTaskError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetDependentsForTaskError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 402, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetSubtasksForTaskRequest = {
    /** The task to operate on. */
    taskGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /**
     * Results per page. The number of objects to return per page. The value must be between 1 and
     * 100.
     */
    limit?: number;
    /**
     * Offset token. An offset to the next page returned by the API. A pagination request will
     * return an offset token, which can be used as an input parameter to the next request. If an
     * offset is not passed in, the API will return the first page of results. 'Note: You can only
     * pass in an offset that was returned to you via a previously paginated request.'
     */
    offset?: string;
  };

  export class GetSubtasksForTaskError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSubtasksForTaskError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetTaskRequest = {
    /** The task to operate on. */
    taskGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
  };

  export class GetTaskError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTaskError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetTasksRequest = {
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /**
     * Results per page. The number of objects to return per page. The value must be between 1 and
     * 100.
     */
    limit?: number;
    /**
     * Offset token. An offset to the next page returned by the API. A pagination request will
     * return an offset token, which can be used as an input parameter to the next request. If an
     * offset is not passed in, the API will return the first page of results. 'Note: You can only
     * pass in an offset that was returned to you via a previously paginated request.'
     */
    offset?: string;
    /**
     * The assignee to filter tasks on. If searching for unassigned tasks, assignee.any = null can
     * be specified. *Note: If you specify `assignee`, you must also specify the `workspace` to
     * filter on.*
     */
    assignee?: string;
    /** The project to filter tasks on. */
    project?: string;
    /**
     * The section to filter tasks on. *Note: Currently, this is only supported in board views.*
     */
    section?: string;
    /**
     * The workspace to filter tasks on. *Note: If you specify `workspace`, you must also specify
     * the `assignee` to filter on.*
     */
    workspace?: string;
    /** Only return tasks that are either incomplete or that have been completed since this time. */
    completedSince?: Date;
    /**
     * Only return tasks that have been modified since the given time.
     *
     * *Note: A task is considered “modified” if any of its properties change, or associations
     * between it and other objects are modified (e.g. a task being added to a project). A task is
     * not considered modified just because another object it is associated with (e.g. a subtask) is
     * modified. Actions that count as modifying the task include assigning, renaming, completing,
     * and adding stories.*
     */
    modifiedSince?: Date;
  };

  export class GetTasksError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTasksError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetTasksForProjectRequest = {
    /** Globally unique identifier for the project. */
    projectGid: string;
    /**
     * Only return tasks that are either incomplete or that have been completed since this time.
     * Accepts a date-time string or the keyword *now*.
     */
    completedSince?: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /**
     * Results per page. The number of objects to return per page. The value must be between 1 and
     * 100.
     */
    limit?: number;
    /**
     * Offset token. An offset to the next page returned by the API. A pagination request will
     * return an offset token, which can be used as an input parameter to the next request. If an
     * offset is not passed in, the API will return the first page of results. 'Note: You can only
     * pass in an offset that was returned to you via a previously paginated request.'
     */
    offset?: string;
  };

  export class GetTasksForProjectError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTasksForProjectError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetTasksForSectionRequest = {
    /** The globally unique identifier for the section. */
    sectionGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /**
     * Results per page. The number of objects to return per page. The value must be between 1 and
     * 100.
     */
    limit?: number;
    /**
     * Offset token. An offset to the next page returned by the API. A pagination request will
     * return an offset token, which can be used as an input parameter to the next request. If an
     * offset is not passed in, the API will return the first page of results. 'Note: You can only
     * pass in an offset that was returned to you via a previously paginated request.'
     */
    offset?: string;
  };

  export class GetTasksForSectionError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTasksForSectionError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetTasksForTagRequest = {
    /** Globally unique identifier for the tag. */
    tagGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /**
     * Results per page. The number of objects to return per page. The value must be between 1 and
     * 100.
     */
    limit?: number;
    /**
     * Offset token. An offset to the next page returned by the API. A pagination request will
     * return an offset token, which can be used as an input parameter to the next request. If an
     * offset is not passed in, the API will return the first page of results. 'Note: You can only
     * pass in an offset that was returned to you via a previously paginated request.'
     */
    offset?: string;
  };

  export class GetTasksForTagError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTasksForTagError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetTasksForUserTaskListRequest = {
    /** Globally unique identifier for the user task list. */
    userTaskListGid: string;
    /**
     * Only return tasks that are either incomplete or that have been completed since this time.
     * Accepts a date-time string or the keyword *now*.
     */
    completedSince?: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /**
     * Results per page. The number of objects to return per page. The value must be between 1 and
     * 100.
     */
    limit?: number;
    /**
     * Offset token. An offset to the next page returned by the API. A pagination request will
     * return an offset token, which can be used as an input parameter to the next request. If an
     * offset is not passed in, the API will return the first page of results. 'Note: You can only
     * pass in an offset that was returned to you via a previously paginated request.'
     */
    offset?: string;
  };

  export class GetTasksForUserTaskListError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTasksForUserTaskListError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type RemoveDependenciesForTaskRequest = {
    /** The task to operate on. */
    taskGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /** The list of tasks to unlink as dependencies. */
    body: TasksRemoveDependenciesRequest;
  };

  export class RemoveDependenciesForTaskError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<RemoveDependenciesForTaskError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 402, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type RemoveDependentsForTaskRequest = {
    /** The task to operate on. */
    taskGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /** The list of tasks to remove as dependents. */
    body: TasksRemoveDependentsRequest;
  };

  export class RemoveDependentsForTaskError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<RemoveDependentsForTaskError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 402, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type RemoveFollowerForTaskRequest = {
    /** The task to operate on. */
    taskGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /** The followers to remove from the task. */
    body: TasksRemoveFollowersRequest;
  };

  export class RemoveFollowerForTaskError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<RemoveFollowerForTaskError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type RemoveProjectForTaskRequest = {
    /** The task to operate on. */
    taskGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /** The project to remove the task from. */
    body: TasksRemoveProjectRequest;
  };

  export class RemoveProjectForTaskError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<RemoveProjectForTaskError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type RemoveTagForTaskRequest = {
    /** The task to operate on. */
    taskGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /** The tag to remove from the task. */
    body: TasksRemoveTagRequest;
  };

  export class RemoveTagForTaskError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<RemoveTagForTaskError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SearchTasksForWorkspaceRequest = {
    /** Globally unique identifier for the workspace or organization. */
    workspaceGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /** Performs full-text search on both task name and description */
    text?: string;
    /**
     * Filters results by the task's resource_subtype
     *
     * @default ResourceSubtype2AsanaTasksApi.Milestone
     */
    resourceSubtype?: ResourceSubtype2AsanaTasksApi;
    /** Comma-separated list of user identifiers */
    assigneeAny?: string;
    /** Comma-separated list of user identifiers */
    assigneeNot?: string;
    /** Comma-separated list of portfolio IDs */
    portfoliosAny?: string;
    /** Comma-separated list of project IDs */
    projectsAny?: string;
    /** Comma-separated list of project IDs */
    projectsNot?: string;
    /** Comma-separated list of project IDs */
    projectsAll?: string;
    /** Comma-separated list of section or column IDs */
    sectionsAny?: string;
    /** Comma-separated list of section or column IDs */
    sectionsNot?: string;
    /** Comma-separated list of section or column IDs */
    sectionsAll?: string;
    /** Comma-separated list of tag IDs */
    tagsAny?: string;
    /** Comma-separated list of tag IDs */
    tagsNot?: string;
    /** Comma-separated list of tag IDs */
    tagsAll?: string;
    /** Comma-separated list of team IDs */
    teamsAny?: string;
    /** Comma-separated list of user identifiers */
    followersNot?: string;
    /** Comma-separated list of user identifiers */
    createdByAny?: string;
    /** Comma-separated list of user identifiers */
    createdByNot?: string;
    /** Comma-separated list of user identifiers */
    assignedByAny?: string;
    /** Comma-separated list of user identifiers */
    assignedByNot?: string;
    /** Comma-separated list of user identifiers */
    likedByNot?: string;
    /** Comma-separated list of user identifiers */
    commentedOnByNot?: string;
    /** ISO 8601 date string */
    dueOnBefore?: string;
    /** ISO 8601 date string */
    dueOnAfter?: string;
    /** ISO 8601 date string or `null` */
    dueOn?: string | null;
    /** ISO 8601 datetime string */
    dueAtBefore?: Date;
    /** ISO 8601 datetime string */
    dueAtAfter?: Date;
    /** ISO 8601 date string */
    startOnBefore?: string;
    /** ISO 8601 date string */
    startOnAfter?: string;
    /** ISO 8601 date string or `null` */
    startOn?: string | null;
    /** ISO 8601 date string */
    createdOnBefore?: string;
    /** ISO 8601 date string */
    createdOnAfter?: string;
    /** ISO 8601 date string or `null` */
    createdOn?: string | null;
    /** ISO 8601 datetime string */
    createdAtBefore?: Date;
    /** ISO 8601 datetime string */
    createdAtAfter?: Date;
    /** ISO 8601 date string */
    completedOnBefore?: string;
    /** ISO 8601 date string */
    completedOnAfter?: string;
    /** ISO 8601 date string or `null` */
    completedOn?: string | null;
    /** ISO 8601 datetime string */
    completedAtBefore?: Date;
    /** ISO 8601 datetime string */
    completedAtAfter?: Date;
    /** ISO 8601 date string */
    modifiedOnBefore?: string;
    /** ISO 8601 date string */
    modifiedOnAfter?: string;
    /** ISO 8601 date string or `null` */
    modifiedOn?: string | null;
    /** ISO 8601 datetime string */
    modifiedAtBefore?: Date;
    /** ISO 8601 datetime string */
    modifiedAtAfter?: Date;
    /** Filter to incomplete tasks with dependents */
    isBlocking?: boolean;
    /** Filter to tasks with incomplete dependencies */
    isBlocked?: boolean;
    /** Filter to tasks with attachments */
    hasAttachment?: boolean;
    /** Filter to completed tasks */
    completed?: boolean;
    /** Filter to subtasks */
    isSubtask?: boolean;
    /**
     * One of `due_date`, `created_at`, `completed_at`, `likes`, or `modified_at`, defaults to
     * `modified_at`
     *
     * @default SortBy.ModifiedAt
     */
    sortBy?: SortBy;
    /** Default `false` @default false */
    sortAscending?: boolean;
  };

  export class SearchTasksForWorkspaceError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchTasksForWorkspaceError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SetParentForTaskRequest = {
    /** The task to operate on. */
    taskGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /** The new parent of the subtask. */
    body: TasksSetParentRequest;
  };

  export class SetParentForTaskError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<SetParentForTaskError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateTaskRequest = {
    /** The task to operate on. */
    taskGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /** The task to update. */
    body: TasksRequest;
  };

  export class UpdateTaskError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateTaskError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
