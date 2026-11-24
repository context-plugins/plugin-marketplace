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
  batchCreateJobsRequestSchema,
  type BatchCreateJobsRequest,
} from "./models/batch-create-jobs-request.js";
import {
  batchDeleteJobsRequestSchema,
  type BatchDeleteJobsRequest,
} from "./models/batch-delete-jobs-request.js";
import {
  batchUpdateJobsRequestSchema,
  type BatchUpdateJobsRequest,
} from "./models/batch-update-jobs-request.js";
import { clientEventSchema, type ClientEvent } from "./models/client-event.js";
import { companySchema, type Company } from "./models/company.js";
import { completeQueryResponseSchema, type CompleteQueryResponse } from "./models/complete-query-response.js";
import { googleRpcErrorSchema, type GoogleRpcError } from "./models/google-rpc-error.js";
import { jobView1Schema, type JobView1 } from "./models/job-view1.js";
import { jobSchema, type Job } from "./models/job.js";
import { listCompaniesResponseSchema, type ListCompaniesResponse } from "./models/list-companies-response.js";
import { listJobsResponseSchema, type ListJobsResponse } from "./models/list-jobs-response.js";
import { listTenantsResponseSchema, type ListTenantsResponse } from "./models/list-tenants-response.js";
import { operationSchema, type Operation } from "./models/operation.js";
import { scopeSchema, type Scope } from "./models/scope.js";
import { searchJobsRequestSchema, type SearchJobsRequest } from "./models/search-jobs-request.js";
import { searchJobsResponseSchema, type SearchJobsResponse } from "./models/search-jobs-response.js";
import { tenantSchema, type Tenant } from "./models/tenant.js";
import { type4Schema, type Type4 } from "./models/type4.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Generated from Google's published Discovery document for Cloud Talent Solution API (jobs v4,
 * revision 20261030). 23 operation(s).
 */
export class GoogleCloudTalentSolutionClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "GOOGLE_CLOUD_TALENT_SOLUTION_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "GoogleCloudTalentSolutionClient/4.0.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "4.0.0", schema: s.string() },
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
   * Get operations
   *
   * @remarks
   * Gets the latest state of a long-running operation. Clients can use this method to poll the
   * operation result at intervals as recommended by the API service.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTalentSolutionClient.JobsProjectsOperationsGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTalentSolutionError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  jobsProjectsOperationsGet(
    request: GoogleCloudTalentSolutionClient.JobsProjectsOperationsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudTalentSolutionClient.JobsProjectsOperationsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v4/projects/{projectsId}/operations/{operationsId}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "operationsId", value: request.operationsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudTalentSolutionClient.JobsProjectsOperationsGetError,
      },
      options,
    );
  }

  /**
   * Create clientEvents
   *
   * @remarks
   * Report events issued when end user interacts with customer's application that uses Cloud Talent
   * Solution. You may inspect the created events in self service tools. Learn more about self
   * service tools.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTalentSolutionClient.JobsProjectsTenantsClientEventsCreateError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTalentSolutionError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  jobsProjectsTenantsClientEventsCreate(
    request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsClientEventsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<ClientEvent, GoogleCloudTalentSolutionClient.JobsProjectsTenantsClientEventsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v4/projects/{projectsId}/tenants/{tenantsId}/clientEvents"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "tenantsId", value: request.tenantsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: clientEventSchema },
      },
      {
        success: { kind: "json", schema: clientEventSchema },
        errorFactory: GoogleCloudTalentSolutionClient.JobsProjectsTenantsClientEventsCreateError,
      },
      options,
    );
  }

  /**
   * Create companies
   *
   * @remarks
   * Creates a new company entity.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesCreateError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTalentSolutionError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  jobsProjectsTenantsCompaniesCreate(
    request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<Company, GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v4/projects/{projectsId}/tenants/{tenantsId}/companies"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "tenantsId", value: request.tenantsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: companySchema },
      },
      {
        success: { kind: "json", schema: companySchema },
        errorFactory: GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesCreateError,
      },
      options,
    );
  }

  /**
   * Delete companies
   *
   * @remarks
   * Deletes specified company. Prerequisite: The company has no jobs associated with it.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesDeleteError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTalentSolutionError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  jobsProjectsTenantsCompaniesDelete(
    request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Record<string, unknown>,
    GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesDeleteError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v4/projects/{projectsId}/tenants/{tenantsId}/companies/{companiesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "tenantsId", value: request.tenantsId, schema: s.string() },
          { name: "companiesId", value: request.companiesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesDeleteError,
      },
      options,
    );
  }

  /**
   * Get companies
   *
   * @remarks
   * Retrieves specified company.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesGetError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTalentSolutionError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  jobsProjectsTenantsCompaniesGet(
    request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Company, GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v4/projects/{projectsId}/tenants/{tenantsId}/companies/{companiesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "tenantsId", value: request.tenantsId, schema: s.string() },
          { name: "companiesId", value: request.companiesId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companySchema },
        errorFactory: GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesGetError,
      },
      options,
    );
  }

  /**
   * List companies
   *
   * @remarks
   * Lists all companies associated with the project.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesListError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTalentSolutionError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  jobsProjectsTenantsCompaniesList(
    request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ListCompaniesResponse,
    GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v4/projects/{projectsId}/tenants/{tenantsId}/companies"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "tenantsId", value: request.tenantsId, schema: s.string() },
        ],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "requireOpenJobs", value: request.requireOpenJobs, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listCompaniesResponseSchema },
        errorFactory: GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesListError,
      },
      options,
    );
  }

  /**
   * Patch companies
   *
   * @remarks
   * Updates specified company.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesPatchError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTalentSolutionError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  jobsProjectsTenantsCompaniesPatch(
    request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<Company, GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesPatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v4/projects/{projectsId}/tenants/{tenantsId}/companies/{companiesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "tenantsId", value: request.tenantsId, schema: s.string() },
          { name: "companiesId", value: request.companiesId, schema: s.string() },
        ],
        query: [{ name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: companySchema },
      },
      {
        success: { kind: "json", schema: companySchema },
        errorFactory: GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompaniesPatchError,
      },
      options,
    );
  }

  /**
   * Complete query tenants
   *
   * @remarks
   * Completes the specified prefix with keyword suggestions. Intended for use by a job search
   * auto-complete search box.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompleteQueryError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTalentSolutionError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  jobsProjectsTenantsCompleteQuery(
    request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompleteQueryRequest,
    options?: RequestOptions,
  ): ApiPromise<
    CompleteQueryResponse,
    GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompleteQueryError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v4/projects/{projectsId}/tenants/{tenantsId}:completeQuery"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "tenantsId", value: request.tenantsId, schema: s.string() },
        ],
        query: [
          { name: "company", value: request.company, schema: s.optional(s.string()) },
          { name: "languageCodes", value: request.languageCodes, schema: s.optional(s.array(s.string())) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "scope", value: request.scope, schema: s.optional(s.lazy(() => scopeSchema)) },
          { name: "type", value: request.type, schema: s.optional(s.lazy(() => type4Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: completeQueryResponseSchema },
        errorFactory: GoogleCloudTalentSolutionClient.JobsProjectsTenantsCompleteQueryError,
      },
      options,
    );
  }

  /**
   * Create tenants
   *
   * @remarks
   * Creates a new tenant entity.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTalentSolutionClient.JobsProjectsTenantsCreateError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTalentSolutionError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  jobsProjectsTenantsCreate(
    request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<Tenant, GoogleCloudTalentSolutionClient.JobsProjectsTenantsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v4/projects/{projectsId}/tenants"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "projectsId", value: request.projectsId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: tenantSchema },
      },
      {
        success: { kind: "json", schema: tenantSchema },
        errorFactory: GoogleCloudTalentSolutionClient.JobsProjectsTenantsCreateError,
      },
      options,
    );
  }

  /**
   * Delete tenants
   *
   * @remarks
   * Deletes specified tenant.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTalentSolutionClient.JobsProjectsTenantsDeleteError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTalentSolutionError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  jobsProjectsTenantsDelete(
    request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, GoogleCloudTalentSolutionClient.JobsProjectsTenantsDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v4/projects/{projectsId}/tenants/{tenantsId}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "tenantsId", value: request.tenantsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: GoogleCloudTalentSolutionClient.JobsProjectsTenantsDeleteError,
      },
      options,
    );
  }

  /**
   * Get tenants
   *
   * @remarks
   * Retrieves specified tenant.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTalentSolutionClient.JobsProjectsTenantsGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTalentSolutionError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  jobsProjectsTenantsGet(
    request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Tenant, GoogleCloudTalentSolutionClient.JobsProjectsTenantsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v4/projects/{projectsId}/tenants/{tenantsId}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "tenantsId", value: request.tenantsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tenantSchema },
        errorFactory: GoogleCloudTalentSolutionClient.JobsProjectsTenantsGetError,
      },
      options,
    );
  }

  /**
   * Batch create jobs
   *
   * @remarks
   * Begins executing a batch create jobs operation.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsBatchCreateError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTalentSolutionError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  jobsProjectsTenantsJobsBatchCreate(
    request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsBatchCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsBatchCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v4/projects/{projectsId}/tenants/{tenantsId}/jobs:batchCreate"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "tenantsId", value: request.tenantsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: batchCreateJobsRequestSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsBatchCreateError,
      },
      options,
    );
  }

  /**
   * Batch delete jobs
   *
   * @remarks
   * Begins executing a batch delete jobs operation.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsBatchDeleteError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTalentSolutionError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  jobsProjectsTenantsJobsBatchDelete(
    request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsBatchDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsBatchDeleteError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v4/projects/{projectsId}/tenants/{tenantsId}/jobs:batchDelete"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "tenantsId", value: request.tenantsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: batchDeleteJobsRequestSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsBatchDeleteError,
      },
      options,
    );
  }

  /**
   * Batch update jobs
   *
   * @remarks
   * Begins executing a batch update jobs operation.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsBatchUpdateError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTalentSolutionError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  jobsProjectsTenantsJobsBatchUpdate(
    request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsBatchUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsBatchUpdateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v4/projects/{projectsId}/tenants/{tenantsId}/jobs:batchUpdate"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "tenantsId", value: request.tenantsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: batchUpdateJobsRequestSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsBatchUpdateError,
      },
      options,
    );
  }

  /**
   * Create jobs
   *
   * @remarks
   * Creates a new job. Typically, the job becomes searchable within 10 seconds, but it may take up
   * to 5 minutes.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsCreateError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTalentSolutionError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  jobsProjectsTenantsJobsCreate(
    request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<Job, GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v4/projects/{projectsId}/tenants/{tenantsId}/jobs"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "tenantsId", value: request.tenantsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: jobSchema },
      },
      {
        success: { kind: "json", schema: jobSchema },
        errorFactory: GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsCreateError,
      },
      options,
    );
  }

  /**
   * Delete jobs
   *
   * @remarks
   * Deletes the specified job. Typically, the job becomes unsearchable within 10 seconds, but it
   * may take up to 5 minutes.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsDeleteError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTalentSolutionError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  jobsProjectsTenantsJobsDelete(
    request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v4/projects/{projectsId}/tenants/{tenantsId}/jobs/{jobsId}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "tenantsId", value: request.tenantsId, schema: s.string() },
          { name: "jobsId", value: request.jobsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsDeleteError,
      },
      options,
    );
  }

  /**
   * Get jobs
   *
   * @remarks
   * Retrieves the specified job, whose status is OPEN or recently EXPIRED within the last 90 days.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTalentSolutionError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  jobsProjectsTenantsJobsGet(
    request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Job, GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v4/projects/{projectsId}/tenants/{tenantsId}/jobs/{jobsId}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "tenantsId", value: request.tenantsId, schema: s.string() },
          { name: "jobsId", value: request.jobsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: jobSchema },
        errorFactory: GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsGetError,
      },
      options,
    );
  }

  /**
   * List jobs
   *
   * @remarks
   * Lists jobs by filter.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsListError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTalentSolutionError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  jobsProjectsTenantsJobsList(
    request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListJobsResponse, GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v4/projects/{projectsId}/tenants/{tenantsId}/jobs"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "tenantsId", value: request.tenantsId, schema: s.string() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "jobView", value: request.jobView, schema: s.optional(s.lazy(() => jobView1Schema)) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listJobsResponseSchema },
        errorFactory: GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsListError,
      },
      options,
    );
  }

  /**
   * Patch jobs
   *
   * @remarks
   * Updates specified job. Typically, updated contents become visible in search results within 10
   * seconds, but it may take up to 5 minutes.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsPatchError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTalentSolutionError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  jobsProjectsTenantsJobsPatch(
    request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<Job, GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsPatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v4/projects/{projectsId}/tenants/{tenantsId}/jobs/{jobsId}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "tenantsId", value: request.tenantsId, schema: s.string() },
          { name: "jobsId", value: request.jobsId, schema: s.string() },
        ],
        query: [{ name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: jobSchema },
      },
      {
        success: { kind: "json", schema: jobSchema },
        errorFactory: GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsPatchError,
      },
      options,
    );
  }

  /**
   * Search jobs
   *
   * @remarks
   * Searches for jobs using the provided SearchJobsRequest. This call constrains the visibility of
   * jobs present in the database, and only returns jobs that the caller has permission to search
   * against.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsSearchError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTalentSolutionError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  jobsProjectsTenantsJobsSearch(
    request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsSearchRequest,
    options?: RequestOptions,
  ): ApiPromise<SearchJobsResponse, GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsSearchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v4/projects/{projectsId}/tenants/{tenantsId}/jobs:search"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "tenantsId", value: request.tenantsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: searchJobsRequestSchema },
      },
      {
        success: { kind: "json", schema: searchJobsResponseSchema },
        errorFactory: GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsSearchError,
      },
      options,
    );
  }

  /**
   * Search for alert jobs
   *
   * @remarks
   * Searches for jobs using the provided SearchJobsRequest. This API call is intended for the use
   * case of targeting passive job seekers (for example, job seekers who have signed up to receive
   * email alerts about potential job opportunities), it has different algorithmic adjustments that
   * are designed to specifically target passive job seekers. This call constrains the visibility of
   * jobs present in the database, and only returns jobs the caller has permission to search
   * against.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsSearchForAlertError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTalentSolutionError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  jobsProjectsTenantsJobsSearchForAlert(
    request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsSearchForAlertRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SearchJobsResponse,
    GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsSearchForAlertError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v4/projects/{projectsId}/tenants/{tenantsId}/jobs:searchForAlert",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "tenantsId", value: request.tenantsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: searchJobsRequestSchema },
      },
      {
        success: { kind: "json", schema: searchJobsResponseSchema },
        errorFactory: GoogleCloudTalentSolutionClient.JobsProjectsTenantsJobsSearchForAlertError,
      },
      options,
    );
  }

  /**
   * List tenants
   *
   * @remarks
   * Lists all tenants associated with the project.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTalentSolutionClient.JobsProjectsTenantsListError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTalentSolutionError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  jobsProjectsTenantsList(
    request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListTenantsResponse, GoogleCloudTalentSolutionClient.JobsProjectsTenantsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v4/projects/{projectsId}/tenants"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "projectsId", value: request.projectsId, schema: s.string() }],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listTenantsResponseSchema },
        errorFactory: GoogleCloudTalentSolutionClient.JobsProjectsTenantsListError,
      },
      options,
    );
  }

  /**
   * Patch tenants
   *
   * @remarks
   * Updates specified tenant.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleCloudTalentSolutionClient.JobsProjectsTenantsPatchError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudTalentSolutionError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  jobsProjectsTenantsPatch(
    request: GoogleCloudTalentSolutionClient.JobsProjectsTenantsPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<Tenant, GoogleCloudTalentSolutionClient.JobsProjectsTenantsPatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v4/projects/{projectsId}/tenants/{tenantsId}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "tenantsId", value: request.tenantsId, schema: s.string() },
        ],
        query: [{ name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: tenantSchema },
      },
      {
        success: { kind: "json", schema: tenantSchema },
        errorFactory: GoogleCloudTalentSolutionClient.JobsProjectsTenantsPatchError,
      },
      options,
    );
  }
}

export namespace GoogleCloudTalentSolutionClient {
  export type JobsProjectsOperationsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (operationsId). */
    operationsId: string;
  };

  export class JobsProjectsOperationsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<JobsProjectsOperationsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type JobsProjectsTenantsClientEventsCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (tenantsId). */
    tenantsId: string;
    body: ClientEvent;
  };

  export class JobsProjectsTenantsClientEventsCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<JobsProjectsTenantsClientEventsCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type JobsProjectsTenantsCompaniesCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (tenantsId). */
    tenantsId: string;
    body: Company;
  };

  export class JobsProjectsTenantsCompaniesCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<JobsProjectsTenantsCompaniesCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type JobsProjectsTenantsCompaniesDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (tenantsId). */
    tenantsId: string;
    /** Resource name segment (companiesId). */
    companiesId: string;
  };

  export class JobsProjectsTenantsCompaniesDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<JobsProjectsTenantsCompaniesDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type JobsProjectsTenantsCompaniesGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (tenantsId). */
    tenantsId: string;
    /** Resource name segment (companiesId). */
    companiesId: string;
  };

  export class JobsProjectsTenantsCompaniesGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<JobsProjectsTenantsCompaniesGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type JobsProjectsTenantsCompaniesListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (tenantsId). */
    tenantsId: string;
    /**
     * The maximum number of companies to be returned, at most 100. Default is 100 if a non-positive
     * number is provided.
     */
    pageSize?: number;
    /** The starting indicator from which to return results. */
    pageToken?: string;
    /**
     * Set to true if the companies requested must have open jobs. Defaults to false. If true, at
     * most page_size of companies are fetched, among which only those with open jobs are returned.
     */
    requireOpenJobs?: boolean;
  };

  export class JobsProjectsTenantsCompaniesListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<JobsProjectsTenantsCompaniesListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type JobsProjectsTenantsCompaniesPatchRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (tenantsId). */
    tenantsId: string;
    /** Resource name segment (companiesId). */
    companiesId: string;
    /**
     * Strongly recommended for the best service experience. If update_mask is provided, only the
     * specified fields in company are updated. Otherwise all the fields are updated. A field mask
     * to specify the company fields to be updated. Only top level fields of Company are supported.
     */
    updateMask?: string;
    body: Company;
  };

  export class JobsProjectsTenantsCompaniesPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<JobsProjectsTenantsCompaniesPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type JobsProjectsTenantsCompleteQueryRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (tenantsId). */
    tenantsId: string;
    /**
     * If provided, restricts completion to specified company. The format is
     * "projects/{project_id}/tenants/{tenant_id}/companies/{company_id}", for example,
     * "projects/foo/tenants/bar/companies/baz".
     */
    company?: string;
    /**
     * The list of languages of the query. This is the BCP-47 language code, such as "en-US" or
     * "sr-Latn". For more information, see [Tags for Identifying
     * Languages](https://tools.ietf.org/html/bcp47). The maximum number of allowed characters is
     * 255.
     */
    languageCodes?: string[];
    /** Required. Completion result count. The maximum allowed page size is 10. */
    pageSize?: number;
    /**
     * Required. The query used to generate suggestions. The maximum number of allowed characters is
     * 255.
     */
    query?: string;
    /** The scope of the completion. The defaults is CompletionScope.PUBLIC. */
    scope?: Scope;
    /** The completion topic. The default is CompletionType.COMBINED. */
    type?: Type4;
  };

  export class JobsProjectsTenantsCompleteQueryError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<JobsProjectsTenantsCompleteQueryError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type JobsProjectsTenantsCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    body: Tenant;
  };

  export class JobsProjectsTenantsCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<JobsProjectsTenantsCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type JobsProjectsTenantsDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (tenantsId). */
    tenantsId: string;
  };

  export class JobsProjectsTenantsDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<JobsProjectsTenantsDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type JobsProjectsTenantsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (tenantsId). */
    tenantsId: string;
  };

  export class JobsProjectsTenantsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<JobsProjectsTenantsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type JobsProjectsTenantsJobsBatchCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (tenantsId). */
    tenantsId: string;
    body: BatchCreateJobsRequest;
  };

  export class JobsProjectsTenantsJobsBatchCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<JobsProjectsTenantsJobsBatchCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type JobsProjectsTenantsJobsBatchDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (tenantsId). */
    tenantsId: string;
    body: BatchDeleteJobsRequest;
  };

  export class JobsProjectsTenantsJobsBatchDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<JobsProjectsTenantsJobsBatchDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type JobsProjectsTenantsJobsBatchUpdateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (tenantsId). */
    tenantsId: string;
    body: BatchUpdateJobsRequest;
  };

  export class JobsProjectsTenantsJobsBatchUpdateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<JobsProjectsTenantsJobsBatchUpdateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type JobsProjectsTenantsJobsCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (tenantsId). */
    tenantsId: string;
    body: Job;
  };

  export class JobsProjectsTenantsJobsCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<JobsProjectsTenantsJobsCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type JobsProjectsTenantsJobsDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (tenantsId). */
    tenantsId: string;
    /** Resource name segment (jobsId). */
    jobsId: string;
  };

  export class JobsProjectsTenantsJobsDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<JobsProjectsTenantsJobsDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type JobsProjectsTenantsJobsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (tenantsId). */
    tenantsId: string;
    /** Resource name segment (jobsId). */
    jobsId: string;
  };

  export class JobsProjectsTenantsJobsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<JobsProjectsTenantsJobsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type JobsProjectsTenantsJobsListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (tenantsId). */
    tenantsId: string;
    /**
     * Required. The filter string specifies the jobs to be enumerated. Supported operator: =, AND
     * The fields eligible for filtering are: * `companyName` * `requisitionId` * `status` Available
     * values: OPEN, EXPIRED, ALL. Defaults to OPEN if no value is specified. At least one of
     * `companyName` and `requisitionId` must present or an INVALID_ARGUMENT error is thrown. Sample
     * Query: * companyName = "projects/foo/tenants/bar/companies/baz" * companyName =
     * "projects/foo/tenants/bar/companies/baz" AND requisitionId = "req-1" * companyName =
     * "projects/foo/tenants/bar/companies/baz" AND status = "EXPIRED" * requisitionId = "req-1" *
     * requisitionId = "req-1" AND status = "EXPIRED"
     */
    filter?: string;
    /**
     * The desired job attributes returned for jobs in the search response. Defaults to
     * JobView.JOB_VIEW_FULL if no value is specified.
     */
    jobView?: JobView1;
    /**
     * The maximum number of jobs to be returned per page of results. If job_view is set to
     * JobView.JOB_VIEW_ID_ONLY, the maximum allowed page size is 1000. Otherwise, the maximum
     * allowed page size is 100. Default is 100 if empty or a number < 1 is specified.
     */
    pageSize?: number;
    /** The starting point of a query result. */
    pageToken?: string;
  };

  export class JobsProjectsTenantsJobsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<JobsProjectsTenantsJobsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type JobsProjectsTenantsJobsPatchRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (tenantsId). */
    tenantsId: string;
    /** Resource name segment (jobsId). */
    jobsId: string;
    /**
     * Strongly recommended for the best service experience. If update_mask is provided, only the
     * specified fields in job are updated. Otherwise all the fields are updated. A field mask to
     * restrict the fields that are updated. Only top level fields of Job are supported.
     */
    updateMask?: string;
    body: Job;
  };

  export class JobsProjectsTenantsJobsPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<JobsProjectsTenantsJobsPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type JobsProjectsTenantsJobsSearchRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (tenantsId). */
    tenantsId: string;
    body: SearchJobsRequest;
  };

  export class JobsProjectsTenantsJobsSearchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<JobsProjectsTenantsJobsSearchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type JobsProjectsTenantsJobsSearchForAlertRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (tenantsId). */
    tenantsId: string;
    body: SearchJobsRequest;
  };

  export class JobsProjectsTenantsJobsSearchForAlertError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<JobsProjectsTenantsJobsSearchForAlertError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type JobsProjectsTenantsListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /**
     * The maximum number of tenants to be returned, at most 100. Default is 100 if a non-positive
     * number is provided.
     */
    pageSize?: number;
    /** The starting indicator from which to return results. */
    pageToken?: string;
  };

  export class JobsProjectsTenantsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<JobsProjectsTenantsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type JobsProjectsTenantsPatchRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (tenantsId). */
    tenantsId: string;
    /**
     * Strongly recommended for the best service experience. If update_mask is provided, only the
     * specified fields in tenant are updated. Otherwise all the fields are updated. A field mask to
     * specify the tenant fields to be updated. Only top level fields of Tenant are supported.
     */
    updateMask?: string;
    body: Tenant;
  };

  export class JobsProjectsTenantsPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<JobsProjectsTenantsPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }
}
