import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { ApiError, type Declared, type Undeclared } from "./core/api-error.js";
import type { ApiPromise } from "./core/api-promise.js";
import type { RequestOptions } from "./core/api-request.js";
import { anyAuth } from "./core/auth/schemes.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import type { ErrorDecoders } from "./core/response-decoder.js";
import * as host from "./core/runtime-environment.js";
import { uuid } from "./core/uuid.js";
import * as s from "./core/validation/index.js";
import {
  batchCreateTasksRequestSchema,
  type BatchCreateTasksRequest,
} from "./models/batch-create-tasks-request.js";
import {
  batchDeleteTasksRequestSchema,
  type BatchDeleteTasksRequest,
} from "./models/batch-delete-tasks-request.js";
import { bufferTaskRequestSchema, type BufferTaskRequest } from "./models/buffer-task-request.js";
import { bufferTaskResponseSchema, type BufferTaskResponse } from "./models/buffer-task-response.js";
import { cmekConfigSchema, type CmekConfig } from "./models/cmek-config.js";
import { createTaskRequestSchema, type CreateTaskRequest } from "./models/create-task-request.js";
import { getIamPolicyRequestSchema, type GetIamPolicyRequest } from "./models/get-iam-policy-request.js";
import { googleRpcErrorSchema, type GoogleRpcError } from "./models/google-rpc-error.js";
import { listLocationsResponseSchema, type ListLocationsResponse } from "./models/list-locations-response.js";
import { listQueuesResponseSchema, type ListQueuesResponse } from "./models/list-queues-response.js";
import { listTasksResponseSchema, type ListTasksResponse } from "./models/list-tasks-response.js";
import { locationSchema, type Location } from "./models/location.js";
import { operationSchema, type Operation } from "./models/operation.js";
import { policySchema, type Policy } from "./models/policy.js";
import { queueSchema, type Queue } from "./models/queue.js";
import { responseView2Schema, type ResponseView2 } from "./models/response-view2.js";
import { runTaskRequestSchema, type RunTaskRequest } from "./models/run-task-request.js";
import { setIamPolicyRequestSchema, type SetIamPolicyRequest } from "./models/set-iam-policy-request.js";
import { taskSchema, type Task } from "./models/task.js";
import {
  testIamPermissionsRequestSchema,
  type TestIamPermissionsRequest,
} from "./models/test-iam-permissions-request.js";
import {
  testIamPermissionsResponseSchema,
  type TestIamPermissionsResponse,
} from "./models/test-iam-permissions-response.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Generated from Google's published Discovery document for Cloud Tasks API (cloudtasks v2, revision
 * 20261106). 24 operation(s).
 */
export class GoogleCloudTasksClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "GOOGLE_CLOUD_TASKS_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "GoogleCloudTasksClient/2.0.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "2.0.0", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);

    this.#auth = buildAuthSchemes(options, this.#servers, this.#rawClient);
  }

  /**
   * Get locations
   *
   * @remarks
   * Gets information about a location.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTasksClient.CloudtasksProjectsLocationsGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTasksError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudtasksProjectsLocationsGet(
    request: GoogleCloudTasksClient.CloudtasksProjectsLocationsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Location, GoogleCloudTasksClient.CloudtasksProjectsLocationsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/projects/{projectsId}/locations/{locationsId}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: locationSchema },
        errorFactory: GoogleCloudTasksClient.CloudtasksProjectsLocationsGetError,
      },
      options,
    );
  }

  /**
   * Get cmek config locations
   *
   * @remarks
   * Gets the CMEK config. Gets the Customer Managed Encryption Key configured with the Cloud Tasks
   * location. By default there is no `kms_key` configured.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTasksClient.CloudtasksProjectsLocationsGetCmekConfigError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTasksError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudtasksProjectsLocationsGetCmekConfig(
    request: GoogleCloudTasksClient.CloudtasksProjectsLocationsGetCmekConfigRequest,
    options?: RequestOptions,
  ): ApiPromise<CmekConfig, GoogleCloudTasksClient.CloudtasksProjectsLocationsGetCmekConfigError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/projects/{projectsId}/locations/{locationsId}/cmekConfig"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cmekConfigSchema },
        errorFactory: GoogleCloudTasksClient.CloudtasksProjectsLocationsGetCmekConfigError,
      },
      options,
    );
  }

  /**
   * List locations
   *
   * @remarks
   * Lists information about the supported locations for this service. This method lists locations
   * based on the resource scope provided in the ListLocationsRequest.name field: * **Global
   * locations**: If `name` is empty, the method lists the public locations available to all
   * projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`,
   * the method lists locations visible to that specific project. This includes public, private, or
   * other project-specific locations enabled for the project. For gRPC and client library
   * implementations, the resource name is passed as the `name` field. For direct service calls, the
   * resource name is incorporated into the request path based on the specific service
   * implementation and version.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTasksClient.CloudtasksProjectsLocationsListError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTasksError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudtasksProjectsLocationsList(
    request: GoogleCloudTasksClient.CloudtasksProjectsLocationsListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListLocationsResponse, GoogleCloudTasksClient.CloudtasksProjectsLocationsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/projects/{projectsId}/locations"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "projectsId", value: request.projectsId, schema: s.string() }],
        query: [
          {
            name: "extraLocationTypes",
            value: request.extraLocationTypes,
            schema: s.optional(s.array(s.string())),
          },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listLocationsResponseSchema },
        errorFactory: GoogleCloudTasksClient.CloudtasksProjectsLocationsListError,
      },
      options,
    );
  }

  /**
   * Get operations
   *
   * @remarks
   * Gets the latest state of a long-running operation. Clients can use this method to poll the
   * operation result at intervals as recommended by the API service.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTasksClient.CloudtasksProjectsLocationsOperationsGetError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTasksError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudtasksProjectsLocationsOperationsGet(
    request: GoogleCloudTasksClient.CloudtasksProjectsLocationsOperationsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudTasksClient.CloudtasksProjectsLocationsOperationsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v2/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "operationsId", value: request.operationsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudTasksClient.CloudtasksProjectsLocationsOperationsGetError,
      },
      options,
    );
  }

  /**
   * Create queues
   *
   * @remarks
   * Creates a queue. Queues created with this method allow tasks to live for a maximum of 31 days.
   * After a task is 31 days old, the task will be deleted regardless of whether it was dispatched
   * or not. WARNING: Using this method may have unintended side effects if you are using an App
   * Engine `queue.yaml` or `queue.xml` file to manage your queues. Read Overview of Queue
   * Management and queue.yaml before using this method.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesCreateError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTasksError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudtasksProjectsLocationsQueuesCreate(
    request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<Queue, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/projects/{projectsId}/locations/{locationsId}/queues"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: queueSchema },
      },
      {
        success: { kind: "json", schema: queueSchema },
        errorFactory: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesCreateError,
      },
      options,
    );
  }

  /**
   * Delete queues
   *
   * @remarks
   * Deletes a queue. This command will delete the queue even if it has tasks in it. Note: If you
   * delete a queue, you may be prevented from creating a new queue with the same name as the
   * deleted queue for a tombstone window of up to 3 days. During this window, the CreateQueue
   * operation may appear to recreate the queue, but this can be misleading. If you attempt to
   * create a queue with the same name as one that is in the tombstone window, run GetQueue to
   * confirm that the queue creation was successful. If GetQueue returns 200 response code, your
   * queue was successfully created with the name of the previously deleted queue. Otherwise, your
   * queue did not successfully recreate. WARNING: Using this method may have unintended side
   * effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues.
   * Read Overview of Queue Management and queue.yaml before using this method.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesDeleteError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTasksError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudtasksProjectsLocationsQueuesDelete(
    request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Record<string, unknown>,
    GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesDeleteError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "queuesId", value: request.queuesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesDeleteError,
      },
      options,
    );
  }

  /**
   * Get queues
   *
   * @remarks
   * Gets a queue.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTasksError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudtasksProjectsLocationsQueuesGet(
    request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Queue, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "queuesId", value: request.queuesId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: queueSchema },
        errorFactory: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesGetError,
      },
      options,
    );
  }

  /**
   * Get iam policy queues
   *
   * @remarks
   * Gets the access control policy for a Queue. Returns an empty policy if the resource exists and
   * does not have a policy set. Authorization requires the following Google IAM permission on the
   * specified resource parent: * `cloudtasks.queues.getIamPolicy`
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesGetIamPolicyError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTasksError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudtasksProjectsLocationsQueuesGetIamPolicy(
    request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesGetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<Policy, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesGetIamPolicyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}:getIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "queuesId", value: request.queuesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: getIamPolicyRequestSchema },
      },
      {
        success: { kind: "json", schema: policySchema },
        errorFactory: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesGetIamPolicyError,
      },
      options,
    );
  }

  /**
   * List queues
   *
   * @remarks
   * Lists queues. Queues are returned in lexicographical order.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesListError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTasksError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudtasksProjectsLocationsQueuesList(
    request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListQueuesResponse, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/projects/{projectsId}/locations/{locationsId}/queues"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listQueuesResponseSchema },
        errorFactory: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesListError,
      },
      options,
    );
  }

  /**
   * Patch queues
   *
   * @remarks
   * Updates a queue. This method creates the queue if it does not exist and updates the queue if it
   * does exist. Queues created with this method allow tasks to live for a maximum of 31 days. After
   * a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not.
   * WARNING: Using this method may have unintended side effects if you are using an App Engine
   * `queue.yaml` or `queue.xml` file to manage your queues. Read Overview of Queue Management and
   * queue.yaml before using this method.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesPatchError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTasksError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudtasksProjectsLocationsQueuesPatch(
    request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<Queue, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesPatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "queuesId", value: request.queuesId, schema: s.string() },
        ],
        query: [{ name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: queueSchema },
      },
      {
        success: { kind: "json", schema: queueSchema },
        errorFactory: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesPatchError,
      },
      options,
    );
  }

  /**
   * Pause queues
   *
   * @remarks
   * Pauses the queue. If a queue is paused then the system will stop dispatching tasks until the
   * queue is resumed via ResumeQueue. Tasks can still be added when the queue is paused. A queue is
   * paused if its state is PAUSED.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesPauseError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTasksError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudtasksProjectsLocationsQueuesPause(
    request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesPauseRequest,
    options?: RequestOptions,
  ): ApiPromise<Queue, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesPauseError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}:pause",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "queuesId", value: request.queuesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: queueSchema },
        errorFactory: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesPauseError,
      },
      options,
    );
  }

  /**
   * Purge queues
   *
   * @remarks
   * Purges a queue by deleting all of its tasks. All tasks created before this method is called are
   * permanently deleted. Purge operations can take up to one minute to take effect. Tasks might be
   * dispatched before the purge takes effect. A purge is irreversible.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesPurgeError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTasksError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudtasksProjectsLocationsQueuesPurge(
    request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesPurgeRequest,
    options?: RequestOptions,
  ): ApiPromise<Queue, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesPurgeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}:purge",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "queuesId", value: request.queuesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: queueSchema },
        errorFactory: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesPurgeError,
      },
      options,
    );
  }

  /**
   * Resume queues
   *
   * @remarks
   * Resume a queue. This method resumes a queue after it has been PAUSED or DISABLED. The state of
   * a queue is stored in the queue's state; after calling this method it will be set to RUNNING.
   * WARNING: Resuming many high-QPS queues at the same time can lead to target overloading. If you
   * are resuming high-QPS queues, follow the 500/50/5 pattern described in Managing Cloud Tasks
   * Scaling Risks.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesResumeError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTasksError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudtasksProjectsLocationsQueuesResume(
    request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesResumeRequest,
    options?: RequestOptions,
  ): ApiPromise<Queue, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesResumeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}:resume",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "queuesId", value: request.queuesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: queueSchema },
        errorFactory: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesResumeError,
      },
      options,
    );
  }

  /**
   * Set iam policy queues
   *
   * @remarks
   * Sets the access control policy for a Queue. Replaces any existing policy. Note: The Cloud
   * Console does not check queue-level IAM permissions yet. Project-level permissions are required
   * to use the Cloud Console. Authorization requires the following Google IAM permission on the
   * specified resource parent: * `cloudtasks.queues.setIamPolicy`
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesSetIamPolicyError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTasksError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudtasksProjectsLocationsQueuesSetIamPolicy(
    request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesSetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<Policy, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesSetIamPolicyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}:setIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "queuesId", value: request.queuesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: setIamPolicyRequestSchema },
      },
      {
        success: { kind: "json", schema: policySchema },
        errorFactory: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesSetIamPolicyError,
      },
      options,
    );
  }

  /**
   * Batch create tasks
   *
   * @remarks
   * Creates a batch of tasks and adds them to a queue. All tasks must be for the same queue. A
   * maximum of 100 tasks can be created in a single batch.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksBatchCreateError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTasksError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudtasksProjectsLocationsQueuesTasksBatchCreate(
    request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksBatchCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksBatchCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}/tasks:batchCreate",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "queuesId", value: request.queuesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: batchCreateTasksRequestSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksBatchCreateError,
      },
      options,
    );
  }

  /**
   * Batch delete tasks
   *
   * @remarks
   * Deletes a batch of tasks. This is a non-atomic operation: if deletion fails for some tasks, it
   * can still succeed for others. The metadata field of google.longrunning.Operation contains
   * details of failed deletions. A maximum of 1000 tasks can be deleted in a batch.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksBatchDeleteError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTasksError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudtasksProjectsLocationsQueuesTasksBatchDelete(
    request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksBatchDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksBatchDeleteError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}/tasks:batchDelete",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "queuesId", value: request.queuesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: batchDeleteTasksRequestSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksBatchDeleteError,
      },
      options,
    );
  }

  /**
   * Buffer tasks
   *
   * @remarks
   * Creates and buffers a new task without the need to explicitly define a Task message. The queue
   * must have HTTP target. To create the task with a custom ID, use the following format and set
   * TASK_ID to your desired ID:
   * projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID:buffer To create the
   * task with an automatically generated ID, use the following format:
   * projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks:buffer.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksBufferError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTasksError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudtasksProjectsLocationsQueuesTasksBuffer(
    request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksBufferRequest,
    options?: RequestOptions,
  ): ApiPromise<
    BufferTaskResponse,
    GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksBufferError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}/tasks/{taskId}:buffer",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "queuesId", value: request.queuesId, schema: s.string() },
          { name: "taskId", value: request.taskId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bufferTaskRequestSchema },
      },
      {
        success: { kind: "json", schema: bufferTaskResponseSchema },
        errorFactory: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksBufferError,
      },
      options,
    );
  }

  /**
   * Create tasks
   *
   * @remarks
   * Creates a task and adds it to a queue. Tasks cannot be updated after creation; there is no
   * UpdateTask command. * The maximum task size is 100KB.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksCreateError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTasksError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudtasksProjectsLocationsQueuesTasksCreate(
    request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<Task, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}/tasks",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "queuesId", value: request.queuesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createTaskRequestSchema },
      },
      {
        success: { kind: "json", schema: taskSchema },
        errorFactory: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksCreateError,
      },
      options,
    );
  }

  /**
   * Delete tasks
   *
   * @remarks
   * Deletes a task. A task can be deleted if it is scheduled or dispatched. A task cannot be
   * deleted if it has executed successfully or permanently failed.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksDeleteError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTasksError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudtasksProjectsLocationsQueuesTasksDelete(
    request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Record<string, unknown>,
    GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksDeleteError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}/tasks/{tasksId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "queuesId", value: request.queuesId, schema: s.string() },
          { name: "tasksId", value: request.tasksId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksDeleteError,
      },
      options,
    );
  }

  /**
   * Get tasks
   *
   * @remarks
   * Gets a task. After a task is successfully executed or has exhausted its retry attempts, the
   * task is deleted. A `GetTask` request for a deleted task returns a `NOT_FOUND` error.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksGetError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTasksError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudtasksProjectsLocationsQueuesTasksGet(
    request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Task, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}/tasks/{tasksId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "queuesId", value: request.queuesId, schema: s.string() },
          { name: "tasksId", value: request.tasksId, schema: s.string() },
        ],
        query: [
          {
            name: "responseView",
            value: request.responseView,
            schema: s.optional(s.lazy(() => responseView2Schema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taskSchema },
        errorFactory: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksGetError,
      },
      options,
    );
  }

  /**
   * List tasks
   *
   * @remarks
   * Lists the tasks in a queue. By default, only the BASIC view is retrieved due to performance
   * considerations; response_view controls the subset of information which is returned. The tasks
   * may be returned in any order. The ordering may change at any time.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksListError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTasksError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudtasksProjectsLocationsQueuesTasksList(
    request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListTasksResponse, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}/tasks",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "queuesId", value: request.queuesId, schema: s.string() },
        ],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          {
            name: "responseView",
            value: request.responseView,
            schema: s.optional(s.lazy(() => responseView2Schema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listTasksResponseSchema },
        errorFactory: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksListError,
      },
      options,
    );
  }

  /**
   * Run tasks
   *
   * @remarks
   * Forces a task to run now. When this method is called, Cloud Tasks will dispatch the task, even
   * if the task is already running, the queue has reached its RateLimits or is PAUSED. This command
   * is meant to be used for manual debugging. For example, RunTask can be used to retry a failed
   * task after a fix has been made or to manually force a task to be dispatched now. If Cloud Tasks
   * receives a successful response from the task's target, then the task will be deleted; otherwise
   * the task's schedule_time will be reset to the time that RunTask was called plus the retry delay
   * specified in the queue's RetryConfig. RunTask returns NOT_FOUND when it is called on a task
   * that has already succeeded or permanently failed.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksRunError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTasksError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudtasksProjectsLocationsQueuesTasksRun(
    request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksRunRequest,
    options?: RequestOptions,
  ): ApiPromise<Task, GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksRunError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}/tasks/{tasksId}:run",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "queuesId", value: request.queuesId, schema: s.string() },
          { name: "tasksId", value: request.tasksId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: runTaskRequestSchema },
      },
      {
        success: { kind: "json", schema: taskSchema },
        errorFactory: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTasksRunError,
      },
      options,
    );
  }

  /**
   * Test iam permissions queues
   *
   * @remarks
   * Returns permissions that a caller has on a Queue. If the resource does not exist, this will
   * return an empty set of permissions, not a NOT_FOUND error. Note: This operation is designed to
   * be used for building permission-aware UIs and command-line tools, not for authorization
   * checking. This operation may "fail open" without warning.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTestIamPermissionsError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTasksError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudtasksProjectsLocationsQueuesTestIamPermissions(
    request: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTestIamPermissionsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TestIamPermissionsResponse,
    GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTestIamPermissionsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}:testIamPermissions",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "queuesId", value: request.queuesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: testIamPermissionsRequestSchema },
      },
      {
        success: { kind: "json", schema: testIamPermissionsResponseSchema },
        errorFactory: GoogleCloudTasksClient.CloudtasksProjectsLocationsQueuesTestIamPermissionsError,
      },
      options,
    );
  }

  /**
   * Update cmek config locations
   *
   * @remarks
   * Creates or Updates a CMEK config. Updates the Customer Managed Encryption Key associated with
   * the Cloud Tasks location (Creates if the key does not already exist). All new tasks created in
   * the location will be encrypted at-rest with the KMS-key provided in the config.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTasksClient.CloudtasksProjectsLocationsUpdateCmekConfigError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTasksError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cloudtasksProjectsLocationsUpdateCmekConfig(
    request: GoogleCloudTasksClient.CloudtasksProjectsLocationsUpdateCmekConfigRequest,
    options?: RequestOptions,
  ): ApiPromise<CmekConfig, GoogleCloudTasksClient.CloudtasksProjectsLocationsUpdateCmekConfigError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v2/projects/{projectsId}/locations/{locationsId}/cmekConfig"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [{ name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: cmekConfigSchema },
      },
      {
        success: { kind: "json", schema: cmekConfigSchema },
        errorFactory: GoogleCloudTasksClient.CloudtasksProjectsLocationsUpdateCmekConfigError,
      },
      options,
    );
  }
}

export namespace GoogleCloudTasksClient {
  export type CloudtasksProjectsLocationsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
  };

  export class CloudtasksProjectsLocationsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudtasksProjectsLocationsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type CloudtasksProjectsLocationsGetCmekConfigRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
  };

  export class CloudtasksProjectsLocationsGetCmekConfigError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudtasksProjectsLocationsGetCmekConfigError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type CloudtasksProjectsLocationsListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /**
     * Optional. Do not use this field unless explicitly documented otherwise. This is primarily for
     * internal usage.
     */
    extraLocationTypes?: string[];
    /**
     * A filter to narrow down results to a preferred subset. The filtering language accepts strings
     * like `"displayName=tokyo"`, and is documented in more detail in
     * [AIP-160](https://google.aip.dev/160).
     */
    filter?: string;
    /** The maximum number of results to return. If not set, the service selects a default. */
    pageSize?: number;
    /**
     * A page token received from the `next_page_token` field in the response. Send that page token
     * to receive the subsequent page.
     */
    pageToken?: string;
  };

  export class CloudtasksProjectsLocationsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudtasksProjectsLocationsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type CloudtasksProjectsLocationsOperationsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (operationsId). */
    operationsId: string;
  };

  export class CloudtasksProjectsLocationsOperationsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudtasksProjectsLocationsOperationsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type CloudtasksProjectsLocationsQueuesCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    body: Queue;
  };

  export class CloudtasksProjectsLocationsQueuesCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudtasksProjectsLocationsQueuesCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type CloudtasksProjectsLocationsQueuesDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (queuesId). */
    queuesId: string;
  };

  export class CloudtasksProjectsLocationsQueuesDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudtasksProjectsLocationsQueuesDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type CloudtasksProjectsLocationsQueuesGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (queuesId). */
    queuesId: string;
  };

  export class CloudtasksProjectsLocationsQueuesGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudtasksProjectsLocationsQueuesGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type CloudtasksProjectsLocationsQueuesGetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (queuesId). */
    queuesId: string;
    body: GetIamPolicyRequest;
  };

  export class CloudtasksProjectsLocationsQueuesGetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudtasksProjectsLocationsQueuesGetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type CloudtasksProjectsLocationsQueuesListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * `filter` can be used to specify a subset of queues. Any Queue field can be used as a filter
     * and several operators as supported. For example: `<=, <, >=, >, !=, =, :`. The filter syntax
     * is the same as described in [Stackdriver's Advanced Logs
     * Filters](https://cloud.google.com/logging/docs/view/advanced_filters). Sample filter "state:
     * PAUSED". Note that using filters might cause fewer queues than the requested page_size to be
     * returned.
     */
    filter?: string;
    /**
     * Requested page size. The maximum page size is 9800. If unspecified, the page size will be the
     * maximum. Fewer queues than requested might be returned, even if more queues exist; use the
     * next_page_token in the response to determine if more queues exist.
     */
    pageSize?: number;
    /**
     * A token identifying the page of results to return. To request the first page results,
     * page_token must be empty. To request the next page of results, page_token must be the value
     * of next_page_token returned from the previous call to ListQueues method. It is an error to
     * switch the value of the filter while iterating through pages.
     */
    pageToken?: string;
  };

  export class CloudtasksProjectsLocationsQueuesListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudtasksProjectsLocationsQueuesListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type CloudtasksProjectsLocationsQueuesPatchRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (queuesId). */
    queuesId: string;
    /**
     * A mask used to specify which fields of the queue are being updated. If empty, then all fields
     * will be updated.
     */
    updateMask?: string;
    body: Queue;
  };

  export class CloudtasksProjectsLocationsQueuesPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudtasksProjectsLocationsQueuesPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type CloudtasksProjectsLocationsQueuesPauseRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (queuesId). */
    queuesId: string;
    body: Record<string, unknown>;
  };

  export class CloudtasksProjectsLocationsQueuesPauseError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudtasksProjectsLocationsQueuesPauseError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type CloudtasksProjectsLocationsQueuesPurgeRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (queuesId). */
    queuesId: string;
    body: Record<string, unknown>;
  };

  export class CloudtasksProjectsLocationsQueuesPurgeError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudtasksProjectsLocationsQueuesPurgeError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type CloudtasksProjectsLocationsQueuesResumeRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (queuesId). */
    queuesId: string;
    body: Record<string, unknown>;
  };

  export class CloudtasksProjectsLocationsQueuesResumeError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudtasksProjectsLocationsQueuesResumeError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type CloudtasksProjectsLocationsQueuesSetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (queuesId). */
    queuesId: string;
    body: SetIamPolicyRequest;
  };

  export class CloudtasksProjectsLocationsQueuesSetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudtasksProjectsLocationsQueuesSetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type CloudtasksProjectsLocationsQueuesTasksBatchCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (queuesId). */
    queuesId: string;
    body: BatchCreateTasksRequest;
  };

  export class CloudtasksProjectsLocationsQueuesTasksBatchCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudtasksProjectsLocationsQueuesTasksBatchCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type CloudtasksProjectsLocationsQueuesTasksBatchDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (queuesId). */
    queuesId: string;
    body: BatchDeleteTasksRequest;
  };

  export class CloudtasksProjectsLocationsQueuesTasksBatchDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudtasksProjectsLocationsQueuesTasksBatchDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type CloudtasksProjectsLocationsQueuesTasksBufferRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (queuesId). */
    queuesId: string;
    /**
     * Optional. Task ID for the task being created. If not provided, Cloud Tasks generates an ID
     * for the task.
     */
    taskId: string;
    body: BufferTaskRequest;
  };

  export class CloudtasksProjectsLocationsQueuesTasksBufferError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudtasksProjectsLocationsQueuesTasksBufferError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type CloudtasksProjectsLocationsQueuesTasksCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (queuesId). */
    queuesId: string;
    body: CreateTaskRequest;
  };

  export class CloudtasksProjectsLocationsQueuesTasksCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudtasksProjectsLocationsQueuesTasksCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type CloudtasksProjectsLocationsQueuesTasksDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (queuesId). */
    queuesId: string;
    /** Resource name segment (tasksId). */
    tasksId: string;
  };

  export class CloudtasksProjectsLocationsQueuesTasksDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudtasksProjectsLocationsQueuesTasksDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type CloudtasksProjectsLocationsQueuesTasksGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (queuesId). */
    queuesId: string;
    /** Resource name segment (tasksId). */
    tasksId: string;
    /**
     * The response_view specifies which subset of the Task will be returned. By default
     * response_view is BASIC; not all information is retrieved by default because some data, such
     * as payloads, might be desirable to return only when needed because of its large size or
     * because of the sensitivity of data that it contains. Authorization for FULL requires
     * `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/) permission on the
     * Task resource.
     */
    responseView?: ResponseView2;
  };

  export class CloudtasksProjectsLocationsQueuesTasksGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudtasksProjectsLocationsQueuesTasksGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type CloudtasksProjectsLocationsQueuesTasksListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (queuesId). */
    queuesId: string;
    /**
     * Maximum page size. Fewer tasks than requested might be returned, even if more tasks exist;
     * use next_page_token in the response to determine if more tasks exist. The maximum page size
     * is 1000. If unspecified, the page size will be the maximum.
     */
    pageSize?: number;
    /**
     * A token identifying the page of results to return. To request the first page results,
     * page_token must be empty. To request the next page of results, page_token must be the value
     * of next_page_token returned from the previous call to ListTasks method. The page token is
     * valid for only 2 hours.
     */
    pageToken?: string;
    /**
     * The response_view specifies which subset of the Task will be returned. By default
     * response_view is BASIC; not all information is retrieved by default because some data, such
     * as payloads, might be desirable to return only when needed because of its large size or
     * because of the sensitivity of data that it contains. Authorization for FULL requires
     * `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/) permission on the
     * Task resource.
     */
    responseView?: ResponseView2;
  };

  export class CloudtasksProjectsLocationsQueuesTasksListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudtasksProjectsLocationsQueuesTasksListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type CloudtasksProjectsLocationsQueuesTasksRunRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (queuesId). */
    queuesId: string;
    /** Resource name segment (tasksId). */
    tasksId: string;
    body: RunTaskRequest;
  };

  export class CloudtasksProjectsLocationsQueuesTasksRunError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudtasksProjectsLocationsQueuesTasksRunError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type CloudtasksProjectsLocationsQueuesTestIamPermissionsRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (queuesId). */
    queuesId: string;
    body: TestIamPermissionsRequest;
  };

  export class CloudtasksProjectsLocationsQueuesTestIamPermissionsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudtasksProjectsLocationsQueuesTestIamPermissionsError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type CloudtasksProjectsLocationsUpdateCmekConfigRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** List of fields to be updated in this request. */
    updateMask?: string;
    body: CmekConfig;
  };

  export class CloudtasksProjectsLocationsUpdateCmekConfigError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<CloudtasksProjectsLocationsUpdateCmekConfigError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }
}
