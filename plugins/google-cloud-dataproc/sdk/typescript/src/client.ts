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
  accessSessionSparkApplicationEnvironmentInfoResponseSchema,
  type AccessSessionSparkApplicationEnvironmentInfoResponse,
} from "./models/access-session-spark-application-environment-info-response.js";
import {
  accessSessionSparkApplicationJobResponseSchema,
  type AccessSessionSparkApplicationJobResponse,
} from "./models/access-session-spark-application-job-response.js";
import {
  accessSessionSparkApplicationNativeBuildInfoResponseSchema,
  type AccessSessionSparkApplicationNativeBuildInfoResponse,
} from "./models/access-session-spark-application-native-build-info-response.js";
import {
  accessSessionSparkApplicationNativeSqlQueryResponseSchema,
  type AccessSessionSparkApplicationNativeSqlQueryResponse,
} from "./models/access-session-spark-application-native-sql-query-response.js";
import {
  accessSessionSparkApplicationResponseSchema,
  type AccessSessionSparkApplicationResponse,
} from "./models/access-session-spark-application-response.js";
import {
  accessSessionSparkApplicationSqlQueryResponseSchema,
  type AccessSessionSparkApplicationSqlQueryResponse,
} from "./models/access-session-spark-application-sql-query-response.js";
import {
  accessSessionSparkApplicationSqlSparkPlanGraphResponseSchema,
  type AccessSessionSparkApplicationSqlSparkPlanGraphResponse,
} from "./models/access-session-spark-application-sql-spark-plan-graph-response.js";
import {
  accessSessionSparkApplicationStageAttemptResponseSchema,
  type AccessSessionSparkApplicationStageAttemptResponse,
} from "./models/access-session-spark-application-stage-attempt-response.js";
import {
  accessSessionSparkApplicationStageRddOperationGraphResponseSchema,
  type AccessSessionSparkApplicationStageRddOperationGraphResponse,
} from "./models/access-session-spark-application-stage-rdd-operation-graph-response.js";
import {
  accessSparkApplicationEnvironmentInfoResponseSchema,
  type AccessSparkApplicationEnvironmentInfoResponse,
} from "./models/access-spark-application-environment-info-response.js";
import {
  accessSparkApplicationJobResponseSchema,
  type AccessSparkApplicationJobResponse,
} from "./models/access-spark-application-job-response.js";
import {
  accessSparkApplicationNativeBuildInfoResponseSchema,
  type AccessSparkApplicationNativeBuildInfoResponse,
} from "./models/access-spark-application-native-build-info-response.js";
import {
  accessSparkApplicationNativeSqlQueryResponseSchema,
  type AccessSparkApplicationNativeSqlQueryResponse,
} from "./models/access-spark-application-native-sql-query-response.js";
import {
  accessSparkApplicationResponseSchema,
  type AccessSparkApplicationResponse,
} from "./models/access-spark-application-response.js";
import {
  accessSparkApplicationSqlQueryResponseSchema,
  type AccessSparkApplicationSqlQueryResponse,
} from "./models/access-spark-application-sql-query-response.js";
import {
  accessSparkApplicationSqlSparkPlanGraphResponseSchema,
  type AccessSparkApplicationSqlSparkPlanGraphResponse,
} from "./models/access-spark-application-sql-spark-plan-graph-response.js";
import {
  accessSparkApplicationStageAttemptResponseSchema,
  type AccessSparkApplicationStageAttemptResponse,
} from "./models/access-spark-application-stage-attempt-response.js";
import {
  accessSparkApplicationStageRddOperationGraphResponseSchema,
  type AccessSparkApplicationStageRddOperationGraphResponse,
} from "./models/access-spark-application-stage-rdd-operation-graph-response.js";
import {
  actionOnFailedPrimaryWorkersSchema,
  type ActionOnFailedPrimaryWorkers,
} from "./models/action-on-failed-primary-workers.js";
import {
  alterMetadataResourceLocationRequestSchema,
  type AlterMetadataResourceLocationRequest,
} from "./models/alter-metadata-resource-location-request.js";
import {
  alterTablePropertiesRequestSchema,
  type AlterTablePropertiesRequest,
} from "./models/alter-table-properties-request.js";
import { analyzeBatchRequestSchema, type AnalyzeBatchRequest } from "./models/analyze-batch-request.js";
import { applicationStatusSchema, type ApplicationStatus } from "./models/application-status.js";
import { autoscalingPolicySchema, type AutoscalingPolicy } from "./models/autoscaling-policy.js";
import { backupSchema, type Backup } from "./models/backup.js";
import { batchSchema, type Batch } from "./models/batch.js";
import { clusterSchema, type Cluster } from "./models/cluster.js";
import {
  computeTuningConfigResponseSchema,
  type ComputeTuningConfigResponse,
} from "./models/compute-tuning-config-response.js";
import {
  diagnoseClusterRequestSchema,
  type DiagnoseClusterRequest,
} from "./models/diagnose-cluster-request.js";
import { executorStatusSchema, type ExecutorStatus } from "./models/executor-status.js";
import { exportMetadataRequestSchema, type ExportMetadataRequest } from "./models/export-metadata-request.js";
import { federationSchema, type Federation } from "./models/federation.js";
import { getIamPolicyRequestSchema, type GetIamPolicyRequest } from "./models/get-iam-policy-request.js";
import { googleRpcErrorSchema, type GoogleRpcError } from "./models/google-rpc-error.js";
import {
  injectCredentialsRequestSchema,
  type InjectCredentialsRequest,
} from "./models/inject-credentials-request.js";
import {
  instantiateWorkflowTemplateRequestSchema,
  type InstantiateWorkflowTemplateRequest,
} from "./models/instantiate-workflow-template-request.js";
import { jobStateMatcherSchema, type JobStateMatcher } from "./models/job-state-matcher.js";
import { jobStatus2Schema, type JobStatus2 } from "./models/job-status2.js";
import { jobSchema, type Job } from "./models/job.js";
import {
  listAutoscalingPoliciesResponseSchema,
  type ListAutoscalingPoliciesResponse,
} from "./models/list-autoscaling-policies-response.js";
import { listBackupsResponseSchema, type ListBackupsResponse } from "./models/list-backups-response.js";
import { listBatchesResponseSchema, type ListBatchesResponse } from "./models/list-batches-response.js";
import { listClustersResponseSchema, type ListClustersResponse } from "./models/list-clusters-response.js";
import {
  listFederationsResponseSchema,
  type ListFederationsResponse,
} from "./models/list-federations-response.js";
import { listJobsResponseSchema, type ListJobsResponse } from "./models/list-jobs-response.js";
import { listLocationsResponseSchema, type ListLocationsResponse } from "./models/list-locations-response.js";
import {
  listMetadataImportsResponseSchema,
  type ListMetadataImportsResponse,
} from "./models/list-metadata-imports-response.js";
import {
  listMigrationExecutionsResponseSchema,
  type ListMigrationExecutionsResponse,
} from "./models/list-migration-executions-response.js";
import {
  listOperationsResponseSchema,
  type ListOperationsResponse,
} from "./models/list-operations-response.js";
import { listServicesResponseSchema, type ListServicesResponse } from "./models/list-services-response.js";
import {
  listSessionTemplatesResponseSchema,
  type ListSessionTemplatesResponse,
} from "./models/list-session-templates-response.js";
import { listSessionsResponseSchema, type ListSessionsResponse } from "./models/list-sessions-response.js";
import {
  listWorkflowTemplatesResponseSchema,
  type ListWorkflowTemplatesResponse,
} from "./models/list-workflow-templates-response.js";
import { locationSchema, type Location } from "./models/location.js";
import { metadataImportSchema, type MetadataImport } from "./models/metadata-import.js";
import { migrationExecutionSchema, type MigrationExecution } from "./models/migration-execution.js";
import {
  moveTableToDatabaseRequestSchema,
  type MoveTableToDatabaseRequest,
} from "./models/move-table-to-database-request.js";
import { nodeGroupSchema, type NodeGroup } from "./models/node-group.js";
import { operationSchema, type Operation } from "./models/operation.js";
import { policySchema, type Policy } from "./models/policy.js";
import { policy2Schema, type Policy2 } from "./models/policy2.js";
import { queryMetadataRequestSchema, type QueryMetadataRequest } from "./models/query-metadata-request.js";
import { repairClusterRequestSchema, type RepairClusterRequest } from "./models/repair-cluster-request.js";
import {
  repairNodeGroupRequestSchema,
  type RepairNodeGroupRequest,
} from "./models/repair-node-group-request.js";
import {
  resizeNodeGroupRequestSchema,
  type ResizeNodeGroupRequest,
} from "./models/resize-node-group-request.js";
import { restoreServiceRequestSchema, type RestoreServiceRequest } from "./models/restore-service-request.js";
import {
  searchSessionSparkApplicationExecutorStageSummaryResponseSchema,
  type SearchSessionSparkApplicationExecutorStageSummaryResponse,
} from "./models/search-session-spark-application-executor-stage-summary-response.js";
import {
  searchSessionSparkApplicationExecutorsResponseSchema,
  type SearchSessionSparkApplicationExecutorsResponse,
} from "./models/search-session-spark-application-executors-response.js";
import {
  searchSessionSparkApplicationJobsResponseSchema,
  type SearchSessionSparkApplicationJobsResponse,
} from "./models/search-session-spark-application-jobs-response.js";
import {
  searchSessionSparkApplicationNativeSqlQueriesResponseSchema,
  type SearchSessionSparkApplicationNativeSqlQueriesResponse,
} from "./models/search-session-spark-application-native-sql-queries-response.js";
import {
  searchSessionSparkApplicationSqlQueriesResponseSchema,
  type SearchSessionSparkApplicationSqlQueriesResponse,
} from "./models/search-session-spark-application-sql-queries-response.js";
import {
  searchSessionSparkApplicationStageAttemptTasksResponseSchema,
  type SearchSessionSparkApplicationStageAttemptTasksResponse,
} from "./models/search-session-spark-application-stage-attempt-tasks-response.js";
import {
  searchSessionSparkApplicationStageAttemptsResponseSchema,
  type SearchSessionSparkApplicationStageAttemptsResponse,
} from "./models/search-session-spark-application-stage-attempts-response.js";
import {
  searchSessionSparkApplicationStagesResponseSchema,
  type SearchSessionSparkApplicationStagesResponse,
} from "./models/search-session-spark-application-stages-response.js";
import {
  searchSessionSparkApplicationsResponseSchema,
  type SearchSessionSparkApplicationsResponse,
} from "./models/search-session-spark-applications-response.js";
import {
  searchSparkApplicationExecutorStageSummaryResponseSchema,
  type SearchSparkApplicationExecutorStageSummaryResponse,
} from "./models/search-spark-application-executor-stage-summary-response.js";
import {
  searchSparkApplicationExecutorsResponseSchema,
  type SearchSparkApplicationExecutorsResponse,
} from "./models/search-spark-application-executors-response.js";
import {
  searchSparkApplicationJobsResponseSchema,
  type SearchSparkApplicationJobsResponse,
} from "./models/search-spark-application-jobs-response.js";
import {
  searchSparkApplicationNativeSqlQueriesResponseSchema,
  type SearchSparkApplicationNativeSqlQueriesResponse,
} from "./models/search-spark-application-native-sql-queries-response.js";
import {
  searchSparkApplicationSqlQueriesResponseSchema,
  type SearchSparkApplicationSqlQueriesResponse,
} from "./models/search-spark-application-sql-queries-response.js";
import {
  searchSparkApplicationStageAttemptTasksResponseSchema,
  type SearchSparkApplicationStageAttemptTasksResponse,
} from "./models/search-spark-application-stage-attempt-tasks-response.js";
import {
  searchSparkApplicationStageAttemptsResponseSchema,
  type SearchSparkApplicationStageAttemptsResponse,
} from "./models/search-spark-application-stage-attempts-response.js";
import {
  searchSparkApplicationStagesResponseSchema,
  type SearchSparkApplicationStagesResponse,
} from "./models/search-spark-application-stages-response.js";
import {
  searchSparkApplicationsResponseSchema,
  type SearchSparkApplicationsResponse,
} from "./models/search-spark-applications-response.js";
import { serviceSchema, type Service } from "./models/service.js";
import { sessionTemplateSchema, type SessionTemplate } from "./models/session-template.js";
import { sessionSchema, type Session } from "./models/session.js";
import { setIamPolicyRequestSchema, type SetIamPolicyRequest } from "./models/set-iam-policy-request.js";
import { setIamPolicyRequest2Schema, type SetIamPolicyRequest2 } from "./models/set-iam-policy-request2.js";
import { stageStatusSchema, type StageStatus } from "./models/stage-status.js";
import { startClusterRequestSchema, type StartClusterRequest } from "./models/start-cluster-request.js";
import { startMigrationRequestSchema, type StartMigrationRequest } from "./models/start-migration-request.js";
import { stopClusterRequestSchema, type StopClusterRequest } from "./models/stop-cluster-request.js";
import { submitJobRequestSchema, type SubmitJobRequest } from "./models/submit-job-request.js";
import {
  summarizeSessionSparkApplicationExecutorsResponseSchema,
  type SummarizeSessionSparkApplicationExecutorsResponse,
} from "./models/summarize-session-spark-application-executors-response.js";
import {
  summarizeSessionSparkApplicationJobsResponseSchema,
  type SummarizeSessionSparkApplicationJobsResponse,
} from "./models/summarize-session-spark-application-jobs-response.js";
import {
  summarizeSessionSparkApplicationStageAttemptTasksResponseSchema,
  type SummarizeSessionSparkApplicationStageAttemptTasksResponse,
} from "./models/summarize-session-spark-application-stage-attempt-tasks-response.js";
import {
  summarizeSessionSparkApplicationStagesResponseSchema,
  type SummarizeSessionSparkApplicationStagesResponse,
} from "./models/summarize-session-spark-application-stages-response.js";
import {
  summarizeSparkApplicationExecutorsResponseSchema,
  type SummarizeSparkApplicationExecutorsResponse,
} from "./models/summarize-spark-application-executors-response.js";
import {
  summarizeSparkApplicationJobsResponseSchema,
  type SummarizeSparkApplicationJobsResponse,
} from "./models/summarize-spark-application-jobs-response.js";
import {
  summarizeSparkApplicationStageAttemptTasksResponseSchema,
  type SummarizeSparkApplicationStageAttemptTasksResponse,
} from "./models/summarize-spark-application-stage-attempt-tasks-response.js";
import {
  summarizeSparkApplicationStagesResponseSchema,
  type SummarizeSparkApplicationStagesResponse,
} from "./models/summarize-spark-application-stages-response.js";
import { taskStatusSchema, type TaskStatus } from "./models/task-status.js";
import {
  terminateSessionRequestSchema,
  type TerminateSessionRequest,
} from "./models/terminate-session-request.js";
import {
  testIamPermissionsRequestSchema,
  type TestIamPermissionsRequest,
} from "./models/test-iam-permissions-request.js";
import {
  testIamPermissionsResponseSchema,
  type TestIamPermissionsResponse,
} from "./models/test-iam-permissions-response.js";
import { workflowTemplateSchema, type WorkflowTemplate } from "./models/workflow-template.js";
import {
  writeSessionSparkApplicationContextRequestSchema,
  type WriteSessionSparkApplicationContextRequest,
} from "./models/write-session-spark-application-context-request.js";
import {
  writeSparkApplicationContextRequestSchema,
  type WriteSparkApplicationContextRequest,
} from "./models/write-spark-application-context-request.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Operations tagged Projects across 2 of this provider's published API definitions:
 * google-cloud-dataproc-dataproc-projects-api-openapi.yml,
 * google-cloud-dataproc-metastore-projects-api-openapi.yml. Each path carries the servers of the
 * definition it was published in.
 */
export class GoogleCloudDataprocClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "GOOGLE_CLOUD_DATAPROC_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "GoogleCloudDataprocClient/1.0.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "1.0.0", schema: s.string() },
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
   * Create autoscalingPolicies
   *
   * @remarks
   * Creates new autoscaling policy.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesCreateError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsAutoscalingPoliciesCreate(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AutoscalingPolicy,
    GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesCreateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/autoscalingPolicies",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: autoscalingPolicySchema },
      },
      {
        success: { kind: "json", schema: autoscalingPolicySchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesCreateError,
      },
      options,
    );
  }

  /**
   * Delete autoscalingPolicies
   *
   * @remarks
   * Deletes an autoscaling policy. It is an error to delete an autoscaling policy that is in use by
   * one or more clusters.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesDeleteError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsAutoscalingPoliciesDelete(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Record<string, unknown>,
    GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesDeleteError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/autoscalingPolicies/{autoscalingPoliciesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "autoscalingPoliciesId", value: request.autoscalingPoliciesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesDeleteError,
      },
      options,
    );
  }

  /**
   * Get autoscalingPolicies
   *
   * @remarks
   * Retrieves autoscaling policy.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesGetError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsAutoscalingPoliciesGet(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AutoscalingPolicy,
    GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/autoscalingPolicies/{autoscalingPoliciesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "autoscalingPoliciesId", value: request.autoscalingPoliciesId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: autoscalingPolicySchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesGetError,
      },
      options,
    );
  }

  /**
   * Get iam policy autoscalingPolicies
   *
   * @remarks
   * Gets the access control policy for a resource. Returns an empty policy if the resource exists
   * and does not have a policy set.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsAutoscalingPoliciesGetIamPolicy(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Policy,
    GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/autoscalingPolicies/{autoscalingPoliciesId}:getIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "autoscalingPoliciesId", value: request.autoscalingPoliciesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: getIamPolicyRequestSchema },
      },
      {
        success: { kind: "json", schema: policySchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyError,
      },
      options,
    );
  }

  /**
   * List autoscalingPolicies
   *
   * @remarks
   * Lists autoscaling policies in the project.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesListError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsAutoscalingPoliciesList(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ListAutoscalingPoliciesResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/autoscalingPolicies",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listAutoscalingPoliciesResponseSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesListError,
      },
      options,
    );
  }

  /**
   * Set iam policy autoscalingPolicies
   *
   * @remarks
   * Sets the access control policy on the specified resource. Replaces any existing policy.Can
   * return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsAutoscalingPoliciesSetIamPolicy(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Policy,
    GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/autoscalingPolicies/{autoscalingPoliciesId}:setIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "autoscalingPoliciesId", value: request.autoscalingPoliciesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: setIamPolicyRequestSchema },
      },
      {
        success: { kind: "json", schema: policySchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyError,
      },
      options,
    );
  }

  /**
   * Test iam permissions autoscalingPolicies
   *
   * @remarks
   * Returns permissions that a caller has on the specified resource. If the resource does not
   * exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation
   * is designed to be used for building permission-aware UIs and command-line tools, not for
   * authorization checking. This operation may "fail open" without warning.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissionsError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsAutoscalingPoliciesTestIamPermissions(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissionsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TestIamPermissionsResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissionsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/autoscalingPolicies/{autoscalingPoliciesId}:testIamPermissions",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "autoscalingPoliciesId", value: request.autoscalingPoliciesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: testIamPermissionsRequestSchema },
      },
      {
        success: { kind: "json", schema: testIamPermissionsResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissionsError,
      },
      options,
    );
  }

  /**
   * Update autoscalingPolicies
   *
   * @remarks
   * Updates (replaces) autoscaling policy.Disabled check for update_mask, because all updates will
   * be full replacements.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesUpdateError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsAutoscalingPoliciesUpdate(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AutoscalingPolicy,
    GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesUpdateError
  > {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/autoscalingPolicies/{autoscalingPoliciesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "autoscalingPoliciesId", value: request.autoscalingPoliciesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: autoscalingPolicySchema },
      },
      {
        success: { kind: "json", schema: autoscalingPolicySchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsLocationsAutoscalingPoliciesUpdateError,
      },
      options,
    );
  }

  /**
   * Analyze batches
   *
   * @remarks
   * Analyze a Batch for possible recommendations and insights.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesAnalyzeError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsBatchesAnalyze(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesAnalyzeRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesAnalyzeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}:analyze",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "batchesId", value: request.batchesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: analyzeBatchRequestSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesAnalyzeError,
      },
      options,
    );
  }

  /**
   * Create batches
   *
   * @remarks
   * Creates a batch workload that executes asynchronously.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesCreateError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsBatchesCreate(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/batches"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "batchId", value: request.batchId, schema: s.optional(s.string()) },
          { name: "requestId", value: request.requestId, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: batchSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesCreateError,
      },
      options,
    );
  }

  /**
   * Delete batches
   *
   * @remarks
   * Deletes the batch workload resource. If the batch is not in a CANCELLED, SUCCEEDED or FAILED
   * State, the delete operation fails and the response returns FAILED_PRECONDITION.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesDeleteError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsBatchesDelete(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Record<string, unknown>,
    GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesDeleteError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "batchesId", value: request.batchesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesDeleteError,
      },
      options,
    );
  }

  /**
   * Get batches
   *
   * @remarks
   * Gets the batch workload resource representation.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsBatchesGet(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Batch, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "batchesId", value: request.batchesId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: batchSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesGetError,
      },
      options,
    );
  }

  /**
   * List batches
   *
   * @remarks
   * Lists batch workloads.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesListError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsBatchesList(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListBatchesResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/batches"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "orderBy", value: request.orderBy, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listBatchesResponseSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesListError,
      },
      options,
    );
  }

  /**
   * Access sparkApplications
   *
   * @remarks
   * Obtain high level information corresponding to a single Spark Application.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsBatchesSparkApplicationsAccess(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AccessSparkApplicationResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:access",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "batchesId", value: request.batchesId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [{ name: "parent", value: request.parent, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accessSparkApplicationResponseSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessError,
      },
      options,
    );
  }

  /**
   * Access environment info sparkApplications
   *
   * @remarks
   * Obtain environment details for a Spark Application
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfoError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfo(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AccessSparkApplicationEnvironmentInfoResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfoError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:accessEnvironmentInfo",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "batchesId", value: request.batchesId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [{ name: "parent", value: request.parent, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accessSparkApplicationEnvironmentInfoResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfoError,
      },
      options,
    );
  }

  /**
   * Access job sparkApplications
   *
   * @remarks
   * Obtain data corresponding to a spark job for a Spark Application.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessJobError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsBatchesSparkApplicationsAccessJob(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessJobRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AccessSparkApplicationJobResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessJobError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:accessJob",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "batchesId", value: request.batchesId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [
          { name: "jobId", value: request.jobId, schema: s.optional(s.string()) },
          { name: "parent", value: request.parent, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accessSparkApplicationJobResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessJobError,
      },
      options,
    );
  }

  /**
   * Access native build info sparkApplications
   *
   * @remarks
   * Obtain build data for Native Job
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfoError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfo(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AccessSparkApplicationNativeBuildInfoResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfoError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:accessNativeBuildInfo",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "batchesId", value: request.batchesId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [{ name: "parent", value: request.parent, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accessSparkApplicationNativeBuildInfoResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfoError,
      },
      options,
    );
  }

  /**
   * Access native sql query sparkApplications
   *
   * @remarks
   * Obtain data corresponding to a particular Native SQL Query for a Spark Application.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQueryError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQuery(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQueryRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AccessSparkApplicationNativeSqlQueryResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQueryError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:accessNativeSqlQuery",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "batchesId", value: request.batchesId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [
          { name: "executionId", value: request.executionId, schema: s.optional(s.string()) },
          { name: "parent", value: request.parent, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accessSparkApplicationNativeSqlQueryResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQueryError,
      },
      options,
    );
  }

  /**
   * Access sql plan sparkApplications
   *
   * @remarks
   * Obtain Spark Plan Graph for a Spark Application SQL execution. Limits the number of clusters
   * returned as part of the graph to 10000.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlanError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlan(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlanRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AccessSparkApplicationSqlSparkPlanGraphResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlanError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:accessSqlPlan",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "batchesId", value: request.batchesId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [
          { name: "executionId", value: request.executionId, schema: s.optional(s.string()) },
          { name: "parent", value: request.parent, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accessSparkApplicationSqlSparkPlanGraphResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlanError,
      },
      options,
    );
  }

  /**
   * Access sql query sparkApplications
   *
   * @remarks
   * Obtain data corresponding to a particular SQL Query for a Spark Application.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQuery(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AccessSparkApplicationSqlQueryResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:accessSqlQuery",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "batchesId", value: request.batchesId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [
          { name: "details", value: request.details, schema: s.optional(s.boolean()) },
          { name: "executionId", value: request.executionId, schema: s.optional(s.string()) },
          { name: "parent", value: request.parent, schema: s.optional(s.string()) },
          { name: "planDescription", value: request.planDescription, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accessSparkApplicationSqlQueryResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryError,
      },
      options,
    );
  }

  /**
   * Access stage attempt sparkApplications
   *
   * @remarks
   * Obtain data corresponding to a spark stage attempt for a Spark Application.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttempt(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AccessSparkApplicationStageAttemptResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:accessStageAttempt",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "batchesId", value: request.batchesId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [
          { name: "parent", value: request.parent, schema: s.optional(s.string()) },
          { name: "stageAttemptId", value: request.stageAttemptId, schema: s.optional(s.int()) },
          { name: "stageId", value: request.stageId, schema: s.optional(s.string()) },
          { name: "summaryMetricsMask", value: request.summaryMetricsMask, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accessSparkApplicationStageAttemptResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptError,
      },
      options,
    );
  }

  /**
   * Access stage rdd graph sparkApplications
   *
   * @remarks
   * Obtain RDD operation graph for a Spark Application Stage. Limits the number of clusters
   * returned as part of the graph to 10000.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraphError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraph(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraphRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AccessSparkApplicationStageRddOperationGraphResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraphError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:accessStageRddGraph",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "batchesId", value: request.batchesId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [
          { name: "parent", value: request.parent, schema: s.optional(s.string()) },
          { name: "stageId", value: request.stageId, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accessSparkApplicationStageRddOperationGraphResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraphError,
      },
      options,
    );
  }

  /**
   * Compute tuning config sparkApplications
   *
   * @remarks
   * Returns autotuning configuration for a specific query plan id and cohort id. Called by Spark
   * during query planning.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfig(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ComputeTuningConfigResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:computeTuningConfig",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "batchesId", value: request.batchesId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [
          { name: "executionId", value: request.executionId, schema: s.optional(s.string()) },
          { name: "parent", value: request.parent, schema: s.optional(s.string()) },
          { name: "semanticQueryId", value: request.semanticQueryId, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: computeTuningConfigResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigError,
      },
      options,
    );
  }

  /**
   * Search sparkApplications
   *
   * @remarks
   * Obtain high level information and list of Spark Applications corresponding to a batch
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsBatchesSparkApplicationsSearch(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SearchSparkApplicationsResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications:search",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "batchesId", value: request.batchesId, schema: s.string() },
        ],
        query: [
          {
            name: "applicationStatus",
            value: request.applicationStatus,
            schema: s.optional(s.lazy(() => applicationStatusSchema)),
          },
          { name: "maxEndTime", value: request.maxEndTime, schema: s.optional(s.string()) },
          { name: "maxTime", value: request.maxTime, schema: s.optional(s.string()) },
          { name: "minEndTime", value: request.minEndTime, schema: s.optional(s.string()) },
          { name: "minTime", value: request.minTime, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: searchSparkApplicationsResponseSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchError,
      },
      options,
    );
  }

  /**
   * Search executor stage summary sparkApplications
   *
   * @remarks
   * Obtain executor summary with respect to a spark stage attempt.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummaryError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummary(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummaryRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SearchSparkApplicationExecutorStageSummaryResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummaryError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:searchExecutorStageSummary",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "batchesId", value: request.batchesId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "parent", value: request.parent, schema: s.optional(s.string()) },
          { name: "stageAttemptId", value: request.stageAttemptId, schema: s.optional(s.int()) },
          { name: "stageId", value: request.stageId, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: searchSparkApplicationExecutorStageSummaryResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummaryError,
      },
      options,
    );
  }

  /**
   * Search executors sparkApplications
   *
   * @remarks
   * Obtain data corresponding to executors for a Spark Application.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorsError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsBatchesSparkApplicationsSearchExecutors(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SearchSparkApplicationExecutorsResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:searchExecutors",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "batchesId", value: request.batchesId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [
          {
            name: "executorStatus",
            value: request.executorStatus,
            schema: s.optional(s.lazy(() => executorStatusSchema)),
          },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "parent", value: request.parent, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: searchSparkApplicationExecutorsResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorsError,
      },
      options,
    );
  }

  /**
   * Search jobs sparkApplications
   *
   * @remarks
   * Obtain list of spark jobs corresponding to a Spark Application.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchJobsError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsBatchesSparkApplicationsSearchJobs(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchJobsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SearchSparkApplicationJobsResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchJobsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:searchJobs",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "batchesId", value: request.batchesId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [
          { name: "jobStatus", value: request.jobStatus, schema: s.optional(s.lazy(() => jobStatus2Schema)) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "parent", value: request.parent, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: searchSparkApplicationJobsResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchJobsError,
      },
      options,
    );
  }

  /**
   * Search native sql queries sparkApplications
   *
   * @remarks
   * Obtain data corresponding to Native SQL Queries for a Spark Application.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueries(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SearchSparkApplicationNativeSqlQueriesResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:searchNativeSqlQueries",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "batchesId", value: request.batchesId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "parent", value: request.parent, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: searchSparkApplicationNativeSqlQueriesResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesError,
      },
      options,
    );
  }

  /**
   * Search sql queries sparkApplications
   *
   * @remarks
   * Obtain data corresponding to SQL Queries for a Spark Application.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueriesError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueries(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueriesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SearchSparkApplicationSqlQueriesResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueriesError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:searchSqlQueries",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "batchesId", value: request.batchesId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [
          { name: "details", value: request.details, schema: s.optional(s.boolean()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "parent", value: request.parent, schema: s.optional(s.string()) },
          { name: "planDescription", value: request.planDescription, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: searchSparkApplicationSqlQueriesResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueriesError,
      },
      options,
    );
  }

  /**
   * Search stage attempt tasks sparkApplications
   *
   * @remarks
   * Obtain data corresponding to tasks for a spark stage attempt for a Spark Application.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasksError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasks(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasksRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SearchSparkApplicationStageAttemptTasksResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasksError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:searchStageAttemptTasks",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "batchesId", value: request.batchesId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "parent", value: request.parent, schema: s.optional(s.string()) },
          { name: "sortRuntime", value: request.sortRuntime, schema: s.optional(s.boolean()) },
          { name: "stageAttemptId", value: request.stageAttemptId, schema: s.optional(s.int()) },
          { name: "stageId", value: request.stageId, schema: s.optional(s.string()) },
          {
            name: "taskStatus",
            value: request.taskStatus,
            schema: s.optional(s.lazy(() => taskStatusSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: searchSparkApplicationStageAttemptTasksResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasksError,
      },
      options,
    );
  }

  /**
   * Search stage attempts sparkApplications
   *
   * @remarks
   * Obtain data corresponding to a spark stage attempts for a Spark Application.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptsError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttempts(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SearchSparkApplicationStageAttemptsResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:searchStageAttempts",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "batchesId", value: request.batchesId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "parent", value: request.parent, schema: s.optional(s.string()) },
          { name: "stageId", value: request.stageId, schema: s.optional(s.string()) },
          { name: "summaryMetricsMask", value: request.summaryMetricsMask, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: searchSparkApplicationStageAttemptsResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptsError,
      },
      options,
    );
  }

  /**
   * Search stages sparkApplications
   *
   * @remarks
   * Obtain data corresponding to stages for a Spark Application.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchStagesError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsBatchesSparkApplicationsSearchStages(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchStagesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SearchSparkApplicationStagesResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchStagesError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:searchStages",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "batchesId", value: request.batchesId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "parent", value: request.parent, schema: s.optional(s.string()) },
          {
            name: "stageStatus",
            value: request.stageStatus,
            schema: s.optional(s.lazy(() => stageStatusSchema)),
          },
          { name: "summaryMetricsMask", value: request.summaryMetricsMask, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: searchSparkApplicationStagesResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSearchStagesError,
      },
      options,
    );
  }

  /**
   * Summarize executors sparkApplications
   *
   * @remarks
   * Obtain summary of Executor Summary for a Spark Application
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutorsError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutors(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutorsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SummarizeSparkApplicationExecutorsResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutorsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:summarizeExecutors",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "batchesId", value: request.batchesId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [{ name: "parent", value: request.parent, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: summarizeSparkApplicationExecutorsResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutorsError,
      },
      options,
    );
  }

  /**
   * Summarize jobs sparkApplications
   *
   * @remarks
   * Obtain summary of Jobs for a Spark Application
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobsError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobs(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SummarizeSparkApplicationJobsResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:summarizeJobs",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "batchesId", value: request.batchesId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [{ name: "parent", value: request.parent, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: summarizeSparkApplicationJobsResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobsError,
      },
      options,
    );
  }

  /**
   * Summarize stage attempt tasks sparkApplications
   *
   * @remarks
   * Obtain summary of Tasks for a Spark Application Stage Attempt
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasksError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasks(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasksRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SummarizeSparkApplicationStageAttemptTasksResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasksError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:summarizeStageAttemptTasks",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "batchesId", value: request.batchesId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [
          { name: "parent", value: request.parent, schema: s.optional(s.string()) },
          { name: "stageAttemptId", value: request.stageAttemptId, schema: s.optional(s.int()) },
          { name: "stageId", value: request.stageId, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: summarizeSparkApplicationStageAttemptTasksResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasksError,
      },
      options,
    );
  }

  /**
   * Summarize stages sparkApplications
   *
   * @remarks
   * Obtain summary of Stages for a Spark Application
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStagesError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsBatchesSparkApplicationsSummarizeStages(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStagesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SummarizeSparkApplicationStagesResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStagesError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:summarizeStages",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "batchesId", value: request.batchesId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [{ name: "parent", value: request.parent, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: summarizeSparkApplicationStagesResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStagesError,
      },
      options,
    );
  }

  /**
   * Write sparkApplications
   *
   * @remarks
   * Write wrapper objects from dataplane to spanner
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsWriteError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsBatchesSparkApplicationsWrite(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsWriteRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Record<string, unknown>,
    GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsWriteError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:write",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "batchesId", value: request.batchesId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: writeSparkApplicationContextRequestSchema },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsLocationsBatchesSparkApplicationsWriteError,
      },
      options,
    );
  }

  /**
   * Cancel operations
   *
   * @remarks
   * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to
   * cancel the operation, but success is not guaranteed. If the server doesn't support this method,
   * it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other
   * methods to check whether the cancellation succeeded or whether the operation completed despite
   * cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an
   * operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to
   * Code.CANCELLED.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsCancelError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsOperationsCancel(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsCancelRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Record<string, unknown>,
    GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsCancelError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:cancel",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "operationsId", value: request.operationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsCancelError,
      },
      options,
    );
  }

  /**
   * Delete operations
   *
   * @remarks
   * Deletes a long-running operation. This method indicates that the client is no longer interested
   * in the operation result. It does not cancel the operation. If the server doesn't support this
   * method, it returns google.rpc.Code.UNIMPLEMENTED.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsDeleteError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsOperationsDelete(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Record<string, unknown>,
    GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsDeleteError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "operationsId", value: request.operationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsDeleteError,
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
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsGetError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsOperationsGet(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}",
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
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsGetError,
      },
      options,
    );
  }

  /**
   * List operations
   *
   * @remarks
   * Lists operations that match the specified filter in the request. If the server doesn't support
   * this method, it returns UNIMPLEMENTED.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsListError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsOperationsList(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ListOperationsResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/operations"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          {
            name: "returnPartialSuccess",
            value: request.returnPartialSuccess,
            schema: s.optional(s.boolean()),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listOperationsResponseSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsLocationsOperationsListError,
      },
      options,
    );
  }

  /**
   * Create sessionTemplates
   *
   * @remarks
   * Create a session template synchronously.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesCreateError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsSessionTemplatesCreate(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SessionTemplate,
    GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesCreateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/sessionTemplates",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: sessionTemplateSchema },
      },
      {
        success: { kind: "json", schema: sessionTemplateSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesCreateError,
      },
      options,
    );
  }

  /**
   * Delete sessionTemplates
   *
   * @remarks
   * Deletes a session template.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesDeleteError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsSessionTemplatesDelete(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Record<string, unknown>,
    GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesDeleteError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/sessionTemplates/{sessionTemplatesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "sessionTemplatesId", value: request.sessionTemplatesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesDeleteError,
      },
      options,
    );
  }

  /**
   * Get sessionTemplates
   *
   * @remarks
   * Gets the resource representation for a session template.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesGetError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsSessionTemplatesGet(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SessionTemplate,
    GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/sessionTemplates/{sessionTemplatesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "sessionTemplatesId", value: request.sessionTemplatesId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sessionTemplateSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesGetError,
      },
      options,
    );
  }

  /**
   * List sessionTemplates
   *
   * @remarks
   * Lists session templates.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesListError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsSessionTemplatesList(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ListSessionTemplatesResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/sessionTemplates",
        ),
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
        success: { kind: "json", schema: listSessionTemplatesResponseSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesListError,
      },
      options,
    );
  }

  /**
   * Patch sessionTemplates
   *
   * @remarks
   * Updates the session template synchronously.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesPatchError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsSessionTemplatesPatch(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SessionTemplate,
    GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesPatchError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/sessionTemplates/{sessionTemplatesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "sessionTemplatesId", value: request.sessionTemplatesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: sessionTemplateSchema },
      },
      {
        success: { kind: "json", schema: sessionTemplateSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionTemplatesPatchError,
      },
      options,
    );
  }

  /**
   * Create sessions
   *
   * @remarks
   * Create an interactive session asynchronously.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsCreateError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsSessionsCreate(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/sessions"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "requestId", value: request.requestId, schema: s.optional(s.string()) },
          { name: "sessionId", value: request.sessionId, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: sessionSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsCreateError,
      },
      options,
    );
  }

  /**
   * Delete sessions
   *
   * @remarks
   * Deletes the interactive session resource. If the session is not in terminal state, it is
   * terminated, and then deleted.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsDeleteError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsSessionsDelete(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "sessionsId", value: request.sessionsId, schema: s.string() },
        ],
        query: [{ name: "requestId", value: request.requestId, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsDeleteError,
      },
      options,
    );
  }

  /**
   * Get sessions
   *
   * @remarks
   * Gets the resource representation for an interactive session.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsGetError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsSessionsGet(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Session, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "sessionsId", value: request.sessionsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sessionSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsGetError,
      },
      options,
    );
  }

  /**
   * List sessions
   *
   * @remarks
   * Lists interactive sessions.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsListError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsSessionsList(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSessionsResponse, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/sessions"),
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
        success: { kind: "json", schema: listSessionsResponseSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsListError,
      },
      options,
    );
  }

  /**
   * Access sparkApplications
   *
   * @remarks
   * Obtain high level information corresponding to a single Spark Application.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsSessionsSparkApplicationsAccess(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AccessSessionSparkApplicationResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:access",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "sessionsId", value: request.sessionsId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [{ name: "parent", value: request.parent, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accessSessionSparkApplicationResponseSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessError,
      },
      options,
    );
  }

  /**
   * Access environment info sparkApplications
   *
   * @remarks
   * Obtain environment details for a Spark Application
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfoError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfo(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AccessSessionSparkApplicationEnvironmentInfoResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfoError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:accessEnvironmentInfo",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "sessionsId", value: request.sessionsId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [{ name: "parent", value: request.parent, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accessSessionSparkApplicationEnvironmentInfoResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfoError,
      },
      options,
    );
  }

  /**
   * Access job sparkApplications
   *
   * @remarks
   * Obtain data corresponding to a spark job for a Spark Application.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessJobError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsSessionsSparkApplicationsAccessJob(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessJobRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AccessSessionSparkApplicationJobResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessJobError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:accessJob",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "sessionsId", value: request.sessionsId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [
          { name: "jobId", value: request.jobId, schema: s.optional(s.string()) },
          { name: "parent", value: request.parent, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accessSessionSparkApplicationJobResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessJobError,
      },
      options,
    );
  }

  /**
   * Access native build info sparkApplications
   *
   * @remarks
   * Obtain data corresponding to Native Build Information for a Spark Application.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfoError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfo(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AccessSessionSparkApplicationNativeBuildInfoResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfoError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:accessNativeBuildInfo",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "sessionsId", value: request.sessionsId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [{ name: "parent", value: request.parent, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accessSessionSparkApplicationNativeBuildInfoResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfoError,
      },
      options,
    );
  }

  /**
   * Access native sql query sparkApplications
   *
   * @remarks
   * Obtain data corresponding to a particular Native SQL Query for a Spark Application.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQueryError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQuery(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQueryRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AccessSessionSparkApplicationNativeSqlQueryResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQueryError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:accessNativeSqlQuery",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "sessionsId", value: request.sessionsId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [
          { name: "executionId", value: request.executionId, schema: s.optional(s.string()) },
          { name: "parent", value: request.parent, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accessSessionSparkApplicationNativeSqlQueryResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQueryError,
      },
      options,
    );
  }

  /**
   * Access sql plan sparkApplications
   *
   * @remarks
   * Obtain Spark Plan Graph for a Spark Application SQL execution. Limits the number of clusters
   * returned as part of the graph to 10000.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlanError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlan(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlanRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AccessSessionSparkApplicationSqlSparkPlanGraphResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlanError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:accessSqlPlan",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "sessionsId", value: request.sessionsId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [
          { name: "executionId", value: request.executionId, schema: s.optional(s.string()) },
          { name: "parent", value: request.parent, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accessSessionSparkApplicationSqlSparkPlanGraphResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlanError,
      },
      options,
    );
  }

  /**
   * Access sql query sparkApplications
   *
   * @remarks
   * Obtain data corresponding to a particular SQL Query for a Spark Application.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQueryError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQuery(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQueryRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AccessSessionSparkApplicationSqlQueryResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQueryError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:accessSqlQuery",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "sessionsId", value: request.sessionsId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [
          { name: "details", value: request.details, schema: s.optional(s.boolean()) },
          { name: "executionId", value: request.executionId, schema: s.optional(s.string()) },
          { name: "parent", value: request.parent, schema: s.optional(s.string()) },
          { name: "planDescription", value: request.planDescription, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accessSessionSparkApplicationSqlQueryResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQueryError,
      },
      options,
    );
  }

  /**
   * Access stage attempt sparkApplications
   *
   * @remarks
   * Obtain data corresponding to a spark stage attempt for a Spark Application.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttempt(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AccessSessionSparkApplicationStageAttemptResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:accessStageAttempt",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "sessionsId", value: request.sessionsId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [
          { name: "parent", value: request.parent, schema: s.optional(s.string()) },
          { name: "stageAttemptId", value: request.stageAttemptId, schema: s.optional(s.int()) },
          { name: "stageId", value: request.stageId, schema: s.optional(s.string()) },
          { name: "summaryMetricsMask", value: request.summaryMetricsMask, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accessSessionSparkApplicationStageAttemptResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptError,
      },
      options,
    );
  }

  /**
   * Access stage rdd graph sparkApplications
   *
   * @remarks
   * Obtain RDD operation graph for a Spark Application Stage. Limits the number of clusters
   * returned as part of the graph to 10000.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraphError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraph(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraphRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AccessSessionSparkApplicationStageRddOperationGraphResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraphError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:accessStageRddGraph",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "sessionsId", value: request.sessionsId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [
          { name: "parent", value: request.parent, schema: s.optional(s.string()) },
          { name: "stageId", value: request.stageId, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accessSessionSparkApplicationStageRddOperationGraphResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraphError,
      },
      options,
    );
  }

  /**
   * Search sparkApplications
   *
   * @remarks
   * Obtain high level information and list of Spark Applications corresponding to a batch
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsSessionsSparkApplicationsSearch(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SearchSessionSparkApplicationsResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications:search",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "sessionsId", value: request.sessionsId, schema: s.string() },
        ],
        query: [
          {
            name: "applicationStatus",
            value: request.applicationStatus,
            schema: s.optional(s.lazy(() => applicationStatusSchema)),
          },
          { name: "maxEndTime", value: request.maxEndTime, schema: s.optional(s.string()) },
          { name: "maxTime", value: request.maxTime, schema: s.optional(s.string()) },
          { name: "minEndTime", value: request.minEndTime, schema: s.optional(s.string()) },
          { name: "minTime", value: request.minTime, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: searchSessionSparkApplicationsResponseSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchError,
      },
      options,
    );
  }

  /**
   * Search executor stage summary sparkApplications
   *
   * @remarks
   * Obtain executor summary with respect to a spark stage attempt.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummaryError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummary(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummaryRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SearchSessionSparkApplicationExecutorStageSummaryResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummaryError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:searchExecutorStageSummary",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "sessionsId", value: request.sessionsId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "parent", value: request.parent, schema: s.optional(s.string()) },
          { name: "stageAttemptId", value: request.stageAttemptId, schema: s.optional(s.int()) },
          { name: "stageId", value: request.stageId, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: searchSessionSparkApplicationExecutorStageSummaryResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummaryError,
      },
      options,
    );
  }

  /**
   * Search executors sparkApplications
   *
   * @remarks
   * Obtain data corresponding to executors for a Spark Application.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorsError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsSessionsSparkApplicationsSearchExecutors(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SearchSessionSparkApplicationExecutorsResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:searchExecutors",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "sessionsId", value: request.sessionsId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [
          {
            name: "executorStatus",
            value: request.executorStatus,
            schema: s.optional(s.lazy(() => executorStatusSchema)),
          },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "parent", value: request.parent, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: searchSessionSparkApplicationExecutorsResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorsError,
      },
      options,
    );
  }

  /**
   * Search jobs sparkApplications
   *
   * @remarks
   * Obtain list of spark jobs corresponding to a Spark Application.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchJobsError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsSessionsSparkApplicationsSearchJobs(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchJobsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SearchSessionSparkApplicationJobsResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchJobsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:searchJobs",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "sessionsId", value: request.sessionsId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [
          { name: "jobIds", value: request.jobIds, schema: s.optional(s.array(s.string())) },
          { name: "jobStatus", value: request.jobStatus, schema: s.optional(s.lazy(() => jobStatus2Schema)) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "parent", value: request.parent, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: searchSessionSparkApplicationJobsResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchJobsError,
      },
      options,
    );
  }

  /**
   * Search native sql queries sparkApplications
   *
   * @remarks
   * Obtain data corresponding to Native SQL Queries for a Spark Application.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueriesError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueries(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueriesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SearchSessionSparkApplicationNativeSqlQueriesResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueriesError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:searchNativeSqlQueries",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "sessionsId", value: request.sessionsId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "parent", value: request.parent, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: searchSessionSparkApplicationNativeSqlQueriesResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueriesError,
      },
      options,
    );
  }

  /**
   * Search sql queries sparkApplications
   *
   * @remarks
   * Obtain data corresponding to SQL Queries for a Spark Application.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueries(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SearchSessionSparkApplicationSqlQueriesResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:searchSqlQueries",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "sessionsId", value: request.sessionsId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [
          { name: "details", value: request.details, schema: s.optional(s.boolean()) },
          { name: "operationIds", value: request.operationIds, schema: s.optional(s.array(s.string())) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "parent", value: request.parent, schema: s.optional(s.string()) },
          { name: "planDescription", value: request.planDescription, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: searchSessionSparkApplicationSqlQueriesResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesError,
      },
      options,
    );
  }

  /**
   * Search stage attempt tasks sparkApplications
   *
   * @remarks
   * Obtain data corresponding to tasks for a spark stage attempt for a Spark Application.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasks(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SearchSessionSparkApplicationStageAttemptTasksResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:searchStageAttemptTasks",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "sessionsId", value: request.sessionsId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "parent", value: request.parent, schema: s.optional(s.string()) },
          { name: "sortRuntime", value: request.sortRuntime, schema: s.optional(s.boolean()) },
          { name: "stageAttemptId", value: request.stageAttemptId, schema: s.optional(s.int()) },
          { name: "stageId", value: request.stageId, schema: s.optional(s.string()) },
          {
            name: "taskStatus",
            value: request.taskStatus,
            schema: s.optional(s.lazy(() => taskStatusSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: searchSessionSparkApplicationStageAttemptTasksResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksError,
      },
      options,
    );
  }

  /**
   * Search stage attempts sparkApplications
   *
   * @remarks
   * Obtain data corresponding to a spark stage attempts for a Spark Application.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptsError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttempts(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SearchSessionSparkApplicationStageAttemptsResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:searchStageAttempts",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "sessionsId", value: request.sessionsId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "parent", value: request.parent, schema: s.optional(s.string()) },
          { name: "stageId", value: request.stageId, schema: s.optional(s.string()) },
          { name: "summaryMetricsMask", value: request.summaryMetricsMask, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: searchSessionSparkApplicationStageAttemptsResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptsError,
      },
      options,
    );
  }

  /**
   * Search stages sparkApplications
   *
   * @remarks
   * Obtain data corresponding to stages for a Spark Application.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsSessionsSparkApplicationsSearchStages(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SearchSessionSparkApplicationStagesResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:searchStages",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "sessionsId", value: request.sessionsId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "parent", value: request.parent, schema: s.optional(s.string()) },
          { name: "stageIds", value: request.stageIds, schema: s.optional(s.array(s.string())) },
          {
            name: "stageStatus",
            value: request.stageStatus,
            schema: s.optional(s.lazy(() => stageStatusSchema)),
          },
          { name: "summaryMetricsMask", value: request.summaryMetricsMask, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: searchSessionSparkApplicationStagesResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesError,
      },
      options,
    );
  }

  /**
   * Summarize executors sparkApplications
   *
   * @remarks
   * Obtain summary of Executor Summary for a Spark Application
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutorsError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutors(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutorsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SummarizeSessionSparkApplicationExecutorsResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutorsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:summarizeExecutors",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "sessionsId", value: request.sessionsId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [{ name: "parent", value: request.parent, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: summarizeSessionSparkApplicationExecutorsResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutorsError,
      },
      options,
    );
  }

  /**
   * Summarize jobs sparkApplications
   *
   * @remarks
   * Obtain summary of Jobs for a Spark Application
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobs(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SummarizeSessionSparkApplicationJobsResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:summarizeJobs",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "sessionsId", value: request.sessionsId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [
          { name: "jobIds", value: request.jobIds, schema: s.optional(s.array(s.string())) },
          { name: "parent", value: request.parent, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: summarizeSessionSparkApplicationJobsResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsError,
      },
      options,
    );
  }

  /**
   * Summarize stage attempt tasks sparkApplications
   *
   * @remarks
   * Obtain summary of Tasks for a Spark Application Stage Attempt
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasksError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasks(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasksRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SummarizeSessionSparkApplicationStageAttemptTasksResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasksError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:summarizeStageAttemptTasks",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "sessionsId", value: request.sessionsId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [
          { name: "parent", value: request.parent, schema: s.optional(s.string()) },
          { name: "stageAttemptId", value: request.stageAttemptId, schema: s.optional(s.int()) },
          { name: "stageId", value: request.stageId, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: summarizeSessionSparkApplicationStageAttemptTasksResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasksError,
      },
      options,
    );
  }

  /**
   * Summarize stages sparkApplications
   *
   * @remarks
   * Obtain summary of Stages for a Spark Application
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStagesError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsSessionsSparkApplicationsSummarizeStages(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStagesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SummarizeSessionSparkApplicationStagesResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStagesError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:summarizeStages",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "sessionsId", value: request.sessionsId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [
          { name: "parent", value: request.parent, schema: s.optional(s.string()) },
          { name: "stageIds", value: request.stageIds, schema: s.optional(s.array(s.string())) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: summarizeSessionSparkApplicationStagesResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStagesError,
      },
      options,
    );
  }

  /**
   * Write sparkApplications
   *
   * @remarks
   * Write wrapper objects from dataplane to spanner
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsWriteError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsSessionsSparkApplicationsWrite(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsWriteRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Record<string, unknown>,
    GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsWriteError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:write",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "sessionsId", value: request.sessionsId, schema: s.string() },
          { name: "sparkApplicationsId", value: request.sparkApplicationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: writeSessionSparkApplicationContextRequestSchema },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsSparkApplicationsWriteError,
      },
      options,
    );
  }

  /**
   * Terminate sessions
   *
   * @remarks
   * Terminates the interactive session.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsTerminateError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsSessionsTerminate(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsTerminateRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsTerminateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}:terminate",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "sessionsId", value: request.sessionsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: terminateSessionRequestSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsLocationsSessionsTerminateError,
      },
      options,
    );
  }

  /**
   * Create workflowTemplates
   *
   * @remarks
   * Creates new workflow template.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesCreateError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsWorkflowTemplatesCreate(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    WorkflowTemplate,
    GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesCreateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/workflowTemplates",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: workflowTemplateSchema },
      },
      {
        success: { kind: "json", schema: workflowTemplateSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesCreateError,
      },
      options,
    );
  }

  /**
   * Delete workflowTemplates
   *
   * @remarks
   * Deletes a workflow template. It does not cancel in-progress workflows.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesDeleteError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsWorkflowTemplatesDelete(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Record<string, unknown>,
    GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesDeleteError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/workflowTemplates/{workflowTemplatesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "workflowTemplatesId", value: request.workflowTemplatesId, schema: s.string() },
        ],
        query: [{ name: "version", value: request.version, schema: s.optional(s.int()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesDeleteError,
      },
      options,
    );
  }

  /**
   * Get workflowTemplates
   *
   * @remarks
   * Retrieves the latest workflow template.Can retrieve previously instantiated template by
   * specifying optional version parameter.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesGetError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsWorkflowTemplatesGet(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    WorkflowTemplate,
    GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/workflowTemplates/{workflowTemplatesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "workflowTemplatesId", value: request.workflowTemplatesId, schema: s.string() },
        ],
        query: [{ name: "version", value: request.version, schema: s.optional(s.int()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: workflowTemplateSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesGetError,
      },
      options,
    );
  }

  /**
   * Get iam policy workflowTemplates
   *
   * @remarks
   * Gets the access control policy for a resource. Returns an empty policy if the resource exists
   * and does not have a policy set.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesGetIamPolicyError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsWorkflowTemplatesGetIamPolicy(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesGetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Policy,
    GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesGetIamPolicyError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/workflowTemplates/{workflowTemplatesId}:getIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "workflowTemplatesId", value: request.workflowTemplatesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: getIamPolicyRequestSchema },
      },
      {
        success: { kind: "json", schema: policySchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesGetIamPolicyError,
      },
      options,
    );
  }

  /**
   * Instantiate workflowTemplates
   *
   * @remarks
   * Instantiates a template and begins execution.The returned Operation can be used to track
   * execution of workflow by polling operations.get. The Operation will complete when entire
   * workflow is finished.The running workflow can be aborted via operations.cancel. This will cause
   * any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The
   * Operation.metadata will be WorkflowMetadata
   * (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata).
   * Also see Using WorkflowMetadata
   * (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On
   * successful completion, Operation.response will be Empty.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesInstantiateError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsWorkflowTemplatesInstantiate(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesInstantiateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Operation,
    GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesInstantiateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/workflowTemplates/{workflowTemplatesId}:instantiate",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "workflowTemplatesId", value: request.workflowTemplatesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: instantiateWorkflowTemplateRequestSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesInstantiateError,
      },
      options,
    );
  }

  /**
   * Instantiate inline workflowTemplates
   *
   * @remarks
   * Instantiates a template and begins execution.This method is equivalent to executing the
   * sequence CreateWorkflowTemplate, InstantiateWorkflowTemplate, DeleteWorkflowTemplate.The
   * returned Operation can be used to track execution of workflow by polling operations.get. The
   * Operation will complete when entire workflow is finished.The running workflow can be aborted
   * via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned
   * clusters to be deleted.The Operation.metadata will be WorkflowMetadata
   * (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata).
   * Also see Using WorkflowMetadata
   * (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On
   * successful completion, Operation.response will be Empty.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesInstantiateInlineError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsWorkflowTemplatesInstantiateInline(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesInstantiateInlineRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Operation,
    GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesInstantiateInlineError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/workflowTemplates:instantiateInline",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [{ name: "requestId", value: request.requestId, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: workflowTemplateSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesInstantiateInlineError,
      },
      options,
    );
  }

  /**
   * List workflowTemplates
   *
   * @remarks
   * Lists workflows that match the specified filter in the request.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesListError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsWorkflowTemplatesList(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ListWorkflowTemplatesResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/workflowTemplates",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listWorkflowTemplatesResponseSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesListError,
      },
      options,
    );
  }

  /**
   * Set iam policy workflowTemplates
   *
   * @remarks
   * Sets the access control policy on the specified resource. Replaces any existing policy.Can
   * return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesSetIamPolicyError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsWorkflowTemplatesSetIamPolicy(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesSetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Policy,
    GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesSetIamPolicyError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/workflowTemplates/{workflowTemplatesId}:setIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "workflowTemplatesId", value: request.workflowTemplatesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: setIamPolicyRequestSchema },
      },
      {
        success: { kind: "json", schema: policySchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesSetIamPolicyError,
      },
      options,
    );
  }

  /**
   * Test iam permissions workflowTemplates
   *
   * @remarks
   * Returns permissions that a caller has on the specified resource. If the resource does not
   * exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation
   * is designed to be used for building permission-aware UIs and command-line tools, not for
   * authorization checking. This operation may "fail open" without warning.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesTestIamPermissionsError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsWorkflowTemplatesTestIamPermissions(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesTestIamPermissionsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TestIamPermissionsResponse,
    GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesTestIamPermissionsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/workflowTemplates/{workflowTemplatesId}:testIamPermissions",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "workflowTemplatesId", value: request.workflowTemplatesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: testIamPermissionsRequestSchema },
      },
      {
        success: { kind: "json", schema: testIamPermissionsResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesTestIamPermissionsError,
      },
      options,
    );
  }

  /**
   * Update workflowTemplates
   *
   * @remarks
   * Updates (replaces) workflow template. The updated template must contain version that matches
   * the current server version.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesUpdateError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsLocationsWorkflowTemplatesUpdate(
    request: GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    WorkflowTemplate,
    GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesUpdateError
  > {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/workflowTemplates/{workflowTemplatesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "workflowTemplatesId", value: request.workflowTemplatesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: workflowTemplateSchema },
      },
      {
        success: { kind: "json", schema: workflowTemplateSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsLocationsWorkflowTemplatesUpdateError,
      },
      options,
    );
  }

  /**
   * Create autoscalingPolicies
   *
   * @remarks
   * Creates new autoscaling policy.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesCreateError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsAutoscalingPoliciesCreate(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AutoscalingPolicy,
    GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesCreateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/regions/{regionsId}/autoscalingPolicies",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "regionsId", value: request.regionsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: autoscalingPolicySchema },
      },
      {
        success: { kind: "json", schema: autoscalingPolicySchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesCreateError,
      },
      options,
    );
  }

  /**
   * Delete autoscalingPolicies
   *
   * @remarks
   * Deletes an autoscaling policy. It is an error to delete an autoscaling policy that is in use by
   * one or more clusters.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesDeleteError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsAutoscalingPoliciesDelete(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Record<string, unknown>,
    GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesDeleteError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/regions/{regionsId}/autoscalingPolicies/{autoscalingPoliciesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "regionsId", value: request.regionsId, schema: s.string() },
          { name: "autoscalingPoliciesId", value: request.autoscalingPoliciesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesDeleteError,
      },
      options,
    );
  }

  /**
   * Get autoscalingPolicies
   *
   * @remarks
   * Retrieves autoscaling policy.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesGetError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsAutoscalingPoliciesGet(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AutoscalingPolicy,
    GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/regions/{regionsId}/autoscalingPolicies/{autoscalingPoliciesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "regionsId", value: request.regionsId, schema: s.string() },
          { name: "autoscalingPoliciesId", value: request.autoscalingPoliciesId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: autoscalingPolicySchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesGetError,
      },
      options,
    );
  }

  /**
   * Get iam policy autoscalingPolicies
   *
   * @remarks
   * Gets the access control policy for a resource. Returns an empty policy if the resource exists
   * and does not have a policy set.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicyError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsAutoscalingPoliciesGetIamPolicy(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Policy,
    GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicyError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/regions/{regionsId}/autoscalingPolicies/{autoscalingPoliciesId}:getIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "regionsId", value: request.regionsId, schema: s.string() },
          { name: "autoscalingPoliciesId", value: request.autoscalingPoliciesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: getIamPolicyRequestSchema },
      },
      {
        success: { kind: "json", schema: policySchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicyError,
      },
      options,
    );
  }

  /**
   * List autoscalingPolicies
   *
   * @remarks
   * Lists autoscaling policies in the project.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesListError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsAutoscalingPoliciesList(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ListAutoscalingPoliciesResponse,
    GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/regions/{regionsId}/autoscalingPolicies",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "regionsId", value: request.regionsId, schema: s.string() },
        ],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listAutoscalingPoliciesResponseSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesListError,
      },
      options,
    );
  }

  /**
   * Set iam policy autoscalingPolicies
   *
   * @remarks
   * Sets the access control policy on the specified resource. Replaces any existing policy.Can
   * return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicyError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsAutoscalingPoliciesSetIamPolicy(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Policy,
    GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicyError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/regions/{regionsId}/autoscalingPolicies/{autoscalingPoliciesId}:setIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "regionsId", value: request.regionsId, schema: s.string() },
          { name: "autoscalingPoliciesId", value: request.autoscalingPoliciesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: setIamPolicyRequestSchema },
      },
      {
        success: { kind: "json", schema: policySchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicyError,
      },
      options,
    );
  }

  /**
   * Test iam permissions autoscalingPolicies
   *
   * @remarks
   * Returns permissions that a caller has on the specified resource. If the resource does not
   * exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation
   * is designed to be used for building permission-aware UIs and command-line tools, not for
   * authorization checking. This operation may "fail open" without warning.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsAutoscalingPoliciesTestIamPermissions(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TestIamPermissionsResponse,
    GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/regions/{regionsId}/autoscalingPolicies/{autoscalingPoliciesId}:testIamPermissions",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "regionsId", value: request.regionsId, schema: s.string() },
          { name: "autoscalingPoliciesId", value: request.autoscalingPoliciesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: testIamPermissionsRequestSchema },
      },
      {
        success: { kind: "json", schema: testIamPermissionsResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsError,
      },
      options,
    );
  }

  /**
   * Update autoscalingPolicies
   *
   * @remarks
   * Updates (replaces) autoscaling policy.Disabled check for update_mask, because all updates will
   * be full replacements.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesUpdateError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsAutoscalingPoliciesUpdate(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AutoscalingPolicy,
    GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesUpdateError
  > {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/regions/{regionsId}/autoscalingPolicies/{autoscalingPoliciesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "regionsId", value: request.regionsId, schema: s.string() },
          { name: "autoscalingPoliciesId", value: request.autoscalingPoliciesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: autoscalingPolicySchema },
      },
      {
        success: { kind: "json", schema: autoscalingPolicySchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsAutoscalingPoliciesUpdateError,
      },
      options,
    );
  }

  /**
   * Create clusters
   *
   * @remarks
   * Creates a cluster in a project. The returned Operation.metadata will be
   * ClusterOperationMetadata
   * (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsRegionsClustersCreateError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsClustersCreate(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/projects/{projectId}/regions/{region}/clusters"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectId", value: request.projectId, schema: s.string() },
          { name: "region", value: request.region, schema: s.string() },
        ],
        query: [
          {
            name: "actionOnFailedPrimaryWorkers",
            value: request.actionOnFailedPrimaryWorkers,
            schema: s.optional(s.lazy(() => actionOnFailedPrimaryWorkersSchema)),
          },
          { name: "requestId", value: request.requestId, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: clusterSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersCreateError,
      },
      options,
    );
  }

  /**
   * Delete clusters
   *
   * @remarks
   * Deletes a cluster in a project. The returned Operation.metadata will be
   * ClusterOperationMetadata
   * (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsRegionsClustersDeleteError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsClustersDelete(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectId}/regions/{region}/clusters/{clusterName}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectId", value: request.projectId, schema: s.string() },
          { name: "region", value: request.region, schema: s.string() },
          { name: "clusterName", value: request.clusterName, schema: s.string() },
        ],
        query: [
          { name: "clusterUuid", value: request.clusterUuid, schema: s.optional(s.string()) },
          {
            name: "gracefulTerminationTimeout",
            value: request.gracefulTerminationTimeout,
            schema: s.optional(s.string()),
          },
          { name: "requestId", value: request.requestId, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersDeleteError,
      },
      options,
    );
  }

  /**
   * Diagnose clusters
   *
   * @remarks
   * Gets cluster diagnostic information. The returned Operation.metadata will be
   * ClusterOperationMetadata
   * (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).
   * After the operation completes, Operation.response contains DiagnoseClusterResults
   * (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#diagnoseclusterresults).
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsRegionsClustersDiagnoseError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsClustersDiagnose(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersDiagnoseRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersDiagnoseError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:diagnose",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectId", value: request.projectId, schema: s.string() },
          { name: "region", value: request.region, schema: s.string() },
          { name: "clusterName", value: request.clusterName, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: diagnoseClusterRequestSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersDiagnoseError,
      },
      options,
    );
  }

  /**
   * Get clusters
   *
   * @remarks
   * Gets the resource representation for a cluster in a project.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsRegionsClustersGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsClustersGet(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Cluster, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectId}/regions/{region}/clusters/{clusterName}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectId", value: request.projectId, schema: s.string() },
          { name: "region", value: request.region, schema: s.string() },
          { name: "clusterName", value: request.clusterName, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: clusterSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersGetError,
      },
      options,
    );
  }

  /**
   * Get iam policy clusters
   *
   * @remarks
   * Gets the access control policy for a resource. Returns an empty policy if the resource exists
   * and does not have a policy set.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsRegionsClustersGetIamPolicyError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsClustersGetIamPolicy(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersGetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<Policy, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersGetIamPolicyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/regions/{regionsId}/clusters/{clustersId}:getIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "regionsId", value: request.regionsId, schema: s.string() },
          { name: "clustersId", value: request.clustersId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: getIamPolicyRequestSchema },
      },
      {
        success: { kind: "json", schema: policySchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersGetIamPolicyError,
      },
      options,
    );
  }

  /**
   * Inject credentials clusters
   *
   * @remarks
   * Inject encrypted credentials into all of the VMs in a cluster.The target cluster must be a
   * personal auth cluster assigned to the user who is issuing the RPC.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsRegionsClustersInjectCredentialsError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsClustersInjectCredentials(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersInjectCredentialsRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersInjectCredentialsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/regions/{regionsId}/clusters/{clustersId}:injectCredentials",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "regionsId", value: request.regionsId, schema: s.string() },
          { name: "clustersId", value: request.clustersId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: injectCredentialsRequestSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersInjectCredentialsError,
      },
      options,
    );
  }

  /**
   * List clusters
   *
   * @remarks
   * Lists all regions/{region}/clusters in a project alphabetically.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsRegionsClustersListError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsClustersList(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListClustersResponse, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{projectId}/regions/{region}/clusters"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectId", value: request.projectId, schema: s.string() },
          { name: "region", value: request.region, schema: s.string() },
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
        success: { kind: "json", schema: listClustersResponseSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersListError,
      },
      options,
    );
  }

  /**
   * Create nodeGroups
   *
   * @remarks
   * Creates a node group in a cluster. The returned Operation.metadata is
   * NodeGroupOperationMetadata
   * (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsCreateError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsClustersNodeGroupsCreate(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/regions/{regionsId}/clusters/{clustersId}/nodeGroups",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "regionsId", value: request.regionsId, schema: s.string() },
          { name: "clustersId", value: request.clustersId, schema: s.string() },
        ],
        query: [
          { name: "nodeGroupId", value: request.nodeGroupId, schema: s.optional(s.string()) },
          { name: "parentOperationId", value: request.parentOperationId, schema: s.optional(s.string()) },
          { name: "requestId", value: request.requestId, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: nodeGroupSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsCreateError,
      },
      options,
    );
  }

  /**
   * Get nodeGroups
   *
   * @remarks
   * Gets the resource representation for a node group in a cluster.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsGetError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsClustersNodeGroupsGet(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<NodeGroup, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/regions/{regionsId}/clusters/{clustersId}/nodeGroups/{nodeGroupsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "regionsId", value: request.regionsId, schema: s.string() },
          { name: "clustersId", value: request.clustersId, schema: s.string() },
          { name: "nodeGroupsId", value: request.nodeGroupsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: nodeGroupSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsGetError,
      },
      options,
    );
  }

  /**
   * Repair nodeGroups
   *
   * @remarks
   * Repair nodes in a node group.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsRepairError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsClustersNodeGroupsRepair(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsRepairRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsRepairError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/regions/{regionsId}/clusters/{clustersId}/nodeGroups/{nodeGroupsId}:repair",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "regionsId", value: request.regionsId, schema: s.string() },
          { name: "clustersId", value: request.clustersId, schema: s.string() },
          { name: "nodeGroupsId", value: request.nodeGroupsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: repairNodeGroupRequestSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsRepairError,
      },
      options,
    );
  }

  /**
   * Resize nodeGroups
   *
   * @remarks
   * Resizes a node group in a cluster. The returned Operation.metadata is
   * NodeGroupOperationMetadata
   * (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsResizeError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsClustersNodeGroupsResize(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsResizeRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsResizeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/regions/{regionsId}/clusters/{clustersId}/nodeGroups/{nodeGroupsId}:resize",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "regionsId", value: request.regionsId, schema: s.string() },
          { name: "clustersId", value: request.clustersId, schema: s.string() },
          { name: "nodeGroupsId", value: request.nodeGroupsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: resizeNodeGroupRequestSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersNodeGroupsResizeError,
      },
      options,
    );
  }

  /**
   * Patch clusters
   *
   * @remarks
   * Updates a cluster in a project. The returned Operation.metadata will be
   * ClusterOperationMetadata
   * (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).
   * The cluster must be in a RUNNING state or an error is returned.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsRegionsClustersPatchError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsClustersPatch(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersPatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectId}/regions/{region}/clusters/{clusterName}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectId", value: request.projectId, schema: s.string() },
          { name: "region", value: request.region, schema: s.string() },
          { name: "clusterName", value: request.clusterName, schema: s.string() },
        ],
        query: [
          {
            name: "gracefulDecommissionTimeout",
            value: request.gracefulDecommissionTimeout,
            schema: s.optional(s.string()),
          },
          { name: "requestId", value: request.requestId, schema: s.optional(s.string()) },
          { name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: clusterSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersPatchError,
      },
      options,
    );
  }

  /**
   * Repair clusters
   *
   * @remarks
   * Repairs a cluster.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsRegionsClustersRepairError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsClustersRepair(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersRepairRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersRepairError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:repair",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectId", value: request.projectId, schema: s.string() },
          { name: "region", value: request.region, schema: s.string() },
          { name: "clusterName", value: request.clusterName, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: repairClusterRequestSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersRepairError,
      },
      options,
    );
  }

  /**
   * Set iam policy clusters
   *
   * @remarks
   * Sets the access control policy on the specified resource. Replaces any existing policy.Can
   * return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsRegionsClustersSetIamPolicyError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsClustersSetIamPolicy(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersSetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<Policy, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersSetIamPolicyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/regions/{regionsId}/clusters/{clustersId}:setIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "regionsId", value: request.regionsId, schema: s.string() },
          { name: "clustersId", value: request.clustersId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: setIamPolicyRequestSchema },
      },
      {
        success: { kind: "json", schema: policySchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersSetIamPolicyError,
      },
      options,
    );
  }

  /**
   * Start clusters
   *
   * @remarks
   * Starts a cluster in a project.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsRegionsClustersStartError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsClustersStart(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersStartRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersStartError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:start",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectId", value: request.projectId, schema: s.string() },
          { name: "region", value: request.region, schema: s.string() },
          { name: "clusterName", value: request.clusterName, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: startClusterRequestSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersStartError,
      },
      options,
    );
  }

  /**
   * Stop clusters
   *
   * @remarks
   * Stops a cluster in a project.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsRegionsClustersStopError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsClustersStop(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersStopRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsClustersStopError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:stop",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectId", value: request.projectId, schema: s.string() },
          { name: "region", value: request.region, schema: s.string() },
          { name: "clusterName", value: request.clusterName, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: stopClusterRequestSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersStopError,
      },
      options,
    );
  }

  /**
   * Test iam permissions clusters
   *
   * @remarks
   * Returns permissions that a caller has on the specified resource. If the resource does not
   * exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation
   * is designed to be used for building permission-aware UIs and command-line tools, not for
   * authorization checking. This operation may "fail open" without warning.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsRegionsClustersTestIamPermissionsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsClustersTestIamPermissions(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersTestIamPermissionsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TestIamPermissionsResponse,
    GoogleCloudDataprocClient.DataprocProjectsRegionsClustersTestIamPermissionsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/regions/{regionsId}/clusters/{clustersId}:testIamPermissions",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "regionsId", value: request.regionsId, schema: s.string() },
          { name: "clustersId", value: request.clustersId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: testIamPermissionsRequestSchema },
      },
      {
        success: { kind: "json", schema: testIamPermissionsResponseSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsClustersTestIamPermissionsError,
      },
      options,
    );
  }

  /**
   * Cancel jobs
   *
   * @remarks
   * Starts a job cancellation request. To access the job resource after cancellation, call
   * regions/{region}/jobs.list
   * (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/list) or
   * regions/{region}/jobs.get
   * (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/get).
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsRegionsJobsCancelError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsJobsCancel(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsJobsCancelRequest,
    options?: RequestOptions,
  ): ApiPromise<Job, GoogleCloudDataprocClient.DataprocProjectsRegionsJobsCancelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/projects/{projectId}/regions/{region}/jobs/{jobId}:cancel"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectId", value: request.projectId, schema: s.string() },
          { name: "region", value: request.region, schema: s.string() },
          { name: "jobId", value: request.jobId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: jobSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsJobsCancelError,
      },
      options,
    );
  }

  /**
   * Delete jobs
   *
   * @remarks
   * Deletes the job from the project. If the job is active, the delete fails, and the response
   * returns FAILED_PRECONDITION.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsRegionsJobsDeleteError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsJobsDelete(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsJobsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, GoogleCloudDataprocClient.DataprocProjectsRegionsJobsDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/projects/{projectId}/regions/{region}/jobs/{jobId}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectId", value: request.projectId, schema: s.string() },
          { name: "region", value: request.region, schema: s.string() },
          { name: "jobId", value: request.jobId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsJobsDeleteError,
      },
      options,
    );
  }

  /**
   * Get jobs
   *
   * @remarks
   * Gets the resource representation for a job in a project.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsRegionsJobsGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsJobsGet(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsJobsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Job, GoogleCloudDataprocClient.DataprocProjectsRegionsJobsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{projectId}/regions/{region}/jobs/{jobId}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectId", value: request.projectId, schema: s.string() },
          { name: "region", value: request.region, schema: s.string() },
          { name: "jobId", value: request.jobId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: jobSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsJobsGetError,
      },
      options,
    );
  }

  /**
   * Get iam policy jobs
   *
   * @remarks
   * Gets the access control policy for a resource. Returns an empty policy if the resource exists
   * and does not have a policy set.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsRegionsJobsGetIamPolicyError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsJobsGetIamPolicy(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsJobsGetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<Policy, GoogleCloudDataprocClient.DataprocProjectsRegionsJobsGetIamPolicyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/regions/{regionsId}/jobs/{jobsId}:getIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "regionsId", value: request.regionsId, schema: s.string() },
          { name: "jobsId", value: request.jobsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: getIamPolicyRequestSchema },
      },
      {
        success: { kind: "json", schema: policySchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsJobsGetIamPolicyError,
      },
      options,
    );
  }

  /**
   * List jobs
   *
   * @remarks
   * Lists regions/{region}/jobs in a project.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsRegionsJobsListError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsJobsList(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsJobsListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListJobsResponse, GoogleCloudDataprocClient.DataprocProjectsRegionsJobsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{projectId}/regions/{region}/jobs"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectId", value: request.projectId, schema: s.string() },
          { name: "region", value: request.region, schema: s.string() },
        ],
        query: [
          { name: "clusterName", value: request.clusterName, schema: s.optional(s.string()) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          {
            name: "jobStateMatcher",
            value: request.jobStateMatcher,
            schema: s.optional(s.lazy(() => jobStateMatcherSchema)),
          },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listJobsResponseSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsJobsListError,
      },
      options,
    );
  }

  /**
   * Patch jobs
   *
   * @remarks
   * Updates a job in a project.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsRegionsJobsPatchError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsJobsPatch(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsJobsPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<Job, GoogleCloudDataprocClient.DataprocProjectsRegionsJobsPatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v1/projects/{projectId}/regions/{region}/jobs/{jobId}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectId", value: request.projectId, schema: s.string() },
          { name: "region", value: request.region, schema: s.string() },
          { name: "jobId", value: request.jobId, schema: s.string() },
        ],
        query: [{ name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: jobSchema },
      },
      {
        success: { kind: "json", schema: jobSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsJobsPatchError,
      },
      options,
    );
  }

  /**
   * Set iam policy jobs
   *
   * @remarks
   * Sets the access control policy on the specified resource. Replaces any existing policy.Can
   * return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsRegionsJobsSetIamPolicyError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsJobsSetIamPolicy(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsJobsSetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<Policy, GoogleCloudDataprocClient.DataprocProjectsRegionsJobsSetIamPolicyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/regions/{regionsId}/jobs/{jobsId}:setIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "regionsId", value: request.regionsId, schema: s.string() },
          { name: "jobsId", value: request.jobsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: setIamPolicyRequestSchema },
      },
      {
        success: { kind: "json", schema: policySchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsJobsSetIamPolicyError,
      },
      options,
    );
  }

  /**
   * Submit jobs
   *
   * @remarks
   * Submits a job to a cluster.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsRegionsJobsSubmitError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsJobsSubmit(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsJobsSubmitRequest,
    options?: RequestOptions,
  ): ApiPromise<Job, GoogleCloudDataprocClient.DataprocProjectsRegionsJobsSubmitError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/projects/{projectId}/regions/{region}/jobs:submit"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectId", value: request.projectId, schema: s.string() },
          { name: "region", value: request.region, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: submitJobRequestSchema },
      },
      {
        success: { kind: "json", schema: jobSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsJobsSubmitError,
      },
      options,
    );
  }

  /**
   * Submit as operation jobs
   *
   * @remarks
   * Submits job to a cluster.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsRegionsJobsSubmitAsOperationError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsJobsSubmitAsOperation(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsJobsSubmitAsOperationRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsJobsSubmitAsOperationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectId}/regions/{region}/jobs:submitAsOperation",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectId", value: request.projectId, schema: s.string() },
          { name: "region", value: request.region, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: submitJobRequestSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsJobsSubmitAsOperationError,
      },
      options,
    );
  }

  /**
   * Test iam permissions jobs
   *
   * @remarks
   * Returns permissions that a caller has on the specified resource. If the resource does not
   * exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation
   * is designed to be used for building permission-aware UIs and command-line tools, not for
   * authorization checking. This operation may "fail open" without warning.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsRegionsJobsTestIamPermissionsError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsJobsTestIamPermissions(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsJobsTestIamPermissionsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TestIamPermissionsResponse,
    GoogleCloudDataprocClient.DataprocProjectsRegionsJobsTestIamPermissionsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/regions/{regionsId}/jobs/{jobsId}:testIamPermissions",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "regionsId", value: request.regionsId, schema: s.string() },
          { name: "jobsId", value: request.jobsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: testIamPermissionsRequestSchema },
      },
      {
        success: { kind: "json", schema: testIamPermissionsResponseSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsJobsTestIamPermissionsError,
      },
      options,
    );
  }

  /**
   * Cancel operations
   *
   * @remarks
   * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to
   * cancel the operation, but success is not guaranteed. If the server doesn't support this method,
   * it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other
   * methods to check whether the cancellation succeeded or whether the operation completed despite
   * cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an
   * operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to
   * Code.CANCELLED.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsCancelError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsOperationsCancel(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsCancelRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Record<string, unknown>,
    GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsCancelError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/regions/{regionsId}/operations/{operationsId}:cancel",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "regionsId", value: request.regionsId, schema: s.string() },
          { name: "operationsId", value: request.operationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsCancelError,
      },
      options,
    );
  }

  /**
   * Delete operations
   *
   * @remarks
   * Deletes a long-running operation. This method indicates that the client is no longer interested
   * in the operation result. It does not cancel the operation. If the server doesn't support this
   * method, it returns google.rpc.Code.UNIMPLEMENTED.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsDeleteError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsOperationsDelete(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Record<string, unknown>,
    GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsDeleteError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/regions/{regionsId}/operations/{operationsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "regionsId", value: request.regionsId, schema: s.string() },
          { name: "operationsId", value: request.operationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsDeleteError,
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
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsGetError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsOperationsGet(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/regions/{regionsId}/operations/{operationsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "regionsId", value: request.regionsId, schema: s.string() },
          { name: "operationsId", value: request.operationsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsGetError,
      },
      options,
    );
  }

  /**
   * Get iam policy operations
   *
   * @remarks
   * Gets the access control policy for a resource. Returns an empty policy if the resource exists
   * and does not have a policy set.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsGetIamPolicyError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsOperationsGetIamPolicy(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsGetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<Policy, GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsGetIamPolicyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/regions/{regionsId}/operations/{operationsId}:getIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "regionsId", value: request.regionsId, schema: s.string() },
          { name: "operationsId", value: request.operationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: getIamPolicyRequestSchema },
      },
      {
        success: { kind: "json", schema: policySchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsGetIamPolicyError,
      },
      options,
    );
  }

  /**
   * List operations
   *
   * @remarks
   * Lists operations that match the specified filter in the request. If the server doesn't support
   * this method, it returns UNIMPLEMENTED.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsListError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsOperationsList(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ListOperationsResponse,
    GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/regions/{regionsId}/operations"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "regionsId", value: request.regionsId, schema: s.string() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          {
            name: "returnPartialSuccess",
            value: request.returnPartialSuccess,
            schema: s.optional(s.boolean()),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listOperationsResponseSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsListError,
      },
      options,
    );
  }

  /**
   * Set iam policy operations
   *
   * @remarks
   * Sets the access control policy on the specified resource. Replaces any existing policy.Can
   * return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsSetIamPolicyError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsOperationsSetIamPolicy(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsSetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<Policy, GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsSetIamPolicyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/regions/{regionsId}/operations/{operationsId}:setIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "regionsId", value: request.regionsId, schema: s.string() },
          { name: "operationsId", value: request.operationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: setIamPolicyRequestSchema },
      },
      {
        success: { kind: "json", schema: policySchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsSetIamPolicyError,
      },
      options,
    );
  }

  /**
   * Test iam permissions operations
   *
   * @remarks
   * Returns permissions that a caller has on the specified resource. If the resource does not
   * exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation
   * is designed to be used for building permission-aware UIs and command-line tools, not for
   * authorization checking. This operation may "fail open" without warning.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsTestIamPermissionsError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsOperationsTestIamPermissions(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsTestIamPermissionsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TestIamPermissionsResponse,
    GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsTestIamPermissionsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/regions/{regionsId}/operations/{operationsId}:testIamPermissions",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "regionsId", value: request.regionsId, schema: s.string() },
          { name: "operationsId", value: request.operationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: testIamPermissionsRequestSchema },
      },
      {
        success: { kind: "json", schema: testIamPermissionsResponseSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsOperationsTestIamPermissionsError,
      },
      options,
    );
  }

  /**
   * Create workflowTemplates
   *
   * @remarks
   * Creates new workflow template.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesCreateError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsWorkflowTemplatesCreate(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    WorkflowTemplate,
    GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesCreateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/regions/{regionsId}/workflowTemplates"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "regionsId", value: request.regionsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: workflowTemplateSchema },
      },
      {
        success: { kind: "json", schema: workflowTemplateSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesCreateError,
      },
      options,
    );
  }

  /**
   * Delete workflowTemplates
   *
   * @remarks
   * Deletes a workflow template. It does not cancel in-progress workflows.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesDeleteError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsWorkflowTemplatesDelete(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Record<string, unknown>,
    GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesDeleteError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/regions/{regionsId}/workflowTemplates/{workflowTemplatesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "regionsId", value: request.regionsId, schema: s.string() },
          { name: "workflowTemplatesId", value: request.workflowTemplatesId, schema: s.string() },
        ],
        query: [{ name: "version", value: request.version, schema: s.optional(s.int()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesDeleteError,
      },
      options,
    );
  }

  /**
   * Get workflowTemplates
   *
   * @remarks
   * Retrieves the latest workflow template.Can retrieve previously instantiated template by
   * specifying optional version parameter.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesGetError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsWorkflowTemplatesGet(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    WorkflowTemplate,
    GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/regions/{regionsId}/workflowTemplates/{workflowTemplatesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "regionsId", value: request.regionsId, schema: s.string() },
          { name: "workflowTemplatesId", value: request.workflowTemplatesId, schema: s.string() },
        ],
        query: [{ name: "version", value: request.version, schema: s.optional(s.int()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: workflowTemplateSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesGetError,
      },
      options,
    );
  }

  /**
   * Get iam policy workflowTemplates
   *
   * @remarks
   * Gets the access control policy for a resource. Returns an empty policy if the resource exists
   * and does not have a policy set.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsWorkflowTemplatesGetIamPolicy(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<Policy, GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/regions/{regionsId}/workflowTemplates/{workflowTemplatesId}:getIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "regionsId", value: request.regionsId, schema: s.string() },
          { name: "workflowTemplatesId", value: request.workflowTemplatesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: getIamPolicyRequestSchema },
      },
      {
        success: { kind: "json", schema: policySchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyError,
      },
      options,
    );
  }

  /**
   * Instantiate workflowTemplates
   *
   * @remarks
   * Instantiates a template and begins execution.The returned Operation can be used to track
   * execution of workflow by polling operations.get. The Operation will complete when entire
   * workflow is finished.The running workflow can be aborted via operations.cancel. This will cause
   * any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The
   * Operation.metadata will be WorkflowMetadata
   * (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata).
   * Also see Using WorkflowMetadata
   * (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On
   * successful completion, Operation.response will be Empty.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesInstantiateError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsWorkflowTemplatesInstantiate(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesInstantiateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Operation,
    GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesInstantiateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/regions/{regionsId}/workflowTemplates/{workflowTemplatesId}:instantiate",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "regionsId", value: request.regionsId, schema: s.string() },
          { name: "workflowTemplatesId", value: request.workflowTemplatesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: instantiateWorkflowTemplateRequestSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesInstantiateError,
      },
      options,
    );
  }

  /**
   * Instantiate inline workflowTemplates
   *
   * @remarks
   * Instantiates a template and begins execution.This method is equivalent to executing the
   * sequence CreateWorkflowTemplate, InstantiateWorkflowTemplate, DeleteWorkflowTemplate.The
   * returned Operation can be used to track execution of workflow by polling operations.get. The
   * Operation will complete when entire workflow is finished.The running workflow can be aborted
   * via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned
   * clusters to be deleted.The Operation.metadata will be WorkflowMetadata
   * (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata).
   * Also see Using WorkflowMetadata
   * (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On
   * successful completion, Operation.response will be Empty.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsWorkflowTemplatesInstantiateInline(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Operation,
    GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/regions/{regionsId}/workflowTemplates:instantiateInline",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "regionsId", value: request.regionsId, schema: s.string() },
        ],
        query: [{ name: "requestId", value: request.requestId, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: workflowTemplateSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineError,
      },
      options,
    );
  }

  /**
   * List workflowTemplates
   *
   * @remarks
   * Lists workflows that match the specified filter in the request.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesListError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsWorkflowTemplatesList(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ListWorkflowTemplatesResponse,
    GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/regions/{regionsId}/workflowTemplates"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "regionsId", value: request.regionsId, schema: s.string() },
        ],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listWorkflowTemplatesResponseSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesListError,
      },
      options,
    );
  }

  /**
   * Set iam policy workflowTemplates
   *
   * @remarks
   * Sets the access control policy on the specified resource. Replaces any existing policy.Can
   * return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsWorkflowTemplatesSetIamPolicy(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<Policy, GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/regions/{regionsId}/workflowTemplates/{workflowTemplatesId}:setIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "regionsId", value: request.regionsId, schema: s.string() },
          { name: "workflowTemplatesId", value: request.workflowTemplatesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: setIamPolicyRequestSchema },
      },
      {
        success: { kind: "json", schema: policySchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyError,
      },
      options,
    );
  }

  /**
   * Test iam permissions workflowTemplates
   *
   * @remarks
   * Returns permissions that a caller has on the specified resource. If the resource does not
   * exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation
   * is designed to be used for building permission-aware UIs and command-line tools, not for
   * authorization checking. This operation may "fail open" without warning.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsWorkflowTemplatesTestIamPermissions(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TestIamPermissionsResponse,
    GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/regions/{regionsId}/workflowTemplates/{workflowTemplatesId}:testIamPermissions",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "regionsId", value: request.regionsId, schema: s.string() },
          { name: "workflowTemplatesId", value: request.workflowTemplatesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: testIamPermissionsRequestSchema },
      },
      {
        success: { kind: "json", schema: testIamPermissionsResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsError,
      },
      options,
    );
  }

  /**
   * Update workflowTemplates
   *
   * @remarks
   * Updates (replaces) workflow template. The updated template must contain version that matches
   * the current server version.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesUpdateError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  dataprocProjectsRegionsWorkflowTemplatesUpdate(
    request: GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    WorkflowTemplate,
    GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesUpdateError
  > {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/regions/{regionsId}/workflowTemplates/{workflowTemplatesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "regionsId", value: request.regionsId, schema: s.string() },
          { name: "workflowTemplatesId", value: request.workflowTemplatesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: workflowTemplateSchema },
      },
      {
        success: { kind: "json", schema: workflowTemplateSchema },
        errorFactory: GoogleCloudDataprocClient.DataprocProjectsRegionsWorkflowTemplatesUpdateError,
      },
      options,
    );
  }

  /**
   * Create federations
   *
   * @remarks
   * Creates a metastore federation in a project and location.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsCreateError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsFederationsCreate(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/federations"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "federationId", value: request.federationId, schema: s.optional(s.string()) },
          { name: "requestId", value: request.requestId, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: federationSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsCreateError,
      },
      options,
    );
  }

  /**
   * Delete federations
   *
   * @remarks
   * Deletes a single federation.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsDeleteError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsFederationsDelete(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/federations/{federationsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "federationsId", value: request.federationsId, schema: s.string() },
        ],
        query: [{ name: "requestId", value: request.requestId, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsDeleteError,
      },
      options,
    );
  }

  /**
   * Get federations
   *
   * @remarks
   * Gets the details of a single federation.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsGetError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsFederationsGet(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Federation, GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/federations/{federationsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "federationsId", value: request.federationsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: federationSchema },
        errorFactory: GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsGetError,
      },
      options,
    );
  }

  /**
   * Get iam policy federations
   *
   * @remarks
   * Gets the access control policy for a resource. Returns an empty policy if the resource exists
   * and does not have a policy set.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsGetIamPolicyError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsFederationsGetIamPolicy(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsGetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<Policy2, GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsGetIamPolicyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/federations/{federationsId}:getIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "federationsId", value: request.federationsId, schema: s.string() },
        ],
        query: [
          {
            name: "options.requestedPolicyVersion",
            value: request.optionsRequestedPolicyVersion,
            schema: s.optional(s.int()),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: policy2Schema },
        errorFactory: GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsGetIamPolicyError,
      },
      options,
    );
  }

  /**
   * List federations
   *
   * @remarks
   * Lists federations in a project and location.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsListError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsFederationsList(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ListFederationsResponse,
    GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/federations"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "orderBy", value: request.orderBy, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listFederationsResponseSchema },
        errorFactory: GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsListError,
      },
      options,
    );
  }

  /**
   * Patch federations
   *
   * @remarks
   * Updates the fields of a federation.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsPatchError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsFederationsPatch(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsPatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/federations/{federationsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "federationsId", value: request.federationsId, schema: s.string() },
        ],
        query: [
          { name: "requestId", value: request.requestId, schema: s.optional(s.string()) },
          { name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: federationSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsPatchError,
      },
      options,
    );
  }

  /**
   * Set iam policy federations
   *
   * @remarks
   * Sets the access control policy on the specified resource. Replaces any existing policy.Can
   * return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsSetIamPolicyError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsFederationsSetIamPolicy(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsSetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<Policy2, GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsSetIamPolicyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/federations/{federationsId}:setIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "federationsId", value: request.federationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: setIamPolicyRequest2Schema },
      },
      {
        success: { kind: "json", schema: policy2Schema },
        errorFactory: GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsSetIamPolicyError,
      },
      options,
    );
  }

  /**
   * Test iam permissions federations
   *
   * @remarks
   * Returns permissions that a caller has on the specified resource. If the resource does not
   * exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation
   * is designed to be used for building permission-aware UIs and command-line tools, not for
   * authorization checking. This operation may "fail open" without warning.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsTestIamPermissionsError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsFederationsTestIamPermissions(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsTestIamPermissionsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TestIamPermissionsResponse,
    GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsTestIamPermissionsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/federations/{federationsId}:testIamPermissions",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "federationsId", value: request.federationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: testIamPermissionsRequestSchema },
      },
      {
        success: { kind: "json", schema: testIamPermissionsResponseSchema },
        errorFactory: GoogleCloudDataprocClient.MetastoreProjectsLocationsFederationsTestIamPermissionsError,
      },
      options,
    );
  }

  /**
   * Get locations
   *
   * @remarks
   * Gets information about a location.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.MetastoreProjectsLocationsGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsGet(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Location, GoogleCloudDataprocClient.MetastoreProjectsLocationsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}"),
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
        errorFactory: GoogleCloudDataprocClient.MetastoreProjectsLocationsGetError,
      },
      options,
    );
  }

  /**
   * List locations
   *
   * @remarks
   * Lists information about the supported locations for this service.This method lists locations
   * based on the resource scope provided in the ListLocationsRequest.name field: Global locations:
   * If name is empty, the method lists the public locations available to all projects.
   * Project-specific locations: If name follows the format projects/{project}, the method lists
   * locations visible to that specific project. This includes public, private, or other
   * project-specific locations enabled for the project.For gRPC and client library implementations,
   * the resource name is passed as the name field. For direct service calls, the resource name is
   * incorporated into the request path based on the specific service implementation and version.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.MetastoreProjectsLocationsListError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsList(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListLocationsResponse, GoogleCloudDataprocClient.MetastoreProjectsLocationsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations"),
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
        errorFactory: GoogleCloudDataprocClient.MetastoreProjectsLocationsListError,
      },
      options,
    );
  }

  /**
   * Alter location services
   *
   * @remarks
   * Alter metadata resource location. The metadata resource can be a database, table, or partition.
   * This functionality only updates the parent directory for the respective metadata resource and
   * does not transfer any existing data to the new location.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesAlterLocationError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsServicesAlterLocation(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesAlterLocationRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesAlterLocationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:alterLocation",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "servicesId", value: request.servicesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: alterMetadataResourceLocationRequestSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesAlterLocationError,
      },
      options,
    );
  }

  /**
   * Alter table properties services
   *
   * @remarks
   * Alter metadata table properties.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesAlterTablePropertiesError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsServicesAlterTableProperties(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesAlterTablePropertiesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Operation,
    GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesAlterTablePropertiesError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:alterTableProperties",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "servicesId", value: request.servicesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: alterTablePropertiesRequestSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesAlterTablePropertiesError,
      },
      options,
    );
  }

  /**
   * Create backups
   *
   * @remarks
   * Creates a new backup in a given project and location.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsCreateError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsServicesBackupsCreate(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/backups",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "servicesId", value: request.servicesId, schema: s.string() },
        ],
        query: [
          { name: "backupId", value: request.backupId, schema: s.optional(s.string()) },
          { name: "requestId", value: request.requestId, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: backupSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsCreateError,
      },
      options,
    );
  }

  /**
   * Delete backups
   *
   * @remarks
   * Deletes a single backup.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsDeleteError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsServicesBackupsDelete(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/backups/{backupsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "servicesId", value: request.servicesId, schema: s.string() },
          { name: "backupsId", value: request.backupsId, schema: s.string() },
        ],
        query: [{ name: "requestId", value: request.requestId, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsDeleteError,
      },
      options,
    );
  }

  /**
   * Get backups
   *
   * @remarks
   * Gets details of a single backup.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsGetError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsServicesBackupsGet(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Backup, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/backups/{backupsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "servicesId", value: request.servicesId, schema: s.string() },
          { name: "backupsId", value: request.backupsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: backupSchema },
        errorFactory: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsGetError,
      },
      options,
    );
  }

  /**
   * Get iam policy backups
   *
   * @remarks
   * Gets the access control policy for a resource. Returns an empty policy if the resource exists
   * and does not have a policy set.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsGetIamPolicyError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsServicesBackupsGetIamPolicy(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsGetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Policy2,
    GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsGetIamPolicyError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/backups/{backupsId}:getIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "servicesId", value: request.servicesId, schema: s.string() },
          { name: "backupsId", value: request.backupsId, schema: s.string() },
        ],
        query: [
          {
            name: "options.requestedPolicyVersion",
            value: request.optionsRequestedPolicyVersion,
            schema: s.optional(s.int()),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: policy2Schema },
        errorFactory: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsGetIamPolicyError,
      },
      options,
    );
  }

  /**
   * List backups
   *
   * @remarks
   * Lists backups in a service.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsListError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsServicesBackupsList(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ListBackupsResponse,
    GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/backups",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "servicesId", value: request.servicesId, schema: s.string() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "orderBy", value: request.orderBy, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listBackupsResponseSchema },
        errorFactory: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsListError,
      },
      options,
    );
  }

  /**
   * Set iam policy backups
   *
   * @remarks
   * Sets the access control policy on the specified resource. Replaces any existing policy.Can
   * return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsSetIamPolicyError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsServicesBackupsSetIamPolicy(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsSetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Policy2,
    GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsSetIamPolicyError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/backups/{backupsId}:setIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "servicesId", value: request.servicesId, schema: s.string() },
          { name: "backupsId", value: request.backupsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: setIamPolicyRequest2Schema },
      },
      {
        success: { kind: "json", schema: policy2Schema },
        errorFactory: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesBackupsSetIamPolicyError,
      },
      options,
    );
  }

  /**
   * Cancel migration services
   *
   * @remarks
   * Cancels the ongoing Managed Migration process.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesCancelMigrationError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsServicesCancelMigration(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesCancelMigrationRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesCancelMigrationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:cancelMigration",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "servicesId", value: request.servicesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesCancelMigrationError,
      },
      options,
    );
  }

  /**
   * Complete migration services
   *
   * @remarks
   * Completes the managed migration process. The Dataproc Metastore service will switch to using
   * its own backend database after successful migration.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesCompleteMigrationError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsServicesCompleteMigration(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesCompleteMigrationRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Operation,
    GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesCompleteMigrationError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:completeMigration",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "servicesId", value: request.servicesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesCompleteMigrationError,
      },
      options,
    );
  }

  /**
   * Create services
   *
   * @remarks
   * Creates a metastore service in a project and location.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesCreateError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsServicesCreate(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/services"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "requestId", value: request.requestId, schema: s.optional(s.string()) },
          { name: "serviceId", value: request.serviceId, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: serviceSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesCreateError,
      },
      options,
    );
  }

  /**
   * Get iam policy databases
   *
   * @remarks
   * Gets the access control policy for a resource. Returns an empty policy if the resource exists
   * and does not have a policy set.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesGetIamPolicyError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsServicesDatabasesGetIamPolicy(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesGetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Policy2,
    GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesGetIamPolicyError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/databases/{databasesId}:getIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "servicesId", value: request.servicesId, schema: s.string() },
          { name: "databasesId", value: request.databasesId, schema: s.string() },
        ],
        query: [
          {
            name: "options.requestedPolicyVersion",
            value: request.optionsRequestedPolicyVersion,
            schema: s.optional(s.int()),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: policy2Schema },
        errorFactory: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesGetIamPolicyError,
      },
      options,
    );
  }

  /**
   * Set iam policy databases
   *
   * @remarks
   * Sets the access control policy on the specified resource. Replaces any existing policy.Can
   * return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesSetIamPolicyError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsServicesDatabasesSetIamPolicy(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesSetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Policy2,
    GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesSetIamPolicyError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/databases/{databasesId}:setIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "servicesId", value: request.servicesId, schema: s.string() },
          { name: "databasesId", value: request.databasesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: setIamPolicyRequest2Schema },
      },
      {
        success: { kind: "json", schema: policy2Schema },
        errorFactory: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesSetIamPolicyError,
      },
      options,
    );
  }

  /**
   * Get iam policy tables
   *
   * @remarks
   * Gets the access control policy for a resource. Returns an empty policy if the resource exists
   * and does not have a policy set.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsServicesDatabasesTablesGetIamPolicy(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Policy2,
    GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/databases/{databasesId}/tables/{tablesId}:getIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "servicesId", value: request.servicesId, schema: s.string() },
          { name: "databasesId", value: request.databasesId, schema: s.string() },
          { name: "tablesId", value: request.tablesId, schema: s.string() },
        ],
        query: [
          {
            name: "options.requestedPolicyVersion",
            value: request.optionsRequestedPolicyVersion,
            schema: s.optional(s.int()),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: policy2Schema },
        errorFactory:
          GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyError,
      },
      options,
    );
  }

  /**
   * Set iam policy tables
   *
   * @remarks
   * Sets the access control policy on the specified resource. Replaces any existing policy.Can
   * return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsServicesDatabasesTablesSetIamPolicy(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Policy2,
    GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/databases/{databasesId}/tables/{tablesId}:setIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "servicesId", value: request.servicesId, schema: s.string() },
          { name: "databasesId", value: request.databasesId, schema: s.string() },
          { name: "tablesId", value: request.tablesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: setIamPolicyRequest2Schema },
      },
      {
        success: { kind: "json", schema: policy2Schema },
        errorFactory:
          GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyError,
      },
      options,
    );
  }

  /**
   * Delete services
   *
   * @remarks
   * Deletes a single service.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDeleteError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsServicesDelete(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "servicesId", value: request.servicesId, schema: s.string() },
        ],
        query: [{ name: "requestId", value: request.requestId, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesDeleteError,
      },
      options,
    );
  }

  /**
   * Export metadata services
   *
   * @remarks
   * Exports metadata from a service.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesExportMetadataError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsServicesExportMetadata(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesExportMetadataRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesExportMetadataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:exportMetadata",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "servicesId", value: request.servicesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: exportMetadataRequestSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesExportMetadataError,
      },
      options,
    );
  }

  /**
   * Get services
   *
   * @remarks
   * Gets the details of a single service.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesGetError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsServicesGet(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Service, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "servicesId", value: request.servicesId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: serviceSchema },
        errorFactory: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesGetError,
      },
      options,
    );
  }

  /**
   * Get iam policy services
   *
   * @remarks
   * Gets the access control policy for a resource. Returns an empty policy if the resource exists
   * and does not have a policy set.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesGetIamPolicyError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsServicesGetIamPolicy(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesGetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<Policy2, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesGetIamPolicyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:getIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "servicesId", value: request.servicesId, schema: s.string() },
        ],
        query: [
          {
            name: "options.requestedPolicyVersion",
            value: request.optionsRequestedPolicyVersion,
            schema: s.optional(s.int()),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: policy2Schema },
        errorFactory: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesGetIamPolicyError,
      },
      options,
    );
  }

  /**
   * List services
   *
   * @remarks
   * Lists services in a project and location.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesListError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsServicesList(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListServicesResponse, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/services"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "orderBy", value: request.orderBy, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listServicesResponseSchema },
        errorFactory: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesListError,
      },
      options,
    );
  }

  /**
   * Create metadataImports
   *
   * @remarks
   * Creates a new MetadataImport in a given project and location.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsCreateError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsServicesMetadataImportsCreate(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Operation,
    GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsCreateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/metadataImports",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "servicesId", value: request.servicesId, schema: s.string() },
        ],
        query: [
          { name: "metadataImportId", value: request.metadataImportId, schema: s.optional(s.string()) },
          { name: "requestId", value: request.requestId, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: metadataImportSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsCreateError,
      },
      options,
    );
  }

  /**
   * Get metadataImports
   *
   * @remarks
   * Gets details of a single import.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsGetError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsServicesMetadataImportsGet(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    MetadataImport,
    GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/metadataImports/{metadataImportsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "servicesId", value: request.servicesId, schema: s.string() },
          { name: "metadataImportsId", value: request.metadataImportsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: metadataImportSchema },
        errorFactory: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsGetError,
      },
      options,
    );
  }

  /**
   * List metadataImports
   *
   * @remarks
   * Lists imports in a service.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsListError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsServicesMetadataImportsList(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ListMetadataImportsResponse,
    GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/metadataImports",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "servicesId", value: request.servicesId, schema: s.string() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "orderBy", value: request.orderBy, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listMetadataImportsResponseSchema },
        errorFactory: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsListError,
      },
      options,
    );
  }

  /**
   * Patch metadataImports
   *
   * @remarks
   * Updates a single import. Only the description field of MetadataImport is supported to be
   * updated.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsPatchError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsServicesMetadataImportsPatch(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Operation,
    GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsPatchError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/metadataImports/{metadataImportsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "servicesId", value: request.servicesId, schema: s.string() },
          { name: "metadataImportsId", value: request.metadataImportsId, schema: s.string() },
        ],
        query: [
          { name: "requestId", value: request.requestId, schema: s.optional(s.string()) },
          { name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: metadataImportSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMetadataImportsPatchError,
      },
      options,
    );
  }

  /**
   * Delete migrationExecutions
   *
   * @remarks
   * Deletes a single migration execution.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMigrationExecutionsDeleteError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsServicesMigrationExecutionsDelete(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMigrationExecutionsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Operation,
    GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMigrationExecutionsDeleteError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/migrationExecutions/{migrationExecutionsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "servicesId", value: request.servicesId, schema: s.string() },
          { name: "migrationExecutionsId", value: request.migrationExecutionsId, schema: s.string() },
        ],
        query: [{ name: "requestId", value: request.requestId, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory:
          GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMigrationExecutionsDeleteError,
      },
      options,
    );
  }

  /**
   * Get migrationExecutions
   *
   * @remarks
   * Gets details of a single migration execution.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMigrationExecutionsGetError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsServicesMigrationExecutionsGet(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMigrationExecutionsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    MigrationExecution,
    GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMigrationExecutionsGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/migrationExecutions/{migrationExecutionsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "servicesId", value: request.servicesId, schema: s.string() },
          { name: "migrationExecutionsId", value: request.migrationExecutionsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: migrationExecutionSchema },
        errorFactory: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMigrationExecutionsGetError,
      },
      options,
    );
  }

  /**
   * List migrationExecutions
   *
   * @remarks
   * Lists migration executions on a service.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMigrationExecutionsListError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsServicesMigrationExecutionsList(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMigrationExecutionsListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ListMigrationExecutionsResponse,
    GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMigrationExecutionsListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/migrationExecutions",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "servicesId", value: request.servicesId, schema: s.string() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "orderBy", value: request.orderBy, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listMigrationExecutionsResponseSchema },
        errorFactory:
          GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMigrationExecutionsListError,
      },
      options,
    );
  }

  /**
   * Move table to database services
   *
   * @remarks
   * Move a table to another database.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMoveTableToDatabaseError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsServicesMoveTableToDatabase(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMoveTableToDatabaseRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Operation,
    GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMoveTableToDatabaseError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:moveTableToDatabase",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "servicesId", value: request.servicesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: moveTableToDatabaseRequestSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesMoveTableToDatabaseError,
      },
      options,
    );
  }

  /**
   * Patch services
   *
   * @remarks
   * Updates the parameters of a single service.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesPatchError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsServicesPatch(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesPatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "servicesId", value: request.servicesId, schema: s.string() },
        ],
        query: [
          { name: "requestId", value: request.requestId, schema: s.optional(s.string()) },
          { name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: serviceSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesPatchError,
      },
      options,
    );
  }

  /**
   * Query metadata services
   *
   * @remarks
   * Query Dataproc Metastore metadata.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesQueryMetadataError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsServicesQueryMetadata(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesQueryMetadataRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesQueryMetadataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:queryMetadata",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "servicesId", value: request.servicesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: queryMetadataRequestSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesQueryMetadataError,
      },
      options,
    );
  }

  /**
   * Restore services
   *
   * @remarks
   * Restores a service from a backup.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesRestoreError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsServicesRestore(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesRestoreRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesRestoreError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:restore",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "servicesId", value: request.servicesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: restoreServiceRequestSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesRestoreError,
      },
      options,
    );
  }

  /**
   * Set iam policy services
   *
   * @remarks
   * Sets the access control policy on the specified resource. Replaces any existing policy.Can
   * return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesSetIamPolicyError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsServicesSetIamPolicy(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesSetIamPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<Policy2, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesSetIamPolicyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:setIamPolicy",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "servicesId", value: request.servicesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: setIamPolicyRequest2Schema },
      },
      {
        success: { kind: "json", schema: policy2Schema },
        errorFactory: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesSetIamPolicyError,
      },
      options,
    );
  }

  /**
   * Start migration services
   *
   * @remarks
   * Starts the Managed Migration process.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesStartMigrationError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsServicesStartMigration(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesStartMigrationRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesStartMigrationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:startMigration",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "servicesId", value: request.servicesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: startMigrationRequestSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesStartMigrationError,
      },
      options,
    );
  }

  /**
   * Test iam permissions services
   *
   * @remarks
   * Returns permissions that a caller has on the specified resource. If the resource does not
   * exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation
   * is designed to be used for building permission-aware UIs and command-line tools, not for
   * authorization checking. This operation may "fail open" without warning.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesTestIamPermissionsError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudDataprocError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  metastoreProjectsLocationsServicesTestIamPermissions(
    request: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesTestIamPermissionsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TestIamPermissionsResponse,
    GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesTestIamPermissionsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:testIamPermissions",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "servicesId", value: request.servicesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: testIamPermissionsRequestSchema },
      },
      {
        success: { kind: "json", schema: testIamPermissionsResponseSchema },
        errorFactory: GoogleCloudDataprocClient.MetastoreProjectsLocationsServicesTestIamPermissionsError,
      },
      options,
    );
  }
}

export namespace GoogleCloudDataprocClient {
  export type DataprocProjectsLocationsAutoscalingPoliciesCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    body: AutoscalingPolicy;
  };

  export class DataprocProjectsLocationsAutoscalingPoliciesCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsAutoscalingPoliciesCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsLocationsAutoscalingPoliciesDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (autoscalingPoliciesId). */
    autoscalingPoliciesId: string;
  };

  export class DataprocProjectsLocationsAutoscalingPoliciesDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsAutoscalingPoliciesDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsLocationsAutoscalingPoliciesGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (autoscalingPoliciesId). */
    autoscalingPoliciesId: string;
  };

  export class DataprocProjectsLocationsAutoscalingPoliciesGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsAutoscalingPoliciesGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (autoscalingPoliciesId). */
    autoscalingPoliciesId: string;
    body: GetIamPolicyRequest;
  };

  export class DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsLocationsAutoscalingPoliciesListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Optional. The maximum number of results to return in each response. Must be less than or
     * equal to 1000. Defaults to 100.
     */
    pageSize?: number;
    /**
     * Optional. The page token, returned by a previous call, to request the next page of results.
     */
    pageToken?: string;
  };

  export class DataprocProjectsLocationsAutoscalingPoliciesListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsAutoscalingPoliciesListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (autoscalingPoliciesId). */
    autoscalingPoliciesId: string;
    body: SetIamPolicyRequest;
  };

  export class DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissionsRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (autoscalingPoliciesId). */
    autoscalingPoliciesId: string;
    body: TestIamPermissionsRequest;
  };

  export class DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissionsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissionsError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsLocationsAutoscalingPoliciesUpdateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (autoscalingPoliciesId). */
    autoscalingPoliciesId: string;
    body: AutoscalingPolicy;
  };

  export class DataprocProjectsLocationsAutoscalingPoliciesUpdateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsAutoscalingPoliciesUpdateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsLocationsBatchesAnalyzeRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (batchesId). */
    batchesId: string;
    body: AnalyzeBatchRequest;
  };

  export class DataprocProjectsLocationsBatchesAnalyzeError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsBatchesAnalyzeError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsLocationsBatchesCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Optional. The ID to use for the batch, which will become the final component of the batch's
     * resource name.This value must be 4-63 characters. Valid characters are /[a-z][0-9]-/.
     */
    batchId?: string;
    /**
     * Optional. A unique ID used to identify the request. If the service receives two
     * CreateBatchRequests with the same request_id, the second request is ignored and the operation
     * that corresponds to the first Batch created and stored in the backend is
     * returned.Recommendation: Set this value to a UUID
     * (https://en.wikipedia.org/wiki/Universally_unique_identifier).The value must contain only
     * letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40
     * characters.
     */
    requestId?: string;
    body: Batch;
  };

  export class DataprocProjectsLocationsBatchesCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsBatchesCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsLocationsBatchesDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (batchesId). */
    batchesId: string;
  };

  export class DataprocProjectsLocationsBatchesDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsBatchesDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsLocationsBatchesGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (batchesId). */
    batchesId: string;
  };

  export class DataprocProjectsLocationsBatchesGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsBatchesGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsLocationsBatchesListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Optional. A filter for the batches to return in the response.A filter is a logical expression
     * constraining the values of various fields in each batch resource. Filters are case sensitive,
     * and may contain multiple clauses combined with logical operators (AND/OR). Supported fields:
     * * batch_id * batch_uuid * state * create_time * labels * runtime_info.cohort_info.cohort e.g.
     * state = RUNNING and create_time < "2023-01-01T00:00:00Z" filters for batches in state RUNNING
     * that were created before 2023-01-01. state = RUNNING and labels.environment=production
     * filters for batches in state in a RUNNING state that have a production environment label.See
     * https://google.aip.dev/assets/misc/ebnf-filtering.txt for a detailed description of the
     * filter syntax and a list of supported comparisons.
     */
    filter?: string;
    /**
     * Optional. Field(s) on which to sort the list of batches.Currently the only supported sort
     * orders are unspecified (empty) and create_time desc to sort by most recently created batches
     * first.See https://google.aip.dev/132#ordering for more details.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of batches to return in each response. The service may return
     * fewer than this value. The default page size is 20; the maximum page size is 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token received from a previous ListBatches call. Provide this token to
     * retrieve the subsequent page.
     */
    pageToken?: string;
  };

  export class DataprocProjectsLocationsBatchesListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsBatchesListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsLocationsBatchesSparkApplicationsAccessRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (batchesId). */
    batchesId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    /** Required. Parent (Batch) resource reference. */
    parent?: string;
  };

  export class DataprocProjectsLocationsBatchesSparkApplicationsAccessError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsBatchesSparkApplicationsAccessError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfoRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (batchesId). */
    batchesId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    /** Required. Parent (Batch) resource reference. */
    parent?: string;
  };

  export class DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfoError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfoError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsLocationsBatchesSparkApplicationsAccessJobRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (batchesId). */
    batchesId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    /** Required. Job ID to fetch data for. */
    jobId?: string;
    /** Required. Parent (Batch) resource reference. */
    parent?: string;
  };

  export class DataprocProjectsLocationsBatchesSparkApplicationsAccessJobError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsBatchesSparkApplicationsAccessJobError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfoRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (batchesId). */
    batchesId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    /** Required. Parent (Batch) resource reference. */
    parent?: string;
  };

  export class DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfoError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfoError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQueryRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (batchesId). */
    batchesId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    /** Required. Execution ID */
    executionId?: string;
    /** Required. Parent (Batch) resource reference. */
    parent?: string;
  };

  export class DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQueryError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQueryError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlanRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (batchesId). */
    batchesId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    /** Required. Execution ID */
    executionId?: string;
    /** Required. Parent (Batch) resource reference. */
    parent?: string;
  };

  export class DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlanError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlanError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (batchesId). */
    batchesId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    /**
     * Optional. Lists/ hides details of Spark plan nodes. True is set to list and false to hide.
     */
    details?: boolean;
    /** Required. Execution ID */
    executionId?: string;
    /** Required. Parent (Batch) resource reference. */
    parent?: string;
    /** Optional. Enables/ disables physical plan description on demand */
    planDescription?: boolean;
  };

  export class DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (batchesId). */
    batchesId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    /** Required. Parent (Batch) resource reference. */
    parent?: string;
    /** Required. Stage Attempt ID */
    stageAttemptId?: number;
    /** Required. Stage ID */
    stageId?: string;
    /**
     * Optional. The list of summary metrics fields to include. Empty list will default to skip all
     * summary metrics fields. Example, if the response should include TaskQuantileMetrics, the
     * request should have task_quantile_metrics in summary_metrics_mask field
     */
    summaryMetricsMask?: string;
  };

  export class DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraphRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (batchesId). */
    batchesId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    /** Required. Parent (Batch) resource reference. */
    parent?: string;
    /** Required. Stage ID */
    stageId?: string;
  };

  export class DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraphError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraphError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (batchesId). */
    batchesId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    /** Required. Spark execution ID for the query. */
    executionId?: string;
    /** Required. Parent (Batch) resource reference. */
    parent?: string;
    /** Required. Spark semantic query ID. */
    semanticQueryId?: string;
  };

  export class DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsLocationsBatchesSparkApplicationsSearchRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (batchesId). */
    batchesId: string;
    /** Optional. Search only applications in the chosen state. */
    applicationStatus?: ApplicationStatus;
    /** Optional. Latest end timestamp to list. */
    maxEndTime?: string;
    /** Optional. Latest start timestamp to list. */
    maxTime?: string;
    /** Optional. Earliest end timestamp to list. */
    minEndTime?: string;
    /** Optional. Earliest start timestamp to list. */
    minTime?: string;
    /**
     * Optional. Maximum number of applications to return in each response. The service may return
     * fewer than this. The default page size is 10; the maximum page size is 100.
     */
    pageSize?: number;
    /**
     * Optional. A page token received from a previous SearchSparkApplications call. Provide this
     * token to retrieve the subsequent page.
     */
    pageToken?: string;
  };

  export class DataprocProjectsLocationsBatchesSparkApplicationsSearchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsBatchesSparkApplicationsSearchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummaryRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (batchesId). */
    batchesId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    /**
     * Optional. Maximum number of executors to return in each response. The service may return
     * fewer than this. The default page size is 10; the maximum page size is 100.
     */
    pageSize?: number;
    /**
     * Optional. A page token received from a previous AccessSparkApplicationExecutorsList call.
     * Provide this token to retrieve the subsequent page.
     */
    pageToken?: string;
    /** Required. Parent (Batch) resource reference. */
    parent?: string;
    /** Required. Stage Attempt ID */
    stageAttemptId?: number;
    /** Required. Stage ID */
    stageId?: string;
  };

  export class DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummaryError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummaryError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorsRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (batchesId). */
    batchesId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    /** Optional. Filter to select whether active/ dead or all executors should be selected. */
    executorStatus?: ExecutorStatus;
    /**
     * Optional. Maximum number of executors to return in each response. The service may return
     * fewer than this. The default page size is 10; the maximum page size is 100.
     */
    pageSize?: number;
    /**
     * Optional. A page token received from a previous AccessSparkApplicationExecutorsList call.
     * Provide this token to retrieve the subsequent page.
     */
    pageToken?: string;
    /** Required. Parent (Batch) resource reference. */
    parent?: string;
  };

  export class DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorsError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsLocationsBatchesSparkApplicationsSearchJobsRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (batchesId). */
    batchesId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    /** Optional. List only jobs in the specific state. */
    jobStatus?: JobStatus2;
    /**
     * Optional. Maximum number of jobs to return in each response. The service may return fewer
     * than this. The default page size is 10; the maximum page size is 100.
     */
    pageSize?: number;
    /**
     * Optional. A page token received from a previous SearchSparkApplicationJobs call. Provide this
     * token to retrieve the subsequent page.
     */
    pageToken?: string;
    /** Required. Parent (Batch) resource reference. */
    parent?: string;
  };

  export class DataprocProjectsLocationsBatchesSparkApplicationsSearchJobsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsBatchesSparkApplicationsSearchJobsError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (batchesId). */
    batchesId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    /**
     * Optional. Maximum number of queries to return in each response. The service may return fewer
     * than this. The default page size is 10; the maximum page size is 100.
     */
    pageSize?: number;
    /**
     * Optional. A page token received from a previous SearchSparkApplicationNativeSqlQueries call.
     * Provide this token to retrieve the subsequent page.
     */
    pageToken?: string;
    /** Required. Parent (Batch) resource reference. */
    parent?: string;
  };

  export class DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueriesRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (batchesId). */
    batchesId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    /**
     * Optional. Lists/ hides details of Spark plan nodes. True is set to list and false to hide.
     */
    details?: boolean;
    /**
     * Optional. Maximum number of queries to return in each response. The service may return fewer
     * than this. The default page size is 10; the maximum page size is 100.
     */
    pageSize?: number;
    /**
     * Optional. A page token received from a previous SearchSparkApplicationSqlQueries call.
     * Provide this token to retrieve the subsequent page.
     */
    pageToken?: string;
    /** Required. Parent (Batch) resource reference. */
    parent?: string;
    /** Optional. Enables/ disables physical plan description on demand */
    planDescription?: boolean;
  };

  export class DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueriesError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueriesError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasksRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (batchesId). */
    batchesId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    /**
     * Optional. Maximum number of tasks to return in each response. The service may return fewer
     * than this. The default page size is 10; the maximum page size is 100.
     */
    pageSize?: number;
    /**
     * Optional. A page token received from a previous ListSparkApplicationStageAttemptTasks call.
     * Provide this token to retrieve the subsequent page.
     */
    pageToken?: string;
    /** Required. Parent (Batch) resource reference. */
    parent?: string;
    /** Optional. Sort the tasks by runtime. */
    sortRuntime?: boolean;
    /** Optional. Stage Attempt ID */
    stageAttemptId?: number;
    /** Optional. Stage ID */
    stageId?: string;
    /** Optional. List only tasks in the state. */
    taskStatus?: TaskStatus;
  };

  export class DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasksError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasksError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptsRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (batchesId). */
    batchesId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    /**
     * Optional. Maximum number of stage attempts (paging based on stage_attempt_id) to return in
     * each response. The service may return fewer than this. The default page size is 10; the
     * maximum page size is 100.
     */
    pageSize?: number;
    /**
     * Optional. A page token received from a previous SearchSparkApplicationStageAttempts call.
     * Provide this token to retrieve the subsequent page.
     */
    pageToken?: string;
    /** Required. Parent (Batch) resource reference. */
    parent?: string;
    /** Required. Stage ID for which attempts are to be fetched */
    stageId?: string;
    /**
     * Optional. The list of summary metrics fields to include. Empty list will default to skip all
     * summary metrics fields. Example, if the response should include TaskQuantileMetrics, the
     * request should have task_quantile_metrics in summary_metrics_mask field
     */
    summaryMetricsMask?: string;
  };

  export class DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptsError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsLocationsBatchesSparkApplicationsSearchStagesRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (batchesId). */
    batchesId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    /**
     * Optional. Maximum number of stages (paging based on stage_id) to return in each response. The
     * service may return fewer than this. The default page size is 10; the maximum page size is
     * 100.
     */
    pageSize?: number;
    /**
     * Optional. A page token received from a previous FetchSparkApplicationStagesList call. Provide
     * this token to retrieve the subsequent page.
     */
    pageToken?: string;
    /** Required. Parent (Batch) resource reference. */
    parent?: string;
    /** Optional. List only stages in the given state. */
    stageStatus?: StageStatus;
    /**
     * Optional. The list of summary metrics fields to include. Empty list will default to skip all
     * summary metrics fields. Example, if the response should include TaskQuantileMetrics, the
     * request should have task_quantile_metrics in summary_metrics_mask field
     */
    summaryMetricsMask?: string;
  };

  export class DataprocProjectsLocationsBatchesSparkApplicationsSearchStagesError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsBatchesSparkApplicationsSearchStagesError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutorsRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (batchesId). */
    batchesId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    /** Required. Parent (Batch) resource reference. */
    parent?: string;
  };

  export class DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutorsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutorsError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobsRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (batchesId). */
    batchesId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    /** Required. Parent (Batch) resource reference. */
    parent?: string;
  };

  export class DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobsError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasksRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (batchesId). */
    batchesId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    /** Required. Parent (Batch) resource reference. */
    parent?: string;
    /** Required. Stage Attempt ID */
    stageAttemptId?: number;
    /** Required. Stage ID */
    stageId?: string;
  };

  export class DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasksError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasksError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStagesRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (batchesId). */
    batchesId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    /** Required. Parent (Batch) resource reference. */
    parent?: string;
  };

  export class DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStagesError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStagesError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsLocationsBatchesSparkApplicationsWriteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (batchesId). */
    batchesId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    body: WriteSparkApplicationContextRequest;
  };

  export class DataprocProjectsLocationsBatchesSparkApplicationsWriteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsBatchesSparkApplicationsWriteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsLocationsOperationsCancelRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (operationsId). */
    operationsId: string;
  };

  export class DataprocProjectsLocationsOperationsCancelError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsOperationsCancelError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsLocationsOperationsDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (operationsId). */
    operationsId: string;
  };

  export class DataprocProjectsLocationsOperationsDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsOperationsDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsLocationsOperationsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (operationsId). */
    operationsId: string;
  };

  export class DataprocProjectsLocationsOperationsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsOperationsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsLocationsOperationsListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** The standard list filter. */
    filter?: string;
    /** The standard list page size. */
    pageSize?: number;
    /** The standard list page token. */
    pageToken?: string;
    /**
     * When set to true, operations that are reachable are returned as normal, and those that are
     * unreachable are returned in the ListOperationsResponse.unreachable field.This can only be
     * true when reading across collections. For example, when parent is set to
     * "projects/example/locations/-".This field is not supported by default and will result in an
     * UNIMPLEMENTED error if set unless explicitly documented otherwise in service or product
     * specific documentation.
     */
    returnPartialSuccess?: boolean;
  };

  export class DataprocProjectsLocationsOperationsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsOperationsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsLocationsSessionTemplatesCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    body: SessionTemplate;
  };

  export class DataprocProjectsLocationsSessionTemplatesCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsSessionTemplatesCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsLocationsSessionTemplatesDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (sessionTemplatesId). */
    sessionTemplatesId: string;
  };

  export class DataprocProjectsLocationsSessionTemplatesDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsSessionTemplatesDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsLocationsSessionTemplatesGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (sessionTemplatesId). */
    sessionTemplatesId: string;
  };

  export class DataprocProjectsLocationsSessionTemplatesGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsSessionTemplatesGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsLocationsSessionTemplatesListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Optional. A filter for the session templates to return in the response. Filters are case
     * sensitive and have the following syntax:field = value AND field = value ...
     */
    filter?: string;
    /**
     * Optional. The maximum number of sessions to return in each response. The service may return
     * fewer than this value.
     */
    pageSize?: number;
    /**
     * Optional. A page token received from a previous ListSessions call. Provide this token to
     * retrieve the subsequent page.
     */
    pageToken?: string;
  };

  export class DataprocProjectsLocationsSessionTemplatesListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsSessionTemplatesListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsLocationsSessionTemplatesPatchRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (sessionTemplatesId). */
    sessionTemplatesId: string;
    body: SessionTemplate;
  };

  export class DataprocProjectsLocationsSessionTemplatesPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsSessionTemplatesPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsLocationsSessionsCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Optional. A unique ID used to identify the request. If the service receives two
     * CreateSessionRequests
     * (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.CreateSessionRequest)s
     * with the same ID, the second request is ignored, and the first Session is created and stored
     * in the backend.Recommendation: Set this value to a UUID
     * (https://en.wikipedia.org/wiki/Universally_unique_identifier).The value must contain only
     * letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40
     * characters.
     */
    requestId?: string;
    /**
     * Required. The ID to use for the session, which becomes the final component of the session's
     * resource name.This value must be 4-63 characters. Valid characters are /a-z-/.
     */
    sessionId?: string;
    body: Session;
  };

  export class DataprocProjectsLocationsSessionsCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsSessionsCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsLocationsSessionsDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (sessionsId). */
    sessionsId: string;
    /**
     * Optional. A unique ID used to identify the request. If the service receives two
     * DeleteSessionRequest
     * (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.DeleteSessionRequest)s
     * with the same ID, the second request is ignored.Recommendation: Set this value to a UUID
     * (https://en.wikipedia.org/wiki/Universally_unique_identifier).The value must contain only
     * letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40
     * characters.
     */
    requestId?: string;
  };

  export class DataprocProjectsLocationsSessionsDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsSessionsDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsLocationsSessionsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (sessionsId). */
    sessionsId: string;
  };

  export class DataprocProjectsLocationsSessionsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsSessionsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsLocationsSessionsListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Optional. A filter for the sessions to return in the response.A filter is a logical
     * expression constraining the values of various fields in each session resource. Filters are
     * case sensitive, and may contain multiple clauses combined with logical operators (AND, OR).
     * Supported fields are session_id, session_uuid, state, create_time, and labels.Example: state
     * = ACTIVE and create_time < "2023-01-01T00:00:00Z" is a filter for sessions in an ACTIVE state
     * that were created before 2023-01-01. state = ACTIVE and labels.environment=production is a
     * filter for sessions in an ACTIVE state that have a production environment label.See
     * https://google.aip.dev/assets/misc/ebnf-filtering.txt for a detailed description of the
     * filter syntax and a list of supported comparators.
     */
    filter?: string;
    /**
     * Optional. The maximum number of sessions to return in each response. The service may return
     * fewer than this value.
     */
    pageSize?: number;
    /**
     * Optional. A page token received from a previous ListSessions call. Provide this token to
     * retrieve the subsequent page.
     */
    pageToken?: string;
  };

  export class DataprocProjectsLocationsSessionsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsSessionsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsLocationsSessionsSparkApplicationsAccessRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (sessionsId). */
    sessionsId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    /** Required. Parent (Session) resource reference. */
    parent?: string;
  };

  export class DataprocProjectsLocationsSessionsSparkApplicationsAccessError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsSessionsSparkApplicationsAccessError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfoRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (sessionsId). */
    sessionsId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    /** Required. Parent (Session) resource reference. */
    parent?: string;
  };

  export class DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfoError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfoError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsLocationsSessionsSparkApplicationsAccessJobRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (sessionsId). */
    sessionsId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    /** Required. Job ID to fetch data for. */
    jobId?: string;
    /** Required. Parent (Session) resource reference. */
    parent?: string;
  };

  export class DataprocProjectsLocationsSessionsSparkApplicationsAccessJobError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsSessionsSparkApplicationsAccessJobError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfoRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (sessionsId). */
    sessionsId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    /** Required. Parent (Session) resource reference. */
    parent?: string;
  };

  export class DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfoError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfoError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQueryRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (sessionsId). */
    sessionsId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    /** Required. Execution ID */
    executionId?: string;
    /** Required. Parent (Session) resource reference. */
    parent?: string;
  };

  export class DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQueryError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQueryError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlanRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (sessionsId). */
    sessionsId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    /** Required. Execution ID */
    executionId?: string;
    /** Required. Parent (Session) resource reference. */
    parent?: string;
  };

  export class DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlanError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlanError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQueryRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (sessionsId). */
    sessionsId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    /**
     * Optional. Lists/ hides details of Spark plan nodes. True is set to list and false to hide.
     */
    details?: boolean;
    /** Required. Execution ID */
    executionId?: string;
    /** Required. Parent (Session) resource reference. */
    parent?: string;
    /** Optional. Enables/ disables physical plan description on demand */
    planDescription?: boolean;
  };

  export class DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQueryError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQueryError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (sessionsId). */
    sessionsId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    /** Required. Parent (Session) resource reference. */
    parent?: string;
    /** Required. Stage Attempt ID */
    stageAttemptId?: number;
    /** Required. Stage ID */
    stageId?: string;
    /**
     * Optional. The list of summary metrics fields to include. Empty list will default to skip all
     * summary metrics fields. Example, if the response should include TaskQuantileMetrics, the
     * request should have task_quantile_metrics in summary_metrics_mask field
     */
    summaryMetricsMask?: string;
  };

  export class DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraphRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (sessionsId). */
    sessionsId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    /** Required. Parent (Session) resource reference. */
    parent?: string;
    /** Required. Stage ID */
    stageId?: string;
  };

  export class DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraphError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraphError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsLocationsSessionsSparkApplicationsSearchRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (sessionsId). */
    sessionsId: string;
    /** Optional. Search only applications in the chosen state. */
    applicationStatus?: ApplicationStatus;
    /** Optional. Latest end timestamp to list. */
    maxEndTime?: string;
    /** Optional. Latest start timestamp to list. */
    maxTime?: string;
    /** Optional. Earliest end timestamp to list. */
    minEndTime?: string;
    /** Optional. Earliest start timestamp to list. */
    minTime?: string;
    /**
     * Optional. Maximum number of applications to return in each response. The service may return
     * fewer than this. The default page size is 10; the maximum page size is 100.
     */
    pageSize?: number;
    /**
     * Optional. A page token received from a previous SearchSessionSparkApplications call. Provide
     * this token to retrieve the subsequent page.
     */
    pageToken?: string;
  };

  export class DataprocProjectsLocationsSessionsSparkApplicationsSearchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsSessionsSparkApplicationsSearchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummaryRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (sessionsId). */
    sessionsId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    /**
     * Optional. Maximum number of executors to return in each response. The service may return
     * fewer than this. The default page size is 10; the maximum page size is 100.
     */
    pageSize?: number;
    /**
     * Optional. A page token received from a previous
     * SearchSessionSparkApplicationExecutorStageSummary call. Provide this token to retrieve the
     * subsequent page.
     */
    pageToken?: string;
    /** Required. Parent (Session) resource reference. */
    parent?: string;
    /** Required. Stage Attempt ID */
    stageAttemptId?: number;
    /** Required. Stage ID */
    stageId?: string;
  };

  export class DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummaryError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummaryError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorsRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (sessionsId). */
    sessionsId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    /** Optional. Filter to select whether active/ dead or all executors should be selected. */
    executorStatus?: ExecutorStatus;
    /**
     * Optional. Maximum number of executors to return in each response. The service may return
     * fewer than this. The default page size is 10; the maximum page size is 100.
     */
    pageSize?: number;
    /**
     * Optional. A page token received from a previous SearchSessionSparkApplicationExecutors call.
     * Provide this token to retrieve the subsequent page.
     */
    pageToken?: string;
    /** Required. Parent (Session) resource reference. */
    parent?: string;
  };

  export class DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorsError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsLocationsSessionsSparkApplicationsSearchJobsRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (sessionsId). */
    sessionsId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    /** Optional. List of Job IDs to filter by if provided. */
    jobIds?: string[];
    /** Optional. List only jobs in the specific state. */
    jobStatus?: JobStatus2;
    /**
     * Optional. Maximum number of jobs to return in each response. The service may return fewer
     * than this. The default page size is 10; the maximum page size is 100.
     */
    pageSize?: number;
    /**
     * Optional. A page token received from a previous SearchSessionSparkApplicationJobs call.
     * Provide this token to retrieve the subsequent page.
     */
    pageToken?: string;
    /** Required. Parent (Session) resource reference. */
    parent?: string;
  };

  export class DataprocProjectsLocationsSessionsSparkApplicationsSearchJobsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsSessionsSparkApplicationsSearchJobsError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueriesRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (sessionsId). */
    sessionsId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    /**
     * Optional. Maximum number of queries to return in each response. The service may return fewer
     * than this. The default page size is 10; the maximum page size is 100.
     */
    pageSize?: number;
    /**
     * Optional. A page token received from a previous SearchSessionSparkApplicationSqlQueries call.
     * Provide this token to retrieve the subsequent page.
     */
    pageToken?: string;
    /** Required. Parent (Session) resource reference. */
    parent?: string;
  };

  export class DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueriesError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueriesError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (sessionsId). */
    sessionsId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    /**
     * Optional. Lists/ hides details of Spark plan nodes. True is set to list and false to hide.
     */
    details?: boolean;
    /** Optional. List of Spark Connect operation IDs to filter by if provided. */
    operationIds?: string[];
    /**
     * Optional. Maximum number of queries to return in each response. The service may return fewer
     * than this. The default page size is 10; the maximum page size is 100.
     */
    pageSize?: number;
    /**
     * Optional. A page token received from a previous SearchSessionSparkApplicationSqlQueries call.
     * Provide this token to retrieve the subsequent page.
     */
    pageToken?: string;
    /** Required. Parent (Session) resource reference. */
    parent?: string;
    /** Optional. Enables/ disables physical plan description on demand */
    planDescription?: boolean;
  };

  export class DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (sessionsId). */
    sessionsId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    /**
     * Optional. Maximum number of tasks to return in each response. The service may return fewer
     * than this. The default page size is 10; the maximum page size is 100.
     */
    pageSize?: number;
    /**
     * Optional. A page token received from a previous
     * SearchSessionSparkApplicationStageAttemptTasks call. Provide this token to retrieve the
     * subsequent page.
     */
    pageToken?: string;
    /** Required. Parent (Session) resource reference. */
    parent?: string;
    /** Optional. Sort the tasks by runtime. */
    sortRuntime?: boolean;
    /** Optional. Stage Attempt ID */
    stageAttemptId?: number;
    /** Optional. Stage ID */
    stageId?: string;
    /** Optional. List only tasks in the state. */
    taskStatus?: TaskStatus;
  };

  export class DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptsRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (sessionsId). */
    sessionsId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    /**
     * Optional. Maximum number of stage attempts (paging based on stage_attempt_id) to return in
     * each response. The service may return fewer than this. The default page size is 10; the
     * maximum page size is 100.
     */
    pageSize?: number;
    /**
     * Optional. A page token received from a previous SearchSessionSparkApplicationStageAttempts
     * call. Provide this token to retrieve the subsequent page.
     */
    pageToken?: string;
    /** Required. Parent (Session) resource reference. */
    parent?: string;
    /** Required. Stage ID for which attempts are to be fetched */
    stageId?: string;
    /**
     * Optional. The list of summary metrics fields to include. Empty list will default to skip all
     * summary metrics fields. Example, if the response should include TaskQuantileMetrics, the
     * request should have task_quantile_metrics in summary_metrics_mask field
     */
    summaryMetricsMask?: string;
  };

  export class DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptsError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (sessionsId). */
    sessionsId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    /**
     * Optional. Maximum number of stages (paging based on stage_id) to return in each response. The
     * service may return fewer than this. The default page size is 10; the maximum page size is
     * 100.
     */
    pageSize?: number;
    /**
     * Optional. A page token received from a previous SearchSessionSparkApplicationStages call.
     * Provide this token to retrieve the subsequent page.
     */
    pageToken?: string;
    /** Required. Parent (Session) resource reference. */
    parent?: string;
    /** Optional. List of Stage IDs to filter by if provided. */
    stageIds?: string[];
    /** Optional. List only stages in the given state. */
    stageStatus?: StageStatus;
    /**
     * Optional. The list of summary metrics fields to include. Empty list will default to skip all
     * summary metrics fields. Example, if the response should include TaskQuantileMetrics, the
     * request should have task_quantile_metrics in summary_metrics_mask field
     */
    summaryMetricsMask?: string;
  };

  export class DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutorsRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (sessionsId). */
    sessionsId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    /** Required. Parent (Session) resource reference. */
    parent?: string;
  };

  export class DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutorsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutorsError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (sessionsId). */
    sessionsId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    /** Optional. List of Job IDs to filter by if provided. */
    jobIds?: string[];
    /** Required. Parent (Session) resource reference. */
    parent?: string;
  };

  export class DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasksRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (sessionsId). */
    sessionsId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    /** Required. Parent (Session) resource reference. */
    parent?: string;
    /** Required. Stage Attempt ID */
    stageAttemptId?: number;
    /** Required. Stage ID */
    stageId?: string;
  };

  export class DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasksError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasksError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStagesRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (sessionsId). */
    sessionsId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    /** Required. Parent (Session) resource reference. */
    parent?: string;
    /** Optional. List of Stage IDs to filter by if provided. */
    stageIds?: string[];
  };

  export class DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStagesError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStagesError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsLocationsSessionsSparkApplicationsWriteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (sessionsId). */
    sessionsId: string;
    /** Resource name segment (sparkApplicationsId). */
    sparkApplicationsId: string;
    body: WriteSessionSparkApplicationContextRequest;
  };

  export class DataprocProjectsLocationsSessionsSparkApplicationsWriteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsSessionsSparkApplicationsWriteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsLocationsSessionsTerminateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (sessionsId). */
    sessionsId: string;
    body: TerminateSessionRequest;
  };

  export class DataprocProjectsLocationsSessionsTerminateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsSessionsTerminateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsLocationsWorkflowTemplatesCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    body: WorkflowTemplate;
  };

  export class DataprocProjectsLocationsWorkflowTemplatesCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsWorkflowTemplatesCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsLocationsWorkflowTemplatesDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (workflowTemplatesId). */
    workflowTemplatesId: string;
    /**
     * Optional. The version of workflow template to delete. If specified, will only delete the
     * template if the current server version matches specified version.
     */
    version?: number;
  };

  export class DataprocProjectsLocationsWorkflowTemplatesDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsWorkflowTemplatesDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsLocationsWorkflowTemplatesGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (workflowTemplatesId). */
    workflowTemplatesId: string;
    /**
     * Optional. The version of workflow template to retrieve. Only previously instantiated versions
     * can be retrieved.If unspecified, retrieves the current version.
     */
    version?: number;
  };

  export class DataprocProjectsLocationsWorkflowTemplatesGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsWorkflowTemplatesGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsLocationsWorkflowTemplatesGetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (workflowTemplatesId). */
    workflowTemplatesId: string;
    body: GetIamPolicyRequest;
  };

  export class DataprocProjectsLocationsWorkflowTemplatesGetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsWorkflowTemplatesGetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsLocationsWorkflowTemplatesInstantiateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (workflowTemplatesId). */
    workflowTemplatesId: string;
    body: InstantiateWorkflowTemplateRequest;
  };

  export class DataprocProjectsLocationsWorkflowTemplatesInstantiateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsWorkflowTemplatesInstantiateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsLocationsWorkflowTemplatesInstantiateInlineRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Optional. A tag that prevents multiple concurrent workflow instances with the same tag from
     * running. This mitigates risk of concurrent instances started due to retries.It is recommended
     * to always set this value to a UUID
     * (https://en.wikipedia.org/wiki/Universally_unique_identifier).The tag must contain only
     * letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40
     * characters.
     */
    requestId?: string;
    body: WorkflowTemplate;
  };

  export class DataprocProjectsLocationsWorkflowTemplatesInstantiateInlineError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsWorkflowTemplatesInstantiateInlineError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsLocationsWorkflowTemplatesListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Optional. The maximum number of results to return in each response. */
    pageSize?: number;
    /**
     * Optional. The page token, returned by a previous call, to request the next page of results.
     */
    pageToken?: string;
  };

  export class DataprocProjectsLocationsWorkflowTemplatesListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsWorkflowTemplatesListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsLocationsWorkflowTemplatesSetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (workflowTemplatesId). */
    workflowTemplatesId: string;
    body: SetIamPolicyRequest;
  };

  export class DataprocProjectsLocationsWorkflowTemplatesSetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsWorkflowTemplatesSetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsLocationsWorkflowTemplatesTestIamPermissionsRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (workflowTemplatesId). */
    workflowTemplatesId: string;
    body: TestIamPermissionsRequest;
  };

  export class DataprocProjectsLocationsWorkflowTemplatesTestIamPermissionsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsWorkflowTemplatesTestIamPermissionsError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsLocationsWorkflowTemplatesUpdateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (workflowTemplatesId). */
    workflowTemplatesId: string;
    body: WorkflowTemplate;
  };

  export class DataprocProjectsLocationsWorkflowTemplatesUpdateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsLocationsWorkflowTemplatesUpdateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsAutoscalingPoliciesCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (regionsId). */
    regionsId: string;
    body: AutoscalingPolicy;
  };

  export class DataprocProjectsRegionsAutoscalingPoliciesCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsAutoscalingPoliciesCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsAutoscalingPoliciesDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (regionsId). */
    regionsId: string;
    /** Resource name segment (autoscalingPoliciesId). */
    autoscalingPoliciesId: string;
  };

  export class DataprocProjectsRegionsAutoscalingPoliciesDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsAutoscalingPoliciesDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsAutoscalingPoliciesGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (regionsId). */
    regionsId: string;
    /** Resource name segment (autoscalingPoliciesId). */
    autoscalingPoliciesId: string;
  };

  export class DataprocProjectsRegionsAutoscalingPoliciesGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsAutoscalingPoliciesGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (regionsId). */
    regionsId: string;
    /** Resource name segment (autoscalingPoliciesId). */
    autoscalingPoliciesId: string;
    body: GetIamPolicyRequest;
  };

  export class DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsAutoscalingPoliciesListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (regionsId). */
    regionsId: string;
    /**
     * Optional. The maximum number of results to return in each response. Must be less than or
     * equal to 1000. Defaults to 100.
     */
    pageSize?: number;
    /**
     * Optional. The page token, returned by a previous call, to request the next page of results.
     */
    pageToken?: string;
  };

  export class DataprocProjectsRegionsAutoscalingPoliciesListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsAutoscalingPoliciesListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (regionsId). */
    regionsId: string;
    /** Resource name segment (autoscalingPoliciesId). */
    autoscalingPoliciesId: string;
    body: SetIamPolicyRequest;
  };

  export class DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (regionsId). */
    regionsId: string;
    /** Resource name segment (autoscalingPoliciesId). */
    autoscalingPoliciesId: string;
    body: TestIamPermissionsRequest;
  };

  export class DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type DataprocProjectsRegionsAutoscalingPoliciesUpdateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (regionsId). */
    regionsId: string;
    /** Resource name segment (autoscalingPoliciesId). */
    autoscalingPoliciesId: string;
    body: AutoscalingPolicy;
  };

  export class DataprocProjectsRegionsAutoscalingPoliciesUpdateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsAutoscalingPoliciesUpdateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsClustersCreateRequest = {
    /** Required. The ID of the Google Cloud Platform project that the cluster belongs to. */
    projectId: string;
    /** Required. The region in which to handle the request. */
    region: string;
    /** Optional. Failure action when primary worker creation fails. */
    actionOnFailedPrimaryWorkers?: ActionOnFailedPrimaryWorkers;
    /**
     * Optional. A unique ID used to identify the request. If the server receives two
     * CreateClusterRequest
     * (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.CreateClusterRequest)s
     * with the same id, then the second request will be ignored and the first
     * google.longrunning.Operation created and stored in the backend is returned.It is recommended
     * to always set this value to a UUID
     * (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only
     * letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40
     * characters.
     */
    requestId?: string;
    body: Cluster;
  };

  export class DataprocProjectsRegionsClustersCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsClustersCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsClustersDeleteRequest = {
    /** Required. The ID of the Google Cloud Platform project that the cluster belongs to. */
    projectId: string;
    /** Required. The region in which to handle the request. */
    region: string;
    /** Required. The cluster name. */
    clusterName: string;
    /**
     * Optional. Specifying the cluster_uuid means the RPC should fail (with error NOT_FOUND) if
     * cluster with specified UUID does not exist.
     */
    clusterUuid?: string;
    /**
     * Optional. The graceful termination timeout for the deletion of the cluster. Indicate the time
     * the request will wait to complete the running jobs on the cluster before its forceful
     * deletion. Default value is 0 indicating that the user has not enabled the graceful
     * termination. Value can be between 60 second and 6 Hours, in case the graceful termination is
     * enabled. (There is no separate flag to check the enabling or disabling of graceful
     * termination, it can be checked by the values in the field).
     */
    gracefulTerminationTimeout?: string;
    /**
     * Optional. A unique ID used to identify the request. If the server receives two
     * DeleteClusterRequest
     * (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.DeleteClusterRequest)s
     * with the same id, then the second request will be ignored and the first
     * google.longrunning.Operation created and stored in the backend is returned.It is recommended
     * to always set this value to a UUID
     * (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only
     * letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40
     * characters.
     */
    requestId?: string;
  };

  export class DataprocProjectsRegionsClustersDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsClustersDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsClustersDiagnoseRequest = {
    /** Required. The ID of the Google Cloud Platform project that the cluster belongs to. */
    projectId: string;
    /** Required. The region in which to handle the request. */
    region: string;
    /** Required. The cluster name. */
    clusterName: string;
    body: DiagnoseClusterRequest;
  };

  export class DataprocProjectsRegionsClustersDiagnoseError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsClustersDiagnoseError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsClustersGetRequest = {
    /** Required. The ID of the Google Cloud Platform project that the cluster belongs to. */
    projectId: string;
    /** Required. The region in which to handle the request. */
    region: string;
    /** Required. The cluster name. */
    clusterName: string;
  };

  export class DataprocProjectsRegionsClustersGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsClustersGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsClustersGetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (regionsId). */
    regionsId: string;
    /** Resource name segment (clustersId). */
    clustersId: string;
    body: GetIamPolicyRequest;
  };

  export class DataprocProjectsRegionsClustersGetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsClustersGetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsClustersInjectCredentialsRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (regionsId). */
    regionsId: string;
    /** Resource name segment (clustersId). */
    clustersId: string;
    body: InjectCredentialsRequest;
  };

  export class DataprocProjectsRegionsClustersInjectCredentialsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsClustersInjectCredentialsError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsClustersListRequest = {
    /** Required. The ID of the Google Cloud Platform project that the cluster belongs to. */
    projectId: string;
    /** Required. The region in which to handle the request. */
    region: string;
    /**
     * Optional. A filter constraining the clusters to list. Filters are case-sensitive and have the
     * following syntax:field = value AND field = value ...where field is one of status.state,
     * clusterName, or labels.[KEY], and [KEY] is a label key. value can be "*" to match all values.
     * status.state can be one of the following: ACTIVE, INACTIVE, CREATING, RUNNING, ERROR,
     * DELETING, UPDATING, STOPPING, or STOPPED. ACTIVE contains the CREATING, UPDATING, and RUNNING
     * states. INACTIVE contains the DELETING, ERROR, STOPPING, and STOPPED states. clusterName is
     * the name of the cluster provided at creation time. Only the logical AND operator is
     * supported; space-separated items are treated as having an implicit AND operator.Example
     * filter:status.state = ACTIVE AND clusterName = mycluster AND labels.env = staging AND
     * labels.starred = *
     */
    filter?: string;
    /**
     * Optional. The maximum number of clusters to return in each response. The service may return
     * fewer than this value. If unspecified, the default value is 200. The maximum value is 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token received from a previous ListClusters call. Provide this token to
     * retrieve the subsequent page.
     */
    pageToken?: string;
  };

  export class DataprocProjectsRegionsClustersListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsClustersListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsClustersNodeGroupsCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (regionsId). */
    regionsId: string;
    /** Resource name segment (clustersId). */
    clustersId: string;
    /**
     * Optional. An optional node group ID. Generated if not specified.The ID must contain only
     * letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with
     * underscore or hyphen. Must consist of from 3 to 33 characters.
     */
    nodeGroupId?: string;
    /** Optional. operation id of the parent operation sending the create request */
    parentOperationId?: string;
    /**
     * Optional. A unique ID used to identify the request. If the server receives two
     * CreateNodeGroupRequest
     * (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.CreateNodeGroupRequest)
     * with the same ID, the second request is ignored and the first google.longrunning.Operation
     * created and stored in the backend is returned.Recommendation: Set this value to a UUID
     * (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only
     * letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40
     * characters.
     */
    requestId?: string;
    body: NodeGroup;
  };

  export class DataprocProjectsRegionsClustersNodeGroupsCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsClustersNodeGroupsCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsClustersNodeGroupsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (regionsId). */
    regionsId: string;
    /** Resource name segment (clustersId). */
    clustersId: string;
    /** Resource name segment (nodeGroupsId). */
    nodeGroupsId: string;
  };

  export class DataprocProjectsRegionsClustersNodeGroupsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsClustersNodeGroupsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsClustersNodeGroupsRepairRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (regionsId). */
    regionsId: string;
    /** Resource name segment (clustersId). */
    clustersId: string;
    /** Resource name segment (nodeGroupsId). */
    nodeGroupsId: string;
    body: RepairNodeGroupRequest;
  };

  export class DataprocProjectsRegionsClustersNodeGroupsRepairError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsClustersNodeGroupsRepairError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsClustersNodeGroupsResizeRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (regionsId). */
    regionsId: string;
    /** Resource name segment (clustersId). */
    clustersId: string;
    /** Resource name segment (nodeGroupsId). */
    nodeGroupsId: string;
    body: ResizeNodeGroupRequest;
  };

  export class DataprocProjectsRegionsClustersNodeGroupsResizeError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsClustersNodeGroupsResizeError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsClustersPatchRequest = {
    /** Required. The ID of the Google Cloud Platform project the cluster belongs to. */
    projectId: string;
    /** Required. The region in which to handle the request. */
    region: string;
    /** Required. The cluster name. */
    clusterName: string;
    /**
     * Optional. Timeout for graceful YARN decommissioning. Graceful decommissioning allows removing
     * nodes from the cluster without interrupting jobs in progress. Timeout specifies how long to
     * wait for jobs in progress to finish before forcefully removing nodes (and potentially
     * interrupting jobs). Default timeout is 0 (for forceful decommission), and the maximum allowed
     * timeout is 1 day. (see JSON representation of Duration
     * (https://developers.google.com/protocol-buffers/docs/proto3#json)).Supported in image
     * versions 1.2 and higher.
     */
    gracefulDecommissionTimeout?: string;
    /**
     * Optional. A unique ID used to identify the request. If the server receives two
     * UpdateClusterRequest
     * (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.UpdateClusterRequest)s
     * with the same id, then the second request will be ignored and the first
     * google.longrunning.Operation created and stored in the backend is returned.It is recommended
     * to always set this value to a UUID
     * (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only
     * letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40
     * characters.
     */
    requestId?: string;
    /**
     * Required. Specifies the path, relative to Cluster, of the field to update. For example, to
     * change the number of workers in a cluster to 5, the update_mask parameter would be specified
     * as config.worker_config.num_instances, and the PATCH request body would specify the new
     * value, as follows: { "config":{ "workerConfig":{ "numInstances":"5" } } } Similarly, to
     * change the number of preemptible workers in a cluster to 5, the update_mask parameter would
     * be config.secondary_worker_config.num_instances, and the PATCH request body would be set as
     * follows: { "config":{ "secondaryWorkerConfig":{ "numInstances":"5" } } } *Note:* Currently,
     * only the following fields can be updated: *Mask* *Purpose* *labels* Update labels
     * *config.worker_config.num_instances* Resize primary worker group
     * *config.secondary_worker_config.num_instances* Resize secondary worker group
     * config.autoscaling_config.policy_uri Use, stop using, or change autoscaling policies
     */
    updateMask?: string;
    body: Cluster;
  };

  export class DataprocProjectsRegionsClustersPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsClustersPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsClustersRepairRequest = {
    /** Required. The ID of the Google Cloud Platform project the cluster belongs to. */
    projectId: string;
    /** Required. The region in which to handle the request. */
    region: string;
    /** Required. The cluster name. */
    clusterName: string;
    body: RepairClusterRequest;
  };

  export class DataprocProjectsRegionsClustersRepairError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsClustersRepairError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsClustersSetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (regionsId). */
    regionsId: string;
    /** Resource name segment (clustersId). */
    clustersId: string;
    body: SetIamPolicyRequest;
  };

  export class DataprocProjectsRegionsClustersSetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsClustersSetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsClustersStartRequest = {
    /** Required. The ID of the Google Cloud Platform project the cluster belongs to. */
    projectId: string;
    /** Required. The region in which to handle the request. */
    region: string;
    /** Required. The cluster name. */
    clusterName: string;
    body: StartClusterRequest;
  };

  export class DataprocProjectsRegionsClustersStartError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsClustersStartError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsClustersStopRequest = {
    /** Required. The ID of the Google Cloud Platform project the cluster belongs to. */
    projectId: string;
    /** Required. The region in which to handle the request. */
    region: string;
    /** Required. The cluster name. */
    clusterName: string;
    body: StopClusterRequest;
  };

  export class DataprocProjectsRegionsClustersStopError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsClustersStopError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsClustersTestIamPermissionsRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (regionsId). */
    regionsId: string;
    /** Resource name segment (clustersId). */
    clustersId: string;
    body: TestIamPermissionsRequest;
  };

  export class DataprocProjectsRegionsClustersTestIamPermissionsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsClustersTestIamPermissionsError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsJobsCancelRequest = {
    /** Required. The ID of the Google Cloud Platform project that the job belongs to. */
    projectId: string;
    /** Required. The Dataproc region in which to handle the request. */
    region: string;
    /** Required. The job ID. */
    jobId: string;
    body: Record<string, unknown>;
  };

  export class DataprocProjectsRegionsJobsCancelError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsJobsCancelError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsJobsDeleteRequest = {
    /** Required. The ID of the Google Cloud Platform project that the job belongs to. */
    projectId: string;
    /** Required. The Dataproc region in which to handle the request. */
    region: string;
    /** Required. The job ID. */
    jobId: string;
  };

  export class DataprocProjectsRegionsJobsDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsJobsDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsJobsGetRequest = {
    /** Required. The ID of the Google Cloud Platform project that the job belongs to. */
    projectId: string;
    /** Required. The Dataproc region in which to handle the request. */
    region: string;
    /** Required. The job ID. */
    jobId: string;
  };

  export class DataprocProjectsRegionsJobsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsJobsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsJobsGetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (regionsId). */
    regionsId: string;
    /** Resource name segment (jobsId). */
    jobsId: string;
    body: GetIamPolicyRequest;
  };

  export class DataprocProjectsRegionsJobsGetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsJobsGetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsJobsListRequest = {
    /** Required. The ID of the Google Cloud Platform project that the job belongs to. */
    projectId: string;
    /** Required. The Dataproc region in which to handle the request. */
    region: string;
    /**
     * Optional. If set, the returned jobs list includes only jobs that were submitted to the named
     * cluster.
     */
    clusterName?: string;
    /**
     * Optional. A filter constraining the jobs to list. Filters are case-sensitive and have the
     * following syntax:field = value AND field = value ...where field is status.state or
     * insertTime, or labels.[KEY], and [KEY] is a label key. value can be * to match all values.
     * status.state can be either ACTIVE or NON_ACTIVE. Allows insertTime to be a timestamp in RFC
     * 3339 format in double quotes, such as 2025-01-01T00:00:00Z. Only the logical AND operator is
     * supported; space-separated items are treated as having an implicit AND operator.Example
     * filter:status.state = ACTIVE AND labels.env = staging AND labels.starred = * AND insertTime
     * <= "2025-01-01T00:00:00Z"
     */
    filter?: string;
    /**
     * Optional. Specifies enumerated categories of jobs to list. (default = match ALL jobs).If
     * filter is provided, jobStateMatcher will be ignored.
     */
    jobStateMatcher?: JobStateMatcher;
    /** Optional. The number of results to return in each response. */
    pageSize?: number;
    /**
     * Optional. The page token, returned by a previous call, to request the next page of results.
     */
    pageToken?: string;
  };

  export class DataprocProjectsRegionsJobsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsJobsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsJobsPatchRequest = {
    /** Required. The ID of the Google Cloud Platform project that the job belongs to. */
    projectId: string;
    /** Required. The Dataproc region in which to handle the request. */
    region: string;
    /** Required. The job ID. */
    jobId: string;
    /**
     * Required. Specifies the path, relative to Job, of the field to update. For example, to update
     * the labels of a Job the update_mask parameter would be specified as labels, and the PATCH
     * request body would specify the new value. *Note:* Currently, labels is the only field that
     * can be updated.
     */
    updateMask?: string;
    body: Job;
  };

  export class DataprocProjectsRegionsJobsPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsJobsPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsJobsSetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (regionsId). */
    regionsId: string;
    /** Resource name segment (jobsId). */
    jobsId: string;
    body: SetIamPolicyRequest;
  };

  export class DataprocProjectsRegionsJobsSetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsJobsSetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsJobsSubmitRequest = {
    /** Required. The ID of the Google Cloud Platform project that the job belongs to. */
    projectId: string;
    /** Required. The Dataproc region in which to handle the request. */
    region: string;
    body: SubmitJobRequest;
  };

  export class DataprocProjectsRegionsJobsSubmitError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsJobsSubmitError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsJobsSubmitAsOperationRequest = {
    /** Required. The ID of the Google Cloud Platform project that the job belongs to. */
    projectId: string;
    /** Required. The Dataproc region in which to handle the request. */
    region: string;
    body: SubmitJobRequest;
  };

  export class DataprocProjectsRegionsJobsSubmitAsOperationError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsJobsSubmitAsOperationError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsJobsTestIamPermissionsRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (regionsId). */
    regionsId: string;
    /** Resource name segment (jobsId). */
    jobsId: string;
    body: TestIamPermissionsRequest;
  };

  export class DataprocProjectsRegionsJobsTestIamPermissionsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsJobsTestIamPermissionsError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsOperationsCancelRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (regionsId). */
    regionsId: string;
    /** Resource name segment (operationsId). */
    operationsId: string;
  };

  export class DataprocProjectsRegionsOperationsCancelError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsOperationsCancelError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsOperationsDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (regionsId). */
    regionsId: string;
    /** Resource name segment (operationsId). */
    operationsId: string;
  };

  export class DataprocProjectsRegionsOperationsDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsOperationsDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsOperationsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (regionsId). */
    regionsId: string;
    /** Resource name segment (operationsId). */
    operationsId: string;
  };

  export class DataprocProjectsRegionsOperationsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsOperationsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsOperationsGetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (regionsId). */
    regionsId: string;
    /** Resource name segment (operationsId). */
    operationsId: string;
    body: GetIamPolicyRequest;
  };

  export class DataprocProjectsRegionsOperationsGetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsOperationsGetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsOperationsListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (regionsId). */
    regionsId: string;
    /** The standard list filter. */
    filter?: string;
    /** The standard list page size. */
    pageSize?: number;
    /** The standard list page token. */
    pageToken?: string;
    /**
     * When set to true, operations that are reachable are returned as normal, and those that are
     * unreachable are returned in the ListOperationsResponse.unreachable field.This can only be
     * true when reading across collections. For example, when parent is set to
     * "projects/example/locations/-".This field is not supported by default and will result in an
     * UNIMPLEMENTED error if set unless explicitly documented otherwise in service or product
     * specific documentation.
     */
    returnPartialSuccess?: boolean;
  };

  export class DataprocProjectsRegionsOperationsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsOperationsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsOperationsSetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (regionsId). */
    regionsId: string;
    /** Resource name segment (operationsId). */
    operationsId: string;
    body: SetIamPolicyRequest;
  };

  export class DataprocProjectsRegionsOperationsSetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsOperationsSetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsOperationsTestIamPermissionsRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (regionsId). */
    regionsId: string;
    /** Resource name segment (operationsId). */
    operationsId: string;
    body: TestIamPermissionsRequest;
  };

  export class DataprocProjectsRegionsOperationsTestIamPermissionsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsOperationsTestIamPermissionsError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsWorkflowTemplatesCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (regionsId). */
    regionsId: string;
    body: WorkflowTemplate;
  };

  export class DataprocProjectsRegionsWorkflowTemplatesCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsWorkflowTemplatesCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsWorkflowTemplatesDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (regionsId). */
    regionsId: string;
    /** Resource name segment (workflowTemplatesId). */
    workflowTemplatesId: string;
    /**
     * Optional. The version of workflow template to delete. If specified, will only delete the
     * template if the current server version matches specified version.
     */
    version?: number;
  };

  export class DataprocProjectsRegionsWorkflowTemplatesDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsWorkflowTemplatesDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsWorkflowTemplatesGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (regionsId). */
    regionsId: string;
    /** Resource name segment (workflowTemplatesId). */
    workflowTemplatesId: string;
    /**
     * Optional. The version of workflow template to retrieve. Only previously instantiated versions
     * can be retrieved.If unspecified, retrieves the current version.
     */
    version?: number;
  };

  export class DataprocProjectsRegionsWorkflowTemplatesGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsWorkflowTemplatesGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (regionsId). */
    regionsId: string;
    /** Resource name segment (workflowTemplatesId). */
    workflowTemplatesId: string;
    body: GetIamPolicyRequest;
  };

  export class DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsWorkflowTemplatesInstantiateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (regionsId). */
    regionsId: string;
    /** Resource name segment (workflowTemplatesId). */
    workflowTemplatesId: string;
    body: InstantiateWorkflowTemplateRequest;
  };

  export class DataprocProjectsRegionsWorkflowTemplatesInstantiateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsWorkflowTemplatesInstantiateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (regionsId). */
    regionsId: string;
    /**
     * Optional. A tag that prevents multiple concurrent workflow instances with the same tag from
     * running. This mitigates risk of concurrent instances started due to retries.It is recommended
     * to always set this value to a UUID
     * (https://en.wikipedia.org/wiki/Universally_unique_identifier).The tag must contain only
     * letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40
     * characters.
     */
    requestId?: string;
    body: WorkflowTemplate;
  };

  export class DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsWorkflowTemplatesListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (regionsId). */
    regionsId: string;
    /** Optional. The maximum number of results to return in each response. */
    pageSize?: number;
    /**
     * Optional. The page token, returned by a previous call, to request the next page of results.
     */
    pageToken?: string;
  };

  export class DataprocProjectsRegionsWorkflowTemplatesListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsWorkflowTemplatesListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (regionsId). */
    regionsId: string;
    /** Resource name segment (workflowTemplatesId). */
    workflowTemplatesId: string;
    body: SetIamPolicyRequest;
  };

  export class DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (regionsId). */
    regionsId: string;
    /** Resource name segment (workflowTemplatesId). */
    workflowTemplatesId: string;
    body: TestIamPermissionsRequest;
  };

  export class DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type DataprocProjectsRegionsWorkflowTemplatesUpdateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (regionsId). */
    regionsId: string;
    /** Resource name segment (workflowTemplatesId). */
    workflowTemplatesId: string;
    body: WorkflowTemplate;
  };

  export class DataprocProjectsRegionsWorkflowTemplatesUpdateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<DataprocProjectsRegionsWorkflowTemplatesUpdateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type MetastoreProjectsLocationsFederationsCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Required. The ID of the metastore federation, which is used as the final component of the
     * metastore federation's name.This value must be between 2 and 63 characters long inclusive,
     * begin with a letter, end with a letter or number, and consist of alpha-numeric ASCII
     * characters or hyphens.
     */
    federationId?: string;
    /**
     * Optional. A request ID. Specify a unique request ID to allow the server to ignore the request
     * if it has completed. The server will ignore subsequent requests that provide a duplicate
     * request ID for at least 60 minutes after the first request.For example, if an initial request
     * times out, followed by another request with the same request ID, the server ignores the
     * second request to prevent the creation of duplicate commitments.The request ID must be a
     * valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID
     * (00000000-0000-0000-0000-000000000000) is not supported.
     */
    requestId?: string;
    body: Federation;
  };

  export class MetastoreProjectsLocationsFederationsCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsFederationsCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type MetastoreProjectsLocationsFederationsDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (federationsId). */
    federationsId: string;
    /**
     * Optional. A request ID. Specify a unique request ID to allow the server to ignore the request
     * if it has completed. The server will ignore subsequent requests that provide a duplicate
     * request ID for at least 60 minutes after the first request.For example, if an initial request
     * times out, followed by another request with the same request ID, the server ignores the
     * second request to prevent the creation of duplicate commitments.The request ID must be a
     * valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID
     * (00000000-0000-0000-0000-000000000000) is not supported.
     */
    requestId?: string;
  };

  export class MetastoreProjectsLocationsFederationsDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsFederationsDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type MetastoreProjectsLocationsFederationsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (federationsId). */
    federationsId: string;
  };

  export class MetastoreProjectsLocationsFederationsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsFederationsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type MetastoreProjectsLocationsFederationsGetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (federationsId). */
    federationsId: string;
    /**
     * Optional. The maximum policy version that will be used to format the policy.Valid values are
     * 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with
     * any conditional role bindings must specify version 3. Policies with no conditional role
     * bindings may specify any valid value or leave the field unset.The policy in the response
     * might use the policy version that you specified, or it might use a lower policy version. For
     * example, if you specify version 3, but the policy has no conditional role bindings, the
     * response uses version 1.To learn which resources support conditions in their IAM policies,
     * see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    optionsRequestedPolicyVersion?: number;
  };

  export class MetastoreProjectsLocationsFederationsGetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsFederationsGetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type MetastoreProjectsLocationsFederationsListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Optional. The filter to apply to list results. */
    filter?: string;
    /**
     * Optional. Specify the ordering of results as described in Sorting Order
     * (https://cloud.google.com/apis/design/design_patterns#sorting_order). If not specified, the
     * results will be sorted in the default order.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of federations to return. The response may contain less than the
     * maximum number. If unspecified, no more than 500 services are returned. The maximum value is
     * 1000; values above 1000 are changed to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous ListFederationServices call. Provide this
     * token to retrieve the subsequent page.To retrieve the first page, supply an empty page
     * token.When paginating, other parameters provided to ListFederationServices must match the
     * call that provided the page token.
     */
    pageToken?: string;
  };

  export class MetastoreProjectsLocationsFederationsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsFederationsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type MetastoreProjectsLocationsFederationsPatchRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (federationsId). */
    federationsId: string;
    /**
     * Optional. A request ID. Specify a unique request ID to allow the server to ignore the request
     * if it has completed. The server will ignore subsequent requests that provide a duplicate
     * request ID for at least 60 minutes after the first request.For example, if an initial request
     * times out, followed by another request with the same request ID, the server ignores the
     * second request to prevent the creation of duplicate commitments.The request ID must be a
     * valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID
     * (00000000-0000-0000-0000-000000000000) is not supported.
     */
    requestId?: string;
    /**
     * Required. A field mask used to specify the fields to be overwritten in the metastore
     * federation resource by the update. Fields specified in the update_mask are relative to the
     * resource (not to the full request). A field is overwritten if it is in the mask.
     */
    updateMask?: string;
    body: Federation;
  };

  export class MetastoreProjectsLocationsFederationsPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsFederationsPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type MetastoreProjectsLocationsFederationsSetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (federationsId). */
    federationsId: string;
    body: SetIamPolicyRequest2;
  };

  export class MetastoreProjectsLocationsFederationsSetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsFederationsSetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type MetastoreProjectsLocationsFederationsTestIamPermissionsRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (federationsId). */
    federationsId: string;
    body: TestIamPermissionsRequest;
  };

  export class MetastoreProjectsLocationsFederationsTestIamPermissionsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsFederationsTestIamPermissionsError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type MetastoreProjectsLocationsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
  };

  export class MetastoreProjectsLocationsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type MetastoreProjectsLocationsListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /**
     * Optional. Do not use this field unless explicitly documented otherwise. This is primarily for
     * internal usage.
     */
    extraLocationTypes?: string[];
    /**
     * A filter to narrow down results to a preferred subset. The filtering language accepts strings
     * like "displayName=tokyo", and is documented in more detail in AIP-160
     * (https://google.aip.dev/160).
     */
    filter?: string;
    /** The maximum number of results to return. If not set, the service selects a default. */
    pageSize?: number;
    /**
     * A page token received from the next_page_token field in the response. Send that page token to
     * receive the subsequent page.
     */
    pageToken?: string;
  };

  export class MetastoreProjectsLocationsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type MetastoreProjectsLocationsServicesAlterLocationRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (servicesId). */
    servicesId: string;
    body: AlterMetadataResourceLocationRequest;
  };

  export class MetastoreProjectsLocationsServicesAlterLocationError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsServicesAlterLocationError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type MetastoreProjectsLocationsServicesAlterTablePropertiesRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (servicesId). */
    servicesId: string;
    body: AlterTablePropertiesRequest;
  };

  export class MetastoreProjectsLocationsServicesAlterTablePropertiesError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsServicesAlterTablePropertiesError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type MetastoreProjectsLocationsServicesBackupsCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (servicesId). */
    servicesId: string;
    /**
     * Required. The ID of the backup, which is used as the final component of the backup's
     * name.This value must be between 1 and 64 characters long, begin with a letter, end with a
     * letter or number, and consist of alpha-numeric ASCII characters or hyphens.
     */
    backupId?: string;
    /**
     * Optional. A request ID. Specify a unique request ID to allow the server to ignore the request
     * if it has completed. The server will ignore subsequent requests that provide a duplicate
     * request ID for at least 60 minutes after the first request.For example, if an initial request
     * times out, followed by another request with the same request ID, the server ignores the
     * second request to prevent the creation of duplicate commitments.The request ID must be a
     * valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID
     * (00000000-0000-0000-0000-000000000000) is not supported.
     */
    requestId?: string;
    body: Backup;
  };

  export class MetastoreProjectsLocationsServicesBackupsCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsServicesBackupsCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type MetastoreProjectsLocationsServicesBackupsDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (servicesId). */
    servicesId: string;
    /** Resource name segment (backupsId). */
    backupsId: string;
    /**
     * Optional. A request ID. Specify a unique request ID to allow the server to ignore the request
     * if it has completed. The server will ignore subsequent requests that provide a duplicate
     * request ID for at least 60 minutes after the first request.For example, if an initial request
     * times out, followed by another request with the same request ID, the server ignores the
     * second request to prevent the creation of duplicate commitments.The request ID must be a
     * valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID
     * (00000000-0000-0000-0000-000000000000) is not supported.
     */
    requestId?: string;
  };

  export class MetastoreProjectsLocationsServicesBackupsDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsServicesBackupsDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type MetastoreProjectsLocationsServicesBackupsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (servicesId). */
    servicesId: string;
    /** Resource name segment (backupsId). */
    backupsId: string;
  };

  export class MetastoreProjectsLocationsServicesBackupsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsServicesBackupsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type MetastoreProjectsLocationsServicesBackupsGetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (servicesId). */
    servicesId: string;
    /** Resource name segment (backupsId). */
    backupsId: string;
    /**
     * Optional. The maximum policy version that will be used to format the policy.Valid values are
     * 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with
     * any conditional role bindings must specify version 3. Policies with no conditional role
     * bindings may specify any valid value or leave the field unset.The policy in the response
     * might use the policy version that you specified, or it might use a lower policy version. For
     * example, if you specify version 3, but the policy has no conditional role bindings, the
     * response uses version 1.To learn which resources support conditions in their IAM policies,
     * see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    optionsRequestedPolicyVersion?: number;
  };

  export class MetastoreProjectsLocationsServicesBackupsGetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsServicesBackupsGetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type MetastoreProjectsLocationsServicesBackupsListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (servicesId). */
    servicesId: string;
    /** Optional. The filter to apply to list results. */
    filter?: string;
    /**
     * Optional. Specify the ordering of results as described in Sorting Order
     * (https://cloud.google.com/apis/design/design_patterns#sorting_order). If not specified, the
     * results will be sorted in the default order.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of backups to return. The response may contain less than the
     * maximum number. If unspecified, no more than 500 backups are returned. The maximum value is
     * 1000; values above 1000 are changed to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous DataprocMetastore.ListBackups call. Provide
     * this token to retrieve the subsequent page.To retrieve the first page, supply an empty page
     * token.When paginating, other parameters provided to DataprocMetastore.ListBackups must match
     * the call that provided the page token.
     */
    pageToken?: string;
  };

  export class MetastoreProjectsLocationsServicesBackupsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsServicesBackupsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type MetastoreProjectsLocationsServicesBackupsSetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (servicesId). */
    servicesId: string;
    /** Resource name segment (backupsId). */
    backupsId: string;
    body: SetIamPolicyRequest2;
  };

  export class MetastoreProjectsLocationsServicesBackupsSetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsServicesBackupsSetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type MetastoreProjectsLocationsServicesCancelMigrationRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (servicesId). */
    servicesId: string;
    body: Record<string, unknown>;
  };

  export class MetastoreProjectsLocationsServicesCancelMigrationError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsServicesCancelMigrationError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type MetastoreProjectsLocationsServicesCompleteMigrationRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (servicesId). */
    servicesId: string;
    body: Record<string, unknown>;
  };

  export class MetastoreProjectsLocationsServicesCompleteMigrationError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsServicesCompleteMigrationError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type MetastoreProjectsLocationsServicesCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Optional. A request ID. Specify a unique request ID to allow the server to ignore the request
     * if it has completed. The server will ignore subsequent requests that provide a duplicate
     * request ID for at least 60 minutes after the first request.For example, if an initial request
     * times out, followed by another request with the same request ID, the server ignores the
     * second request to prevent the creation of duplicate commitments.The request ID must be a
     * valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID
     * (00000000-0000-0000-0000-000000000000) is not supported.
     */
    requestId?: string;
    /**
     * Required. The ID of the metastore service, which is used as the final component of the
     * metastore service's name.This value must be between 2 and 63 characters long inclusive, begin
     * with a letter, end with a letter or number, and consist of alpha-numeric ASCII characters or
     * hyphens.
     */
    serviceId?: string;
    body: Service;
  };

  export class MetastoreProjectsLocationsServicesCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsServicesCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type MetastoreProjectsLocationsServicesDatabasesGetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (servicesId). */
    servicesId: string;
    /** Resource name segment (databasesId). */
    databasesId: string;
    /**
     * Optional. The maximum policy version that will be used to format the policy.Valid values are
     * 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with
     * any conditional role bindings must specify version 3. Policies with no conditional role
     * bindings may specify any valid value or leave the field unset.The policy in the response
     * might use the policy version that you specified, or it might use a lower policy version. For
     * example, if you specify version 3, but the policy has no conditional role bindings, the
     * response uses version 1.To learn which resources support conditions in their IAM policies,
     * see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    optionsRequestedPolicyVersion?: number;
  };

  export class MetastoreProjectsLocationsServicesDatabasesGetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsServicesDatabasesGetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type MetastoreProjectsLocationsServicesDatabasesSetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (servicesId). */
    servicesId: string;
    /** Resource name segment (databasesId). */
    databasesId: string;
    body: SetIamPolicyRequest2;
  };

  export class MetastoreProjectsLocationsServicesDatabasesSetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsServicesDatabasesSetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (servicesId). */
    servicesId: string;
    /** Resource name segment (databasesId). */
    databasesId: string;
    /** Resource name segment (tablesId). */
    tablesId: string;
    /**
     * Optional. The maximum policy version that will be used to format the policy.Valid values are
     * 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with
     * any conditional role bindings must specify version 3. Policies with no conditional role
     * bindings may specify any valid value or leave the field unset.The policy in the response
     * might use the policy version that you specified, or it might use a lower policy version. For
     * example, if you specify version 3, but the policy has no conditional role bindings, the
     * response uses version 1.To learn which resources support conditions in their IAM policies,
     * see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    optionsRequestedPolicyVersion?: number;
  };

  export class MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (servicesId). */
    servicesId: string;
    /** Resource name segment (databasesId). */
    databasesId: string;
    /** Resource name segment (tablesId). */
    tablesId: string;
    body: SetIamPolicyRequest2;
  };

  export class MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type MetastoreProjectsLocationsServicesDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (servicesId). */
    servicesId: string;
    /**
     * Optional. A request ID. Specify a unique request ID to allow the server to ignore the request
     * if it has completed. The server will ignore subsequent requests that provide a duplicate
     * request ID for at least 60 minutes after the first request.For example, if an initial request
     * times out, followed by another request with the same request ID, the server ignores the
     * second request to prevent the creation of duplicate commitments.The request ID must be a
     * valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID
     * (00000000-0000-0000-0000-000000000000) is not supported.
     */
    requestId?: string;
  };

  export class MetastoreProjectsLocationsServicesDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsServicesDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type MetastoreProjectsLocationsServicesExportMetadataRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (servicesId). */
    servicesId: string;
    body: ExportMetadataRequest;
  };

  export class MetastoreProjectsLocationsServicesExportMetadataError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsServicesExportMetadataError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type MetastoreProjectsLocationsServicesGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (servicesId). */
    servicesId: string;
  };

  export class MetastoreProjectsLocationsServicesGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsServicesGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type MetastoreProjectsLocationsServicesGetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (servicesId). */
    servicesId: string;
    /**
     * Optional. The maximum policy version that will be used to format the policy.Valid values are
     * 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with
     * any conditional role bindings must specify version 3. Policies with no conditional role
     * bindings may specify any valid value or leave the field unset.The policy in the response
     * might use the policy version that you specified, or it might use a lower policy version. For
     * example, if you specify version 3, but the policy has no conditional role bindings, the
     * response uses version 1.To learn which resources support conditions in their IAM policies,
     * see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    optionsRequestedPolicyVersion?: number;
  };

  export class MetastoreProjectsLocationsServicesGetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsServicesGetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type MetastoreProjectsLocationsServicesListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Optional. The filter to apply to list results. */
    filter?: string;
    /**
     * Optional. Specify the ordering of results as described in Sorting Order
     * (https://cloud.google.com/apis/design/design_patterns#sorting_order). If not specified, the
     * results will be sorted in the default order.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of services to return. The response may contain less than the
     * maximum number. If unspecified, no more than 500 services are returned. The maximum value is
     * 1000; values above 1000 are changed to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous DataprocMetastore.ListServices call. Provide
     * this token to retrieve the subsequent page.To retrieve the first page, supply an empty page
     * token.When paginating, other parameters provided to DataprocMetastore.ListServices must match
     * the call that provided the page token.
     */
    pageToken?: string;
  };

  export class MetastoreProjectsLocationsServicesListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsServicesListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type MetastoreProjectsLocationsServicesMetadataImportsCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (servicesId). */
    servicesId: string;
    /**
     * Required. The ID of the metadata import, which is used as the final component of the metadata
     * import's name.This value must be between 1 and 64 characters long, begin with a letter, end
     * with a letter or number, and consist of alpha-numeric ASCII characters or hyphens.
     */
    metadataImportId?: string;
    /**
     * Optional. A request ID. Specify a unique request ID to allow the server to ignore the request
     * if it has completed. The server will ignore subsequent requests that provide a duplicate
     * request ID for at least 60 minutes after the first request.For example, if an initial request
     * times out, followed by another request with the same request ID, the server ignores the
     * second request to prevent the creation of duplicate commitments.The request ID must be a
     * valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID
     * (00000000-0000-0000-0000-000000000000) is not supported.
     */
    requestId?: string;
    body: MetadataImport;
  };

  export class MetastoreProjectsLocationsServicesMetadataImportsCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsServicesMetadataImportsCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type MetastoreProjectsLocationsServicesMetadataImportsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (servicesId). */
    servicesId: string;
    /** Resource name segment (metadataImportsId). */
    metadataImportsId: string;
  };

  export class MetastoreProjectsLocationsServicesMetadataImportsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsServicesMetadataImportsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type MetastoreProjectsLocationsServicesMetadataImportsListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (servicesId). */
    servicesId: string;
    /** Optional. The filter to apply to list results. */
    filter?: string;
    /**
     * Optional. Specify the ordering of results as described in Sorting Order
     * (https://cloud.google.com/apis/design/design_patterns#sorting_order). If not specified, the
     * results will be sorted in the default order.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of imports to return. The response may contain less than the
     * maximum number. If unspecified, no more than 500 imports are returned. The maximum value is
     * 1000; values above 1000 are changed to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous DataprocMetastore.ListServices call. Provide
     * this token to retrieve the subsequent page.To retrieve the first page, supply an empty page
     * token.When paginating, other parameters provided to DataprocMetastore.ListServices must match
     * the call that provided the page token.
     */
    pageToken?: string;
  };

  export class MetastoreProjectsLocationsServicesMetadataImportsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsServicesMetadataImportsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type MetastoreProjectsLocationsServicesMetadataImportsPatchRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (servicesId). */
    servicesId: string;
    /** Resource name segment (metadataImportsId). */
    metadataImportsId: string;
    /**
     * Optional. A request ID. Specify a unique request ID to allow the server to ignore the request
     * if it has completed. The server will ignore subsequent requests that provide a duplicate
     * request ID for at least 60 minutes after the first request.For example, if an initial request
     * times out, followed by another request with the same request ID, the server ignores the
     * second request to prevent the creation of duplicate commitments.The request ID must be a
     * valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID
     * (00000000-0000-0000-0000-000000000000) is not supported.
     */
    requestId?: string;
    /**
     * Required. A field mask used to specify the fields to be overwritten in the metadata import
     * resource by the update. Fields specified in the update_mask are relative to the resource (not
     * to the full request). A field is overwritten if it is in the mask.
     */
    updateMask?: string;
    body: MetadataImport;
  };

  export class MetastoreProjectsLocationsServicesMetadataImportsPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsServicesMetadataImportsPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type MetastoreProjectsLocationsServicesMigrationExecutionsDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (servicesId). */
    servicesId: string;
    /** Resource name segment (migrationExecutionsId). */
    migrationExecutionsId: string;
    /**
     * Optional. A request ID. Specify a unique request ID to allow the server to ignore the request
     * if it has completed. The server will ignore subsequent requests that provide a duplicate
     * request ID for at least 60 minutes after the first request.For example, if an initial request
     * times out, followed by another request with the same request ID, the server ignores the
     * second request to prevent the creation of duplicate commitments.The request ID must be a
     * valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID
     * (00000000-0000-0000-0000-000000000000) is not supported.
     */
    requestId?: string;
  };

  export class MetastoreProjectsLocationsServicesMigrationExecutionsDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsServicesMigrationExecutionsDeleteError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type MetastoreProjectsLocationsServicesMigrationExecutionsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (servicesId). */
    servicesId: string;
    /** Resource name segment (migrationExecutionsId). */
    migrationExecutionsId: string;
  };

  export class MetastoreProjectsLocationsServicesMigrationExecutionsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsServicesMigrationExecutionsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type MetastoreProjectsLocationsServicesMigrationExecutionsListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (servicesId). */
    servicesId: string;
    /** Optional. The filter to apply to list results. */
    filter?: string;
    /**
     * Optional. Specify the ordering of results as described in Sorting Order
     * (https://cloud.google.com/apis/design/design_patterns#sorting_order). If not specified, the
     * results will be sorted in the default order.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of migration executions to return. The response may contain less
     * than the maximum number. If unspecified, no more than 500 migration executions are returned.
     * The maximum value is 1000; values above 1000 are changed to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous DataprocMetastore.ListMigrationExecutions
     * call. Provide this token to retrieve the subsequent page.To retrieve the first page, supply
     * an empty page token.When paginating, other parameters provided to
     * DataprocMetastore.ListMigrationExecutions must match the call that provided the page token.
     */
    pageToken?: string;
  };

  export class MetastoreProjectsLocationsServicesMigrationExecutionsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsServicesMigrationExecutionsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type MetastoreProjectsLocationsServicesMoveTableToDatabaseRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (servicesId). */
    servicesId: string;
    body: MoveTableToDatabaseRequest;
  };

  export class MetastoreProjectsLocationsServicesMoveTableToDatabaseError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsServicesMoveTableToDatabaseError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type MetastoreProjectsLocationsServicesPatchRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (servicesId). */
    servicesId: string;
    /**
     * Optional. A request ID. Specify a unique request ID to allow the server to ignore the request
     * if it has completed. The server will ignore subsequent requests that provide a duplicate
     * request ID for at least 60 minutes after the first request.For example, if an initial request
     * times out, followed by another request with the same request ID, the server ignores the
     * second request to prevent the creation of duplicate commitments.The request ID must be a
     * valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID
     * (00000000-0000-0000-0000-000000000000) is not supported.
     */
    requestId?: string;
    /**
     * Required. A field mask used to specify the fields to be overwritten in the metastore service
     * resource by the update. Fields specified in the update_mask are relative to the resource (not
     * to the full request). A field is overwritten if it is in the mask.
     */
    updateMask?: string;
    body: Service;
  };

  export class MetastoreProjectsLocationsServicesPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsServicesPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type MetastoreProjectsLocationsServicesQueryMetadataRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (servicesId). */
    servicesId: string;
    body: QueryMetadataRequest;
  };

  export class MetastoreProjectsLocationsServicesQueryMetadataError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsServicesQueryMetadataError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type MetastoreProjectsLocationsServicesRestoreRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (servicesId). */
    servicesId: string;
    body: RestoreServiceRequest;
  };

  export class MetastoreProjectsLocationsServicesRestoreError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsServicesRestoreError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type MetastoreProjectsLocationsServicesSetIamPolicyRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (servicesId). */
    servicesId: string;
    body: SetIamPolicyRequest2;
  };

  export class MetastoreProjectsLocationsServicesSetIamPolicyError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsServicesSetIamPolicyError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type MetastoreProjectsLocationsServicesStartMigrationRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (servicesId). */
    servicesId: string;
    body: StartMigrationRequest;
  };

  export class MetastoreProjectsLocationsServicesStartMigrationError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsServicesStartMigrationError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type MetastoreProjectsLocationsServicesTestIamPermissionsRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (servicesId). */
    servicesId: string;
    body: TestIamPermissionsRequest;
  };

  export class MetastoreProjectsLocationsServicesTestIamPermissionsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<MetastoreProjectsLocationsServicesTestIamPermissionsError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }
}
